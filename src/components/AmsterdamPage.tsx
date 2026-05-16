'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Plus, Minus, Phone } from 'lucide-react';
import { useState } from 'react';
import type { WoonklasseCity } from '@/data/woonklasse-cities';
import { buildCityFaqs } from '@/data/city-faqs';
import { CONTACT } from '@/data/contact';

// Diensten en USP's zijn merk-breed (niet per stad), zodat de template
// schaalt naar elke stad zonder extra data. Per stad verschillen alleen
// hero, intro-copy, FAQ-tekst en de regiolinks.
const SERVICES = [
  {
    title: 'Totaalrenovatie',
    desc: 'Van casco tot oplevering met één planning en één eindverantwoordelijke.',
    image: '/woonklasse/canal-residence-1.jpg',
  },
  {
    title: 'Aanbouw & opbouw',
    desc: 'Uitbouwen, optoppen en serres die ruimte en licht toevoegen.',
    image: '/woonklasse/penthouse-amsterdam-3.jpg',
  },
  {
    title: 'Keuken & badkamer',
    desc: 'Maatwerk met sloop, leidingwerk, tegelwerk en montage uit één hand.',
    image: '/woonklasse/apartment-amsterdam-2.jpg',
  },
  {
    title: 'Onderhoud & afwerking',
    desc: 'Schilderwerk, dakwerk en herstel dat de woning in topconditie houdt.',
    image: '/woonklasse/villa-bergen-2.jpg',
  },
];

const USPS = [
  {
    title: 'Eigen vakmensen',
    desc: 'Timmerlieden, loodgieters en elektriciens in vaste dienst. Kwaliteit en planning blijven in eigen hand.',
  },
  {
    title: 'Vaste prijs vooraf',
    desc: 'Een complete offerte met materialen, arbeid en bouwkundige posten. Geen verrassingen achteraf.',
  },
  {
    title: 'Eén projectleider',
    desc: 'Eén vast aanspreekpunt van opname tot oplevering. U weet altijd wie u belt.',
  },
  {
    title: 'Garantie tot 10 jaar',
    desc: 'Tot 10 jaar op constructief werk, 5 jaar op installaties. Wij komen terug als dat nodig is.',
  },
];

const DEFAULT_GALLERY = [
  'penthouse-amsterdam-1.jpg',
  'apartment-amsterdam-2.jpg',
  'canal-residence-1.jpg',
  'penthouse-amsterdam-3.jpg',
  'apartment-amsterdam-4.jpg',
  'canal-residence-4.jpg',
];

