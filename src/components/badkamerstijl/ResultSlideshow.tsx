'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export const eindresultaatSlides = [
  '/badkamerstijl/eindresultaat-1.jpg',
  '/badkamerstijl/eindresultaat-2.jpg',
  '/badkamerstijl/eindresultaat-3.jpg',
  '/badkamerstijl/eindresultaat-4.jpg',
  '/badkamerstijl/eindresultaat-5.jpg',
];

/* Crossfade-slideshow voor de 'Het eindresultaat' kaart (homepage en saninet-pagina) */
export default function ResultSlideshow({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images.length]);
  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`object-cover transition-opacity duration-[1200ms] ease-in-out ${i === idx ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </>
  );
}
