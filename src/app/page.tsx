'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row overflow-hidden bg-black text-white cursor-default">

      {/* Woonklasse Split — Left */}
      <Link href="/woonklasse" className="group relative h-1/2 w-full md:h-full md:w-1/2 overflow-hidden flex items-center justify-center">
        {/* Background with parallax-like zoom on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-woon-dark via-woon-primary to-woon-secondary transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.15)_0%,transparent_60%)]" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Dark overlay that lifts on hover */}
        <div className="absolute inset-0 bg-black/40 transition-all duration-700 group-hover:bg-black/10 z-10" />

        {/* Divider line on right edge */}
        <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-px bg-white/10 z-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center text-center px-8 md:px-12"
        >
          {/* Oversized display text — Markovskaia inspired */}
          <div className="mb-6">
            <Image src="/woonklasse-logo-v2.png" alt="Woonklasse" width={200} height={80} className="h-16 md:h-20 w-auto object-contain opacity-90 mix-blend-screen" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-white/90 leading-[1.1] mb-6 tracking-tight">
            Vakmanschap<br />
            <span className="text-woon-accent not-italic font-medium">in elke steen</span>
          </h2>

          <p className="text-sm md:text-base text-white/50 max-w-xs mb-8 tracking-wide uppercase font-light">
            Renovatie &middot; Nieuwbouw &middot; Sanitair
          </p>

          {/* Minimal CTA — pill outline like Markovskaia */}
          <span className="inline-flex items-center gap-3 border border-white/30 text-white/80 px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-500 group-hover:border-woon-accent group-hover:text-woon-accent group-hover:bg-woon-accent/10">
            Ontdek
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </motion.div>
      </Link>

      {/* Badkamerstijl Split — Right */}
      <Link href="/badkamerstijl" className="group relative h-1/2 w-full md:h-full md:w-1/2 overflow-hidden flex items-center justify-center">
        {/* Background image with zoom */}
        <div className="absolute inset-0 bg-[url('/badkamers/japandi.png')] bg-cover bg-center transition-transform duration-[1.2s] ease-out group-hover:scale-110" />

        {/* Dark overlay that lifts on hover */}
        <div className="absolute inset-0 bg-badkamer-dark/70 transition-all duration-700 group-hover:bg-badkamer-dark/40 z-10" />

        {/* Accent glow */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-badkamer-dark/60 to-transparent z-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 flex flex-col items-center text-center px-8 md:px-12"
        >
          <div className="mb-6">
            <Image src="/badkamerstijl-logo-v2.png" alt="Badkamerstijl" width={200} height={80} className="h-16 md:h-20 w-auto object-contain opacity-90 mix-blend-screen" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light italic text-white/90 leading-[1.1] mb-6 tracking-tight">
            Een badkamer<br />
            <span className="text-badkamer-accent not-italic font-medium">om van te dromen</span>
          </h2>

          <p className="text-sm md:text-base text-white/50 max-w-xs mb-8 tracking-wide uppercase font-light">
            Ontwerp &middot; Renovatie &middot; Montage
          </p>

          <span className="inline-flex items-center gap-3 border border-white/30 text-white/80 px-8 py-3 rounded-full text-sm tracking-widest uppercase transition-all duration-500 group-hover:border-badkamer-accent group-hover:text-badkamer-accent group-hover:bg-badkamer-accent/10">
            Ontdek
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </span>
        </motion.div>
      </Link>

      {/* Central scroll indicator — BAMO inspired */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Kies je pad</span>
        <div className="w-px h-8 bg-white/20" />
      </motion.div>
    </div>
  );
}
