import { AnimatedPanel } from "@/components/animated-panel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-section px-6 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedPanel
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6f675f]">Our philosophy</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Rooted in botanical wisdom and designed for calm, modern rituals.
            </h1>
            <p className="text-lg leading-8 text-[#6f675f]">
              Bhuvi Naturals creates everyday essentials that feel luxurious, intentional, and easy to embrace.
            </p>
          </AnimatedPanel>
          <AnimatedPanel
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="surface-card rounded-[2rem] p-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-[#6f675f]">What guides us</p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#6f675f]">
              <p>
                We blend botanical ingredients with thoughtful formulation to create rituals that are as grounding as they are effective.
              </p>
              <p>
                Our collection is intentionally minimalist, elegant, and crafted to support skin, hair, and home care with confidence.
              </p>
            </div>
          </AnimatedPanel>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
