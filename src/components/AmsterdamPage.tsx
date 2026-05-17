'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import type { WoonklasseCity } from '@/data/woonklasse-cities';
import { CONTACT } from '@/data/contact';
import HeroAdviesTool from '@/components/HeroAdviesTool';

// Interieurfoto's uit het gedeelde woonklasse-portfolio. Niet per stad
// uniek - we tonen bewust het bestaande portfolio (zoals op de homepage).
const GALLERY_LARGE = 'penthouse-amsterdam-1.jpg';
const GALLERY_SMALL = ['apartment-amsterdam-2.jpg', 'canal-residence-1.jpg'];

// Statisch proces, identiek voor elke stad.
const STEPS = [
  {
    n: '01',
    title: 'Overleg',
    desc: 'We komen langs en kijken samen wat je wil. Geen verkooppraat, gewoon goed luisteren.',
  },
  {
    n: '02',
    title: 'Offerte',
    desc: 'Een schone, vaste prijs vooraf. Alles staat erin, zodat je nooit voor verrassingen komt te staan.',
  },
  {
    n: '03',
    title: 'Uitvoering',
    desc: 'Eigen vakmensen voeren het werk snel en schoon uit, met een vaste projectleider als aanspreekpunt.',
  },
  {
    n: '04',
    title: 'Klaar',
    desc: 'We leveren netjes op en jij geniet ervan. Met garantie, voor de zekerheid op lange termijn.',
  },
];

function FadeIn({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
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

export default function AmsterdamPage({
  city,
}: {
  city: WoonklasseCity;
  // ctaHref blijft als prop bestaan voor de routes, maar het formulier
  // staat nu op de pagina zelf - we scrollen naar #offerte.
  ctaHref?: string;
}) {
  const heroImage = city.heroImage ?? '/woonklasse/villa-bergen-1.jpg';
  const lead = city.intro ?? city.description;

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark overflow-x-hidden">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[640px] md:min-h-[760px] flex items-center overflow-hidden bg-woon-dark py-24 md:py-28">
        <Image
          src={heroImage}
          alt={`Aannemer voor verbouwing en renovatie in ${city.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/85" />
        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left - hero copy */}
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium">
              <span className="w-8 h-px bg-woon-accent/60" />
              {city.province}
            </span>
            <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[1.02] tracking-tight text-white">
              Aannemer in {city.name}
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl font-light max-w-xl">
              Meer uit je vierkante meter
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#offerte"
                className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
              >
                Vraag offerte aan voor {city.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={CONTACT.telefoonLink}
                className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.telefoon}
              </a>
            </div>
          </div>
          {/* Right - homepage project form. On mobile this stacks BELOW the
              hero copy (single column); side-by-side from lg up. */}
          <div className="w-full max-w-xl lg:ml-auto">
            <HeroAdviesTool brand="woonklasse" city={city.name} />
          </div>
        </div>
      </section>

      {/* ═══════════════ WAAROM DEZE STAD ═══════════════ */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-16 px-6 md:px-12 lg:px-20 bg-woon-light">
        <FadeIn className="max-w-[820px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-woon-secondary mb-6 font-medium">
            Waarom {city.name}
          </span>
          <p className="font-display text-2xl md:text-3xl lg:text-[2.4rem] font-light leading-[1.45] text-woon-dark/90">
            {lead}
          </p>
        </FadeIn>
      </section>

      {/* ═══════════════ HOE WERKT HET (4 STAPPEN) ═══════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-14 md:mb-20 max-w-2xl">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-4 block">
              Hoe werkt het
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
              Van eerste gesprek tot oplevering
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {STEPS.map((step, i) => (
              <FadeIn key={step.n} delay={i * 0.08}>
                <div className="border-t border-woon-dark/15 pt-6">
                  <span className="text-woon-accent text-[11px] tracking-[0.3em] font-medium block mb-4">
                    {step.n}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-woon-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FOTOGALERIJ (ASYMMETRISCH) ═══════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <FadeIn className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden rounded-xl bg-woon-cream">
            <Image
              src={`/woonklasse/${GALLERY_LARGE}`}
              alt={`Interieur verbouwing in ${city.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <div className="grid grid-rows-2 gap-4 md:gap-6">
            {GALLERY_SMALL.map((file, i) => (
              <FadeIn
                key={file}
                delay={0.1 + i * 0.1}
                className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[200px] overflow-hidden rounded-xl bg-woon-cream"
              >
                <Image
                  src={`/woonklasse/${file}`}
                  alt={`Interieur in ${city.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STAD-SPECIFIEKE TEKST + H2 (SEO) ═══════════════ */}
      <section className="pt-16 md:pt-24 pb-4 md:pb-6 px-6 md:px-12 lg:px-20 bg-woon-light">
        <FadeIn className="max-w-[820px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-woon-secondary mb-6 font-medium">
            Woonklasse in {city.province}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-woon-dark mb-8">
            Verbouwen in {city.name}
          </h2>
          <p className="text-woon-secondary text-base md:text-lg leading-relaxed">
            {city.description}
          </p>
          <p className="mt-6 text-woon-secondary text-base md:text-lg leading-relaxed">
            Veel gevraagd in {city.name}: {city.context}. Actief in {city.areas.join(', ')} en de
            omliggende wijken.
          </p>
        </FadeIn>
      </section>

      {/* ═══════════════ OFFERTEFORMULIER (STAD VOORINGEVULD) ═══════════════ */}
      <section
        id="offerte"
        className="scroll-mt-24 pt-20 md:pt-28 pb-24 md:pb-32 px-6 md:px-12 lg:px-20 bg-woon-light"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Vrijblijvende offerte
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-6">
              Vraag een offerte aan voor {city.name}
            </h2>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed mb-10">
              Vertel ons over je plannen. We komen langs in {city.name}, luisteren en sturen een
              maatwerk voorstel met vaste prijs. Geen verrassingen achteraf.
            </p>
            <a
              href={CONTACT.telefoonLink}
              className="inline-flex items-center gap-3 text-woon-dark font-medium hover:text-woon-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              Liever even bellen? {CONTACT.telefoon}
            </a>
          </FadeIn>
          <FadeIn delay={0.15}>
            <HeroAdviesTool brand="woonklasse" city={city.name} />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
