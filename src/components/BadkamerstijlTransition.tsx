'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useCallback } from 'react';

const PATHS = {
  coverStart:  'M 0 0 V 0   Q 50 0   100 0   V 0   z',
  coverMid:    'M 0 0 V 50  Q 50 100 100 50  V 0   z',
  coverEnd:    'M 0 0 V 100 Q 50 100 100 100 V 0   z',
  revealStart: 'M 0 0   V 100 Q 50 100 100 100 V 0   z',
  revealMid:   'M 0 50  V 100 Q 50 100 100 100 V 50  z',
  revealEnd:   'M 0 100 V 100 Q 50 100 100 100 V 100 z',
};

const LABELS: Record<string, string> = {
  '/': 'Home',
  '/stijlen': 'Stijlen',
  '/portfolio': 'Portfolio',
  '/diensten': 'Diensten',
  '/adviesgesprek': 'Contact',
};

const BADKAMER_PATHS = new Set(Object.keys(LABELS));

type Phase = 'idle' | 'covering' | 'awaiting-nav' | 'revealing';

export default function BadkamerstijlTransition() {
  const pathname = usePathname();
  const router = useRouter();
  const phaseRef = useRef<Phase>('idle');
  const targetHrefRef = useRef<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  /* Phase 1: cover the viewport, then navigate */
  const doCover = useCallback(async (href: string) => {
    if (phaseRef.current !== 'idle' || href === pathname) return;
    phaseRef.current = 'covering';
    targetHrefRef.current = href;

    const overlay = overlayRef.current;
    const path = pathRef.current;
    const label = labelRef.current;
    if (!overlay || !path || !label) {
      phaseRef.current = 'idle';
      targetHrefRef.current = null;
      return;
    }

    overlay.style.pointerEvents = 'all';
    label.textContent = LABELS[href] || '';

    const { default: gsap } = await import('gsap');

    const tl = gsap.timeline({
      onComplete: () => {
        // Cover complete → navigate. The reveal waits for pathname to change.
        phaseRef.current = 'awaiting-nav';
        window.scrollTo(0, 0);
        router.push(href);
      },
    });

    tl.set(path, { attr: { d: PATHS.coverStart } });
    tl.to(path, { attr: { d: PATHS.coverMid }, duration: 0.35, ease: 'power3.in' });
    tl.to(path, { attr: { d: PATHS.coverEnd }, duration: 0.35, ease: 'power3.out' });
    tl.fromTo(
      label,
      { y: '100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 0.3, ease: 'power3.out' },
      '-=0.2',
    );
  }, [pathname, router]);

  /* Phase 2: reveal the new page — fires only after pathname actually changes */
  useEffect(() => {
    if (phaseRef.current !== 'awaiting-nav') return;
    if (targetHrefRef.current && pathname !== targetHrefRef.current) return;

    phaseRef.current = 'revealing';

    const overlay = overlayRef.current;
    const path = pathRef.current;
    const label = labelRef.current;
    if (!overlay || !path || !label) {
      phaseRef.current = 'idle';
      targetHrefRef.current = null;
      return;
    }

    import('gsap').then(({ default: gsap }) => {
      const tl = gsap.timeline({
        onComplete: () => {
          phaseRef.current = 'idle';
          targetHrefRef.current = null;
          overlay.style.pointerEvents = 'none';
          gsap.set(path, { attr: { d: PATHS.coverStart } });
        },
      });

      tl.to(label, { y: '-80%', opacity: 0, duration: 0.25, ease: 'power3.in' });
      tl.to(path, { attr: { d: PATHS.revealMid }, duration: 0.35, ease: 'power3.in' });
      tl.to(path, { attr: { d: PATHS.revealEnd }, duration: 0.35, ease: 'power3.out' });
    });
  }, [pathname]);

  /* Intercept badkamer internal link clicks — capture phase runs before Next.js router */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;
      const pathOnly = href.split('#')[0].split('?')[0];
      if (!BADKAMER_PATHS.has(pathOnly)) return;

      if (pathOnly === pathname) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, 0);
        return;
      }
      if (phaseRef.current !== 'idle') {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      doCover(href);
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [pathname, doCover]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <path
          ref={pathRef}
          d={PATHS.coverStart}
          fill="#332C27"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="overflow-hidden">
          <span
            ref={labelRef}
            style={{
              fontFamily:
                'var(--font-cormorant-garamond), "Cormorant Garamond", Georgia, serif',
            }}
            className="block text-[clamp(36px,6vw,80px)] font-light text-white uppercase tracking-[2px] translate-y-full opacity-0"
          >
          </span>
        </div>
      </div>
    </div>
  );
}
