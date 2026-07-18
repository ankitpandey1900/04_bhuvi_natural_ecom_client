"use client";

import type { Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { CartDrawer } from "./cart-drawer";
import { useEffect, useState, useRef } from "react";

const mainLinks: Array<{ href: Route; label: string }> = [
  { href: "/products" as Route, label: "Shop All" },
  { href: "/products?category=skin-care" as Route, label: "Skincare" },
  { href: "/products?category=hair-care" as Route, label: "Haircare" },
  { href: "/about" as Route, label: "About Us" },
];

export function SiteHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { items, openCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const isSolid = !isHome || isScrolled || isMobileMenuOpen || isSearchOpen;

  // Prevent scroll when overlays are open
  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = "hidden";
      if (isSearchOpen && searchInputRef.current) {
        setTimeout(() => searchInputRef.current?.focus(), 100);
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen, isSearchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      router.push(`/products?q=${encodeURIComponent(searchQuery)}` as any);
      setSearchQuery("");
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          isSolid
            ? "bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E4D9] shadow-sm" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Bhuvi Naturals"
              width={40}
              height={40}
              className={`h-10 w-10 object-contain transition-all duration-500 ${isSolid ? "" : "opacity-90 group-hover:opacity-100 drop-shadow-md"}`}
            />
            <span className={`hidden sm:inline-block font-serif text-2xl tracking-wide transition-colors duration-500 ${isSolid ? "text-[#1A1A1A]" : "text-[#FDFBF7]"}`}>
              Bhuvi Naturals
            </span>
          </Link>

          {/* Navigation Center */}
          <nav className={`hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${isSolid ? "text-[#1A1A1A]" : "text-[#FDFBF7] drop-shadow-md"}`}>
            {mainLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-[#59554D]">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Utilities Right */}
          <div className={`flex items-center gap-5 sm:gap-6 transition-colors duration-500 ${isSolid ? "text-[#1A1A1A]" : "text-[#FDFBF7]"}`}>
            <button 
              aria-label="Search" 
              className="transition-transform hover:scale-110"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button aria-label="Account" className="hidden sm:block transition-transform hover:scale-110">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button 
              aria-label="Cart" 
              onClick={openCart}
              className="relative transition-transform hover:scale-110"
            >
              <ShoppingCart size={18} strokeWidth={1.5} />
              {mounted && totalItems > 0 && (
                <span className={`absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold transition-colors duration-500 ${isSolid ? "bg-[#1A1A1A] text-[#FDFBF7]" : "bg-[#FDFBF7] text-[#1A1A1A]"}`}>
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Hamburger Mobile Toggle */}
            <button 
              aria-label="Menu" 
              className="md:hidden transition-transform hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Search Backdrop */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Search Drawer (Top Slide Down) */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7] shadow-xl transition-transform duration-500 ease-in-out border-b border-[#E8E4D9] ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 sm:px-8 lg:px-12 py-8 pt-8">
          <div className="flex items-center justify-between mb-8">
             <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A]">Search</h2>
             <button 
               aria-label="Close Search" 
               onClick={() => setIsSearchOpen(false)}
               className="text-[#1A1A1A] transition-transform hover:scale-110"
             >
               <X size={24} strokeWidth={1.5} />
             </button>
          </div>
          
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-b border-[#D1C8B8] bg-transparent pb-4 text-xl sm:text-2xl text-[#1A1A1A] placeholder-[#8C857B] focus:border-[#1A1A1A] focus:outline-none"
            />
            <button 
              type="submit" 
              className="absolute right-2 text-[#1A1A1A] transition-transform hover:scale-110"
            >
              <Search size={24} strokeWidth={1.5} />
            </button>
          </form>
          
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 text-sm font-medium pb-4">
            <span className="text-[#8C857B] uppercase tracking-[0.1em] text-[10px] font-bold">Trending:</span>
            <div className="flex gap-6">
               <button type="button" onClick={() => { setSearchQuery("Hair Oil"); setTimeout(() => handleSearch({preventDefault: () => {}} as any), 10); }} className="text-[#1A1A1A] hover:text-[#59554D] transition-colors">Hair Oil</button>
               <button type="button" onClick={() => { setSearchQuery("Neem Soap"); setTimeout(() => handleSearch({preventDefault: () => {}} as any), 10); }} className="text-[#1A1A1A] hover:text-[#59554D] transition-colors">Neem Soap</button>
               <button type="button" onClick={() => { setSearchQuery("Night Gel"); setTimeout(() => handleSearch({preventDefault: () => {}} as any), 10); }} className="text-[#1A1A1A] hover:text-[#59554D] transition-colors">Night Gel</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-[#FDFBF7] transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-8 text-center text-xl font-serif text-[#1A1A1A]">
            {mainLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-16 flex justify-center gap-6 text-[#1A1A1A]">
             <button className="text-sm font-semibold uppercase tracking-widest border-b border-transparent hover:border-[#1A1A1A] transition-colors">
               Sign In
             </button>
          </div>
        </div>
      </div>

      <CartDrawer />
    </>
  );
}
