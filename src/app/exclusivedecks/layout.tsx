import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ExclusiveDecks | Luxe Houten Terrassen met LED-verlichting',
  description: 'ExclusiveDecks ontwerpt en realiseert exclusieve houten terrassen met geïntegreerde LED-verlichting. Curven, warmte en vakmanschap - voor poolside, daktuinen en landhuizen.',
  openGraph: {
    title: 'ExclusiveDecks | Luxe Houten Terrassen met LED-verlichting',
    description: 'Exclusieve houten terrassen met geïntegreerde LED-lijnen. Op maat gemaakt voor de meest veeleisende buitenruimtes.',
  },
};

export default function ExclusiveDecksLayout({ children }: { children: React.ReactNode }) {
  return children;
}
