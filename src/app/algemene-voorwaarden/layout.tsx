import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van Woonklasse & Badkamerstijl voor verbouwingen, veranda\'s en luxe badkamers.',
  openGraph: {
    title: 'Algemene Voorwaarden | Woonklasse & Badkamerstijl',
    description: 'Algemene voorwaarden voor verbouwingen, veranda\'s en luxe badkamers.',
  },
};

export default function AlgemeneVoorwaardenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
