'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone } from 'lucide-react';
import type { City } from '@/data/cities';
import { CONTACT_BADKAMERSTIJL } from '@/data/contact';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import BadkamerstijlContactForm from '@/components/badkamerstijl/BadkamerstijlContactForm';

// ───────────────────────────────────────────────────────────────────────
// HERBRUIKBAAR STADSLANDINGSPAGINA-TEMPLATE (badkamerstijl)
//
// Per stad verschillen ALLEEN:
//   1. de stadsfoto:   public/badkamerstijl/steden/<slug>.avif
//   2. city.landingIntro   -> korte unieke tekst onder de hero
//   3. city.landingOutro   -> korte unieke tekst voor het onderste formulier
//
// Alle layout, het bestaande contactformulier (2x), de globale WhatsApp-knop
// (al site-wide via de root layout) en de SEO/schema-structuur renderen
// automatisch mee. Een nieuwe stad = foto + die twee strings, niets anders.
// Geen em-streepjes in zichtbare copy; gewone koppeltekens.
// ───────────────────────────────────────────────────────────────────────

// Het bestaande "van eerste gesprek tot oplevering"-proces van badkamerstijl
// (identiek aan de homepage-stappen). Vast voor elke stad.
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Advies',
    desc: 'We luisteren naar jouw wensen, bespreken stijlen en brengen de mogelijkheden in kaart.',
  },
  {
    number: '02',
    title: 'Ontwerp',
    desc: 'We vertalen jouw visie naar een doordacht totaalconcept met materialen, kleuren en indelingen.',
  },
  {
    number: '03',
    title: 'Realisatie',
    desc: 'Onze vakmensen voeren het ontwerp uit met precisie, van leidingwerk tot de laatste tegel.',
  },
  {
    number: '04',
    title: 'Oplevering',
    desc: 'We controleren elk detail en leveren jouw droombadkamer op, klaar om van te genieten.',
  },
];

