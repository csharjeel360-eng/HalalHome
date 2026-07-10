export default function Footer() {
  return (
    <footer className="bg-emerald-dark py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-6 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Halal Home Calculator. Estimates only, not financial advice.</p>
        <div className="flex gap-6">
          <a href="#how-it-works" className="focus-ring rounded transition hover:text-gold-light">How it works</a>
          <a href="#calculator" className="focus-ring rounded transition hover:text-gold-light">Calculator</a>
          <a href="#faq" className="focus-ring rounded transition hover:text-gold-light">FAQ</a>
        </div>
      </div>
    </footer>
  )
}
