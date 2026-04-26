'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';

// Mersi-inspired colored project tiles
const projectMeta: Record<string, { color: string; city: string; year: string; type: string; leftImg: string; rightImg: string }> = {
  'complete-renovatie': {
    color: '#4A3E3D',
    city: 'Amsterdam',
    year: '2024',
    type: 'Herenhuis',
    leftImg: '/woonklasse/canal-residence-1.jpg',
    rightImg: '/woonklasse/canal-residence-2.jpg',
  },
  'luxe-afwerking': {
    color: '#D4AF37',
    city: 'Amsterdam',
    year: '2025',
    type: 'Penthouse',
    leftImg: '/woonklasse/penthouse-amsterdam-1.jpg',
    rightImg: '/woonklasse/penthouse-amsterdam-2.jpg',
  },
  'totaalverbouwing': {
    color: '#8F827A',
    city: 'Bergen',
    year: '2024',
    type: 'Villa',
    leftImg: '/woonklasse/villa-bergen-1.jpg',
    rightImg: '/woonklasse/villa-bergen-2.jpg',
  },
  'dubbel-penthouse': {
    color: '#2D2926',
    city: 'Zoetermeer',
    year: '2025',
    type: 'Dubbel penthouse',
    leftImg: '/woonklasse/penthouse-zoetermeer-1.jpg',
    rightImg: '/woonklasse/penthouse-zoetermeer-2.jpg',
  },
  'drielaagse-transformatie': {
    color: '#1A1716',
    city: 'Amsterdam',
    year: '2024',
    type: 'Appartement',
    leftImg: '/woonklasse/apartment-amsterdam-1.jpg',
    rightImg: '/woonklasse/apartment-amsterdam-2.jpg',
  },
};

const NAV_LINKS = [
  { href: '#projecten', label: 'projecten' },
  { href: '/woonklasse/over-ons', label: 'atelier' },
  { href: '/woonklasse/diensten', label: 'proces' },
  { href: '/woonklasse/offerte', label: 'contact' },
  { href: 'https://www.instagram.com/', label: 'instagram' },
];

