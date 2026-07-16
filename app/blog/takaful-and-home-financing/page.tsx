import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Takaful and Home Financing: Why Islamic Banks Require It (and What It Actually Costs)',
  description:
    'A plain-language guide to Takaful in Islamic home financing, including why it is required, how it works, and what it costs.',
}

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <header className="relative overflow-hidden rounded-[2rem] border border-line bg-card p-8 shadow-[0_30px_80px_-40px_rgba(22,35,31,0.4)] sm:p-10 lg:p-12">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/blogimage.png')" }}
          />
          <div className="relative z-10">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            Blog
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Takaful and Home Financing: Why Islamic Banks Require It (and What It Actually Costs)
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            Somewhere in the middle of your Islamic home financing paperwork, you will come across a line item you probably did not budget for: Takaful.
          </p>
          </div>
        </header>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              It is tucked in alongside processing fees and legal charges, and most banks simply tell you it is “mandatory” without explaining much beyond that. If you are going to be paying for it every single month for the next 15-25 years, it is worth actually understanding what it is, why the bank insists on it, and how much it is really going to add to your total cost.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What Takaful actually is
            </h2>
            <p>
              Takaful is the Shariah-compliant alternative to conventional insurance. The word comes from an Arabic root meaning mutual guarantee, and that is really the whole concept: instead of paying premiums to an insurance company that assumes your risk and profits from the arrangement, you contribute to a shared pool alongside other participants. That pool is then used to support anyone in the group who experiences a covered loss.
            </p>
            <p>
              Conventional insurance can run into problems from an Islamic finance perspective because it typically involves interest-based investment of premium pools and an element of uncertainty in how the contract is structured. Takaful is designed to sidestep both issues through a cooperative, risk-sharing model overseen by a Shariah board.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Why Islamic banks insist on it
            </h2>
            <p>
              This is not the bank trying to sell you an add-on product for extra revenue — it is built into how Diminishing Musharakah actually works. Remember, under this structure, you and the bank are co-owners of the property for as long as financing is outstanding.
            </p>
            <p>
              Property Takaful protects the physical asset itself. Life Takaful protects the arrangement if something happens to you. Since the bank has real skin in the game as a co-owner, it needs assurance that the asset and the arrangement are protected from both directions. Nearly every Islamic bank in Pakistan builds this requirement into the financing agreement for exactly that reason.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What it actually costs
            </h2>
            <p>
              This is the part that catches people off guard. Contributions are typically calculated based on your age, the financing amount, the remaining tenure, and whether the contribution is a flat annual amount or recalculated periodically as your outstanding share reduces.
            </p>
            <p>
              Some banks absorb property Takaful costs into their own overhead, but life Takaful is far more commonly passed on to the applicant, either as a separate monthly contribution or rolled into the overall installment. Because the numbers vary bank to bank, the best thing you can do is ask for a clear, itemized breakdown that separates the core payment, property Takaful, life Takaful, and any related processing or administrative charge.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Is it really adding that much to your bill?
            </h2>
            <p>
              Compared to your core monthly rental payment, Takaful contributions are usually a smaller slice of the total — but “smaller” does not mean negligible over a 20-25 year tenure. A contribution that looks minor month to month adds up to a real sum over the life of the financing, which is exactly why it deserves the same scrutiny you would give the profit rate itself.
            </p>
            <p>
              It is also worth knowing that Takaful contributions can shift over time. As your outstanding co-ownership share decreases, some structures recalculate the contribution downward as well. Ask your bank directly whether your specific plan works this way.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Can you choose your own Takaful provider?
            </h2>
            <p>
              In many cases, no — banks typically work through a specific Takaful operator or a panel of approved providers, and you are expected to enroll through that arrangement rather than shop around independently. This is fairly standard practice and mirrors how conventional banks often require insurance through an approved panel too.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              A practical checklist before you sign
            </h2>
            <p>
              Ask whether property Takaful is bank-absorbed or charged to you, get the exact life Takaful contribution in writing, ask whether it recalculates as your outstanding share reduces, confirm which Takaful operator the bank works with, and factor the full Takaful cost into your affordability calculation — not just the headline rental rate.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            Takaful is not a bank upsell — it is a structural requirement that comes directly from the co-ownership nature of Islamic home financing. The smart move is not avoiding it, but making sure you know exactly what you are paying for before you commit.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/takaful-and-home-financing" />
      <Footer />
    </main>
  )
}
