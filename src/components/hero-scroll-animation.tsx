"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroScrollAnimation() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect for the static image and text
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Move the image slower than the page scrolls (parallax depth)
      if (imageContainerRef.current) {
        imageContainerRef.current.style.transform = `translateY(${scrollY * 0.35}px)`;
      }
      
      // Move text at a different speed and fade it out
      if (textContainerRef.current) {
        textContainerRef.current.style.transform = `translateY(${scrollY * 0.15}px)`;
        const opacity = Math.max(0, 1 - scrollY / 400); // Fade completely out over 400px of scroll
        textContainerRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen min-h-[600px] bg-[#0a0a08] overflow-hidden">
      
      {/* Parallax Image Container */}
      <div ref={imageContainerRef} className="absolute inset-0 w-full h-full will-change-transform">
        <Image
          src="/hero.png"
          alt="Bhuvi Naturals Collection"
          fill
          priority
          quality={100}
          className="object-cover object-[70%_center] sm:object-center"
        />
      </div>

      {/* Cinematic gradient - much lighter now that the original text is cropped out */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a08]/80 via-[#0a0a08]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a08]/60 via-transparent to-[#0a0a08]/20" />

      {/* Hero Content - Clean typography directly on the smooth gradient */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          
          {/* Parallax Text Container */}
          <div ref={textContainerRef} className="max-w-xl will-change-transform opacity-100 mt-[-15vh] sm:mt-0">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-light text-white leading-[1.1] tracking-tight drop-shadow-sm">
              Profound purity for <br />
              <span className="italic font-normal">skin & hair.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg font-light text-white/90 leading-relaxed max-w-sm drop-shadow-sm">
              Uncompromised botanicals formulated to restore balance to your daily rituals.
            </p>

            <div className="mt-[30vh] sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href={"/products" as any}
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center bg-white px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] transition-all hover:bg-white/90"
              >
                Shop Collection
              </Link>
              <Link
                href={"/about" as any}
                className="inline-flex h-12 w-full sm:w-auto items-center justify-center border border-white/40 px-8 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10"
              >
                Our Ethos
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
