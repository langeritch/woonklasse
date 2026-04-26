import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden | Woonklasse & Badkamerstijl',
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">404</p>
      <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">Pagina niet gevonden</h1>
      <p className="text-white/60 max-w-md mb-12">
        De pagina die je zoekt bestaat niet of is verplaatst.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/woonklasse"
          className="px-8 py-3 bg-woon-accent text-woon-dark text-sm tracking-[0.15em] uppercase font-semibold hover:bg-woon-accent/90 transition-colors"
        >
          Woonklasse
        </Link>
        <Link
          href="/badkamerstijl"
          className="px-8 py-3 border border-badkamer-pink text-badkamer-pink text-sm tracking-[0.15em] uppercase font-semibold hover:bg-badkamer-pink hover:text-white transition-colors"
        >
          Badkamerstijl
        </Link>
      </div>
    </div>
  );
}
