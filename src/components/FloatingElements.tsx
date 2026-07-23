"use client";

import { useState, useEffect } from "react";

export default function FloatingElements() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Floating WhatsApp button */}
      <a
        href="https://api.whatsapp.com/send?phone=9170108 54643&text=Hi! I'm interested in chess classes"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 active:scale-95 animate-[float_6s_ease-in-out_infinite]"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/WhatsApp-Logo.wine.svg"
          alt="WhatsApp"
          className="w-full h-full object-cover rounded-full"
        />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
      </a>

      {/* 3D Animated Book Now floating button */}
      <a
        href="#demo"
        className="btn-3d-book fixed bottom-20 md:bottom-[7rem] right-4 md:right-6 z-50 !w-12 !h-12 md:!w-14 md:!h-14 !rounded-full !p-0 !flex-col !gap-0.5 animate-[float_6s_ease-in-out_infinite_0.5s]"
        title="Book a Free Demo"
        aria-label="Book a Free Demo"
      >
        {/* Calendar Icon */}
        <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
        </svg>
        <span className="text-[6px] md:text-[7px] font-bold tracking-wider leading-none">BOOK NOW</span>
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#1a3a52] animate-ping opacity-20" />
      </a>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-dark-card border border-dark-border hover:border-gold/30 flex items-center justify-center text-gold text-lg shadow-lg transition-all duration-300 hover:bg-gold/5 hover:scale-110 active:scale-95 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}
