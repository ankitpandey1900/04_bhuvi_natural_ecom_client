"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback } from "react";

const CATEGORIES = [
  { label: "All Products", value: "" },
  { label: "Skincare", value: "skin-care" },
  { label: "Haircare", value: "hair-care" },
  { label: "Organic Soaps", value: "organic-soaps" },
];

const SORT_OPTIONS = [
  { label: "Newest Arrivals", value: "newest" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
];

export function ProductFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "";
  const currentSort = searchParams.get("sort") || "newest";
  const currentSearch = searchParams.get("q") || "";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-b border-border/50">
      <div className="flex flex-1 items-center gap-4 w-full md:w-auto">
        <input
          type="search"
          placeholder="Search products..."
          defaultValue={currentSearch}
          onChange={(e) => {
            // simple debounce
            setTimeout(() => {
              router.push((pathname + "?" + createQueryString("q", e.target.value)) as any);
            }, 300);
          }}
          className="w-full md:w-64 rounded-sm border border-border bg-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
        <div className="hidden md:flex items-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => router.push((pathname + "?" + createQueryString("category", cat.value)) as any)}
              className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                currentCategory === cat.value
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-2 w-full md:w-auto">
        <select
          value={currentCategory}
          onChange={(e) => router.push((pathname + "?" + createQueryString("category", e.target.value)) as any)}
          className="md:hidden w-1/2 rounded-sm border border-border bg-card px-3 py-2 text-sm focus:outline-none"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <select
          value={currentSort}
          onChange={(e) => router.push((pathname + "?" + createQueryString("sort", e.target.value)) as any)}
          className="w-full md:w-48 rounded-sm border border-border bg-card px-3 py-2 text-sm focus:outline-none"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