// Bestaande badkamerstijl-projectfoto's uit de gedeelde galerij. Niet per
// stad uniek, bewust hergebruikt (zoals elders op de site).
const COLLAGE = {
  large: '/badkamerstijl/2200xxs(24).jpg',
  small: ['/badkamerstijl/2200xxs(29).jpg', '/badkamerstijl/2200xxs(43).jpg'],
  wide: '/badkamerstijl/2200xxs(46).jpg',
};

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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function CityLandingPage({
  city,
  heroImage,
}: {
  city: City;
  // Door de server-page aangeleverd: het standaard stadsfoto-pad
  // (/badkamerstijl/steden/<slug>.avif) zodra dat bestand bestaat, anders
  // een bestaande galerijfoto zodat de pagina nooit kapot oogt.
  heroImage: string;
}) {
  const intro = city.landingIntro ?? city.description;
  const outro = city.landingOutro ?? city.description;

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* ═══════════════ 1. HERO + CONTACTFORMULIER ═══════════════ */}
      <section className="relative min-h-[760px] lg:min-h-[820px] flex items-center overflow-hidden bg-bsv2-charcoal py-28 lg:py-32">
        <Image
          src={heroImage}
          alt={`Badkamer renovatie in ${city.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />

        <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Tekst */}
          <div>
            <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/70 mb-6">
              <span className="w-8 h-px bg-white/60" />
              {city.province}
            </span>
            <h1 className="font-cormorant text-[clamp(2.4rem,5.5vw,4.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-white [text-wrap:balance]">
              Een nieuwe badkamer in <span className="italic">{city.name}</span> zonder verrassingen
            </h1>
            <p className="mt-7 text-white/80 text-lg md:text-xl font-light max-w-xl leading-relaxed">
              Vast aanspreekpunt, vaste prijs vooraf en een opleverdatum die staat. Van sloop tot de
              laatste voeg door onze eigen vakmensen.
            </p>
            <a
              href={CONTACT_BADKAMERSTIJL.telefoonLink}
              className="mt-9 inline-flex items-center gap-3 text-white text-sm font-medium hover:text-bsv2-pink transition-colors"
            >
              <Phone className="w-4 h-4" />
              Liever even bellen? {CONTACT_BADKAMERSTIJL.telefoon}
            </a>
          </div>

          {/* Bestaand contactformulier. Op mobiel ONDER de tekst (één kolom),
              vanaf lg ernaast. */}
          <div className="w-full max-w-xl lg:ml-auto">
            <BadkamerstijlContactForm
              city={city.name}
              heading="Plan je gratis adviesgesprek"
              intro="Laat je gegevens achter, dan nemen wij binnen 2 werkdagen contact op om je badkamer door te spreken."
            />
          </div>
        </div>
      </section>

      {/* ═══════ 2. UNIEKE STADSTEKST 1 (city.landingIntro) ═══════ */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Badkamer renovatie in {city.name})
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15]">
              Jouw droombadkamer
              <br />
              <span className="italic">in {city.name}</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-cormorant text-xl md:text-2xl lg:text-[1.7rem] font-light leading-[1.5] text-bsv2-charcoal/85">
              {intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════ 3. PROCES: VAN EERSTE GESPREK TOT OPLEVERING ═══════ */}
      <section className="py-20 md:py-28 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn className="mb-14 md:mb-20 max-w-2xl">
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-5 block">
              (Ons proces)
            </span>
            <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1]">
              Van eerste gesprek
              <br />
              <span className="italic">tot oplevering</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="border-t border-bsv2-charcoal/15 pt-6">
                  <span className="font-cormorant text-[64px] md:text-[88px] font-light text-bsv2-charcoal/[0.08] leading-none block mb-1">
                    {step.number}
                  </span>
                  <h3 className="font-cormorant text-2xl md:text-3xl font-light mb-3">
                    {step.title}
                  </h3>
                  <p className="text-bsv2-grey text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ 4. FOTOCOLLAGE (BESTAANDE GALERIJ) ═══════════════ */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1400px] mx-auto space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            <FadeIn className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[440px] overflow-hidden rounded-xl bg-bsv2-warm">
              <Image
                src={COLLAGE.large}
                alt={`Luxe badkamer gerealiseerd door Badkamerstijl in ${city.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </FadeIn>
            <div className="grid grid-rows-2 gap-4 md:gap-6">
              {COLLAGE.small.map((src, i) => (
                <FadeIn
                  key={src}
                  delay={0.1 + i * 0.1}
                  className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[210px] overflow-hidden rounded-xl bg-bsv2-warm"
                >
                  <Image
                    src={src}
                    alt="Detail van een badkamer door Badkamerstijl"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
          <FadeIn
            delay={0.15}
            className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-bsv2-warm"
          >
            <Image
              src={COLLAGE.wide}
              alt="Tegelwerk en afwerking door de eigen vakmensen van Badkamerstijl"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </FadeIn>
        </div>
      </section>

      {/* ═══════ 5. UNIEKE STADSTEKST 2 (city.landingOutro) ═══════ */}
      <section className="pt-20 md:pt-28 pb-6 md:pb-10 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <FadeIn className="max-w-[860px] mx-auto text-center">
          <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
            (Waarom Badkamerstijl)
          </span>
          <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-8">
            Werk dat blijft <span className="italic">staan</span>
          </h2>
          <p className="text-bsv2-grey text-base md:text-lg leading-relaxed">{outro}</p>
        </FadeIn>
      </section>

      {/* ═══════════════ 6. ONDERSTE CONTACTFORMULIER (CTA) ═══════════════ */}
      <section
        id="contact"
        className="scroll-mt-24 pt-16 md:pt-24 pb-24 md:pb-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream"
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-20 items-start">
          <FadeIn>
            <span className="text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
              (Vrijblijvend gesprek)
            </span>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light leading-[1.15] mb-6">
              Klaar voor jouw
              <br />
              <span className="italic">droombadkamer?</span>
            </h2>
            <p className="text-bsv2-grey text-base md:text-lg leading-relaxed mb-10">
              Wij komen langs, luisteren naar je wensen en maken een 3D-ontwerp met een transparante
              prijsopgave. Je zit nergens aan vast.
            </p>
            <a
              href={CONTACT_BADKAMERSTIJL.telefoonLink}
              className="inline-flex items-center gap-3 text-bsv2-charcoal font-medium hover:text-bsv2-teal transition-colors"
            >
              <Phone className="w-4 h-4" />
              Liever even bellen? {CONTACT_BADKAMERSTIJL.telefoon}
            </a>
          </FadeIn>
          <FadeIn delay={0.15}>
            <BadkamerstijlContactForm
              city={city.name}
              heading="Vraag je adviesgesprek aan"
              intro={`Vul je gegevens in voor een vrijblijvend adviesgesprek over je badkamer in ${city.name}.`}
            />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
