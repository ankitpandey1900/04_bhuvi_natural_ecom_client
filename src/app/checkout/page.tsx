"use client";

import { useCartStore } from "@/lib/store/cart-store";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (items.length === 0) {
    return (
      <main className="page-shell bg-background flex flex-col min-h-screen">
        <SiteHeader />
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-3xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add some items before proceeding to checkout.</p>
          <button 
            onClick={() => router.push("/products")}
            className="rounded-sm bg-primary px-8 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return to Shop
          </button>
        </div>
        <SiteFooter />
      </main>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate placing an order
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      alert("Order placed successfully! (This is a demo)");
      router.push("/");
    }, 1500);
  };

  return (
    <main className="page-shell bg-[#fcfbf9] min-h-screen">
      <SiteHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-16">
        <h1 className="text-3xl font-serif font-bold text-foreground mb-8">Checkout</h1>
        
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Form Section */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <section className="bg-card p-6 rounded-md shadow-sm border border-border">
                <h2 className="text-xl font-serif font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="email">Email address</label>
                    <input required type="email" id="email" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone number</label>
                    <input required type="tel" id="phone" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                  </div>
                </div>
              </section>

              <section className="bg-card p-6 rounded-md shadow-sm border border-border">
                <h2 className="text-xl font-serif font-semibold mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="firstName">First name</label>
                      <input required type="text" id="firstName" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last name</label>
                      <input required type="text" id="lastName" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="address">Address</label>
                    <input required type="text" id="address" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="city">City</label>
                      <input required type="text" id="city" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="postalCode">Postal code</label>
                      <input required type="text" id="postalCode" className="w-full rounded-sm border border-border px-4 py-2 focus:ring-2 focus:ring-primary/20 focus:outline-none" />
                    </div>
                  </div>
                </div>
              </section>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 rounded-sm bg-primary px-8 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Place Order (Demo)"}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card p-6 rounded-md shadow-sm border border-border sticky top-28">
              <h2 className="text-xl font-serif font-semibold mb-6">Order Summary</h2>
              
              <ul className="space-y-4 mb-6">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-border relative">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                      <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-foreground text-background text-[10px] flex items-center justify-center font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-muted-foreground">{item.variantName}</p>
                    </div>
                    <p className="text-sm font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </li>
                ))}
              </ul>

              <div className="space-y-3 py-4 border-y border-border/50 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">₹{getTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium text-primary">Free</span>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <span className="text-lg font-medium">Total</span>
                <span className="text-2xl font-serif font-bold text-foreground">₹{getTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
