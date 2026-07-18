import { notFound } from "next/navigation";
import Link from "next/link";
import { AnimatedPanel } from "@/components/animated-panel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProductBySlug } from "@/lib/services/product-service";
import { AddToCartButton } from "@/components/add-to-cart-button";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const defaultVariant = product.variants[0];
  const price = defaultVariant ? `₹${defaultVariant.price}` : "Price unavailable";
  const firstImage = product.media[0];

  return (
    <main className="page-shell">
      <SiteHeader />
      <section className="page-section px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <Link href="/products" className="text-sm font-medium text-[#5b6b47]">
            ← Back to collection
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedPanel
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="surface-card rounded-[2rem] p-8"
            >
              <div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-[#a66e4f] to-[#e8c7a8]">
                {firstImage && (
                  <img
                    src={firstImage.url}
                    alt={product.name}
                    className="h-full w-full object-cover rounded-[1.5rem]"
                  />
                )}
              </div>
              <div className="mt-6 flex items-center justify-between gap-4">
                {product.isFeatured && (
                  <Badge variant="secondary">Featured</Badge>
                )}
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6f675f]">
                  {product.category?.name || "Uncategorized"}
                </span>
              </div>
            </AnimatedPanel>

            <AnimatedPanel
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="space-y-6"
            >
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{product.name}</h1>
                <p className="mt-4 text-lg leading-8 text-[#6f675f]">{product.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <span className="text-3xl font-serif font-bold text-foreground">{price}</span>
                {defaultVariant && (
                  <div className="w-full sm:w-auto flex-1">
                    <AddToCartButton 
                      variant="solid"
                      item={{
                        productId: product.id,
                        variantId: defaultVariant.id,
                        name: product.name,
                        variantName: defaultVariant.name,
                        price: Number(defaultVariant.price),
                        image: firstImage?.url || "/logo.png"
                      }}
                    />
                  </div>
                )}
              </div>
              {product.ingredients && product.ingredients.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f675f]">Key ingredients</h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.ingredients.map((item) => (
                      <span
                        key={item.ingredientId}
                        className="rounded-full border border-[#e3d9cb] px-3 py-2 text-sm text-[#1f1a16]"
                      >
                        {item.ingredient.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </AnimatedPanel>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
