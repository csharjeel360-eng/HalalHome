import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Islamic Home Financing for Overseas Pakistanis: Roshan Apna Ghar Explained',
  description:
    'A practical guide to Islamic Roshan Apna Ghar for overseas Pakistanis, including how the Shariah-compliant structure works, who can apply, and what to watch for.',
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
            Islamic Home Financing for Overseas Pakistanis: Roshan Apna Ghar Explained
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            If you are living in Dubai, London, Toronto, or anywhere else outside Pakistan and dreaming of owning a home back in your homeland, you have probably come across the term “Roshan Apna Ghar.”
          </p>
          </div>
        </header>

        <div className="mt-8">
          <AuthorByline />
        </div>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              Here is the thing — buying property in Pakistan from abroad used to be a headache. You needed a trusted family member to handle paperwork, you worried about fraud, and getting a proper home loan as a non-resident was nearly impossible. Roshan Apna Ghar changed that equation, and the Islamic version lets you do all of this without touching conventional interest-based loans.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What exactly is Roshan Apna Ghar?
            </h2>
            <p>
              Roshan Apna Ghar is a home financing facility introduced by the State Bank of Pakistan as part of the broader Roshan Digital Account initiative. In simple terms, it is a government-backed program that lets Non-Resident Pakistanis apply for home financing entirely online, through participating Pakistani banks, without needing to fly back home to sign a stack of documents.
            </p>
            <p>
              The scheme covers buying a ready-made house or apartment, constructing a home on a plot you already own or are purchasing, and renovating an existing property. Nearly every major bank in Pakistan offers this facility to RDA holders, and most offer both a conventional and an Islamic version.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Why the Islamic version matters
            </h2>
            <p>
              For a huge number of overseas Pakistanis, avoiding interest is not a preference — it is a religious requirement. Conventional home loans work on a markup-based interest structure, which simply is not an option for someone who wants their finances to stay halal.
            </p>
            <p>
              Islamic Roshan Apna Ghar solves this by structuring the entire transaction around Diminishing Musharakah. Instead of the bank lending you money and charging interest on it, you and the bank become joint owners of the property. You pay rent on the portion the bank owns, and with every monthly payment you buy a small slice of the bank’s ownership share until eventually you become the sole owner.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              How the Roshan Digital Account fits in
            </h2>
            <p>
              You cannot apply for Roshan Apna Ghar without first opening a Roshan Digital Account. Think of the RDA as the gateway — it is a special bank account designed specifically for overseas Pakistanis, linking foreign income to Pakistani banking channels in a documented, transparent way.
            </p>
            <p>
              Once your RDA is active, you can apply for the housing finance facility directly through your bank’s online portal, from wherever you happen to be living.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Lien-based vs non-lien-based financing
            </h2>
            <p>
              This is one of the more important choices you will make, and it affects both your eligibility and how much financing you can get.
            </p>
            <p>
              Lien-based financing lets you place your RDA balances or Naya Pakistan Certificates as collateral against the financing, usually bringing lower rental rates and higher financing limits. Non-lien-based financing is based purely on your income and creditworthiness, usually meaning slightly higher rental rates and lower limits.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Who can actually apply?
            </h2>
            <p>
              The eligibility list is fairly straightforward, but worth double-checking against your own documents. You need a valid NICOP or Pakistan Origin Card, an active RDA, a suitable age range, a co-applicant in Pakistan, and a satisfactory income profile and credit history.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Financing tenure and amounts
            </h2>
            <p>
              Repayment periods are genuinely flexible compared with what is typically available inside Pakistan. Most banks offer terms ranging from 3 years up to 25 years, which keeps monthly payments manageable even on larger financing amounts.
            </p>
            <p>
              Minimum financing amounts start as low as PKR 500,000 with some banks, while maximum limits vary by institution and by lien or non-lien structure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What about the rental rate?
            </h2>
            <p>
              Since this is not interest, banks calculate a “rental rate” instead, typically benchmarked against KIBOR. Lien-based facilities often use 1-year KIBOR alone, while non-lien-based facilities often add a margin such as 1-year KIBOR + 1.5%. Some banks also offer a fixed-rate option for the first few years before switching to a variable rate later in the tenure.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              The application process, step by step
            </h2>
            <p>
              The process usually starts with opening a Roshan Digital Account, then filling out the online application through the bank’s portal, submitting documents, completing property verification, signing the agreement, and finally receiving disbursement for the purchase or construction.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Things worth thinking through before you apply
            </h2>
            <p>
              Currency risk, co-applicant dependency, property verification delays, and late payment consequences are all worth weighing. Compare multiple banks, because rental rates, processing fees, maximum tenure, and subsidy eligibility genuinely vary between institutions.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            This article is for general informational purposes and is not financial advice. Terms, rates, and eligibility requirements vary by bank and change over time, so confirm current details directly with your financial institution before making a decision.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/islamic-home-financing-for-overseas-pakistanis" />
      <Footer />
    </main>
  )
}
