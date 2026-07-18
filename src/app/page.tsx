import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedPanel } from "@/components/animated-panel";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getFeaturedProducts } from "@/lib/services/product-service";
import { HeroScrollAnimation } from "@/components/hero-scroll-animation";

export default async function HomePage() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-[#2C3B2C] selection:text-white">
      <SiteHeader />

      {/* ─── HERO ─── */}
      <HeroScrollAnimation />

      {/* ─── MARQUEE (TRUST SIGNALS) ─── */}
      <div className="w-full overflow-hidden border-b border-[#E8E4D9] bg-[#FDFBF7] py-3">
        <div className="flex w-max animate-[marquee_20s_linear_infinite] items-center gap-16 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C857B]">
          <span>100% Plant-Based</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>Cruelty Free</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>No Parabens or Sulfates</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>Dermatologically Tested</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>Sustainable Packaging</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>100% Plant-Based</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>Cruelty Free</span>
          <span className="h-1 w-1 rounded-full bg-[#D1C8B8]" />
          <span>No Parabens or Sulfates</span>
        </div>
      </div>

      {/* ─── BRAND MANIFESTO (ELEGANT TYPOGRAPHY) ─── */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <AnimatedPanel
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif text-3xl font-medium leading-[1.4] text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              We believe in the quiet power of nature. Pure, uncompromised botanicals formulated to restore balance to your skin, hair, and daily rituals.
            </h2>
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[#2C3B2C] transition-colors hover:text-[#1A1A1A]"
              >
                <span className="border-b border-[#2C3B2C] pb-1 group-hover:border-[#1A1A1A]">Read our story</span>
              </Link>
            </div>
          </AnimatedPanel>
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS (CLEAN GRID) ─── */}
      <section className="border-t border-[#E8E4D9] bg-[#FDFBF7] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <AnimatedPanel
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8C857B]">Curated Selection</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">Signature Essentials</h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-3 rounded-full border border-[#D1C8B8] px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-all hover:border-[#1A1A1A]"
            >
              Shop All Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimatedPanel>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <AnimatedPanel
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </AnimatedPanel>
            ))}
          </div>
        </div>
      </section>



      <SiteFooter />
    </main>
  );
}
