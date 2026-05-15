'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

// WhatsApp goes to the mobile line (+31 6 50 42 46 83); the business
// landline (+31 30 207 23 88) is for calls only.
// wa.me requires no plus sign and no spaces.
const WHATSAPP_NUMBER = '31650424683';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.077 4.928A9.93 9.93 0 0 0 12.011 2C6.5 2 2.014 6.485 2.012 11.997c0 1.762.461 3.482 1.336 4.997L2 22l5.13-1.345a9.99 9.99 0 0 0 4.88 1.244h.004c5.51 0 9.997-4.485 9.999-9.997a9.93 9.93 0 0 0-2.936-7.074m-7.067 15.376h-.003a8.3 8.3 0 0 1-4.225-1.155l-.303-.18-3.045.797.812-2.967-.197-.314a8.26 8.26 0 0 1-1.266-4.395c.002-4.58 3.729-8.306 8.31-8.306a8.26 8.26 0 0 1 5.876 2.434 8.26 8.26 0 0 1 2.43 5.88c-.002 4.581-3.73 8.306-8.309 8.306m4.555-6.221c-.25-.125-1.478-.73-1.706-.813-.229-.084-.395-.125-.561.125-.167.25-.645.812-.79.979-.146.166-.292.187-.541.062-.25-.125-1.054-.388-2.007-1.239-.742-.661-1.243-1.477-1.39-1.727-.146-.25-.016-.385.109-.51.112-.112.25-.291.375-.437.124-.146.166-.25.25-.416.083-.166.041-.312-.02-.437-.063-.125-.562-1.353-.77-1.853-.203-.487-.41-.42-.562-.428a10 10 0 0 0-.479-.009.92.92 0 0 0-.666.312c-.229.25-.875.854-.875 2.082s.896 2.415 1.02 2.581c.125.167 1.762 2.69 4.269 3.771.596.258 1.062.412 1.425.527.599.19 1.143.163 1.573.099.48-.072 1.477-.604 1.685-1.187s.207-1.083.146-1.187c-.061-.105-.227-.166-.477-.291"/>
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Re-runs on every route change. Crucially it calls onScroll() immediately so
  // `scrolled` is correct even when the page loads already scrolled — mobile
  // browsers restore scroll position on reload/back, which previously left the
  // logo stuck in its white (invisible-on-white) state until a manual scroll.
  useEffect(() => {
    const onScroll = () => {
      // Flip when the logo leaves the dark hero: once the hero has scrolled up
      // past the fixed nav (~80px tall) the logo turns black on the white nav.
      // Pages without a hero fall back to a small threshold (light tops).
      const hero = document.querySelector('[data-hero]') as HTMLElement | null;
      const threshold = hero ? hero.offsetHeight - 80 : 20;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile overlay is open
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [mobileOpen]);

  const BADKAMER_CLEAN_PATHS = ['/stijlen', '/portfolio', '/diensten', '/adviesgesprek', '/prijzen'];
  const isBadkamer =
    pathname.startsWith('/badkamerstijl') ||
    BADKAMER_CLEAN_PATHS.includes(pathname);

  if (pathname === '/') return null;
  if (pathname.startsWith('/admin')) return null;
  if (isBadkamer) return null; // Badkamerstijl has its own floating nav

  const navLinks = [
    { title: 'Home', path: '/woonklasse' },
    { title: 'Diensten', path: '/woonklasse/diensten' },
    { title: 'Prijzen', path: '/woonklasse/prijzen' },
    { title: 'Projecten', path: '/woonklasse/projecten' },
    { title: 'Blog', path: '/blog' },
    { title: 'Over Ons', path: '/woonklasse/over-ons' },
  ];

  const ctaPath = '/woonklasse/offerte';
  const ctaLabel = 'Contact';

  // ==========================================
  // WOONKLASSE NAV
  // ==========================================
  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}>
        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Left - Hamburger (relative z-10 so it stacks above the absolute logo Link) */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileOpen}
              aria-controls="woon-mobile-menu"
              className={`relative z-10 flex items-center gap-3 -ml-2 p-2 transition-colors ${
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

            {/* Center - Logo. One white asset: white over the dark hero, then
                filtered to pure black once the hero scrolls past the fixed nav.
                brightness(0) forces true black regardless of source tint and
                preserves the logo's alpha; the filter transition is smooth. */}
            <Link href="/woonklasse" className="absolute left-1/2 -translate-x-1/2 pointer-events-auto">
              <Image
                src="/woonklasse-logo-white-2048.png"
                alt="Woonklasse"
                width={360}
                height={110}
                priority
                className={`h-14 sm:h-16 md:h-24 lg:h-28 w-auto object-contain transition duration-300 ${scrolled ? 'brightness-0' : ''}`}
              />
            </Link>

            {/* Right - CTA word */}
            <Link
              href={ctaPath}
              className={`relative z-10 text-xs tracking-[0.2em] uppercase font-medium transition-colors ${
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
            id="woon-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl overflow-y-auto overscroll-contain"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="min-h-full flex flex-col items-center justify-center gap-2 px-6 pt-28 pb-20"
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
                className="mt-8 flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  href={ctaPath}
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 border border-woon-accent text-woon-accent px-8 py-3 rounded-full text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-woon-accent/10"
                >
                  {ctaLabel}
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
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
