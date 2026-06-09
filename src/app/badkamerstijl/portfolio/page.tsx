'use client';

import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import { useI18n } from '@/i18n/I18nProvider';

const portfolioImages = [
  { src: '/badkamerstijl/2200xxs(24).jpg', caption: 'Suite badkamer Amsterdam', style: 'Klassiek Luxe' },
  { src: '/badkamerstijl/2200xxs(25).jpg', caption: 'Penthouse badkamer', style: 'Modern Minimalistisch' },
  { src: '/badkamerstijl/2200xxs(27).jpg', caption: 'Ruimte en licht', style: 'Scandinavisch' },
  { src: '/badkamerstijl/2200xxsxm(26).jpg', caption: 'Verfijnd wasmeubel', style: 'Modern Minimalistisch' },
  { src: '/badkamerstijl/2200xxs(43).jpg', caption: 'Luxe suite-badkamer', style: 'Boutique Hotel' },
  { src: '/badkamerstijl/2200xxs(46).jpg', caption: 'Warm hout, strak design', style: 'Warm Natuurlijk' },
  { src: '/badkamerstijl/2200xxs(28).jpg', caption: 'Moderne inloopdouche', style: 'Modern Minimalistisch' },
  { src: '/badkamerstijl/2200xxs(29).jpg', caption: 'Stijlvol toiletontwerp', style: 'Scandinavisch' },
  { src: '/badkamerstijl/2200xxs(32).jpg', caption: 'Warm karakter, stoere tegels', style: 'Industrieel Chic' },
  { src: '/badkamerstijl/2200xxs(30).jpg', caption: 'Elegantie in detail', style: 'Klassiek Luxe' },
  { src: '/badkamerstijl/2200xxs(37).jpg', caption: 'Verfijnd totaalontwerp', style: 'Boutique Hotel' },
  { src: '/badkamerstijl/2200xxs(44).jpg', caption: 'Vakmanschap in elk detail', style: 'Warm Natuurlijk' },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function PortfolioPage() {
  const { t } = useI18n();
  return (
    <MotionConfig reducedMotion="user">
    <main className="bs26 overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="relative h-[70vh] md:h-[80vh] min-h-[520px] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-bs26-ink flex items-end">
          <Image
            src="/badkamerstijl/2200xxs(7).jpg"
            alt="Portfolio van gerealiseerde badkamers door Badkamerstijl"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-14 md:pb-20 max-w-[1500px] mx-auto w-full">
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/65 mb-6">
              <Link href="/" className="hover:text-white transition-colors">{t('Home')}</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">{t('Portfolio')}</span>
            </nav>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-bs26-gold-soft" />
              <span className="bs26-eyebrow text-white/75">{t('Portfolio')}</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.0]"
            >
              {t('Ons werk')}
              <br />
              <span className="italic">{t('spreekt')}</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <motion.p {...reveal} className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] max-w-4xl">
          {t('Een selectie van onze meest recente projecten. Elke badkamer is uniek ontworpen en gerealiseerd met de hoogste standaard van vakmanschap.')}
        </motion.p>
      </section>

      {/* Gallery grid, asymmetric masonry-like layout */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-36">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {portfolioImages.map((img, i) => {
              const tall = i % 3 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                  className={`group ${tall ? 'md:row-span-2' : ''}`}
                >
                  <div className={`relative overflow-hidden rounded-[16px] ${tall ? 'aspect-[3/5]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={img.src}
                      alt={`${img.caption}, badkamer in ${img.style} stijl door Badkamerstijl`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-display text-lg text-white font-light">{t(img.caption)}</p>
                      <p className="text-white/70 text-xs tracking-[0.1em] uppercase mt-1">{t(img.style)}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden rounded-[18px]"
          >
            <Image
              src="/badkamerstijl/2200xxsxm(28).jpg"
              alt="Detail van een door Badkamerstijl gerealiseerde badkamer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div {...reveal}>
            <span className="bs26-eyebrow text-bs26-gold mb-5 block">{t('Volgende stap')}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              {t('Jouw project kan')}
              <br />
              <span className="italic">{t('het volgende')}</span> {t('zijn')}
            </h2>
            <p className="font-body text-bs26-grey text-base leading-relaxed mb-10 max-w-lg">
              {t('Elk project begint met een gesprek. Vertel ons over jouw droombadkamer en wij maken er werkelijkheid van.')}
            </p>
            <Link
              href="/adviesgesprek"
              className="bg-bs26-ink text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-gold transition-colors duration-300 inline-flex items-center gap-2"
            >
              {t('Adviesgesprek plannen')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
    </MotionConfig>
  );
}
