import Image from "next/image";
import { COMPANY_VIDEOS } from "@/lib/constants";

export default function Video() {
  return (
    <section className="relative bg-cream py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Video
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated">
            Khám phá nhà máy
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            Xem quy trình sản xuất và hệ thống nhà máy hiện đại của chúng tôi.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {COMPANY_VIDEOS.map((video, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-cream-light border border-cream-dark/30"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-earth-dark/40 group-hover:bg-earth-dark/30 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center border-2 border-cream/80 bg-earth-dark/50 backdrop-blur-sm transition-all group-hover:bg-gold group-hover:border-gold group-hover:scale-110">
                    <svg className="h-6 w-6 text-cream ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-sm font-semibold text-earth-dark group-hover:text-gold transition-colors">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
