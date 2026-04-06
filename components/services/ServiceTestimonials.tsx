"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "ALEXANDER G. RAY",
    role: "Happy Client",
    review: "The engine diagnostics and repair service at Care Plus Auto Repairing was exceptional. My car feels like new again, and the team provided professional advice throughout the process. Highly recommended!",
    rating: 5,
    date: "March 15, 2026"
  },
  {
    name: "SARAH JENKINS",
    role: "Regular Customer",
    review: "Fast, reliable, and transparent pricing. I've been bringing my vehicles here for years and they never disappoint. The digital reporting after the service is a great touch.",
    rating: 5,
    date: "February 28, 2026"
  },
  {
    name: "MICHAEL CHEN",
    role: "Vehicle Owner",
    review: "Professional service from start to finish. They explained exactly what was wrong with my engine and showed me the parts they replaced. Great communication!",
    rating: 4,
    date: "January 14, 2026"
  }
];

export default function ServiceTestimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="relative bg-[#1B1B1B] p-8 md:p-12 rounded-xl border border-[#222] overflow-hidden group">
      
      {/* Background Icon */}
      <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < testimonials[current].rating ? "fill-[var(--color-primary)] text-[var(--color-primary)]" : "text-[#444]"}`} 
            />
          ))}
        </div>

        <p className="text-white text-lg md:text-xl font-medium leading-relaxed mb-8 italic">
          &quot;{testimonials[current].review}&quot;
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">{testimonials[current].name}</span>
            <span className="text-[#888] text-sm uppercase tracking-widest">{testimonials[current].role}</span>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
