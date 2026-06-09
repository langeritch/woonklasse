'use client';

import { motion, MotionConfig } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';
import { useI18n } from '@/i18n/I18nProvider';

const steps = [
  {
    title: 'We komen langs',
    body: 'Onze specialist komt naar de locatie van jouw keuze, neemt de ruimte op en luistert naar je wensen. We beginnen altijd bij jou, niet bij een catalogus.',
  },
  {
    title: 'Samen inrichten',
    body: 'In Saninet kiezen we samen sanitair, meubels en tegels uit duizenden echte producten. Je hoeft niets te raden, want je ziet alles in 3D opgebouwd worden.',
  },
  {
    title: 'Verfijnen tot het klopt',
    body: 'We schuiven, wisselen en passen aan tot het ontwerp 100% naar wens is. Pas als jij tevreden bent, gaan we verder.',
  },
  {
    title: 'Zekerheid vooraf',
    body: 'Je krijgt een realistisch 3D-beeld en een duidelijke offerte. Wat je ziet, is wat we bouwen. Geen verrassingen achteraf.',
  },
];

const stats = [
  { value: '40.000+', label: 'Echte productmodellen van bestaande merken in de bibliotheek.' },
  { value: '20+', label: 'Europese landen waar Saninet de standaard is.' },
  { value: '100%', label: 'Naar wens. Jij bepaalt, wij ontwerpen het samen met je.' },
];

