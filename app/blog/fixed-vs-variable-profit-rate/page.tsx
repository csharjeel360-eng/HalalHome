import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Fixed vs Variable Profit Rate: Which Islamic Home Financing Option Should You Pick?',
  description:
    'A practical guide to choosing between fixed and variable profit rates for Islamic home financing, including the trade-offs, risks, and questions to ask.',
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
            Fixed vs Variable Profit Rate: Which Islamic Home Financing Option Should You Pick?
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            At some point during your Islamic home financing application, a relationship officer is going to ask: “Fixed or variable?”
          </p>
          </div>
        </header>

        <div className="mt-8">
          <AuthorByline />
        </div>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              It is a fair question to get stuck on. Both options are Shariah-compliant, both avoid interest, and both will get you into the same house. But they behave very differently over the life of your financing — and picking the wrong one for your situation can mean paying noticeably more than you needed to, or losing sleep over payments that keep creeping upward.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              First, a quick reminder of what “profit rate” means here
            </h2>
            <p>
              In Islamic home financing, you are not borrowing money at interest. Under the common Diminishing Musharakah structure, you and the bank co-own the property, and you pay rent on the share the bank still owns while gradually buying that share back. The “profit rate” is essentially how that rent is calculated.
            </p>
            <p>
              That rent is typically benchmarked against KIBOR, the same reference point conventional banks use. Islamic banks use it not because they are charging interest, but because it gives everyone a transparent market-linked number to build the rent calculation around.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What a fixed profit rate actually means
            </h2>
            <p>
              With a fixed profit rate, your rental payment is locked in for either the entire tenure or for a defined period, and it does not move regardless of what KIBOR does in the meantime.
            </p>
            <p>
              Some government-subsidized schemes take this even further, locking in a low fixed rate for the first several years before the rate steps up to something closer to market levels later on.
            </p>
            <p>
              What this gets you is predictability and protection if KIBOR climbs. What it can cost you is that you do not benefit if KIBOR drops during your fixed period, and fixed-rate products sometimes start slightly higher than the initial variable rate because the bank is pricing in the risk of future rate movements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What a variable profit rate actually means
            </h2>
            <p>
              A variable rate is tied directly to KIBOR plus a margin, and it gets revised periodically based on where KIBOR sits at that point.
            </p>
            <p>
              What this gets you is lower starting rates and potential savings if KIBOR falls. What it can cost you is that if KIBOR rises, your installment rises with it — sometimes at a point in your life when you are least prepared for a bigger bill.
            </p>
            <p>
              Many banks also build in a floor and cap — a minimum and maximum the rate can move to. If your product has this, it is worth knowing both numbers before you sign.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              The trade-off in plain terms
            </h2>
            <p>
              Think of it this way: a fixed rate is buying certainty. A variable rate is betting that market rates will move in your favor, or at least not move dramatically against you, in exchange for a potentially lower cost overall.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Questions to ask yourself before choosing
            </h2>
            <p>
              How stable is your income? How long do you plan to hold this financing? Do you follow interest rate trends? Are you eligible for a subsidized fixed-rate scheme? These questions matter because the right answer depends on your income situation, your risk appetite, and where you think rates are headed over the life of your financing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              A middle-ground option worth asking about
            </h2>
            <p>
              Some banks offer hybrid structures — a fixed rate for the first several years, followed by a variable rate for the remainder. This can be a smart middle path if you want short-term predictability without committing to a fixed rate for the entire term.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Do not skip this part: read the actual numbers
            </h2>
            <p>
              Ask your bank for the exact current rate for both fixed and variable options, the floor and cap on the variable option, how often the rate gets revised, and whether switching later is possible and what it costs.
            </p>
          </section>
        </div>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            If predictable payments matter more to you than squeezing out the lowest possible cost, go fixed. If you are comfortable with some uncertainty in exchange for the possibility of paying less over time, variable can work out cheaper.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/fixed-vs-variable-profit-rate" />
      <Footer />
    </main>
  )
}
