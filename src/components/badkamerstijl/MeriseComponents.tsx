'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Scroll-triggered text reveal hook ─── */
export function useTextReveal(ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const lines = el.querySelectorAll('.reveal-line');
    if (lines.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    return () => ctx.revert();
  }, [ref]);
}

/* ─── RevealText: Scroll-triggered line-by-line text reveal (Merise-style) ─── */
export function RevealText({ children, className = '' }: { children: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useTextReveal(ref);

  const words = children.split(' ');
  const lines: string[] = [];
  for (let i = 0; i < words.length; i += 4) {
    lines.push(words.slice(i, i + 4).join(' '));
  }

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <div className="reveal-line">{line}</div>
        </div>
      ))}
    </div>
  );
}

/* ─── FadeReveal: Generic scroll-triggered fade-up for any element ─── */
export function FadeReveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return <div ref={ref} className={className}>{children}</div>;
}

/* ─── Badkamerstijl Subpage Hero ─── */
export function SubpageHero({ label, title, description }: { label: string; title: React.ReactNode; description: string }) {
  const headingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading lines stagger in
      const lines = headingRef.current?.querySelectorAll('.hero-line');
      if (lines) {
        gsap.fromTo(lines,
          { y: '110%' },
          { y: '0%', duration: 1, ease: 'power3.out', stagger: 0.15, delay: 0.3 }
        );
      }
      // Body + label fade in
      gsap.fromTo(bodyRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-40 md:pt-48 pb-20 md:pb-28 px-8 md:px-16 lg:px-20">
      <div className="max-w-5xl">
        <div ref={bodyRef} className="opacity-0">
          <p className="text-xs tracking-[0.3em] uppercase text-badkamer-pink mb-8">{label}</p>
        </div>
        <div ref={headingRef}>
          <div className="overflow-hidden">
            <div className="hero-line">
              <h1 className="font-serif italic text-4xl md:text-[3.5rem] lg:text-[4.5rem] font-light leading-[1.1]">
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div ref={bodyRef} className="mt-8 opacity-0">
          <p className="text-badkamer-secondary text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Badkamerstijl CTA Section ─── */
export function BadkamerCTA({
  heading = 'Klaar om te beginnen?',
  description = 'Plan een vrijblijvend adviesgesprek en ontdek de mogelijkheden.',
  buttonText = 'Plan adviesgesprek',
  href = '/badkamerstijl/adviesgesprek',
  variant = 'teal',
}: {
  heading?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  variant?: 'teal' | 'pink' | 'dark';
}) {
  const bgClass = variant === 'teal' ? 'bg-badkamer-teal' : variant === 'pink' ? 'bg-badkamer-pink' : 'bg-badkamer-dark';
  const textClass = variant === 'pink' ? 'text-badkamer-primary' : 'text-badkamer-light';
  const descClass = variant === 'pink' ? 'text-badkamer-primary/60' : 'text-badkamer-secondary';
  const btnClass = variant === 'pink'
    ? 'bg-badkamer-primary text-badkamer-light'
    : 'bg-badkamer-pink text-badkamer-primary';

  return (
    <section className={`py-28 md:py-36 ${bgClass} ${textClass}`}>
      <div className="max-w-4xl mx-auto px-8 text-center">
        <RevealText className="font-serif italic text-3xl md:text-[2.8rem] lg:text-[3.2rem] font-light leading-[1.2] mb-6">
          {heading}
        </RevealText>
        <FadeReveal>
          <p className={`${descClass} mb-12 max-w-md mx-auto text-base leading-relaxed`}>
            {description}
          </p>
          <a
            href={href}
            className={`inline-flex items-center gap-3 ${btnClass} font-medium px-10 py-4 rounded-full transition-all hover:scale-105 text-sm tracking-wide`}
          >
            {buttonText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </FadeReveal>
      </div>
    </section>
  );
}

/* ─── Horizontal Divider with diamond motif ─── */
export function DiamondDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="h-px bg-badkamer-light/10 flex-1 max-w-[120px]" />
      <div className="w-2 h-2 border border-badkamer-light/20 rotate-45" />
      <div className="h-px bg-badkamer-light/10 flex-1 max-w-[120px]" />
    </div>
  );
}
