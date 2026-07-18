import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic in-memory rate limiter for Edge Runtime
// Note: This is per-isolate. For a true global rate limit, use Upstash Redis.
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_MAX = 60; // 60 requests (Industry standard: 1 req/sec)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // per 1 minute

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  
  // 1. Basic Rate Limiting
  if (ip !== 'unknown' && !request.nextUrl.pathname.startsWith('/_next/')) {
    const now = Date.now();
    const rateData = rateLimitMap.get(ip);

    if (!rateData || now > rateData.resetTime) {
      // Reset or initialize
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    } else {
      rateData.count++;
      if (rateData.count > RATE_LIMIT_MAX) {
        const html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Please Slow Down - Bhuvi Naturals</title>
            <style>
              body { font-family: ui-sans-serif, system-ui, sans-serif; background-color: #F4F1EB; color: #1a1a1a; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; text-align: center; }
              .container { max-width: 500px; padding: 40px; }
              h1 { font-family: ui-serif, Georgia, serif; font-size: 2.5rem; font-weight: 300; margin-bottom: 1rem; color: #1a1a1a; }
              p { color: #6f675f; line-height: 1.6; font-size: 1.1rem; }
              .logo { font-family: ui-serif, Georgia, serif; font-size: 1.5rem; font-style: italic; color: #5b6b47; margin-bottom: 2rem; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo">Bhuvi Naturals</div>
              <h1>A moment of pause.</h1>
              <p>We've received a high volume of requests from your network. Please wait just a moment and refresh the page to continue your journey.</p>
            </div>
          </body>
          </html>
        `;
        return new NextResponse(html, {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateData.resetTime - now) / 1000).toString(),
            'Content-Type': 'text/html',
          },
        });
      }
    }
  }

  // 2. Security Headers
  const response = NextResponse.next();

  // Content Security Policy (Basic)
  // Customize based on what external scripts/images you need (e.g. Supabase, Stripe)
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://* http://*;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // HSTS (Strict-Transport-Security)
  // Ensure we are on HTTPS in production
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except static assets and images
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
