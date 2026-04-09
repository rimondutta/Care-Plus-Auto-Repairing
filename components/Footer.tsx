"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, MapPin, ArrowRight } from "lucide-react";

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.045 6.406-3.723 7.636-7.234C20.407 10.165 21 8.583 21 7c0-.28-.02-.56-.06-.83A7.72 7.72 0 0022 4.01z" />
  </svg>
);
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0A0809] pt-20 pb-8 border-t border-neutral-900 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: About / Contact */}
          <div>
            <Link href="/" className="mb-6 group inline-flex h-12 md:h-16 lg:h-20">
              <img 
                src="/logo/care-plus-logo.png" 
                alt="Care Plus Logo" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
            <p className="text-[var(--color-textMuted)] mb-6 leading-relaxed text-sm">
              We are a premium automotive repair & maintenance workshop dedicated to top-tier care and maintenance of your vehicle.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[var(--color-primary)] w-5 h-5 shrink-0 mt-1" />
                <p className="text-[var(--color-textLight)] text-sm">
                  <strong className="block text-white mb-1">VISIT OUR LOCATION</strong>
                  9 19dStreet - 3 St - Al Qouz Ind.third - Dubai - United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-white text-xl font-bold heading-font uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[var(--color-primary)] inline-block"></span>
              Our Services
            </h3>
            <ul className="flex flex-col gap-3">
              {['Engine Diagnostics & Repair', 'Advanced Auto Maintenance', 'Tire Change & Balancing', 'Paint & Body Work', 'Transmission Services'].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="text-[var(--color-textMuted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-4 h-4 text-[var(--color-primary)] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-white text-xl font-bold heading-font uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[var(--color-primary)] inline-block"></span>
              Useful Links
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'About Workshop', href: '#' },
                { name: 'Latest Blog', href: '/blog' },
                { name: 'Membership Plans', href: '#' },
                { name: 'Opening Hours', href: '#' },
                { name: 'Meet Our Mechanics', href: '#' },
                { name: 'Contact Support', href: '/contact' }
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="text-[var(--color-textMuted)] hover:text-[var(--color-primary)] transition-colors flex items-center gap-2 text-sm group">
                    <ArrowRight className="w-4 h-4 text-[var(--color-primary)] opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white text-xl font-bold heading-font uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-4 bg-[var(--color-primary)] inline-block"></span>
              Newsletter
            </h3>
            <p className="text-[var(--color-textMuted)] mb-6 text-sm">
              Subscribe to get the latest news and special offers directly to your inbox.
            </p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="bg-[var(--color-bgDark2)] border border-neutral-800 text-white px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] transition-colors w-full"
                required
              />
              <button 
                type="submit" 
                className="bg-[var(--color-primary)] text-white font-bold py-3 px-6 hover:bg-white hover:text-[var(--color-primary)] transition-colors uppercase text-sm tracking-wider"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p 
            className="text-[var(--color-textMuted)] text-sm text-center md:text-left"
            suppressHydrationWarning
          >
            &copy; {currentYear || '2026'} Care Plus Auto Repairing. All Rights Reserved. | Developed by <a href="https://rimondutta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[var(--color-primary)] transition-colors underline underline-offset-4 decoration-[var(--color-primary)]/30">Rimon Dutta</a>
          </p>
          
          <div className="flex items-center gap-4">
            <Link href="#" className="w-10 h-10 bg-[var(--color-bgDark2)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
              <Facebook className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-[var(--color-bgDark2)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
              <Twitter className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-[var(--color-bgDark2)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="#" className="w-10 h-10 bg-[var(--color-bgDark2)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors">
              <Linkedin className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm text-[var(--color-textMuted)] text-center md:text-right">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
