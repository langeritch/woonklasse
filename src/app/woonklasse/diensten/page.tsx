'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WOONKLASSE_SERVICES } from '@/data/woonklasse-services';

const principles = [
  {
    title: 'Context',
    desc: 'Elk project begint met luisteren. We verdiepen ons in de locatie, de architectuur en uw levensstijl om een ontwerp te maken dat organisch aanvoelt.',
  },
  {
    title: 'Compositie',
    desc: 'Schaal, proportie en materiaalgebruik in balans. We creëren ruimtes waar elk element bijdraagt aan het geheel.',
  },
  {
    title: 'Emotie',
    desc: 'Een woning moet meer zijn dan mooi. Door licht, textuur en volume orchestreren we een gevoel van thuiskomen.',
  },
  {
    title: 'Ambacht',
    desc: 'Van de eerste steen tot de laatste afwerking. Ons team werkt met de precisie en toewijding die uw project verdient.',
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

export default function DienstenPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <main className="min-h-screen bg-woon-light text-woon-primary">
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image src="/badkamerstijl/2200xxs(31).jpg" alt="Vakmanschap" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-woon-primary/30" />
        </motion.div>
        <div className="absolute inset-0 flex items-end pb-16 px-6 md:px-12 lg:px-20">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-[1.1] text-white"
            >
              Onze Diensten
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl">
          <FadeIn>
            <p className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-6">Wat wij doen</p>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.2] mb-6">
              Vakmanschap in elk project
            </h2>
            <p className="text-woon-secondary text-lg leading-relaxed">
              Van complete verbouwingen tot luxe veranda&apos;s. Elk project voeren wij uit met dezelfde toewijding en precisie.
              Ons team van vakmensen beheerst alle disciplines, van fundament tot afwerking.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Design Principles — BAMO style */}
      <section className="bg-woon-cream py-20 md:py-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-12 text-center">Onze Aanpak</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {principles.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border-t-2 border-woon-accent pt-6">
                  <span className="text-woon-accent text-sm font-heading font-bold">0{i + 1}</span>
                  <h3 className="font-heading text-xl font-bold mt-2 mb-3">{p.title}</h3>
                  <p className="text-woon-secondary text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services — card grid linking to dedicated pages */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <p className="text-woon-accent text-xs tracking-[0.3em] uppercase mb-4">Specialismen</p>
            <h2 className="font-heading text-3xl md:text-[2.5rem] font-bold leading-[1.2] mb-14 max-w-2xl">
              Alle diensten op een rij
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {WOONKLASSE_SERVICES.map((service, i) => (
              <FadeIn key={service.slug} delay={i * 0.04}>
                <Link href={`/woonklasse/diensten/${service.slug}`} className="group block h-full">
                  <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-5 bg-woon-cream">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-heading text-lg md:text-xl font-bold group-hover:text-woon-accent transition-colors">
                      {service.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 mt-1 text-woon-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <p className="text-woon-secondary text-sm leading-relaxed mb-3">{service.intro}</p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-woon-accent/80 font-medium">
                    Vanaf {service.averagePrice.split('—')[0].trim()}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-woon-primary py-24 md:py-32 text-center px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-woon-light mb-6">Start uw project</h2>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            Neem contact op en ontvang binnen 48 uur een vrijblijvende offerte op maat.
          </p>
          <Link
            href="/woonklasse/offerte"
            className="inline-flex items-center gap-3 bg-woon-accent text-woon-dark font-bold px-10 py-4 rounded-full transition-all hover:scale-105 text-sm tracking-wide"
          >
            Vraag offerte aan
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
