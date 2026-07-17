import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'How Much Down Payment Do You Actually Need for a House in Pakistan?',
  description:
    'A practical breakdown of down payments for bank financing, government schemes, and developer installment plans in Pakistan.',
  keywords: [
    'down payment for house pakistan',
    'house down payment islamic financing',
    'home financing down payment pakistan',
  ],
  alternates: {
    canonical: 'https://www.egtafy.com/blog/how-much-down-payment-house-pakistan',
  },
  openGraph: {
    title: 'How Much Down Payment Do You Actually Need for a House in Pakistan?',
    description:
      'Learn how much cash you may need upfront for a house in Pakistan, including bank and government scheme options.',
    url: 'https://www.egtafy.com/blog/how-much-down-payment-house-pakistan',
    type: 'article',
  },
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
            How Much Down Payment Do You Actually Need for a House in Pakistan?
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            If you have started house-hunting in Pakistan, you have probably noticed that everyone has a different answer to this question.
          </p>
          </div>
        </header>

        <div className="mt-8">
          <AuthorByline />
        </div>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              Honestly, there is no single number. The down payment you will need depends heavily on how you are buying — through a bank, through a government scheme, or directly from a developer on an installment plan.
            </p>
            <p>
              Let us break down each route so you can figure out what actually applies to you.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              The short answer
            </h2>
            <p>
              For most conventional or Islamic bank financing, expect to put down somewhere between 20% and 35% of the property’s value. Government-backed schemes like the Prime Minister’s Apna Ghar Programme can bring that down to as little as 10%. Private developer installment plans usually ask for 20-30% upfront, spread across booking and confirmation payments.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Bank financing: why 20-35% is the real range
            </h2>
            <p>
              Pakistani banks — whether conventional or Islamic — do not finance the full value of a house. They finance a percentage, and you cover the rest as your down payment.
            </p>
            <p>
              Meezan Bank’s Easy Home works on a Diminishing Musharakah model, where you and the bank co-own the property and you gradually buy out its share. Salaried individuals can get 75% financing, while self-employed applicants qualify for 65%, meaning your down payment would be 25% or 35% respectively.
            </p>
            <p>
              HBL Islamic Home Finance finances up to 70% of the property value, so you would need to bring 30% yourself. JS Bank offers up to 85% financing for non-resident Pakistanis and 80% for local applicants under its Roshan Apna Ghar product — one of the more generous ratios out there. Bank AL Habib caps its residential house financing at up to 50% of the appraised property value for a house, or up to 25% for an apartment, whichever is lower.
            </p>
            <p>
              A few factors swing the number up or down: your employment type, whether the property is a house or apartment, whether you are a resident or overseas Pakistani, and whether you choose a conventional or Islamic product.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              The Apna Ghar Programme: the low down-payment option
            </h2>
            <p>
              If a 30% down payment sounds out of reach, the government’s low-cost housing scheme is worth a serious look. Under the current PM Apna Ghar Programme, the financing structure follows a 90:10 ratio, meaning applicants contribute just 10% of the property value as equity while the bank finances the remaining 90%.
            </p>
            <p>
              There is no processing fee, no prepayment penalty, the end-user markup rate is fixed at 5% for the first 10 years, and financing goes up to Rs. 10 million with a maximum tenure of 20 years. The catch is eligibility — this scheme is generally aimed at first-time homebuyers who do not already own residential property, and there are limits on plot size and covered area.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Buying directly from a developer: a different kind of down payment
            </h2>
            <p>
              If you are eyeing a plot or house in a private housing society instead of going through a bank, the math works differently. Developers typically split the price into a booking amount, a confirmation payment, and the balance in installments.
            </p>
            <p>
              Add the booking and confirmation payments together, and you are often looking at 20-30% of the total price before you even start the installment schedule. Developers increasingly favor this phased approach because it makes units more accessible to middle-income buyers.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What actually changes your down payment amount
            </h2>
            <p>
              A few factors will swing your number up or down more than anything else. Your employment type matters, especially because salaried applicants usually get better financing ratios than self-employed or business owners. Property type matters too, as banks are often more conservative with apartments. Resident versus overseas Pakistani status can also affect your eligibility and financing ratio.
            </p>
            <p>
              The scheme you use matters even more. Government-backed schemes can cut your required down payment by more than half compared to standard commercial financing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              A quick reality check on affordability
            </h2>
            <p>
              Before locking in a down payment target, it helps to work backward from your monthly budget rather than forward from the property price. A smaller down payment sounds appealing, but it means a bigger loan and higher monthly installments. A larger down payment reduces your monthly burden and total cost, but it means tying up more cash upfront.
            </p>
            <p>
              A reasonable approach is to figure out what monthly installment you can comfortably manage, then work out what loan amount that supports and let that tell you what down payment you need.
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
                Can I buy a house in Pakistan with no down payment at all?
              </h3>
              <p className="mt-2 text-ink/75">
                Practically speaking, no. Every conventional bank, Islamic bank, and government scheme requires some equity contribution from the buyer.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Is a bigger down payment always better?
              </h3>
              <p className="mt-2 text-ink/75">
                Not necessarily. It reduces your monthly installment and total cost, but it also ties up savings you might need for moving costs, furnishing, or emergencies.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Does the down payment percentage change based on property location or price?
              </h3>
              <p className="mt-2 text-ink/75">
                Not directly, but higher-value properties sometimes get more conservative financing ratios, and riskier locations may see banks cap financing lower as well.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            This article is for general informational purposes. Financing terms, markup rates, and scheme eligibility change frequently — always confirm current rates and requirements directly with your bank or housing authority before making a decision.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/how-much-down-payment-house-pakistan" />
      <Footer />
    </main>
  )
}
