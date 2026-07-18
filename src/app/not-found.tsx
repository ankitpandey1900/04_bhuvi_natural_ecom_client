import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function NotFound() {
  return (
    <main className="page-shell bg-[#F4F1EB] min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#5b6b47] mb-4">404 Error</span>
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">
          Page not found.
        </h1>
        <p className="mt-6 text-lg text-neutral-600 max-w-lg mx-auto">
          We couldn't find the page you were looking for. It might have been moved or no longer exists.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center bg-[#5b6b47] px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#4a573a]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
