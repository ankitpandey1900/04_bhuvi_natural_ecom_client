import { prisma } from "@/lib/prisma";

type GetProductsParams = {
  categorySlug?: string;
  searchQuery?: string;
  sortBy?: "price_asc" | "price_desc" | "newest";
};

export async function getProducts(params?: GetProductsParams) {
  try {
    const { categorySlug, searchQuery, sortBy = "newest" } = params || {};

    let orderBy: any = { createdAt: "desc" };
    
    // Prisma doesn't support direct sorting by a related nested relation easily without aggregation in basic queries, 
    // but we can sort by createdAt. If they want price sort, we will handle it in memory or through a simpler relation
    // For now, we'll sort by createdAt as default.

    const products = await prisma.product.findMany({
      where: {
        isActive: true,
        deletedAt: null,
        ...(categorySlug && { category: { slug: categorySlug } }),
        ...(searchQuery && {
          OR: [
            { name: { contains: searchQuery, mode: "insensitive" } },
            { description: { contains: searchQuery, mode: "insensitive" } },
          ],
        }),
      },
      include: {
        variants: {
          where: {
            isActive: true,
            deletedAt: null,
          },
          select: {
            id: true,
            productId: true,
            sku: true,
            name: true,
            price: true,
            compareAtPrice: true,
            weightGrams: true,
            stockStatus: true,
            isDefault: true,
          }
        },
        media: true,
        category: true,
      },
      orderBy,
    });

    // In-memory sort for price since variants is an array
    if (sortBy === "price_asc") {
      products.sort((a, b) => Number(a.variants[0]?.price || 0) - Number(b.variants[0]?.price || 0));
    } else if (sortBy === "price_desc") {
      products.sort((a, b) => Number(b.variants[0]?.price || 0) - Number(a.variants[0]?.price || 0));
    }

    return products;
  } catch (error) {
    console.error('Database error in getProducts:', error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  try {
    return await prisma.product.findUnique({
      where: {
        slug,
        deletedAt: null,
      },
      include: {
        variants: {
          where: {
            isActive: true,
            deletedAt: null,
          },
          select: {
            id: true,
            productId: true,
            sku: true,
            name: true,
            price: true,
            compareAtPrice: true,
            weightGrams: true,
            stockStatus: true,
            isDefault: true,
          }
        },
        media: {
          orderBy: {
            sortOrder: "asc",
          },
        },
        category: true,
        brand: true,
        ingredients: {
          include: {
            ingredient: true,
          },
        },
        tags: {
          include: {
            tag: true,
          },
        },
      },
    });
  } catch (error) {
    console.error('Database error in getProductBySlug:', error);
    return null;
  }
}

export async function getFeaturedProducts() {
  try {
    return await prisma.product.findMany({
      where: {
        isActive: true,
        isFeatured: true,
        deletedAt: null,
      },
      include: {
        variants: {
          where: {
            isActive: true,
            deletedAt: null,
          },
          select: {
            id: true,
            productId: true,
            sku: true,
            name: true,
            price: true,
            compareAtPrice: true,
            weightGrams: true,
            stockStatus: true,
            isDefault: true,
          }
        },
        media: true,
        category: true,
      },
      take: 4,
    });
  } catch (error) {
    console.error('Database error in getFeaturedProducts:', error);
    return [];
  }
}

export async function getProductsByCategory(categorySlug: string) {
  try {
    return await prisma.product.findMany({
      where: {
        category: {
          slug: categorySlug,
        },
        isActive: true,
        deletedAt: null,
      },
      include: {
        variants: {
          where: {
            isActive: true,
            deletedAt: null,
          },
          select: {
            id: true,
            productId: true,
            sku: true,
            name: true,
            price: true,
            compareAtPrice: true,
            weightGrams: true,
            stockStatus: true,
            isDefault: true,
          }
        },
        media: true,
        category: true,
      },
    });
  } catch (error) {
    console.error('Database error in getProductsByCategory:', error);
    return [];
  }
}

export async function getCategories() {
  try {
    return await prisma.category.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        _count: {
          select: {
            products: {
              where: {
                isActive: true,
                deletedAt: null,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error('Database error in getCategories:', error);
    return [];
  }
}
