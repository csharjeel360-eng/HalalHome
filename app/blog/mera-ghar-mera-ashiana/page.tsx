import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Mera Ghar Mera Ashiana Scheme Explained: Eligibility & How to Apply',
  description:
    'Who actually qualifies for Mera Ghar Mera Ashiana, what the 5% rate really covers, and how to apply — a plain-language breakdown of Pakistan\'s subsidized housing scheme.',
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
            Mera Ghar Mera Ashiana Scheme Explained: Who Qualifies and How to Apply
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            If you have spent any time searching “cheap home financing Pakistan,” you have almost certainly run into the name Mera Ghar Mera Ashiana somewhere.
          </p>
          </div>
        </header>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              It is real. It is a legitimate, State Bank of Pakistan-backed subsidy scheme, and if you qualify, it is genuinely one of the cheapest ways to finance a home purchase in the country right now.
            </p>
            <p>
              Let us go through what it actually is, who it is for, and what the application process looks like — without the recycled listicle filler most pages around this topic are padded with.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What the scheme actually is
            </h2>
            <p>
              Mera Ghar Mera Ashiana is a government housing finance initiative run through the State Bank of Pakistan, in partnership with commercial and Islamic banks. The idea is straightforward: the government subsidizes part of the profit rate on home financing, so a first-time buyer pays a fixed 5% rate for the first ten years, instead of whatever the bank&apos;s normal market rate would be.
            </p>
            <p>
              On the Islamic finance side, the scheme runs through a Diminishing Musharaka structure, same as most halal home financing products in Pakistan. You and the bank co-own the property, and your ownership share grows with every payment. The subsidy just changes the rental/profit portion of that monthly payment, not the underlying mechanics.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Who actually qualifies
            </h2>
            <p>
              Eligibility is not complicated, but it is specific. You need to be a Pakistani citizen with a valid CNIC, and you must not currently own any housing unit anywhere in Pakistan under your name. This is genuinely a first-time-buyer scheme, not a general subsidy for anyone buying property.
            </p>
            <p>
              There are also size limits on the property itself: a house up to 10 marla, or a flat up to 1,500 sq ft. Beyond that size, you are outside the scheme&apos;s scope even if your income and everything else checks out. There is no maximum price cap on the property itself, but the maximum amount the scheme will finance is capped at PKR 10 million.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What the rate actually looks like
            </h2>
            <p>
              The headline number everyone quotes is 5% for the first 10 years—and that is accurate for the government&apos;s core structure. After that ten-year window, the rate shifts to a market-linked variable rate, so your payment does eventually change once the subsidy period ends.
            </p>
            <p>
              You will also come across mentions of a tiered structure — smaller loan amounts at a 5% fixed rate, and larger amounts at an 8% fixed rate — depending on which bank&apos;s version of the scheme you are looking at. Treat any single number you see online as a starting point, not gospel, and confirm the exact tier and rate with the bank you are applying through.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Which banks are actually participating
            </h2>
            <p>
              This is not a Meezan-exclusive program. HBL, UBL, Bank Alfalah, National Bank of Pakistan, Faysal Bank, Sindh Bank, and Standard Chartered all offer versions of this scheme, some under the Islamic Diminishing Musharaka structure and some under a conventional version, depending on the bank and product line.
            </p>
            <p>
              If you specifically want the Shariah-compliant route, say so explicitly when you inquire — a bank might default to explaining their conventional Apna Ghar product unless you clarify you want the Islamic version.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              How to actually apply
            </h2>
            <p>
              The process is fairly standard across participating banks. Start by confirming you meet the basic eligibility. Then pick a participating bank — it is worth calling two or three, since processing times and customer service quality vary more than the headline rate does. Collect the application form, either from a branch or the bank&apos;s website, and fill it out alongside your income documents.
            </p>
            <p>
              The bank will run a credit and income assessment, arrange a property valuation and legal check if you have already identified a property, and then issue a conditional approval. Once everything is confirmed, you sign the financing agreement — a Diminishing Musharakah agreement if you have gone the Islamic route — and disbursement follows.
            </p>
            <p>
              Realistically, budget a few weeks for this rather than expecting same-day approval. Document delays are the most common reason applications drag on, so having everything ready and correctly signed before you submit saves you the most time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Is it actually worth it?
            </h2>
            <p>
              For anyone who qualifies, this is not really a close call. A fixed 5% rate for a decade, against a standard market rate that is currently sitting well above 10%, is a meaningfully different monthly payment — not a marginal discount. The property size and financing caps mean it is built for modest first homes rather than larger or more expensive properties.
            </p>
            <p>
              If your situation does not fit the caps — you already own property, the house exceeds the size limit, or you need more than PKR 10 million financed — you would be looking at standard bank rates instead.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              See what your number would actually look like
            </h2>
            <p>
              Whether you qualify for the subsidized 5% rate or you are comparing it against a standard bank rate, it helps to see the real monthly figure rather than just the percentage. Our <a href="/#calculator" className="text-emerald underline decoration-2 underline-offset-4">Islamic home financing calculator</a> lets you plug in the property price, down payment, tenure, and rate and see the estimated monthly payment instantly.
            </p>
          </section>
        </div>

        <section className="mt-14 rounded-[2rem] border border-line bg-emerald/5 p-8 sm:p-10">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Frequently asked questions
          </h2>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Can I apply if I already own land but not a house?
              </h3>
              <p className="mt-2 text-ink/75">
                Generally yes, if you do not currently own a housing unit — owning bare land without a constructed home does not automatically disqualify you.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Is there a minimum income requirement?
              </h3>
              <p className="mt-2 text-ink/75">
                Most participating banks look for a stable, verifiable income, and some versions reference income thresholds around PKR 50,000–60,000 per month for salaried applicants.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                What happens after the 10-year subsidy period ends?
              </h3>
              <p className="mt-2 text-ink/75">
                Your rate shifts to a market-linked variable rate, typically benchmarked to one-year KIBOR plus a margin set by the bank.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            Scheme details, rates, and eligibility criteria reflect publicly available information as of mid-2026 and are subject to change by the State Bank of Pakistan and participating banks.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/mera-ghar-mera-ashiana" />
      <Footer />
    </main>
  )
}
