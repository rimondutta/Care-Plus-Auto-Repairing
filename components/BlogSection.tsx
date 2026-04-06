"use client";

import { ArrowRight, User, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    id: 1,
    date: "10 Oct",
    title: "How to Keep Your Car Engine Perfectly Running",
    author: "Admin",
    comments: 3,
    bg: "bg-[url('/assets/asset%2048.jpeg')]"
  },
  {
    id: 2,
    date: "14 Oct",
    title: "5 Signs Your Car Brakes Need Immediate Replacement",
    author: "Expert",
    comments: 0,
    bg: "bg-[url('/assets/asset%2049.jpeg')]"
  },
  {
    id: 3,
    date: "22 Oct",
    title: "Benefits of Ceramic Coating over Traditional Wax",
    author: "Admin",
    comments: 12,
    bg: "bg-[url('/assets/asset%2050.jpeg')]"
  },
  {
    id: 4,
    date: "05 Nov",
    title: "Winter Car Care Tips You Must Follow",
    author: "Mechanic",
    comments: 5,
    bg: "bg-[url('/assets/asset%2051.jpeg')]"
  },
  {
    id: 5,
    date: "12 Nov",
    title: "Understanding Wheel Alignment vs Balancing",
    author: "Admin",
    comments: 2,
    bg: "bg-[url('/assets/asset%2052.jpeg')]"
  },
  {
    id: 6,
    date: "19 Nov",
    title: "Why Battery Maintenance Should Be Your Priority",
    author: "Expert",
    comments: 7,
    bg: "bg-[url('/assets/asset%2043.jpeg')]"
  },
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 2; // For desktop
  const maxPage = Math.ceil(posts.length / postsPerPage) - 1;

  const visiblePosts = posts.slice(
    currentPage * postsPerPage, 
    (currentPage * postsPerPage) + postsPerPage
  );

  return (
    <section id="blog" className="bg-[var(--color-bgDark)] py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[var(--color-primary)] font-bold tracking-widest text-xs md:text-sm uppercase mb-3 md:mb-4 block">
             LATEST NEWS
          </span>
          <h2 className="text-white heading-font text-3xl md:text-5xl font-bold uppercase leading-tight mx-auto max-w-2xl px-4">
            Read Latest Blogs By <span className="text-[var(--color-primary)] italic">Car Experts</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visiblePosts.map((post) => (
            <div key={post.id} className="group bg-[#1B1B1B] overflow-hidden border border-neutral-800 hover:border-[var(--color-primary)] transition-colors duration-300">
              
              {/* Image Placeholder */}
              <div className={`w-full aspect-[16/9] relative bg-cover bg-center ${post.bg} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/40 group-hover:scale-105 transition-transform duration-700"></div>

                {/* Date Badge */}
                <div className="absolute top-0 left-6 bg-[var(--color-primary)] text-white font-bold uppercase px-4 py-3 heading-font transform text-center">
                  <span className="text-2xl block leading-none mb-1">{post.date.split(" ")[0]}</span>
                  <span className="text-xs tracking-widest">{post.date.split(" ")[1]}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 relative">
                
                {/* Meta */}
                <div className="flex items-center gap-6 text-[var(--color-textMuted)] text-sm font-bold uppercase tracking-wider mb-4 border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[var(--color-primary)]" />
                    By {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[var(--color-primary)]" />
                    {post.comments} Comments
                  </div>
                </div>

                <Link href="#" className="inline-block mt-2">
                  <h3 className="heading-font text-white text-2xl font-bold uppercase leading-tight group-hover:text-[var(--color-primary)] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <div className="mt-8">
                  <Link href="#" className="inline-flex items-center text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm group/link">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3">
          {[...Array(maxPage + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 transition-all duration-300 ${
                index === currentPage 
                  ? "w-10 bg-[var(--color-primary)]" 
                  : "w-3 bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
