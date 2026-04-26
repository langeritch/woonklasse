export const metadata = {
  title: 'Binnenkort terug | Woonklasse & Badkamerstijl',
  robots: { index: false, follow: false },
};

export default function MaintenancePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8">
          Onderhoud
        </p>
        <h1 className="font-serif italic text-4xl md:text-5xl font-light mb-6">
          We zijn even offline
        </h1>
        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10">
          We werken aan een aantal verbeteringen. De site is binnenkort weer bereikbaar.
          Voor dringende vragen kun je contact opnemen via e-mail.
        </p>
        <div className="h-px w-16 bg-white/20 mx-auto mb-8" />
        <p className="text-white/40 text-xs tracking-wider">
          Woonklasse &nbsp;·&nbsp; Badkamerstijl
        </p>
      </div>
    </main>
  );
}
