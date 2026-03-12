import Image from "next/image";
import { BLOG_POSTS } from "@/lib/constants";

export default function Blog() {
  return (
    <section id="blog" className="relative bg-cream-light py-24 md:py-32 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            Kiến thức
          </p>
          <h2 className="text-3xl font-bold text-earth-dark md:text-5xl heading-decorated text-balance">
            Tin tức &amp; bài viết
          </h2>
          <p className="mt-6 text-warm-gray text-lg">
            Cập nhật kiến thức về vải dệt kim, xu hướng ngành và kinh nghiệm
            chọn vải.
          </p>
        </div>

        {/* Blog cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group overflow-hidden bg-cream border border-cream-dark/40 transition-all hover:border-gold/30 hover:-translate-y-1 duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/60 via-transparent to-transparent" />
                {/* Category tag overlaid on image */}
                <span className="absolute bottom-3 left-4 bg-gold/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-earth-dark">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <time dateTime={post.date} className="text-xs text-warm-gray/70 uppercase tracking-wider">
                  {new Date(post.date).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </time>

                <h3 className="mt-2 text-lg font-bold text-earth-dark leading-snug group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Thread separator */}
                <div className="my-4 h-px bg-gradient-to-r from-gold/30 via-cream-dark to-transparent" />

                <span className="inline-flex items-center gap-1 text-sm font-semibold text-earth group-hover:text-gold transition-colors">
                  Đọc thêm
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
