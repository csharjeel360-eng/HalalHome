const faqs = [
  {
    q: 'Is Diminishing Musharaka actually different from a normal loan?',
    a: 'Structurally, yes. Instead of borrowing money and paying interest on it, you and the bank jointly own the property, and you pay rent only on the bank\u2019s remaining share while gradually buying it out. Most Islamic scholars in Pakistan recognise this structure as Shariah-compliant, unlike conventional interest-based loans.',
  },
  {
    q: 'Why does the monthly payment look similar to a conventional mortgage?',
    a: 'The final number can look close because both structures spread a fixed cost over time. What differs is the underlying contract: ownership and rent versus a debt with interest. The two are not treated the same under Islamic finance rulings even when the arithmetic is similar.',
  },
  {
    q: 'Which banks in Pakistan offer this?',
    a: 'Several Islamic banks and Islamic windows of conventional banks offer home financing on a Diminishing Musharaka or Ijara basis, including Meezan Bank, Dubai Islamic Bank Pakistan, Al Baraka, and Bank Islami. Terms and profit rates differ, so it\u2019s worth comparing more than one.',
  },
  {
    q: 'Does this calculator send my information anywhere?',
    a: 'No. Every calculation happens in your browser. Nothing you type is stored or transmitted.',
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="bg-cream py-24">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sage">FAQ</p>
        <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
          Common questions
        </h2>

        <div className="mt-10 divide-y divide-line">
          {faqs.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 rounded font-display text-lg font-medium text-ink">
                {item.q}
                <span
                  className="shrink-0 text-gold transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-ink/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
