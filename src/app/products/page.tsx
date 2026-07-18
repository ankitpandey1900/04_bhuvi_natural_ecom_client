import { AnimatedPanel } from "@/components/animated-panel";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProducts } from "@/lib/services/product-service";

type ProductsPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : undefined;
  const sort = typeof params.sort === "string" ? params.sort as any : undefined;
  const q = typeof params.q === "string" ? params.q : undefined;

  const products = await getProducts({
    categorySlug: category,
    searchQuery: q,
    sortBy: sort,
  });

  return (
    <main className="page-shell bg-background">
      <SiteHeader />
      <section className="page-section px-6 sm:px-8 lg:px-12 py-12">
        <div className="mx-auto max-w-7xl">
          <AnimatedPanel
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-serif font-bold tracking-tight text-foreground sm:text-4xl">
              Shop All Products
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Discover botanical essentials that feel elevated and effortless.
            </p>
          </AnimatedPanel>

          <ProductFilters />

          {products.length > 0 ? (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-20 flex flex-col items-center justify-center text-center">
              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
                <span className="text-muted-foreground font-serif text-3xl">?</span>
              </div>
              <h2 className="text-2xl font-serif font-semibold text-foreground">No products found</h2>
              <p className="mt-2 text-muted-foreground max-w-md">
                We couldn't find any products matching your current filters. Try adjusting your search or category.
              </p>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
