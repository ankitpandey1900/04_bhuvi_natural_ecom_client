"use client";

import { useEffect } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error(error);
  }, [error]);

  return (
    <main className="page-shell bg-[#F4F1EB] min-h-screen flex flex-col">
      <SiteHeader />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight">
          We experienced an interruption.
        </h1>
        <p className="mt-6 text-lg text-neutral-600 max-w-lg mx-auto">
          Something didn't quite go as planned on our end. We apologize for the inconvenience. 
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex h-12 items-center justify-center bg-[#5b6b47] px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#4a573a]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center border border-neutral-300 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-900 transition-all hover:bg-neutral-100"
          >
            Return Home
          </Link>
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
