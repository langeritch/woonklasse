'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const waarden = [
  {
    title: 'Vakmanschap',
    desc: 'Elk project wordt uitgevoerd door ervaren vakmensen die trots zijn op hun werk. Geen concessies, alleen het beste.',
  },
  {
    title: 'Transparantie',
    desc: 'Heldere communicatie, eerlijke prijzen en geen verrassingen. U weet altijd waar u aan toe bent.',
  },
  {
    title: 'Persoonlijk',
    desc: 'Eén vast aanspreekpunt van begin tot eind. Wij luisteren, denken mee en leveren op maat.',
  },
  {
    title: 'Duurzaam',
    desc: 'We bouwen met materialen en technieken die meegaan. Kwaliteit die de tand des tijds doorstaat.',
  },
  {
    title: 'Ambitie',
    desc: 'We leggen de lat hoog voor onszelf en voor uw project. Perfect is niet goed genoeg, het moet uitzonderlijk zijn.',
  },
];


function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function OverOnsPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <main className="min-h-screen bg-woon-light text-woon-primary">
      {/* Hero image */}
      <section ref={heroRef} className="relative h-[60vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image src="/badkamerstijl/2200xxs(26).jpg" alt="Ons team" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-woon-primary/25" />
        </motion.div>
        <div className="absolute inset-0 flex items-end pb-16 px-6 md:px-12 lg:px-20">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] text-white"
          >
            Ons Verhaal
          </motion.h1>
        </div>
      </section>

      {/* Intro — BAMO narrative style */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-8">Over Woonklasse</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.2] mb-8">
              Bouwen aan droomwoningen sinds 2010
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <p className="text-woon-secondary text-base leading-relaxed">
                Wat begon als een klein aannemersbedrijf is uitgegroeid tot een full-service bouwbedrijf
                dat gespecialiseerd is in complete woningtransformaties. Van de eerste schets tot de laatste afwerking.
                wij doen het allemaal in eigen beheer.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-woon-secondary text-base leading-relaxed">
                Ons team bestaat uit ervaren timmerlieden, metselaars, stukadoors en projectleiders die allemaal
                dezelfde standaard delen: het moet uitzonderlijk zijn. Die instelling heeft ons gebracht waar we nu zijn:
                een bedrijf waar klanten graag terugkomen.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* Values — BAMO 5-column style */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-12">Onze Waarden</p>
          </FadeIn>
          <div className="space-y-0">
            {waarden.map((w, idx) => (
              <FadeIn key={idx} delay={idx * 0.05}>
                <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-8 border-t border-woon-primary/10">
                  <h3 className="font-heading text-lg font-bold">{w.title}</h3>
                  <p className="text-woon-secondary text-base leading-relaxed">{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 bg-woon-primary">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-woon-light mb-6">Laten we kennismaken</h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            Benieuwd wat wij voor uw woning kunnen betekenen? Neem vrijblijvend contact op.
          </p>
          <Link
            href="/woonklasse/offerte"
            className="inline-flex items-center gap-3 bg-woon-accent text-woon-dark font-bold px-10 py-4 rounded-full transition-all hover:scale-105 text-sm tracking-wide"
          >
            Neem contact op
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
