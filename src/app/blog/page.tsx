import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata = {
  title: "Tin tức & Blog | Dệt Kim Liên Việt",
  description: "Cập nhật thông tin ngành dệt kim, xu hướng vải, công nghệ sản xuất, kinh nghiệm chọn vải và các hoạt động của Dệt Kim Liên Việt.",
};

export default function BlogPage() {
  return (
    <section className="bg-cream py-24 fabric-texture">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">Tin tức & Blog</p>
          <h1 className="text-3xl md:text-5xl font-bold text-earth-dark heading-decorated text-balance">Cập nhật ngành dệt kim</h1>
          <p className="mt-6 text-earth-dark/70 text-lg">Tin tức, xu hướng, công nghệ, kinh nghiệm chọn vải và hoạt động của Dệt Kim Liên Việt.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block bg-cream-light border border-earth/10 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={post.image} alt={post.title} loading="eager" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-earth-dark group-hover:text-gold transition-colors mb-2">{post.title}</h2>
                <p className="text-sm text-earth-dark/70 line-clamp-3 mb-4">{post.excerpt}</p>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold">{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
