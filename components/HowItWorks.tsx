const steps = [
  {
    label: 'You bring the down payment',
    body: "You pay a share of the home's price upfront — commonly 10–25%. This is your starting ownership share in the property.",
  },
  {
    label: 'The bank owns the rest',
    body: "The bank pays the remaining share and co-owns the house with you. Instead of charging interest, they charge rent on their portion — this is Ijara.",
  },
  {
    label: 'You buy the bank out, gradually',
    body: 'Every month, part of your payment buys back a small slice of the bank\u2019s ownership, and part is rent on what\u2019s left. Over time, your share grows until you own 100%.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 md:grid-cols-2 md:items-center md:gap-20">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage">
            How it works
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
            Diminishing Musharaka, in plain words
          </h2>
          <p className="mt-4 max-w-md text-ink/70">
            No interest changes hands. You and the bank co-own the house, and your
            share increases with every payment until the home is fully yours.
          </p>

          <ol className="mt-10 space-y-8">
            {steps.map((step, i) => (
              <li key={step.label} className="flex gap-5">
                <span className="font-display text-2xl font-semibold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-display text-lg font-medium text-ink">{step.label}</p>
                  <p className="mt-1 text-ink/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          {/* See /public/images/how-it-works.jpg.png */}
          <img
            src="/images/how-it-works.jpg.png"
            alt="A modern Pakistani home's front entrance, representing halal home ownership"
            className="h-full w-full object-cover"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  )
}
