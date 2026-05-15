'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import HeroAdviesTool from '@/components/HeroAdviesTool';

// FUTURE (round 2): vervang generieke trust strip door echte signalen —
// afgeronde projecten, klant-testimonials, materiaalclose-ups, "Onze werkwijze in 5 stappen".
type Service = {
  eyebrow: string;
  title: string;
  desc: string;
  pillars: string[];
  image: string;
  imageAlt: string;
  cta?: { label: string; href: string };
};

const services: Service[] = [
  {
    eyebrow: 'Discipline',
    title: 'Volledige renovatie, één aanspreekpunt',
    desc: 'Of je nu je badkamer vernieuwt, een slaapkamer uitbouwt of je hele huis omgooit, het principe is hetzelfde. We beginnen bij jou thuis, kijken wat er is, beluisteren wat je wil en maken een plan waar je achter staat. Geen verrassingen onderweg. Je weet vanaf het begin waar je aan toe bent.',
    pillars: ['Ontwerp', 'Vergunningen', 'Uitvoering', 'Oplevering'],
    image: '/woonklasse/canal-residence-2.jpg',
    imageAlt: 'Maatwerk keuken in grachtenhuis door Woonklasse',
  },
  {
    eyebrow: 'Specialisme',
    title: 'Luxe badkamers door eigen sanitairspecialisten',
    desc: 'Voor badkamers zijn we nog specialistischer. Acht jaar ervaring met sanitair, en we hebben onze eigen leverancier voor badkamermeubels en tegelwerk. Dat geeft ons scherpte die je bij een reguliere aannemer niet hebt. En het geeft jou iets unieks: we bouwen samen jouw droombadkamer.',
    pillars: ['Maatwerk meubels', 'Natuursteen', 'Sanitair', 'Installatie'],
    image: '/woonklasse/projecten/luxe-afwerking/3.jpg',
    imageAlt: 'Luxe badkamer met natuursteen door Woonklasse',
    cta: { label: 'Ontdek Badkamerstijl', href: '/badkamerstijl' },
  },
];

