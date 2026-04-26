'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';

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

export default function PortfolioPage() {
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
            src="/badkamerstijl/2200xxs(7).jpg"
            alt="Badkamerstijl portfolio"
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
            (Portfolio)
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white"
          >
            Ons werk
            <br />
            <span className="italic">spreekt</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cormorant text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] max-w-4xl"
        >
          Een selectie van onze meest recente projecten. Elke badkamer is uniek ontworpen
          en gerealiseerd met de hoogste standaard van vakmanschap.
        </motion.p>
      </section>

      {/* Gallery grid — asymmetric masonry-like layout */}
      <section className="px-6 md:px-12 lg:px-20 pb-24 md:pb-36">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioImages.map((img, i) => {
              const tall = i % 3 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
                  className={`group cursor-pointer ${tall ? 'md:row-span-2' : ''}`}
                >
                  <div className={`sx-reveal relative overflow-hidden ${tall ? 'aspect-[3/5]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={img.src}
                      alt={img.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-cormorant text-lg text-white font-light">{img.caption}</p>
                      <p className="text-white/60 text-xs tracking-[0.1em] uppercase mt-1">{img.style}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden"
          >
            <Image
              src="/badkamerstijl/2200xxsxm(28).jpg"
              alt="Badkamerstijl detail"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8">
              Jouw project kan
              <br />
              <span className="italic">het volgende</span> zijn
            </h2>
            <p className="text-bsv2-grey text-base leading-relaxed mb-10 max-w-lg">
              Elk project begint met een gesprek. Vertel ons over jouw droombadkamer en
              wij maken er werkelijkheid van.
            </p>
            <Link
              href="/adviesgesprek"
              className="bg-bsv2-teal text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal transition-colors duration-300 inline-flex items-center gap-2"
            >
              Adviesgesprek plannen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
