import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Woonklasse | Verbouwingen & Veranda\'s',
  description: 'Woonklasse realiseert complete verbouwingen, aanbouwen, veranda\'s en dakkapellen. Vakmanschap en kwaliteit voor jouw droomwoning.',
  openGraph: {
    title: 'Woonklasse | Verbouwingen & Veranda\'s',
    description: 'Complete verbouwingen, aanbouwen, veranda\'s en dakkapellen met vakmanschap.',
  },
};

export default function WoonklasseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
