'use client';

import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';

const styles = [
  {
    slug: 'modern',
    title: 'Modern Minimalistisch',
    subtitle: 'Strakke lijnen, pure vormen',
    desc: 'Een badkamer waar minder meer is. Strakke lijnen, naadloze oppervlakken en een zorgvuldig samengesteld kleurenpalet creëren een oase van rust en elegantie.',
    image: '/badkamers/modern.png',
    accent: '/badkamerstijl/2200xxs(28).jpg',
  },
  {
    slug: 'warm-natuurlijk',
    title: 'Warm Natuurlijk',
    subtitle: 'Hout, steen en aardse tinten',
    desc: 'Natuurlijke materialen als warm hout en ruwe steen brengen de buitenwereld naar binnen. Een badkamer die uitnodigt om te ontspannen.',
    image: '/badkamers/landelijk.png',
    accent: '/badkamerstijl/2200xxs(46).jpg',
  },
  {
    slug: 'industrieel',
    title: 'Industrieel Chic',
    subtitle: 'Beton, staal en karakter',
    desc: 'Stoere materialen ontmoeten verfijnd design. Betonlook tegels, mat zwart sanitair en industriële accenten voor een badkamer met karakter.',
    image: '/badkamers/beton.png',
    accent: '/badkamerstijl/2200xxs(32).jpg',
  },
  {
    slug: 'klassiek',
    title: 'Klassiek Luxe',
    subtitle: 'Marmer, goud en tijdloze elegantie',
    desc: 'Klassieke schoonheid in hedendaagse uitvoering. Marmer, messing accenten en een vleugje grandeur voor wie kiest voor tijdloze luxe.',
    image: '/badkamers/klassiek.png',
    accent: '/badkamerstijl/2200xxs(25).jpg',
  },
  {
    slug: 'scandinavisch',
    title: 'Scandinavisch',
    subtitle: 'Licht, lucht en functioneel',
    desc: 'Geïnspireerd door het Noorden: lichte kleuren, functioneel design en organische vormen die sereniteit ademen.',
    image: '/badkamers/scandinavisch.png',
    accent: '/badkamerstijl/2200xxs(29).jpg',
  },
  {
    slug: 'boutique',
    title: 'Boutique Hotel',
    subtitle: 'Luxe hospitality bij je thuis',
    desc: 'De ervaring van een vijfsterrenhotel, elke dag. Weelderige materialen, sfeerverlichting en doordachte details.',
    image: '/badkamers/luxe.png',
    accent: '/badkamerstijl/2200xxs(43).jpg',
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function StijlenPage() {
  return (
    <MotionConfig reducedMotion="user">
    <main className="bs26 overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="relative h-[70vh] md:h-[80vh] min-h-[520px] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-bs26-ink flex items-end">
          <Image
            src="/badkamerstijl/2200xxs(37).jpg"
            alt="De badkamerstijlen van Badkamerstijl"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-14 md:pb-20 max-w-[1500px] mx-auto w-full">
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/65 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Stijlen</span>
            </nav>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-bs26-gold-soft" />
              <span className="bs26-eyebrow text-white/75">Onze stijlen</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.0]"
            >
              Zes stijlen,
              <br />
              <span className="italic">één passie</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <motion.p {...reveal} className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] max-w-4xl">
          Elke badkamer vertelt een verhaal. Ontdek welke stijl bij jou past, of laat ons
          een uniek concept op maat creëren.
        </motion.p>
      </section>

      {/* Style sections */}
      {styles.map((style, i) => (
        <section
          key={style.slug}
          id={style.slug}
          className={`py-20 md:py-28 px-6 md:px-12 lg:px-20 scroll-mt-24 ${i % 2 === 1 ? 'bg-bs26-paper' : ''}`}
        >
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image side */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div {...reveal} className="aspect-[4/5] relative overflow-hidden rounded-[18px] lg:max-w-[460px] lg:mx-auto">
                  <Image
                    src={style.slug === 'industrieel' ? '/badkamerstijl/industrieel-chic.jpg' : style.accent}
                    alt={`${style.title} badkamer door Badkamerstijl`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Text side */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="bs26-eyebrow text-bs26-gold mb-5 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <motion.h2 {...reveal} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                  {style.title}
                </motion.h2>
                <motion.p {...reveal} className="font-display text-xl italic text-bs26-grey mb-8">
                  {style.subtitle}
                </motion.p>
                <motion.p {...reveal} className="font-body text-bs26-grey text-base leading-relaxed mb-10 max-w-lg">
                  {style.desc}
                </motion.p>
                <motion.div {...reveal}>
                  <Link
                    href="/adviesgesprek"
                    className="inline-flex items-center gap-2 bg-bs26-ink text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-bs26-gold transition-colors duration-300"
                  >
                    Adviesgesprek plannen <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Small reference image, omitted for Industrieel Chic */}
                {style.slug !== 'industrieel' && (
                  <motion.div {...reveal} className="mt-14 w-40 md:w-56 aspect-[4/3] relative overflow-hidden rounded-[12px]">
                    <Image
                      src={style.image}
                      alt={`${style.title} referentie`}
                      fill
                      className="object-cover"
                      sizes="224px"
                    />
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="px-3 md:px-5 py-12 md:py-20">
        <div className="bg-bs26-ink text-white rounded-[20px] md:rounded-[28px] py-20 md:py-28 px-6 md:px-16">
          <div className="max-w-[1100px] mx-auto text-center">
            <span className="bs26-eyebrow text-bs26-gold-soft mb-5 block">Maatwerk</span>
            <motion.h2 {...reveal} className="font-display text-4xl md:text-6xl font-light mb-6">
              Jouw stijl, onze <span className="italic">expertise</span>
            </motion.h2>
            <motion.p {...reveal} className="font-body text-white/70 text-base mb-10 max-w-xl mx-auto">
              Geen stijl die precies past? Wij combineren elementen tot een uniek concept dat volledig bij jou past.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/adviesgesprek"
                className="bg-white text-bs26-ink text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-gold hover:text-white transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Adviesgesprek plannen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Bekijk portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </MotionConfig>
  );
}
