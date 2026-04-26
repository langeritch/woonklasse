'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
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

export default function StijlenPage() {
  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.default;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.sx-reveal').forEach((el) => {
          gsap.fromTo(el,
            { clipPath: 'inset(100% 0 0 0)' },
            {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>('.sx-label').forEach((el) => {
          gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: el, start: 'top 90%' },
          });
        });

        gsap.utils.toArray<HTMLElement>('.sx-scale').forEach((el) => {
          gsap.fromTo(el, { scale: 1 }, {
            scale: 1.05, ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          });
        });
      });
    });

    return () => { ctx?.revert(); };
  }, []);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(37).jpg"
            alt="Badkamerstijl stijlen"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

        <div className="relative z-20 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-[11px] tracking-[0.15em] lowercase mb-6 block"
          >
            (Onze stijlen)
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white"
          >
            Zes stijlen,
            <br />
            <span className="italic">één passie</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro text */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cormorant text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] max-w-4xl"
        >
          Elke badkamer vertelt een verhaal. Ontdek welke stijl bij jou past — of laat ons
          een uniek concept op maat creëren.
        </motion.p>
      </section>

      {/* Style sections */}
      {styles.map((style, i) => (
        <section
          key={style.slug}
          id={style.slug}
          className={`py-24 md:py-32 px-6 md:px-12 lg:px-20 ${i % 2 === 1 ? 'bg-white' : 'bg-bsv2-cream'}`}
        >
          <div className="max-w-[1600px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
              {/* Image side */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="sx-reveal aspect-[4/5] relative overflow-hidden">
                  <div className="sx-scale w-full h-full relative">
                    <Image
                      src={style.accent}
                      alt={style.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="sx-label text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
                  ({String(i + 1).padStart(2, '0')})
                </span>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4"
                >
                  {style.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-cormorant text-xl italic text-bsv2-grey mb-8"
                >
                  {style.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-bsv2-grey text-base leading-relaxed mb-10 max-w-lg"
                >
                  {style.desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Link
                    href="/adviesgesprek"
                    className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all duration-300"
                  >
                    Adviesgesprek plannen <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                {/* Small reference image */}
                <div className="sx-reveal mt-16 w-40 md:w-56 aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={style.image}
                    alt={`${style.title} referentie`}
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream border-t border-bsv2-charcoal/[0.06]">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-4xl md:text-6xl font-light mb-6"
          >
            Jouw stijl, onze <span className="italic">expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-bsv2-grey text-base mb-10 max-w-xl mx-auto"
          >
            Geen stijl die precies past? Wij combineren elementen tot een uniek concept dat volledig bij jou past.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/adviesgesprek"
              className="bg-bsv2-teal text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              Adviesgesprek plannen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="border border-bsv2-charcoal text-bsv2-charcoal text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal hover:text-white transition-colors duration-300 inline-flex items-center justify-center gap-2"
            >
              Bekijk portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
