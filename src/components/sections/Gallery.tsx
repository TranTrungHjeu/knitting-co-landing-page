"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-earth-dark py-24 md:py-32 fabric-texture-dark wave-divider-top wave-divider-bottom">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Hình ảnh
          </p>
          <h2 className="text-3xl font-bold text-cream md:text-5xl heading-decorated">
            Nhà máy & Xưởng sản xuất
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {GALLERY_IMAGES.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setLightboxIdx(idx)}
              className={`group relative overflow-hidden cursor-pointer ${
                img.span === "wide"
                  ? "col-span-2"
                  : img.span === "tall"
                    ? "row-span-2"
                    : ""
              }`}
            >
              <div className={`relative w-full ${img.span === "tall" ? "h-full min-h-[300px]" : "aspect-[4/3]"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-earth-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs font-medium text-cream uppercase tracking-wider">
                    {img.alt}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-earth-dark/95 backdrop-blur-md p-4"
          onClick={() => setLightboxIdx(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute top-6 right-6 text-cream/60 hover:text-cream transition-colors"
            onClick={() => setLightboxIdx(null)}
            aria-label="Đóng"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev / Next */}
          <button
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
            }}
            aria-label="Ảnh trước"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/40 hover:text-cream transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIdx((lightboxIdx + 1) % GALLERY_IMAGES.length);
            }}
            aria-label="Ảnh tiếp"
          >
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-5xl w-full aspect-[16/10]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={GALLERY_IMAGES[lightboxIdx].src}
              alt={GALLERY_IMAGES[lightboxIdx].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream/60">
            {GALLERY_IMAGES[lightboxIdx].alt}
          </p>
        </div>
      )}
    </section>
  );
}
