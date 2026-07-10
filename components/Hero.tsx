export default function Hero() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* Background image sits behind everything — see /public/images/hero-bg.jpg.png */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/80" aria-hidden="true" />

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
        <span className="font-display text-lg font-semibold text-cream">
          Egtafy<span className="text-gold-light"> HalalHome</span>
        </span>
        <div className="hidden gap-8 text-sm text-cream/90 sm:flex">
          <a href="#how-it-works" className="focus-ring rounded transition hover:text-gold-light">How it works</a>
          <a href="#calculator" className="focus-ring rounded transition hover:text-gold-light">Calculator</a>
          <a href="#faq" className="focus-ring rounded transition hover:text-gold-light">FAQ</a>
        </div>
        <a
          href="#calculator"
          className="focus-ring rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition hover:bg-gold-light"
        >
          Calculate now
        </a>
      </nav>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pb-28 pt-16 sm:px-8 sm:pb-36 sm:pt-24">
        <p className="mb-4 rounded-full border border-gold-light/40 px-4 py-1 text-xs uppercase tracking-widest text-gold-light">
          Riba-free · Built for Pakistan
        </p>
        <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl md:text-6xl">
          Estimate your monthly Islamic home payment with confidence.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-cream/85">
          A simple, trustworthy calculator for Diminishing Musharaka home financing in Pakistan.
          Enter your property price and get a clear monthly estimate without hidden interest.
        </p>
        <a
          href="#calculator"
          className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 font-medium text-ink transition hover:bg-white"
        >
          Estimate my payment
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </header>
  )
}
