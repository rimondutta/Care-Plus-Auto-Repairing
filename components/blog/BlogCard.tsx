"use client";

import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: {
      name: string;
      role: string;
    };
    category: string;
    image: string;
  };
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group flex flex-col bg-[#1A181A] border border-white/5 rounded-2xl overflow-hidden hover:border-[var(--color-primary)]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A181A] via-transparent to-transparent opacity-60"></div>
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 bg-[var(--color-primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-8">
        <div className="flex items-center gap-6 mb-4 text-[11px] text-white/40 uppercase tracking-widest font-bold">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-[var(--color-primary)]" />
            <span>{post.author.name}</span>
          </div>
        </div>

        <h3 className="text-xl font-black text-white mb-4 line-clamp-2 group-hover:text-[var(--color-primary)] transition-colors duration-300 leading-tight">
          {post.title}
        </h3>

        <p className="text-[var(--color-textLight)] text-sm leading-relaxed mb-8 line-clamp-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {post.excerpt}
        </p>

        <div className="mt-auto">
          <Link 
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-black text-[12px] uppercase tracking-widest group/btn"
          >
            Read Article
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
