'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isWoon = pathname.startsWith('/woonklasse');
  const BADKAMER_CLEAN_PATHS = ['/stijlen', '/portfolio', '/diensten', '/adviesgesprek', '/prijzen'];
  const isBadkamer =
    pathname.startsWith('/badkamerstijl') ||
    pathname.startsWith('/blog') ||
    BADKAMER_CLEAN_PATHS.includes(pathname);

  if (pathname === '/') return null;
  if (pathname.startsWith('/admin')) return null;
  if (isBadkamer) return null; // Badkamerstijl has its own floating nav

  const navLinks = isBadkamer ? [
    { title: 'Home', path: '/badkamerstijl' },
    { title: 'Diensten', path: '/badkamerstijl/diensten' },
    { title: 'Stijlen', path: '/badkamerstijl/stijlen' },
    { title: 'Portfolio', path: '/badkamerstijl/portfolio' },
  ] : [
    { title: 'Home', path: '/woonklasse' },
    { title: 'Diensten', path: '/woonklasse/diensten' },
    { title: 'Prijzen', path: '/woonklasse/prijzen' },
    { title: 'Projecten', path: '/woonklasse/projecten' },
    { title: 'Over Ons', path: '/woonklasse/over-ons' },
  ];

  const ctaPath = isBadkamer ? '/badkamerstijl/adviesgesprek' : '/woonklasse/offerte';
  const ctaLabel = isBadkamer ? 'Adviesgesprek' : 'Offerte';

  // ==========================================
  // BADKAMERSTIJL NAV — Merise warm luxury
  // ==========================================
  if (isBadkamer) {
    return (
      <>
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
            : 'bg-badkamer-primary/90 backdrop-blur-md'
        }`}>
          <div className="w-full px-6 md:px-12 lg:px-20">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/badkamerstijl" className="flex-shrink-0">
                <Image
                  src="/badkamerstijl-logo-v2.png"
                  alt="Badkamerstijl"
                  width={360}
                  height={110}
                  className={`h-24 w-auto object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
                />
              </Link>

              {/* Desktop links */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`text-[13px] tracking-[0.08em] uppercase font-medium transition-colors duration-300 ${
                      scrolled
                        ? pathname === link.path ? 'text-badkamer-primary' : 'text-badkamer-primary/60 hover:text-badkamer-primary'
                        : pathname === link.path ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.title}
                  </Link>
                ))}
                <Link
                  href={ctaPath}
                  className={`px-6 py-2.5 text-[13px] tracking-[0.08em] uppercase font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                    scrolled
                      ? 'bg-badkamer-primary text-white hover:bg-badkamer-primary/90'
                      : 'border border-white/40 text-white hover:bg-white/10'
                  }`}
                >
                  {ctaLabel}
                </Link>
              </div>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
                aria-expanded={mobileOpen}
                className={`md:hidden p-2 transition-colors ${scrolled ? 'text-badkamer-primary' : 'text-white'}`}
              >
                <div className="flex flex-col gap-[5px] w-6">
                  <span className={`block h-[1.5px] w-full rounded transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''} ${scrolled ? 'bg-badkamer-primary' : 'bg-white'}`} />
                  <span className={`block h-[1.5px] w-full rounded transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-badkamer-primary' : 'bg-white'}`} />
                  <span className={`block h-[1.5px] w-full rounded transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''} ${scrolled ? 'bg-badkamer-primary' : 'bg-white'}`} />
                </div>
              </button>
            </div>
          </div>
        </nav>

        {/* Full-Screen Overlay Menu — Merise style */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-[#374543]/95 backdrop-blur-xl flex items-center justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + idx * 0.08 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-display text-4xl md:text-6xl font-light italic text-white/70 hover:text-white transition-colors duration-300 py-3 ${
                        pathname === link.path ? 'text-white' : ''
                      }`}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href={ctaPath}
                    onClick={() => setMobileOpen(false)}
                    className="inline-flex items-center gap-2 border border-badkamer-pink text-badkamer-pink px-8 py-3 rounded-full text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-badkamer-pink/10"
                  >
                    {ctaLabel}
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 text-white/30 text-xs tracking-[0.2em] uppercase"
                >
                  <Link
                    href="/woonklasse"
                    onClick={() => setMobileOpen(false)}
                    className="hover:text-white/60 transition-colors"
                  >
                    Naar Woonklasse &rarr;
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  // ==========================================
  // WOONKLASSE NAV — Minimal, dark, cinematic (BAMO style)
  // ==========================================
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}>
        <div className="w-full px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center h-20">
            {/* Left — Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileOpen}
              className={`flex items-center gap-3 transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              } hover:opacity-70`}
            >
              <div className="flex flex-col gap-[5px] w-6">
                <span className={`block h-[1.5px] w-full transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6.5px]' : ''} ${scrolled ? 'bg-gray-900' : 'bg-white'}`} />
                <span className={`block h-[1.5px] w-full transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''} ${scrolled ? 'bg-gray-900' : 'bg-white'}`} />
                <span className={`block h-[1.5px] w-full transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6.5px]' : ''} ${scrolled ? 'bg-gray-900' : 'bg-white'}`} />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase font-medium hidden sm:block">Menu</span>
            </button>

            {/* Center — Logo */}
            <Link href="/woonklasse" className="absolute left-1/2 -translate-x-1/2">
              <Image src="/woonklasse-logo-v2.png" alt="Woonklasse" width={360} height={110} className={`h-24 w-auto object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
            </Link>

            {/* Right — CTA word */}
            <Link
              href={ctaPath}
              className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              } hover:opacity-70`}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + idx * 0.08 }}
                >
                  <Link
                    href={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block font-display text-4xl md:text-6xl font-light italic text-white/70 hover:text-white transition-colors duration-300 py-3 ${
                      pathname === link.path ? 'text-white' : ''
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href={ctaPath}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 border border-woon-accent text-woon-accent px-8 py-3 rounded-full text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-woon-accent/10"
                >
                  {ctaLabel}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 text-white/30 text-xs tracking-[0.2em] uppercase"
              >
                <Link
                  href="/badkamerstijl"
                  onClick={() => setMobileOpen(false)}
                  className="hover:text-white/60 transition-colors"
                >
                  Naar Badkamerstijl &rarr;
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
