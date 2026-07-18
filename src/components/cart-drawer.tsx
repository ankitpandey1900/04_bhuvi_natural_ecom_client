"use client";

import { useCartStore } from "@/lib/store/cart-store";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotal } = useCartStore();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[400px] bg-background shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-serif font-bold flex items-center gap-2">
            <ShoppingBag size={20} /> Your Cart ({items.length})
          </h2>
          <button 
            onClick={closeCart}
            className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center">
                <ShoppingBag size={32} className="text-muted-foreground" />
              </div>
              <p className="text-lg text-muted-foreground">Your cart is empty</p>
              <button 
                onClick={closeCart}
                className="text-primary hover:underline font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="h-24 w-24 rounded-md overflow-hidden bg-muted flex-shrink-0 border border-border">
                    <img 
                      src={item.image || "/logo.png"} 
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="font-medium text-foreground">{item.name}</h3>
                        <p className="font-semibold">₹{item.price.toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.variantName}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-border rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-xs text-destructive hover:underline font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border bg-card">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-medium">Subtotal</span>
              <span className="text-xl font-bold font-serif">₹{getTotal().toFixed(2)}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <Link 
              href={"/checkout" as any}
              onClick={closeCart}
              className="flex w-full items-center justify-center rounded-sm bg-primary px-6 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
