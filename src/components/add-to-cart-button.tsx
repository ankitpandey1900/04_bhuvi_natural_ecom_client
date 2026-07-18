"use client";

import { useCartStore, CartItem } from "@/lib/store/cart-store";
import { Plus } from "lucide-react";

type AddToCartButtonProps = {
  item: Omit<CartItem, 'id' | 'quantity'>;
  variant: "outline" | "solid";
  className?: string;
};

export function AddToCartButton({ item, variant, className = "" }: AddToCartButtonProps) {
  const { addItem } = useCartStore();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // In case it's inside a Link
    addItem({ ...item, quantity: 1 });
  };

  if (variant === "outline") {
    return (
      <button
        onClick={handleAdd}
        className={`rounded-full border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground flex items-center gap-2 ${className}`}
      >
        <Plus size={16} /> Add
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className={`flex h-14 w-full items-center justify-center rounded-sm bg-primary px-8 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 ${className}`}
    >
      Add to Cart
    </button>
  );
}
