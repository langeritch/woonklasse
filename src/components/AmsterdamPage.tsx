'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, UserRound, BadgeEuro, CalendarCheck, ShieldCheck } from 'lucide-react';
import type { WoonklasseCity } from '@/data/woonklasse-cities';
import { CONTACT } from '@/data/contact';
import HeroAdviesTool from '@/components/HeroAdviesTool';

// Interieurfoto's uit het gedeelde woonklasse-portfolio. Niet per stad
// uniek - we tonen bewust het bestaande portfolio (zoals op de homepage).
const GALLERY_LARGE = 'penthouse-amsterdam-1.jpg';
const GALLERY_SMALL = ['apartment-amsterdam-2.jpg', 'canal-residence-1.jpg'];

// ───────────────────────────────────────────────────────────────────────
// COPY-TEMPLATE. Alle tekst in dit component is VAST en rendert identiek
// voor elke stad. Per stad verschillen exact TWEE korte blokken, beide uit
// woonklasse-cities.ts:
//   BLOK 1  city.intro        -> sectie onder de hero ("Jouw verbouwing")
//   BLOK 2  city.description   -> sectie vlak voor het onderste formulier
// Een nieuwe stad toevoegen = foto + die twee strings. Niets anders.
// Geen em dashes of liggende streepjes in zichtbare copy.
// ───────────────────────────────────────────────────────────────────────

// Vier vaste beloftes, identiek voor elke stad.
const GUARANTEES = [
  {
    Icon: UserRound,
    title: 'Eén vast aanspreekpunt',
    line: 'Van eerste gesprek tot oplevering altijd dezelfde persoon.',
  },
  {
    Icon: BadgeEuro,
    title: 'Prijs vooraf, geen verrassingen',
    line: 'Scherpe vaste prijs via ons eigen leveranciersnetwerk.',
  },
  {
    Icon: CalendarCheck,
    title: 'Op tijd opgeleverd',
    line: 'Afspraak is afspraak, ook de opleverdatum staat vast.',
  },
  {
    Icon: ShieldCheck,
    title: '15+ jaar track record',
    line: 'Bewezen ervaring in bouw en sanitair.',
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
            <h1 className="font-display text-[clamp(1.6rem,3.1vw,2.4rem)] font-light leading-[1.15] tracking-tight text-white [text-wrap:balance]">
              Verbouwen in {city.name} zonder verrassingen
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl font-light max-w-xl">
              Renovatie en verbouwing door eigen vakmensen.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="#offerte"
                className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
              >
                Vraag een vrijblijvende offerte aan
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

      {/* ═══════════ BLOK 1 (CITY-SPECIFIEK = city.intro) ═══════════ */}
      <section className="pt-20 md:pt-28 pb-14 md:pb-16 px-6 md:px-12 lg:px-20 bg-woon-light">
        <FadeIn className="max-w-[820px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-woon-secondary mb-6 font-medium">
            Jouw verbouwing
          </span>
          {/* CITY-SPECIFIEK blok 1 van 2: uit woonklasse-cities.ts (city.intro). */}
          <p className="font-display text-2xl md:text-3xl lg:text-[2.4rem] font-light leading-[1.45] text-woon-dark/90">
            {lead}
          </p>
        </FadeIn>
      </section>

      {/* ═══════════ GARANTIEBLOK (VAST, vervangt 'hoe werkt het') ═══════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-14 md:mb-20 max-w-2xl mx-auto text-center">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-4 block">
              Waar je op kunt rekenen
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
              Onze belofte aan jou
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {GUARANTEES.map(({ Icon, title, line }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="border-t border-woon-dark/15 pt-6">
                  <Icon className="w-8 h-8 text-woon-accent mb-5" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                    {title}
                  </h3>
                  <p className="text-woon-secondary text-sm leading-relaxed">{line}</p>
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
              alt="Interieur en afwerking door Woonklasse"
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
                  alt="Detail van een Woonklasse verbouwing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BEWIJS + REDEN (VASTE TEMPLATE) ═══════════════ */}
      <section className="pt-16 md:pt-24 pb-4 md:pb-6 px-6 md:px-12 lg:px-20 bg-woon-light">
        <FadeIn className="max-w-[820px] mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-woon-secondary mb-6 font-medium">
            Waarom Woonklasse
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] text-woon-dark mb-8">
            Werk dat blijft staan
          </h2>
          <p className="text-woon-secondary text-base md:text-lg leading-relaxed">
            Bel ons voor eerlijk advies over wat je plannen realistisch kosten en hoe lang het duurt. Je krijgt meteen iemand die het werk kent, geen callcenter.
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
              Vrijblijvend gesprek
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-6">
              Klaar om te beginnen?
            </h2>
            {/* CITY-SPECIFIEK blok 2 van 2: uit woonklasse-cities.ts (city.description). */}
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed mb-10">
              {city.description}
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