export default function WoonklasseShowcasePage() {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Dismiss loader after mount
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1400);
    return () => clearTimeout(t);
  }, []);

  // Lock page scroll so the fullscreen overlay owns the viewport
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const active = projects[activeIndex];
  const meta = projectMeta[active.slug];

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#EDE7DE] text-[#1A1716] overflow-hidden"
      style={{
        fontFamily: 'var(--font-inter), system-ui, sans-serif',
      }}
    >
      {/* ========== LOADER ========== */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="absolute inset-0 z-[200] flex flex-col items-center justify-center bg-[#1A1716] text-[#EDE7DE]"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xs tracking-[0.4em] uppercase mb-8 opacity-60"
            >
              Luxe interieurs
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.05em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'var(--font-fraunces), serif' }}
              className="text-5xl md:text-7xl font-light italic"
            >
              Woonklasse
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xs tracking-[0.3em] uppercase mt-8"
            >
              Gebouwd op uw verhaal
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== GRAIN ========== */}
      <div
        className="pointer-events-none fixed inset-0 z-[150] opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ========== NAV ========== */}
      <nav className="absolute top-0 left-0 right-0 z-[120] flex items-center justify-between px-6 md:px-10 py-6">
        <Link
          href="/woonklasse-showcase"
          className="flex items-center gap-3 group"
          aria-label="Woonklasse"
        >
          <svg width="34" height="16" viewBox="0 0 77 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A1716] group-hover:text-[#D4AF37] transition-colors">
            <path d="M11.36 6.48H10.17V12.95H11.36V6.48Z" fill="currentColor"/>
            <path d="M0 0H10.17V6.48H7.38C7 6.48 6.7 6.78 6.7 7.16V16.67H0V0Z" fill="currentColor"/>
            <path d="M21.53 0V16.67H14.83V7.16C14.83 6.78 14.52 6.48 14.14 6.48L11.36 6.48V0H21.53Z" fill="currentColor"/>
            <path d="M29.91 1.87V4.61H40.01V5.8H29.91V8.57C29.91 8.94 30.22 9.25 30.6 9.25H40.01V16.66H29.91V16.66H23.22V0H40.01V1.19H30.6C30.22 1.19 29.91 1.49 29.91 1.87Z" fill="currentColor"/>
            <path d="M55.31 10.38H54.55C56.72 10.38 58.48 12.12 58.48 14.28V16.67H57.29V14.28C57.29 12.12 55.53 10.38 53.36 10.38H48.39V9.19H53.77C54.15 9.19 54.46 8.89 54.46 8.51V5.87C54.46 5.5 54.15 5.19 53.77 5.19H48.31V9.19H43.04V10.38L48.39 10.38V16.67H41.69V0H55.31C57.06 0 58.48 1.41 58.48 3.15V7.23C58.48 8.97 57.06 10.38 55.31 10.38Z" fill="currentColor"/>
          </svg>
          <span
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ fontFamily: 'var(--font-fraunces), serif' }}
          >
            Woonklasse
          </span>
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hidden md:inline text-xs tracking-[0.2em] uppercase hover:opacity-50 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-xs tracking-[0.2em] uppercase"
          >
            menu
          </button>
        </div>
      </nav>

      {/* ========== DUAL IMAGE SLIDER ========== */}
      <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
        {/* LEFT IMAGE */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${active.slug}`}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={meta.leftImg}
                alt={active.subtitle}
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {/* RIGHT IMAGE */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${active.slug}`}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="absolute inset-0"
            >
              <Image
                src={meta.rightImg}
                alt={active.subtitle}
                fill
                priority
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Soft vignette so the bottom tiles stay readable over any image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

      {/* ========== HEADLINE ========== */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[110] text-center pointer-events-none px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 10 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white mb-5 drop-shadow"
        >
          Gebouwd op uw verhaal
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
          transition={{ delay: 1.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'var(--font-fraunces), serif' }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-light italic leading-[1.05] drop-shadow-lg max-w-4xl mx-auto"
        >
          Imagineert en realiseert
          <br />
          <span className="not-italic font-medium">unieke interieurs</span>
        </motion.h2>
      </div>

      {/* ========== PROJECT TILES (BOTTOM) ========== */}
      <div
        id="projecten"
        className="absolute left-0 right-0 bottom-0 z-[115] px-4 pb-4 md:px-6 md:pb-6"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-3">
          {projects.map((p, idx) => {
            const m = projectMeta[p.slug];
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 30 }}
                transition={{ delay: 1.9 + idx * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 min-w-0"
                onMouseEnter={() => setActiveIndex(idx)}
              >
                <Link
                  href={`/woonklasse/projecten/${p.slug}`}
                  className="group block relative overflow-hidden rounded-sm backdrop-blur-[2px]"
                  style={{
                    backgroundColor: isActive ? m.color : `${m.color}CC`,
                    boxShadow: isActive
                      ? `0 10px 30px -10px ${m.color}88, inset 0 1px 0 0 rgba(255,255,255,0.12)`
                      : 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
                    transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
                  }}
                >
                  <div className="flex items-center justify-between gap-4 px-4 md:px-5 py-3 md:py-4 text-[#EDE7DE]">
                    <div className="min-w-0 flex-1">
                      <h3
                        className="font-light italic text-base md:text-lg lg:text-xl leading-none truncate"
                        style={{ fontFamily: 'var(--font-fraunces), serif' }}
                      >
                        {p.subtitle}
                      </h3>
                      <p className="text-[9px] md:text-[10px] tracking-[0.25em] uppercase opacity-70 mt-1.5">
                        {m.city}
                      </p>
                    </div>

                    <svg
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 shrink-0 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        d="M6.97 0.2L0.2 0.2V1.43H6.11L0.41 7.12L1.28 7.99L6.97 2.29V8.2H8.2V1.43V0.2H6.97Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="0.4"
                      />
                    </svg>

                    <div className="hidden md:flex flex-col items-end gap-1 text-[9px] tracking-[0.25em] uppercase opacity-70 shrink-0">
                      <span>{m.type}</span>
                      <span>{m.year}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========== MOBILE MENU DRAWER ========== */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[180] bg-[#1A1716] text-[#EDE7DE] flex flex-col p-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="self-end text-xs tracking-[0.3em] uppercase"
            >
              Sluiten
            </button>
            <div className="flex-1 flex flex-col justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-fraunces), serif' }}
                  className="text-4xl font-light italic"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-50">
              Woonklasse · Amsterdam
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
