'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBadkamer = pathname?.startsWith('/badkamerstijl') ?? false;
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    if (!isBadkamer) return;

    // Respecteer prefers-reduced-motion: geen smooth-scroll hijack.
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cancelled = false;

    // Dynamically import heavy libraries only when needed
    Promise.all([
      import('lenis'),
      import('gsap'),
      import('gsap/ScrollTrigger'),
    ]).then(([lenisModule, gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;

      const Lenis = lenisModule.default;
      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        lerp: 0.1,
        wheelMultiplier: 0.7,
        touchMultiplier: 1.5,
      });

      lenis.on('scroll', ScrollTrigger.update);

      const tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      cleanupRef.current = () => {
        gsap.ticker.remove(tickerCallback);
        lenis.destroy();
      };
    });

    return () => {
      cancelled = true;
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, [isBadkamer]);

  return <>{children}</>;
}
