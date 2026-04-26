'use client';

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="nl">
      <body style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'system-ui, sans-serif', background: '#FFFAF2', color: '#2D2926' }}>
        <div style={{ textAlign: 'center', maxWidth: 480, padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Er ging iets mis</h2>
          <p style={{ color: '#8F827A', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
            Onze excuses voor het ongemak.
          </p>
          <button
            onClick={() => reset()}
            style={{ padding: '0.75rem 2rem', background: '#2D2926', color: '#FFFAF2', border: 'none', borderRadius: '9999px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}
          >
            Opnieuw proberen
          </button>
        </div>
      </body>
    </html>
  );
}
