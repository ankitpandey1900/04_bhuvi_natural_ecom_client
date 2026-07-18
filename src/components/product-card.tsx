import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { AddToCartButton } from "./add-to-cart-button";
import type { Product, Prisma, ProductVariant, ProductMedia } from "@prisma/client";

type ProductCardProps = {
  product: Product & {
    variants: Array<Pick<ProductVariant, "id" | "name" | "price" | "isDefault" | "productId" | "sku" | "stockStatus">>;
    media: Array<ProductMedia>;
    category?: { name: string } | null;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const defaultVariant = product.variants[0];
  const firstImage = product.media[0];
  const price = defaultVariant ? `₹${Number(defaultVariant.price).toFixed(2)}` : "Price unavailable";

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative">
      <Link href={`/products/${product.slug}`} className="absolute inset-0 z-0" aria-label={`View ${product.name}`}></Link>
      <div className="relative h-56 bg-primary/10 overflow-hidden">
        {firstImage ? (
          <img
            src={firstImage.url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-primary/30">
            <span className="font-serif italic text-lg">Bhuvi</span>
          </div>
        )}
      </div>
      <div className="space-y-4 p-6 relative z-10 pointer-events-none">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">
            {product.category?.name || "Uncategorized"}
          </span>
          {product.isFeatured && (
            <Badge variant="secondary" className="text-[10px] tracking-wider bg-accent/10 text-accent border-accent/20">
              Featured
            </Badge>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground font-serif pointer-events-auto">
            <Link href={`/products/${product.slug}`} className="hover:underline">{product.name}</Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {product.shortDescription || product.description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-border/50 pointer-events-auto">
          <span className="text-lg font-semibold text-foreground">{price}</span>
          {defaultVariant && (
            <AddToCartButton 
              variant="outline"
              item={{
                productId: product.id,
                variantId: defaultVariant.id,
                name: product.name,
                variantName: defaultVariant.name,
                price: Number(defaultVariant.price),
                image: firstImage?.url || "/logo.png"
              }}
            />
          )}
        </div>
      </div>
    </article>
  );
}
