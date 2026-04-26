'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function CollageGrid({ slug, imgs, isEven }: { slug: string; imgs: string[]; isEven: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { damping: 25, stiffness: 200 });
  const springY = useSpring(rawY, { damping: 25, stiffness: 200 });

  const RADIUS = 40; // half of w-20 (80px)

  const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(val, max));

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clamp(e.clientX - rect.left, RADIUS, rect.width - RADIUS);
    const y = clamp(e.clientY - rect.top, RADIUS, rect.height - RADIUS);
    rawX.set(x);
    rawY.set(y);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clamp(e.clientX - rect.left, RADIUS, rect.width - RADIUS);
    const y = clamp(e.clientY - rect.top, RADIUS, rect.height - RADIUS);
    // Instantly jump springs to current position (no animation from old spot)
    rawX.jump(x);
    rawY.jump(y);
    springX.jump(x);
    springY.jump(y);
    setHovering(true);
  };

  return (
    <Link href={`/woonklasse/projecten/${slug}`} className="group block w-full">
      <div
        ref={containerRef}
        className="flex flex-col gap-4 md:grid md:gap-[1.6rem] md:aspect-[12/9] overflow-hidden w-full relative md:cursor-none"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(9, 1fr)',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Explore cursor circle — nearly transparent with border, hidden on mobile */}
        <motion.div
          className="hidden md:flex absolute z-30 pointer-events-none items-center justify-center w-20 h-20 rounded-full border border-white/60 bg-white/10 backdrop-blur-[2px]"
          style={{ left: springX, top: springY, x: '-50%', y: '-50%' }}
          animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-white text-[10px] tracking-[0.2em] uppercase font-medium drop-shadow-sm">Explore</span>
        </motion.div>

        {/* Foto 1 — tall portrait */}
        <div
          className="relative overflow-hidden aspect-[3/4] md:aspect-auto"
          style={{ gridArea: isEven ? '1 / 8 / span 7 / span 5' : 'span 7 / span 5' }}
        >
          <Image src={imgs[0]} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 40vw" />
        </div>

        {/* Foto 2 — wide landscape */}
        <div
          className="relative overflow-hidden aspect-[4/3] md:aspect-auto"
          style={{ gridArea: isEven ? '1 / 1 / span 5 / span 7' : 'span 5 / 6 / span 5 / span 7' }}
        >
          <Image src={imgs[1]} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 55vw" />
        </div>

        {/* Foto 3 — medium corner */}
        <div
          className="relative overflow-hidden aspect-[4/3] md:aspect-auto"
          style={{ gridArea: isEven ? '6 / 3 / span 4 / span 5' : '6 / 6 / span 4 / span 6' }}
        >
          <Image src={imgs[2]} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 45vw" />
        </div>
      </div>
    </Link>
  );
}
