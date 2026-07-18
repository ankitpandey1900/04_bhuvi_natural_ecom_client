# ADR-001: Use Next.js as the primary application framework

- Status: Accepted
- Date: 2026-07-09

## Context

The Bhuvi Naturals platform needs a modern ecommerce experience with strong SEO, fast performance, and a scalable architecture. The brand’s product pages, collections, content, and marketing pages must be easy to publish and maintain while supporting future growth into subscriptions, bundles, and content-led acquisition.

## Problem

The team needs a framework that can support:

- server-rendered and static pages for SEO,
- fast frontend performance on mobile,
- structured content and marketing pages,
- a clear path to future growth and integrations,
- a strong developer experience for rapid delivery.

A traditional client-side-only approach would weaken SEO and increase complexity for content-driven pages.

## Decision

Adopt Next.js as the primary framework for the storefront and application shell.

This decision includes using:

- App Router for route organization,
- server components where appropriate,
- server-side rendering or static generation for marketing and product content,
- API routes or server actions for backend-facing logic where appropriate.

## Alternatives Considered

- React with a custom routing and SSR setup
- Gatsby
- Nuxt
- Traditional PHP or WordPress-based storefront

## Pros

- Excellent SEO support through server rendering and static generation
- Strong performance and image optimization features
- Good developer experience and ecosystem maturity
- Easy integration with modern content and ecommerce workflows
- Scales well for marketing pages, product pages, and future app-like experiences

## Cons

- Slightly more opinionated and complex than a minimal React setup
- Requires familiarity with server/client rendering patterns
- Some architectural decisions can be more involved than a simpler stack

## Tradeoffs

Next.js introduces a more structured development model, but that structure improves maintainability and long-term scalability. It is a better fit for a content-led premium ecommerce brand than a lightweight SPA-only approach.

## Consequences

The team will standardize on a React-based framework with strong SSR support. This will improve SEO, content delivery, maintainability, and scalability. It will also require the team to adopt modern Next.js patterns and possibly invest in shared conventions around routing, data fetching, and rendering.

## Future Considerations

- Explore edge rendering and middleware for personalization or geo-based experiences
- Evaluate incremental adoption of server actions and route handlers as the platform grows
- Consider app-router migration patterns and shared layout standards

## References

- Next.js official documentation
- Product requirements for SEO, performance, and content-led growth
