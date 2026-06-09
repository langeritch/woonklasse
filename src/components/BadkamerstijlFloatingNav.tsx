'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Phone, Mail, MapPin } from 'lucide-react';
import BadkamerstijlLogo from '@/components/BadkamerstijlLogo';
import Flag from '@/components/Flag';
import { useI18n } from '@/i18n/I18nProvider';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Stijlen', path: '/stijlen' },
  { title: 'Saninet 3D', path: '/saninet' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Diensten', path: '/diensten' },
  { title: 'Prijzen', path: '/prijzen' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/adviesgesprek' },
];

function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale, t } = useI18n();
  const target = locale === 'nl' ? 'en' : 'nl';
  const border = dark ? 'border-white/25 hover:border-white/60' : 'border-bs26-charcoal/20 hover:border-bs26-charcoal/50';
  const text = dark ? 'text-white' : 'text-bs26-charcoal';
  return (
    <button
      type="button"
      onClick={() => setLocale(target)}
      aria-label={`${t('Taal')}: ${target === 'en' ? 'English' : 'Nederlands'}`}
      className={`flex items-center gap-2 border ${border} rounded-full pl-1.5 pr-3 sm:pr-3.5 py-1.5 transition-colors`}
    >
      <Flag country={target === 'en' ? 'gb' : 'nl'} className="w-[22px] h-[22px] block" />
      <span className={`text-[11px] font-medium tracking-[0.12em] uppercase ${text}`}>
        {target === 'en' ? 'EN' : 'NL'}
      </span>
    </button>
  );
}

export default function BadkamerstijlFloatingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Persistent top header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <div className="bg-bs26-cream/80 backdrop-blur-xl border-b border-bs26-charcoal/10">
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link href="/" className="flex-shrink-0" aria-label="Badkamerstijl home">
                <BadkamerstijlLogo className="h-9 md:h-11 text-bs26-charcoal" />
              </Link>

              <div className="flex items-center gap-2 sm:gap-3">
                <LanguageToggle />
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  aria-label={`${t('Menu')} ${t('openen') || ''}`.trim()}
                  className="flex items-center gap-2.5 border border-bs26-charcoal/20 hover:border-bs26-charcoal/50 rounded-full px-3.5 sm:px-4 py-2.5 transition-colors"
                >
                  <span className="flex flex-col gap-[4px] w-[18px]">
                    <span className="block h-[1.5px] w-full bg-bs26-charcoal rounded-full" />
                    <span className="block h-[1.5px] w-full bg-bs26-charcoal rounded-full" />
                  </span>
                  <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-bs26-charcoal hidden sm:block">
                    {t('Menu')}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-bs26-ink text-white flex flex-col"
          >
            {/* Top bar */}
            <div className="flex-shrink-0 border-b border-white/10">
              <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 h-16 md:h-20 flex items-center justify-between">
                <BadkamerstijlLogo className="h-9 md:h-11 text-white" />
                <div className="flex items-center gap-3">
                  <LanguageToggle dark />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label={t('Sluiten')}
                    className="flex items-center gap-2 border border-white/25 hover:border-white/60 rounded-full px-3.5 sm:px-4 py-2.5 transition-colors"
                  >
                    <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-white hidden sm:block">
                      {t('Sluiten')}
                    </span>
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14 grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20">
                {/* Nav links */}
                <nav className="flex flex-col">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 + idx * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.path}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-4 py-3 md:py-3.5 border-b border-white/10"
                      >
                        <span className="font-display text-[10px] text-bs26-gold-soft tabular-nums w-6">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-white/70 group-hover:text-white transition-colors">
                          {t(link.title)}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Contact + CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex flex-col"
                >
                  <span className="bs26-eyebrow text-bs26-gold-soft mb-5">{t('Contact')}</span>
                  <Link
                    href="/adviesgesprek"
                    onClick={() => setMenuOpen(false)}
                    className="group inline-flex items-center justify-between gap-4 bg-white text-bs26-ink rounded-2xl px-7 py-6 hover:bg-bs26-gold hover:text-white transition-colors"
                  >
                    <span className="font-display text-2xl md:text-3xl font-light leading-tight">
                      {t('Adviesgesprek plannen')}
                    </span>
                    <ArrowRight className="w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <div className="mt-9 space-y-4 font-body text-sm">
                    <a href={CONTACT_BADKAMERSTIJL.telefoonLink} className="flex items-center gap-3 text-white/75 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 text-bs26-gold-soft flex-shrink-0" />
                      {CONTACT_BADKAMERSTIJL.telefoon}
                    </a>
                    <a href={`mailto:${CONTACT_BADKAMERSTIJL.email}`} className="flex items-center gap-3 text-white/75 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 text-bs26-gold-soft flex-shrink-0" />
                      {CONTACT_BADKAMERSTIJL.email}
                    </a>
                    <p className="flex items-start gap-3 text-white/75">
                      <MapPin className="w-4 h-4 text-bs26-gold-soft flex-shrink-0 mt-0.5" />
                      <span>{CONTACT_BADKAMERSTIJL.adres.volledig}</span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
