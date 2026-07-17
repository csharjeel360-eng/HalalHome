import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Diminishing Musharaka vs Ijara: What\'s the Real Difference?',
  description:
    'Confused by Islamic bank terms? Here\'s a plain-language breakdown of Diminishing Musharaka vs Ijara, and which one you\'re actually signing up for.',
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
            Diminishing Musharaka vs Ijara: What&apos;s the Difference?
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            You have probably landed here because you were reading a bank&apos;s home financing page, saw two unfamiliar Arabic terms, and closed the tab more confused than when you opened it.
          </p>
          </div>
        </header>

        <div className="mt-8">
          <AuthorByline />
        </div>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              Diminishing Musharaka is about ownership that shrinks over time — you and the bank co-own the property, and your share grows month by month until you own it outright. Ijara is about renting — the bank owns the asset and leases it to you, full stop, no ownership transfer built in unless a separate agreement bolts one on.
            </p>
            <p>
              Most home financing products in Pakistan are actually a combination of both, which is exactly why the names get mixed up.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Diminishing Musharaka, explained without the jargon
            </h2>
            <p>
              Break the word down and it is less intimidating than it sounds. “Musharaka” just means partnership — you and the bank jointly own something. “Diminishing” means one partner&apos;s share keeps shrinking. Put together: you and the bank buy a house together, and every month you buy back a little more of the bank&apos;s share until it is entirely yours.
            </p>
            <p>
              Say you are eyeing a house worth 1 crore in Lahore. You put down 20 lakh, and the bank puts in the remaining 80 lakh. Each month, your payment does two jobs at once — part of it is rent for using the bank&apos;s share, and part of it buys back a small unit of that share. Ten years in, the bank&apos;s share has shrunk considerably; twenty years in, assuming you have kept up payments, it is zero and the house is fully yours.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Ijara, explained without the jargon
            </h2>
            <p>
              Ijara is simpler in concept — it is just the Arabic word for a lease. The bank buys the asset, retains full ownership, and rents it to you for an agreed period. You pay rent. That is the whole transaction. No gradual ownership transfer is built into a pure Ijara contract — at the end of the lease, the asset still belongs to the bank unless there is a separate arrangement for you to purchase it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Why banks smash the two together
            </h2>
            <p>
              Here is where it gets genuinely confusing, and it is not really your fault for losing track. A lot of Pakistani home financing products are technically called “Shirkat-ul-melk cum Ijarah.” Translated loosely: joint ownership combined with a lease.
            </p>
            <p>
              The bank and customer establish a partnership in the property first, then the bank formally leases its share to the customer through a separate Ijara agreement. The customer can then buy out the bank&apos;s ownership share before or at the end of that lease period.
            </p>
            <p>
              So functionally, for the person paying the monthly bill, it can feel almost identical to a straightforward Diminishing Musharaka. The difference is more about how the contract is legally structured behind the scenes than something you would notice day to day.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Does the difference actually matter to you as a buyer?
            </h2>
            <p>
              Mostly, no — not in terms of your monthly payment or how much you will pay over time. What matters more practically is whether the bank allows you to buy out their share early, whether there is a hard cap or floor on how much the rate can move if it is variable, and whether you are comfortable with the underlying Shariah reasoning.
            </p>
            <p>
              Where it does matter is if you are financing something other than a house — a car, for instance, is much more likely to be pure Ijara with no ownership transfer at all, which is a meaningfully different commitment than a home financing product where ownership transfer is the entire point.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              A quick way to check where you stand
            </h2>
            <p>
              If you are trying to figure out what your actual monthly number would look like under a Diminishing Musharaka structure, our <a href="/#calculator" className="text-emerald underline decoration-2 underline-offset-4">Islamic home financing calculator</a> does the math for you instantly. Property price, down payment, tenure, profit rate, done.
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
                Is Ijara less halal than Diminishing Musharaka?
              </h3>
              <p className="mt-2 text-ink/75">
                No — both are recognized Shariah-compliant structures, just built for different purposes.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Which one is used for home purchases in Pakistan?
              </h3>
              <p className="mt-2 text-ink/75">
                Almost always Diminishing Musharaka, sometimes combined with an Ijara lease structure underneath it.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Can I ask my bank which structure they are actually using?
              </h3>
              <p className="mt-2 text-ink/75">
                Yes, and you should. Any reputable Islamic bank will explain their specific product&apos;s structure and point you to their Shariah board&apos;s approval.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            This article explains general Islamic finance structures for informational purposes. Terms vary by bank and product — confirm the exact structure and Shariah ruling with your chosen bank before signing.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/diminishing-musharaka-vs-ijara" />
      <Footer />
    </main>
  )
}
