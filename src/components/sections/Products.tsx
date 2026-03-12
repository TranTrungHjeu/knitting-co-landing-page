"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/constants";
import type { ProductCategory } from "@/types";

const ITEMS_PER_PAGE = 8;

export default function Products() {
  const [active, setActive] = useState<ProductCategory | "all">("all");
  const [page, setPage] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("right");
  const gridRef = useRef<HTMLDivElement>(null);

  const handleCategoryEvent = useCallback((e: Event) => {
    const cat = (e as CustomEvent).detail as ProductCategory | "all";
    setActive(cat);
  }, []);

  useEffect(() => {
    window.addEventListener("product-category", handleCategoryEvent);
    return () => window.removeEventListener("product-category", handleCategoryEvent);
  }, [handleCategoryEvent]);

  const filtered =
    active === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [active]);

  const goToPage = (newPage: number) => {
    if (newPage === currentPage || animating) return;
    setSlideDir(newPage > currentPage ? "right" : "left");
    setAnimating(true);
    setTimeout(() => {
      setPage(newPage);
      setTimeout(() => setAnimating(false), 50);
    }, 300);
  };

  return (
    <section id="products" className="relative bg-earth-dark py-24 md:py-32 wave-divider-top wave-divider-bottom fabric-texture-dark">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Sản phẩm
          </p>
          <h2 className="text-3xl font-bold text-cream md:text-5xl heading-decorated text-balance">
            Vải dệt kim đa dạng chủng loại
          </h2>
          <p className="mt-6 text-cream-dark/70 text-lg">
            Hơn 50 loại vải dệt kim chất lượng cao, đáp ứng mọi nhu cầu sản
            xuất từ thời trang đến công nghiệp.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                active === cat.key
                  ? "bg-gold text-earth-dark border-gold"
                  : "bg-transparent text-cream/70 border-cream/20 hover:border-gold/50 hover:text-cream"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid with animation */}
        <div className="relative overflow-hidden">
          <div
            ref={gridRef}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-300 ease-in-out"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${slideDir === "right" ? "-40px" : "40px"})`
                : "translateX(0)",
            }}
          >
            {paginated.map((product, idx) => (
              <Link
                key={product.slug}
                href={`/san-pham/${product.slug}`}
                className="group relative overflow-hidden bg-charcoal/50 backdrop-blur-sm border border-cream/10 transition-all duration-500 hover:border-gold/40 hover:-translate-y-1"
                style={{
                  animationDelay: `${idx * 60}ms`,
                  animation: animating ? "none" : `productFadeIn 0.4s ease-out ${idx * 60}ms both`,
                }}
              >
                {/* Gold accent strip on top */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream-dark/60 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {product.specs.map((s) => (
                      <span
                        key={s}
                        className="border border-cream/15 px-2.5 py-1 text-[11px] font-medium text-cream-dark/70"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Applications */}
                  <div className="mt-3 pt-3 border-t border-cream/10">
                    <p className="text-[11px] uppercase tracking-wider text-gold/80 mb-1">Ứng dụng</p>
                    <p className="text-xs text-cream-dark/50">
                      {product.applications.join(" · ")}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {/* Prev button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/70 transition-all duration-300 hover:border-gold/50 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Trang trước"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`flex h-10 w-10 items-center justify-center text-sm font-semibold border transition-all duration-300 ${
                  p === currentPage
                    ? "bg-gold text-earth-dark border-gold"
                    : "border-cream/20 text-cream/70 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {p}
              </button>
            ))}

            {/* Next button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex h-10 w-10 items-center justify-center border border-cream/20 text-cream/70 transition-all duration-300 hover:border-gold/50 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Trang sau"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-wider text-earth-dark transition-all hover:bg-gold-light hover:shadow-xl"
          >
            Yêu cầu báo giá
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