export default function WoonklassePage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark">

      {/* ===== HERO - softer, with embedded advies tool ===== */}
      <section ref={heroRef} data-hero className="relative min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden py-24 md:py-28">
        <motion.div
          style={{ scale: 1.05 }}
          className="absolute inset-0"
        >
          <Image
            src="/woonklasse/villa-bergen-1.jpg"
            alt="Woonklasse"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        <div className="absolute inset-0 bg-woon-anthracite/45 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-woon-anthracite/55 via-transparent to-woon-anthracite/5 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left - hero copy */}
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="text-left lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs tracking-[0.35em] uppercase text-woon-accent mb-5 font-medium"
            >
              Vakmanschap &middot; Kwaliteit &middot; Ontzorging
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-light italic text-white leading-[1.05] tracking-tight mb-6"
            >
              Hoogwaardige renovaties{' '}
              <span className="not-italic font-medium text-woon-accent">zonder stress.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="text-white/75 text-base md:text-lg max-w-lg font-light"
            >
              Eén aanspreekpunt van ontwerp tot oplevering. Vast team, vaste prijs, oog voor detail.
            </motion.p>
          </motion.div>

          {/* Right - advies tool */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl lg:ml-auto"
          >
            <HeroAdviesTool brand="woonklasse" />
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO TEXT ===== */}
      <section className="py-24 md:py-32 bg-woon-sand">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light italic text-woon-dark leading-[1.2] mb-8"
          >
            Woonklasse realiseert hoogwaardige renovaties, luxe badkamers, maatwerk interieurs en{' '}
            <span className="text-woon-accent not-italic">complete woningverbouwingen.</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-24 h-px bg-woon-accent mx-auto"
          />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-20">
          {/* Header */}
          <div className="text-center mb-20 md:mb-28">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.3em] uppercase text-woon-wood mb-4"
            >
              Onze expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl font-light italic mb-10"
            >
              Wat doen <span className="text-woon-accent not-italic font-medium">wij?</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-5 text-woon-secondary text-base md:text-lg leading-relaxed font-light"
            >
              <p>
                Een verbouwing kost je tienduizenden euro&rsquo;s en maanden van je leven. De grootste angst is niet de bouw zelf, het is de onzekerheid. Lopen de kosten uit de hand? Wordt het echt mooi? Sleept het maanden langer dan beloofd? Dat is precies waar wij het verschil maken.
              </p>
              <p>
                We hebben samen meer dan 15 jaar ervaring in bouw en sanitair, dus je krijgt mensen die weten wat ze doen. We werken met onze eigen leveranciers, dus je betaalt geen opslag van tussenpersonen. En je hebt &eacute;&eacute;n vast aanspreekpunt van begin tot eind, iemand die je kent en die je gewoon kunt bellen. Geen gedoe, geen verrassingen, je weet steeds waar je aan toe bent.
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="font-display italic text-2xl md:text-3xl text-woon-dark/80 max-w-2xl mx-auto mt-10 leading-snug"
            >
              &ldquo;Je verbouwing verdient beter dan onzekerheid. Beter dan gedoe. Beter dan een aannemer die je niet kent.&rdquo;
            </motion.blockquote>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto mt-10 text-woon-secondary text-base md:text-lg leading-relaxed font-light"
            >
              Dit zijn niet zomaar projecten. Het zijn huizen waar mensen zich beter voelen, waar het werkt, waar alles op z&rsquo;n plek zit. Ruimten die we samen met jou hebben opgebouwd.
            </motion.p>
          </div>

          {/* Editorial service blocks — alternating, airy */}
          <div className="space-y-24 md:space-y-36">
            {services.map((service, idx) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-80px' }}
                className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-[5/6] ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="lg:px-4">
                  <div className="mb-6">
                    <span className="text-[10px] tracking-[0.35em] uppercase text-woon-wood font-medium">
                      {service.eyebrow}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-light italic text-woon-dark leading-[1.1] mb-8 max-w-xl">
                    {service.title}
                  </h3>
                  <p className="text-woon-secondary text-base md:text-lg leading-[1.7] font-light max-w-xl mb-10">
                    {service.desc}
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-3 text-[11px] tracking-[0.25em] uppercase text-woon-dark/80 font-medium">
                    {service.pillars.map((pillar) => (
                      <li key={pillar} className="flex items-center gap-2">
                        <span className="block w-1 h-1 rounded-full bg-woon-accent" />
                        {pillar}
                      </li>
                    ))}
                  </ul>
                  {service.cta && (
                    <Link
                      href={service.cta.href}
                      className="mt-10 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-woon-secondary hover:text-woon-accent transition-colors"
                    >
                      {service.cta.label}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Supplier line — typographic, no boxy background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 md:mt-32 max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-16 h-px bg-woon-accent mx-auto mb-8 origin-center"
            />
            <p className="font-display italic text-2xl md:text-3xl text-woon-dark/80 leading-snug font-light">
              Voor badkamers doen we nog iets extra: we werken met Saninet, software waarmee we in 3D jouw droombadkamer samen ontwerpen. We doen dit op locatie bij jou thuis, zodat je precies ziet hoe het wordt voordat we beginnen.{' '}
              <span className="not-italic text-woon-accent font-medium">Geen gokwerk, geen verrassingen, gewoon zekerheid.</span>
            </p>
          </motion.div>

          {/* Trust strip — quiet, factual */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto border-y border-woon-brass/30 py-10 md:py-12"
          >
            {[
              'Eigen leveranciers, geen tussenpersonen, scherp geprijsd',
              'Eén aanspreekpunt, geen gedoe, duidelijk wie je belt',
              '15+ jaar ervaring, bouw en sanitair, we weten wat we doen',
              'Opgeleverd op tijd, afspraken zijn afspraken',
            ].map((item) => (
              <li
                key={item}
                className="text-center text-[11px] md:text-xs tracking-[0.25em] uppercase text-woon-dark/80 font-medium"
              >
                {item}
              </li>
            ))}
          </motion.ul>

          {/* Curated details strip */}
          <div className="mt-20 md:mt-24">
            <p className="text-xs tracking-[0.3em] uppercase text-woon-wood mb-8 text-center">
              Uit ons werk
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { src: '/woonklasse/projecten/luxe-afwerking/1.jpg', alt: 'Moderne keuken in penthouse' },
                { src: '/woonklasse/projecten/luxe-afwerking/3.jpg', alt: 'Luxe badkamer met natuursteen' },
                { src: '/woonklasse/villa-bergen-1.jpg', alt: 'Villa renovatie in Bergen' },
              ].map((photo, idx) => (
                <motion.div
                  key={photo.src}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-2xl aspect-[3/4] group"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS LINK - minimal, no collage on homepage ===== */}
      <section id="projecten" className="py-12 md:py-16 bg-woon-light text-center">
        <Link
          href="/woonklasse/projecten"
          className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-woon-secondary hover:text-woon-accent transition-colors"
        >
          Alle projecten bekijken
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* ===== CTA SECTION - dark anthracite grounding band ===== */}
      <section className="py-24 md:py-28 bg-woon-anthracite text-white border-t border-woon-brass/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-woon-accent/80 mb-6">Klaar om te starten?</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic mb-8 text-white">
              Laten we <span className="text-woon-accent not-italic font-medium">kennismaken</span>
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto font-light">
              Vul het contactformulier in en laten we kennismaken. We bespreken jouw wensen, kijken wat er is en maken samen een plan. Geen verplichting, gewoon een gesprek.
            </p>
            <Link
              href="/woonklasse/offerte"
              className="inline-flex items-center gap-3 bg-woon-accent text-woon-anthracite font-medium px-12 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-woon-accent/30 text-base tracking-wide"
            >
              Offertegesprek aanvragen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
