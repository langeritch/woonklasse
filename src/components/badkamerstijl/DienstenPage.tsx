'use client';

import { motion, MotionConfig, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import BadkamerstijlFloatingNav from '@/components/BadkamerstijlFloatingNav';

const services = [
  {
    title: 'Ontwerp',
    subtitle: 'Van visie naar concept',
    desc: 'We luisteren naar jouw wensen en vertalen ze naar een doordacht totaalconcept. Met 3D-visualisaties, materiaalcollages en een gedetailleerd plan weet je precies wat je kunt verwachten.',
    details: ['Persoonlijk intakegesprek', 'Moodboard & materiaaladvies', '3D-ontwerp en visualisatie', 'Gedetailleerde plattegrond'],
    image: '/badkamerstijl/2200xxs(25).jpg',
  },
  {
    title: 'Complete Renovatie',
    subtitle: 'Van sloop tot oplevering',
    desc: 'Wij verzorgen het volledige renovatietraject. Van het strippen van de bestaande badkamer tot de montage van het laatste accessoire, alles uit één hand.',
    details: ['Sloop & afvoer', 'Leidingwerk & installatie', 'Tegelwerk & afwerking', 'Eindcontrole & oplevering'],
    image: '/badkamerstijl/2200xxs(43).jpg',
  },
  {
    title: 'Montage & Installatie',
    subtitle: 'Vakmanschap in elk detail',
    desc: 'Onze eigen vakmensen monteren en installeren alles met precisie. Van inbouwkranen en hangtoiletten tot inloopdouches en vrijstaande baden.',
    details: ['Sanitair montage', 'Inbouwsystemen', 'Verlichting & spiegels', 'Ventilatie & verwarming'],
    image: '/badkamerstijl/2200xxs(46).jpg',
  },
  {
    title: 'Advies & Styling',
    subtitle: 'De finishing touch',
    desc: 'Soms heb je alleen advies nodig. Wij helpen met kleurkeuze, materiaalcombinaties, indelingsoptimalisatie en de styling die jouw badkamer compleet maakt.',
    details: ['Kleur- & materiaaladvies', 'Indelingsoptimalisatie', 'Showroombezoek', 'Styling & accessoires'],
    image: '/badkamerstijl/2200xxs(29).jpg',
  },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

export default function DienstenPage() {
  const fullwidthRef = useRef<HTMLElement>(null);
  const { scrollYProgress: fwScroll } = useScroll({
    target: fullwidthRef,
    offset: ['start end', 'end start'],
  });
  const fwY = useTransform(fwScroll, [0, 1], ['-8%', '8%']);

  return (
    <MotionConfig reducedMotion="user">
    <main className="bs26 overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="px-3 md:px-5 pt-3 md:pt-5">
        <div className="relative h-[70vh] md:h-[80vh] min-h-[520px] w-full overflow-hidden rounded-[20px] md:rounded-[28px] bg-bs26-ink flex items-end">
          <Image
            src="/badkamerstijl/2200xxs(44).jpg"
            alt="Diensten van Badkamerstijl, ontwerp tot oplevering"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="relative z-20 px-6 md:px-12 lg:px-16 pb-14 md:pb-20 max-w-[1500px] mx-auto w-full">
            <nav aria-label="Kruimelpad" className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-white/65 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span className="text-white">Diensten</span>
            </nav>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-5"
            >
              <span className="w-8 h-px bg-bs26-gold-soft" />
              <span className="bs26-eyebrow text-white/75">Diensten</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.0]"
            >
              Wat wij
              <br />
              <span className="italic">doen</span>
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1500px] mx-auto">
        <motion.p
          {...reveal}
          className="font-display text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] max-w-4xl"
        >
          Van het eerste idee tot de laatste afwerking, wij begeleiden je door het
          hele traject. Met persoonlijke aandacht, vakmanschap en een oncompromitterende
          standaard.
        </motion.p>
      </section>

      {/* Service sections, alternating layout */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-20 md:py-28 px-6 md:px-12 lg:px-20 ${i % 2 === 1 ? 'bg-bs26-paper' : ''}`}
        >
          <div className="max-w-[1500px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div {...reveal} className="aspect-[4/5] relative overflow-hidden rounded-[18px]">
                  <Image
                    src={service.image}
                    alt={`${service.title} door Badkamerstijl`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="bs26-eyebrow text-bs26-gold mb-5 block">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <motion.h2 {...reveal} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3">
                  {service.title}
                </motion.h2>
                <motion.p {...reveal} className="font-display text-xl italic text-bs26-grey mb-8">
                  {service.subtitle}
                </motion.p>
                <motion.p {...reveal} className="font-body text-bs26-grey text-base leading-relaxed mb-10 max-w-lg">
                  {service.desc}
                </motion.p>

                <motion.ul {...reveal} className="space-y-3 mb-10">
                  {service.details.map((detail) => (
                    <li key={detail} className="font-body flex items-center gap-3 text-sm text-bs26-charcoal/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-bs26-gold flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </motion.ul>

                <motion.div {...reveal}>
                  <Link
                    href="/adviesgesprek"
                    className="inline-flex items-center gap-2 bg-bs26-ink text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-bs26-gold transition-colors duration-300"
                  >
                    Vraag een offerte aan <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Fullwidth image */}
      <section ref={fullwidthRef} className="px-3 md:px-5 py-8">
        <div className="relative h-[55vh] md:h-[70vh] overflow-hidden rounded-[20px] md:rounded-[28px]">
          <motion.div style={{ y: fwY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
            <Image
              src="/badkamerstijl/2200xxs(47).jpg"
              alt="Vakmanschap van Badkamerstijl"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 md:px-5 py-12 md:py-20">
        <div className="bg-bs26-ink text-white rounded-[20px] md:rounded-[28px] py-20 md:py-28 px-6 md:px-16">
          <div className="max-w-[1100px] mx-auto text-center">
            <span className="bs26-eyebrow text-bs26-gold-soft mb-5 block">Volgende stap</span>
            <motion.h2 {...reveal} className="font-display text-4xl md:text-6xl font-light mb-6">
              Klaar om te <span className="italic">beginnen?</span>
            </motion.h2>
            <motion.p {...reveal} className="font-body text-white/70 text-base mb-10 max-w-xl mx-auto">
              Plan een vrijblijvend adviesgesprek en ontdek wat wij voor jouw badkamer kunnen betekenen.
            </motion.p>
            <Link
              href="/adviesgesprek"
              className="bg-white text-bs26-ink text-sm font-medium px-8 py-4 rounded-full hover:bg-bs26-gold hover:text-white transition-colors duration-300 inline-flex items-center gap-2"
            >
              Adviesgesprek plannen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
    </MotionConfig>
  );
}
