import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand & Connect */}
          <div className="col-span-1 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="Bhuvi Naturals" width={36} height={36} className="h-9 w-9 object-contain" />
                <span className="font-serif font-bold text-xl text-[#1A1A1A]">Bhuvi Naturals</span>
              </div>
              <p className="text-sm text-[#6f675f] leading-relaxed">
                Pure, botanical skincare, haircare, and home essentials. Crafted with intention, rooted in nature.
              </p>
            </div>
            
            <div className="space-y-4 pt-2">
              <a href="https://wa.me/919223333023" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#5b6b47] transition-colors group">
                <Phone size={16} strokeWidth={1.5} className="transition-transform group-hover:scale-110 shrink-0" />
                <span className="text-sm font-medium tracking-wide">922 333 3023</span>
              </a>
              <a href="https://www.instagram.com/bhuvi__naturals/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#1A1A1A] hover:text-[#5b6b47] transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110 shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="text-sm font-medium tracking-wide">@bhuvi__naturals</span>
              </a>
              <div className="flex items-start gap-3 text-[#1A1A1A]">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span className="text-sm font-medium tracking-wide leading-relaxed">
                  2B, 808, Estella, JP North Garden City,<br/>
                  Mira Road(East), Thane - 4001107
                </span>
              </div>
            </div>
          </div>

          {/* Links Container for Mobile Side-by-Side */}
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            {/* Products */}
            <div>
              <h4 className="font-bold text-base mb-4 font-serif text-neutral-900">Products</h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                <li><Link href={"/products?category=skincare" as any} className="hover:text-[#5b6b47] transition-colors">Skincare</Link></li>
                <li><Link href={"/products?category=haircare" as any} className="hover:text-[#5b6b47] transition-colors">Haircare</Link></li>
                <li><Link href={"/products" as any} className="hover:text-[#5b6b47] transition-colors">Shop All</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-base mb-4 font-serif text-neutral-900">Support</h4>
              <ul className="space-y-2.5 text-sm text-neutral-500">
                <li><Link href={"/about" as any} className="hover:text-[#5b6b47] transition-colors">About Us</Link></li>
                <li><a href="mailto:hello@bhuvinaturals.com" className="hover:text-[#5b6b47] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#5b6b47] transition-colors">FAQs</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-base mb-4 font-serif text-neutral-900">Stay Updated</h4>
            <p className="text-sm text-neutral-500 mb-4">Subscribe for offers, tips, and new arrivals.</p>
            <form className="flex flex-col space-y-2">
              <input
                className="bg-white border border-neutral-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Enter your email"
                type="email"
              />
              <button
                type="submit"
                className="bg-neutral-900 text-white font-medium rounded-lg px-4 py-2.5 text-sm hover:bg-neutral-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Bhuvi Naturals. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-neutral-400">
            <a className="hover:text-emerald-700 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-emerald-700 transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
