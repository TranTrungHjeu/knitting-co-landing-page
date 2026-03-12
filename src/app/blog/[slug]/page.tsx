"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS } from "@/lib/constants";
import { useParams } from "next/navigation";
import Header from "@/components/layout/Header";
import { useState, useEffect } from "react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : Array.isArray(params.slug) ? params.slug[0] : "";
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  // Hydration-safe share URL
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  return (
    <>
      <Header />
      <section className="bg-cream-light py-16 md:py-24 fabric-texture min-h-screen">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-earth-dark/60 flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-gold transition-colors">Trang chủ</Link>
          <span className="mx-1">/</span>
          <Link href="/blog" className="hover:text-gold transition-colors">Tin tức & Blog</Link>
          <span className="mx-1">/</span>
          <span className="text-earth-dark font-semibold line-clamp-1">{post.title}</span>
        </nav>

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="inline-block bg-gold/90 text-earth-dark text-xs font-semibold uppercase tracking-wider rounded px-3 py-1 shadow-sm">
            {post.category}
          </span>
          <span className="text-xs text-earth-dark/60">
            {new Date(post.date).toLocaleDateString("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-earth-dark heading-decorated mb-6 text-balance">
          {post.title}
        </h1>

        {/* Cover Image */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
        </div>

        {/* Social Share & Back */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-xs text-earth-dark/60">Chia sẻ:</span>
            <a
              href={shareUrl ? `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors text-earth-dark"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a
              href={shareUrl ? `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}` : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors text-earth-dark"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
            </a>
            <a
              href={shareUrl ? `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}` : "#"}
              className="hover:text-gold transition-colors text-earth-dark"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065L.002 6.5V19.5A2.5 2.5 0 002.5 22h19a2.5 2.5 0 002.5-2.5V6.5l-12 6.565zm11.998-9.565A2.5 2.5 0 0021.5 2h-19A2.5 2.5 0 00.002 3.5l12 7.035 11.996-7.035z"/></svg>
            </a>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-earth-dark hover:text-gold transition-colors font-semibold">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Quay lại Blog
          </Link>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-gold/30 via-cream-dark to-transparent mb-10" />

        {/* Content */}
        <article className="prose prose-lg prose-earth max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      </section>
    </>
  );
}
