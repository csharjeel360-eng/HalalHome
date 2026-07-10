export default function FamilySection() {
  return (
    <section id="family" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 md:grid-cols-2 md:gap-20">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage">
            For families
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            A warm home plan designed for families, not just numbers
          </h2>
          <p className="mt-4 text-ink/70">
            Halal home financing should feel secure and simple for a family taking
            its first step together. This section shows the promise of shared
            ownership, steady payments, and a home that belongs to you over time.
          </p>

          <ul className="mt-10 space-y-4 text-ink/70">
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
              Payments that gradually increase your ownership share while the bank's
              share decreases.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
              A gentle, family-first structure built around stability and trust.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
              Simple guidance for couples and parents planning a comfortable future.
            </li>
          </ul>
        </div>

        <div className="rounded-[2rem] border border-line bg-cream p-6 shadow-xl shadow-ink/5">
          <div className="aspect-square overflow-hidden rounded-[1.75rem] border border-emerald/10 bg-cream p-6">
            <img
              src="/images/family-trust.jpg.png"
              alt="Family illustration representing trust and home ownership"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
