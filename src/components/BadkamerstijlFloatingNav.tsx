'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Stijlen', path: '/stijlen' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Diensten', path: '/diensten' },
  { title: 'Prijzen', path: '/prijzen' },
  { title: 'Kosten', path: '/kosten' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/adviesgesprek' },
];

// Despite the legacy filename this renders a normal, always-visible top
// header for every Badkamerstijl page. (It used to be a bottom floating bar
// that stayed invisible until you scrolled 120px - which left every page
// without any way back to the home page above the fold.)
export default function BadkamerstijlFloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Persistent top header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-bsv2-cream/80 backdrop-blur-xl border-b border-bsv2-charcoal/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-between h-16 md:h-20">
              {/* Brand - back to the home portal */}
              <Link href="/" className="flex-shrink-0">
                <span className="font-cormorant text-xl md:text-2xl font-light text-bsv2-charcoal tracking-wide">
                  Badkamerstijl
                </span>
              </Link>

              {/* Right - Menu + Contact */}
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setMenuOpen(true)}
                  aria-label="Menu openen"
                  className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2.5 rounded-full hover:bg-black/5 transition-colors"
                >
                  <div className="flex flex-col gap-[4px] w-[18px]">
                    <span className="block h-[1.5px] w-full bg-bsv2-charcoal rounded-full" />
                    <span className="block h-[1.5px] w-full bg-bsv2-charcoal rounded-full" />
                  </div>
                  <span className="text-xs font-medium tracking-[0.1em] uppercase text-bsv2-charcoal hidden sm:block">
                    Menu
                  </span>
                </button>

                <Link
                  href="/adviesgesprek"
                  className="flex items-center gap-2 bg-bsv2-teal text-white text-xs font-medium tracking-[0.05em] px-4 sm:px-5 py-2.5 rounded-full hover:bg-bsv2-charcoal transition-colors duration-300"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-bsv2-cream flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end px-8 md:px-16 pt-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 text-bsv2-charcoal hover:text-bsv2-teal transition-colors"
              >
                <span className="text-xs font-medium tracking-[0.1em] uppercase">Sluiten</span>
                <div className="relative w-6 h-6">
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current rotate-45" />
                  <span className="absolute top-1/2 left-0 w-full h-[1.5px] bg-current -rotate-45" />
                </div>
              </button>
            </div>

            {/* Menu content */}
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="flex flex-col items-center gap-3">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-bsv2-charcoal/40 hover:text-bsv2-charcoal transition-colors duration-300 py-1 md:py-2"
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mt-10"
                >
                  <Link
                    href="/adviesgesprek"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-3 bg-bsv2-teal text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-bsv2-charcoal transition-colors duration-300"
                  >
                    Adviesgesprek plannen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-8 md:px-16 pb-8 flex justify-between items-end text-xs text-bsv2-grey"
            >
              <span>info@badkamerstijl.nl</span>
              <span>+31 30 207 23 88</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