const cards = [
  { img: '/badkamerstijl/saninet-plattegrond.jpg', caption: 'Exacte plattegrond', contain: true },
  { img: '/badkamerstijl/saninet-3d.jpg', caption: 'Jouw badkamer in 3D', contain: true },
  { img: '/badkamerstijl/2200xxs(30).jpg', caption: 'Het eindresultaat', contain: false },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function SaninetPage() {
  const { t } = useI18n();
  return (
    <MotionConfig reducedMotion="user">
    <main className="bs26 overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="relative h-[72vh] md:h-[82vh] min-h-[540px] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-bs26-ink flex items-end">
          <Image
            src="/badkamerstijl/2200xxs(28).jpg"
            alt="Badkamer ontworpen in Saninet 3D door Badkamerstijl"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />

          <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-14 md:pb-20 max-w-[1500px] mx-auto w-full">
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/65 mb-6">
              <Link href="/" className="hover:text-white transition-colors">{t('Home')}</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">{t('Saninet 3D')}</span>
            </nav>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-bs26-gold-soft" />
              <span className="bs26-eyebrow text-white/75">{t('Saninet · 3D Badkamerontwerp')}</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.0]"
            >
              {t('Zie je badkamer')}
              <br />
              <span className="italic">{t('voordat we beginnen')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-body mt-7 max-w-2xl text-white/80 text-base md:text-lg leading-relaxed"
            >
              {t('Samen ontwerpen we jouw badkamer in 3D, 100% naar wens en op de locatie van jouw keuze. Geen gokwerk, geen verrassingen.')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="mt-9"
            >
              <Link
                href="/adviesgesprek"
                className="group inline-flex items-center gap-3 bg-white text-bs26-ink text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-gold hover:text-white transition-colors"
              >
                {t('Plan een ontwerpsessie')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="bs26-eyebrow text-bs26-gold mb-5 block">{t('Wat is Saninet?')}</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.1]">
              {t('De standaard onder')}
              <br />
              <span className="italic">{t('badkamerspecialisten')}</span>
            </h2>
          </div>
          <motion.div {...reveal} className="space-y-6">
            <p className="font-display text-xl md:text-2xl lg:text-[1.75rem] font-light leading-[1.5] text-bs26-charcoal">
              {t('Saninet is de 3D-ontwerpsoftware waarmee toonaangevende badkamerspecialisten in heel Europa werken. Met een bibliotheek van echte producten bouwen we jouw badkamer realistisch op, voordat er iets besteld wordt.')}
            </p>
            <p className="font-body text-base md:text-lg text-bs26-grey leading-relaxed">
              {t('Omdat we met onze eigen sanitairspecialisten en vaste leveranciers werken, lopen ontwerp en uitvoering naadloos in elkaar over. Het 3D-beeld is geen verkooppraatje, maar de blauwdruk van je nieuwe badkamer.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Samen ontwerpen, bij jou thuis */}
      <section className="py-8 md:py-12 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...reveal} className="aspect-[4/3] relative overflow-hidden rounded-[18px] bg-white border border-bs26-charcoal/[0.06] p-5">
            <div className="relative w-full h-full">
              <Image
                src="/badkamerstijl/saninet-3d.jpg"
                alt="3D-ontwerp van een badkamer in Saninet"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div {...reveal}>
            <span className="bs26-eyebrow text-bs26-gold mb-5 block">{t('Hoe het werkt')}</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-7">
              {t('Samen ontwerpen,')} <span className="italic">{t('bij jou thuis')}</span>
            </h2>
            <div className="space-y-5 font-body text-bs26-grey text-base leading-relaxed">
              <p>
                {t('We ontwerpen je badkamer niet vóór je, maar mét je. Onze sanitairspecialist komt naar de locatie van jouw keuze, bij jou thuis of in onze showroom, en samen bouwen we jouw badkamer op in 3D. Jij ziet elke keuze direct terug. Een ander tegelpatroon, een vrijstaand bad in plaats van een douche, een wand die verschuift. Alles kan, en je ziet meteen wat het doet.')}
              </p>
              <p>
                {t('Het resultaat is een ontwerp dat voor 100% klopt met wat jij wilt, voordat er ook maar één tegel wordt besteld. Zo weet je precies waar je aan toe bent: hoe het eruitziet, wat erin zit en wat het kost.')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* In vier stappen */}
      <section className="px-3 md:px-5 mt-16 md:mt-24">
        <div className="bg-bs26-ink text-white rounded-[20px] md:rounded-[28px] px-6 md:px-14 lg:px-20 py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto">
            <motion.div {...reveal} className="max-w-2xl mb-14 md:mb-20">
              <span className="bs26-eyebrow text-bs26-gold-soft">{t('Het traject')}</span>
              <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.04] mt-5">
                {t('In vier stappen naar')} <span className="italic">{t('je ontwerp')}</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: i * 0.08 }}
                  className="border-t border-white/15 pt-7"
                >
                  <span className="font-display text-bs26-gold-soft text-4xl">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-2xl font-light mt-3 mb-4">{t(step.title)}</h3>
                  <p className="font-body text-white/65 text-sm leading-relaxed">{t(step.body)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Saninet cards */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto text-center">
        <motion.div {...reveal} className="max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="bs26-eyebrow text-bs26-gold">{t('Saninet op locatie')}</span>
          <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] mt-5">
            {t('We ontwerpen je badkamer')} <span className="italic">{t('waar jij wilt')}</span>
          </h2>
          <p className="font-body text-bs26-grey text-[15px] md:text-base leading-relaxed mt-6">
            {t('Van de eerste plattegrond met exacte maatvoering tot een realistisch 3D-beeld en de uiteindelijke badkamer: je ziet vooraf precies wat je krijgt.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.figure key={card.caption} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }} className="m-0">
              <div className={`aspect-square rounded-[16px] overflow-hidden relative shadow-[0_18px_45px_-25px_rgba(34,31,26,0.4)] ${card.contain ? 'bg-white border border-bs26-charcoal/[0.06] p-4' : ''}`}>
                <div className="relative w-full h-full">
                  <Image src={card.img} alt={card.caption} fill className={card.contain ? 'object-contain' : 'object-cover'} sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
              </div>
              <figcaption className="bs26-eyebrow text-bs26-charcoal mt-4">{t(card.caption)}</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Saninet in cijfers */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <motion.div {...reveal} className="text-center max-w-2xl mx-auto mb-14">
          <span className="bs26-eyebrow text-bs26-gold">{t('Saninet in cijfers')}</span>
          <h2 className="font-display font-light text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.05] mt-4">
            {t('Bewezen')} <span className="italic">{t('technologie')}</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {stats.map((s, i) => (
            <motion.div key={s.value} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }} className="text-center border-t border-bs26-charcoal/15 pt-8">
              <span className="font-display text-bs26-ink text-5xl md:text-6xl font-light block">{s.value}</span>
              <p className="font-body text-bs26-grey text-sm leading-relaxed mt-4 max-w-xs mx-auto">{t(s.label)}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-3 md:px-5 py-12 md:py-20">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] min-h-[440px] md:min-h-[520px] flex items-center">
          <Image
            src="/badkamerstijl/2200xxs(43).jpg"
            alt="Luxe badkamer door Badkamerstijl"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <motion.div {...reveal} className="relative z-10 px-8 md:px-16 lg:px-24 max-w-2xl">
            <span className="bs26-eyebrow text-bs26-gold-soft mb-5 block">{t('Van scherm naar werkelijkheid')}</span>
            <h2 className="font-display font-light text-white text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04]">
              {t('Wat je ziet, is')} <span className="italic">{t('wat je krijgt')}</span>
            </h2>
            <p className="font-body text-white/75 text-base md:text-lg leading-relaxed mt-6 max-w-xl">
              {t('Omdat we met onze eigen sanitairspecialisten en vaste leveranciers werken, lopen ontwerp en uitvoering naadloos in elkaar over. Het 3D-beeld is de blauwdruk van je nieuwe badkamer.')}
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link
                href="/adviesgesprek"
                className="inline-flex items-center justify-center gap-2 bg-white text-bs26-ink text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-gold hover:text-white transition-colors duration-300"
              >
                {t('Bespreek je project')}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                {t('Bekijk portfolio')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    </MotionConfig>
  );
}