export default function AmsterdamPage({
  city,
  nearbyCities = [],
  ctaHref = '/woonklasse/offerte',
}: {
  city: WoonklasseCity;
  nearbyCities?: WoonklasseCity[];
  ctaHref?: string;
}) {
  const faqs = buildCityFaqs(city);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroImage = city.heroImage ?? '/woonklasse/villa-bergen-1.jpg';
  const lead = city.intro ?? city.description;

  return (
    <main className="min-h-screen bg-woon-light text-woon-dark overflow-x-hidden">
      {/* Breadcrumb */}
      <nav
        aria-label="Kruimelpad"
        className="absolute top-6 md:top-10 left-6 md:left-12 lg:left-20 z-30 hidden md:flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-white/70"
      >
        <Link href="/" className="hover:text-woon-accent transition-colors">
          Home
        </Link>
        <span className="text-white/30">/</span>
        <Link href="/woonklasse" className="hover:text-woon-accent transition-colors">
          Woonklasse
        </Link>
        <span className="text-white/30">/</span>
        <span className="text-white">{city.name}</span>
      </nav>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative h-[92vh] min-h-[640px] flex items-end overflow-hidden bg-woon-dark">
        <Image
          src={heroImage}
          alt={`Verbouwing en renovatie in ${city.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/85" />
        <div className="relative z-20 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.4em] uppercase text-woon-accent mb-6 font-medium"
          >
            <span className="w-8 h-px bg-woon-accent/60" />
            {city.province} &middot; Woonklasse
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[1.02] tracking-tight text-white"
          >
            Verbouwen in
            <br />
            <span className="italic text-woon-accent">{city.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl text-white/85 text-base md:text-lg leading-relaxed font-light"
          >
            Renovatie, aanbouw en onderhoud door eigen vakmensen, met een vaste prijs vooraf en
            één projectleider als aanspreekpunt.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href={ctaHref}
              className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
            >
              Plan een vrijblijvend gesprek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={CONTACT.telefoonLink}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {CONTACT.telefoon}
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ INTRO ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Over {city.name}
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15]">
              Uw woning,
              <br />
              <span className="not-italic font-medium text-woon-accent">
                vakkundig verbouwd
              </span>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="font-display text-xl md:text-2xl lg:text-[1.7rem] font-light leading-[1.5] text-woon-dark/90">
              {lead}
            </p>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed">
              {city.description}
            </p>
            <p className="text-woon-secondary text-sm leading-relaxed">
              Specialisaties in deze regio: {city.context}.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════ DIENSTEN ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-4 block">
                Diensten
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1]">
                Wat wij doen
                <br />
                <span className="not-italic font-medium text-woon-accent">in {city.name}</span>
              </h2>
            </div>
            <Link
              href="/woonklasse/diensten"
              className="inline-flex items-center gap-2 text-woon-accent text-sm font-medium hover:gap-3 transition-all whitespace-nowrap"
            >
              Alle diensten <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-5 bg-woon-cream">
                  <Image
                    src={service.image}
                    alt={`${service.title} in ${city.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-2 group-hover:text-woon-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-woon-secondary text-sm leading-relaxed">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ WAAROM (USPs) ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-woon-anthracite">
        <div className="absolute inset-0">
          <Image
            src="/woonklasse/canal-residence-3.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-woon-anthracite via-woon-anthracite/95 to-woon-anthracite/90 z-10" />
        <div className="relative z-20 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
          <span className="text-woon-accent text-[11px] tracking-[0.3em] uppercase mb-6 block font-medium">
            Waarom Woonklasse
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-white mb-16 max-w-3xl leading-[1.1]">
            Waarom kiezen voor ons
            <br />
            <span className="not-italic font-medium text-woon-accent">in {city.name}?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-5xl">
            {USPS.map((usp, i) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-t border-woon-accent/20 pt-6"
              >
                <span className="text-woon-accent/70 text-[11px] tracking-[0.3em] mb-4 block font-medium">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                  {usp.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ GALERIJ ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Gerealiseerd werk
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] mb-14 max-w-3xl">
            Een indruk van
            <br />
            <span className="not-italic font-medium text-woon-accent">onze afwerking</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {DEFAULT_GALLERY.map((file, i) => (
              <motion.div
                key={file}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                className="relative aspect-[4/5] overflow-hidden rounded-xl bg-woon-cream group"
              >
                <Image
                  src={`/woonklasse/${file}`}
                  alt={`Verbouwingsproject in ${city.name}`}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-cream">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
            Veelgestelde vragen
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-14">
            Vragen over verbouwen
            <br />
            <span className="not-italic font-medium text-woon-accent">in {city.name}</span>
          </h2>
          <div className="divide-y divide-woon-dark/10 border-y border-woon-dark/10">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                  >
                    <span className="font-display text-xl md:text-[1.4rem] font-light leading-snug pr-6 group-hover:text-woon-accent transition-colors">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 mt-1 w-9 h-9 rounded-full border border-woon-dark/20 flex items-center justify-center group-hover:bg-woon-dark group-hover:text-woon-accent group-hover:border-woon-dark transition-colors">
                      {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-7 text-woon-secondary text-base leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ NABIJE STEDEN ═══════════════ */}
      {nearbyCities.length > 0 && (
        <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white border-t border-woon-dark/[0.06]">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Ook actief in
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic leading-[1.15] mb-12 max-w-3xl">
              Verbouwen in
              <br />
              <span className="not-italic font-medium text-woon-accent">de regio {city.name}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {nearbyCities.map((nc, i) => (
                <Link
                  key={nc.slug}
                  href={`/${nc.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden block bg-woon-dark rounded-xl"
                >
                  <Image
                    src={`/woonklasse/${
                      ['canal-residence-2', 'villa-bergen-4', 'apartment-amsterdam-5', 'penthouse-zoetermeer-2'][i % 4]
                    }.jpg`}
                    alt={`Verbouwing in ${nc.name}`}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-woon-accent text-[10px] tracking-[0.3em] uppercase mb-2 font-medium">
                      {nc.province}
                    </span>
                    <p className="font-display text-2xl md:text-[1.65rem] font-light italic text-white leading-tight">
                      {nc.name}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-white/80 text-xs group-hover:text-woon-accent transition-colors">
                      Bekijken <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════ CONTACT CTA ═══════════════ */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-woon-light">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] relative overflow-hidden rounded-2xl"
          >
            <Image
              src="/woonklasse/penthouse-amsterdam-1.jpg"
              alt={`Verbouwingsproject Woonklasse ${city.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div>
            <span className="text-woon-secondary text-[11px] tracking-[0.3em] uppercase mb-6 block">
              Plan een opname
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic leading-[1.1] mb-8">
              Klaar om uw woning in
              <br />
              <span className="not-italic font-medium text-woon-accent">
                {city.name} te verbouwen?
              </span>
            </h2>
            <p className="text-woon-secondary text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Plan een vrijblijvende opname. Wij komen langs in {city.name}, luisteren naar uw
              plannen en sturen binnen 10 werkdagen een maatwerk voorstel met vaste prijs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={ctaHref}
                className="group inline-flex items-center justify-center gap-3 bg-woon-accent text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:scale-[1.02] hover:shadow-lg hover:shadow-woon-accent/20 transition-all"
              >
                Plan een vrijblijvend gesprek
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/woonklasse/projecten"
                className="inline-flex items-center justify-center gap-3 border border-woon-dark text-woon-dark text-sm font-medium px-8 py-4 rounded-full hover:bg-woon-dark hover:text-white transition-colors"
              >
                Bekijk projecten
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
