import { redirect } from 'next/navigation';

// De site is volledig Badkamerstijl. Op badkamerstijl.nl rewrite de middleware
// '/' al naar /badkamerstijl; voor alle overige contexten (localhost, preview,
// bare deploy-URL) sturen we de root door naar de Badkamerstijl-homepage.
export default function Home() {
  redirect('/badkamerstijl');
}
