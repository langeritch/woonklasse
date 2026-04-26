'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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

const diensten = [
  {
    title: 'Complete Verbouwing',
    desc: 'Van eerste ontwerp tot sleutelklare oplevering. Wij strippen, bouwen op en leveren af met oog voor elk detail. Uw woning volledig vernieuwd.',
    features: ['Bouwkundig advies', 'Interieurontwerp', 'Alle vakdisciplines in-house', 'Sleutelklare oplevering'],
  },
  {
    title: 'Aanbouw & Uitbreiding',
    desc: 'Creëer meer leefruimte met een naadloze aanbouw die perfect aansluit bij de bestaande architectuur.',
    features: ['Vergunningsaanvraag', 'Constructieberekening', 'Naadloze aansluiting', 'Fundament tot dak'],
  },
  {
    title: 'Luxe Veranda\'s',
    desc: 'Geniet het hele jaar van het buitenleven. Onze veranda\'s combineren robuuste constructie met stijlvol design.',
    features: ['Maatwerk ontwerp', 'Aluminium of hout', 'Geïntegreerde verlichting', 'Windbestendig glas'],
  },
  {
    title: 'Dakkapellen & Dakwerk',
    desc: 'Vergroot je leefruimte naar boven. Van dakkapel tot complete dakvernieuwing, altijd waterdicht en energiezuinig.',
    features: ['Dakkapellen op maat', 'Isolatie & ventilatie', 'Zink- en leienwerk', 'Energiebesparing'],
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

      {/* Services — alternating layout */}
      <section className="py-20 md:py-28">
        {diensten.map((dienst, idx) => (
          <FadeIn key={idx}>
            <div className={`grid lg:grid-cols-2 gap-0 ${idx > 0 ? 'border-t border-woon-primary/10' : ''}`}>
              <div className={`px-6 md:px-12 lg:px-20 py-16 flex items-center ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="max-w-lg">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{dienst.title}</h3>
                  <p className="text-woon-secondary leading-relaxed mb-8">{dienst.desc}</p>
                  <ul className="space-y-3">
                    {dienst.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 bg-woon-accent rounded-full shrink-0" />
                        <span className="text-woon-primary/70">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`bg-woon-cream h-[400px] lg:h-auto flex items-center justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-heading text-[8rem] md:text-[10rem] font-bold text-woon-primary/[0.04] select-none">
                  0{idx + 1}
                </span>
              </div>
            </div>
          </FadeIn>
        ))}
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
