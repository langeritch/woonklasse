'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center max-w-md">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-woon-primary">
          Er ging iets mis
        </h2>
        <p className="text-woon-secondary mb-8 text-sm leading-relaxed">
          Onze excuses voor het ongemak. Probeer het opnieuw of ga terug naar de homepagina.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 bg-woon-primary text-woon-light font-bold px-8 py-3.5 rounded-full transition-all hover:scale-105 text-sm tracking-wide"
        >
          Opnieuw proberen
        </button>
      </div>
    </div>
  );
}
