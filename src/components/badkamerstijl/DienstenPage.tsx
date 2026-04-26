'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
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
    desc: 'Wij verzorgen het volledige renovatietraject. Van het strippen van de bestaande badkamer tot de montage van het laatste accessoire — alles uit één hand.',
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

export default function DienstenPage() {
  const fullwidthRef = useRef<HTMLElement>(null);
  const { scrollYProgress: fwScroll } = useScroll({
    target: fullwidthRef,
    offset: ['start end', 'end start'],
  });
  const fwY = useTransform(fwScroll, [0, 1], ['-8%', '8%']);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([gsapModule, stModule]) => {
      const gsap = gsapModule.default;
      const { ScrollTrigger } = stModule;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.sx-reveal').forEach((el) => {
          gsap.fromTo(el,
            { clipPath: 'inset(100% 0 0 0)' },
            {
              clipPath: 'inset(0% 0 0 0)',
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
            },
          );
        });

        gsap.utils.toArray<HTMLElement>('.sx-label').forEach((el) => {
          gsap.fromTo(el, { opacity: 0 }, {
            opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: el, start: 'top 90%' },
          });
        });
      });
    });

    return () => { ctx?.revert(); };
  }, []);

  return (
    <main className="bsv2-page bg-bsv2-cream text-bsv2-charcoal overflow-x-hidden">
      <BadkamerstijlFloatingNav />

      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/badkamerstijl/2200xxs(44).jpg"
            alt="Badkamerstijl diensten"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

        <div className="relative z-20 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1600px] mx-auto w-full">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-[11px] tracking-[0.15em] lowercase mb-6 block"
          >
            (Diensten)
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-cormorant text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-white"
          >
            Wat wij
            <br />
            <span className="italic">doen</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cormorant text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-[1.4] max-w-4xl"
        >
          Van het eerste idee tot de laatste afwerking — wij begeleiden je door het
          hele traject. Met persoonlijke aandacht, vakmanschap en een oncompromitterende
          standaard.
        </motion.p>
      </section>

      {/* Service sections — alternating layout */}
      {services.map((service, i) => (
        <section
          key={service.title}
          className={`py-24 md:py-32 px-6 md:px-12 lg:px-20 ${i % 2 === 1 ? 'bg-white' : 'bg-bsv2-cream'}`}
        >
          <div className="max-w-[1600px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Image */}
              <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="sx-reveal aspect-[4/5] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="sx-label text-bsv2-grey text-[11px] tracking-[0.15em] lowercase mb-6 block">
                  ({String(i + 1).padStart(2, '0')})
                </span>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-3"
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.05 }}
                  className="font-cormorant text-xl italic text-bsv2-grey mb-8"
                >
                  {service.subtitle}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-bsv2-grey text-base leading-relaxed mb-10 max-w-lg"
                >
                  {service.desc}
                </motion.p>

                {/* Detail list */}
                <motion.ul
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="space-y-3 mb-10"
                >
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm text-bsv2-charcoal/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-bsv2-teal flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </motion.ul>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Link
                    href="/adviesgesprek"
                    className="inline-flex items-center gap-2 text-bsv2-teal text-sm font-medium hover:gap-3 transition-all duration-300"
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
      <section ref={fullwidthRef} className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <motion.div style={{ y: fwY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
          <Image
            src="/badkamerstijl/2200xxs(47).jpg"
            alt="Badkamerstijl vakmanschap"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-bsv2-cream">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cormorant text-4xl md:text-6xl font-light mb-6"
          >
            Klaar om te <span className="italic">beginnen?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-bsv2-grey text-base mb-10 max-w-xl mx-auto"
          >
            Plan een vrijblijvend adviesgesprek en ontdek wat wij voor jouw badkamer kunnen betekenen.
          </motion.p>
          <Link
            href="/adviesgesprek"
            className="bg-bsv2-teal text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-bsv2-charcoal transition-colors duration-300 inline-flex items-center gap-2"
          >
            Adviesgesprek plannen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
