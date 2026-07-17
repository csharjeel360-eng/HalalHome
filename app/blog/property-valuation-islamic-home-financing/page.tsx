import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'How Property Valuation Works in Islamic Home Financing — And Why Banks Might Offer You Less Than You Expect',
  description:
    'A practical guide to property valuation in Islamic home financing, why banks may value a property lower than the purchase price, and what buyers can do about it.',
}

export default function BlogPostPage() {
  return (
    <main className='min-h-screen bg-cream text-ink'>
      <article className='mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24'>
        <header className='rounded-[2rem] border border-line bg-card p-8 shadow-[0_30px_80px_-40px_rgba(22,35,31,0.4)] sm:p-10 lg:p-12'>
          <p className='mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage'>
            Blog
          </p>
          <h1 className='font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl'>
            How Property Valuation Works in Islamic Home Financing — And Why Banks Might Offer You Less Than You Expect
          </h1>
          <p className='mt-5 max-w-3xl text-lg leading-8 text-ink/75'>
            You have found the property. The price feels right. Then the bank&apos;s valuation comes back lower than what you agreed with the seller, and suddenly your financing plan does not add up the way you thought it would.
          </p>
        </header>

        <div className='mt-8'>
          <AuthorByline />
        </div>

        <div className='mt-12 space-y-10 text-lg leading-8 text-ink/80'>
          <section>
            <p>
              This is one of the most common surprises in property financing, and it catches Islamic home financing applicants off guard just as often as conventional mortgage applicants.
            </p>
            <p>
              Understanding how valuation actually works, and why Islamic financing structures can make the gap between asking price and bank value feel even more pronounced, will save you a lot of stress and last-minute scrambling for extra cash.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              What property valuation actually means
            </h2>
            <p>
              Valuation is an independent assessment of what a property is genuinely worth in the current market, done by a licensed surveyor or valuer. Banks rely on this figure rather than the agreed sale price because their financing decision is based on the asset&apos;s real, defensible value, not on what two parties negotiated in a moment of enthusiasm.
            </p>
            <p>
              In both conventional and Islamic financing, the bank&apos;s exposure is tied to the property itself. If the borrower or customer defaults, the property is what stands behind the arrangement. So the bank needs a number it can trust independent of the deal&apos;s emotions.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              Why Islamic financing ties valuation to ownership, not just collateral
            </h2>
            <p>
              In a conventional loan, the bank lends money and takes the property as collateral. In Islamic financing, the bank often takes actual or partial ownership of the property, which makes valuation accuracy even more central to the transaction itself.
            </p>
            <p>
              In Murabaha, the bank buys the property first and sells it to you at a marked-up price. In Musharakah Mutanaqisah, you and the bank co-own the property based on ownership shares calculated from the property&apos;s assessed value. In Ijara, rental payments may be based on the property&apos;s value. In each case, valuation is not a peripheral formality — it is baked directly into how much you end up paying over the life of the financing.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              Why the bank&apos;s number often comes in lower
            </h2>
            <p>
              There are several recurring reasons banks land on a lower figure than the agreed sale price. Market comparables may lag behind asking prices, off-plan and new-build premiums may not be recognized, location-specific risks can pull a valuation down, and condition or structural issues can reduce the assessed value.
            </p>
            <p>
              Because Islamic financial institutions carry actual ownership risk, their internal risk committees and Shariah boards often lean toward more conservative valuations than a purely conventional lender might. This is not arbitrary caution — it reflects the fact that the bank may genuinely hold or co-own the asset.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              The financing gap this creates
            </h2>
            <p>
              If a bank values your property at less than the agreed purchase price, the financing amount it is willing to offer typically drops proportionally. Buyers are then expected to cover the difference out of pocket.
            </p>
            <p>
              This is one of the most common reasons property deals fall through late in the process — not because financing was declined outright, but because the numbers no longer matched what the buyer could contribute.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              What you can do before it becomes a problem
            </h2>
            <ul className='list-disc space-y-3 pl-6'>
              <li>Get a preliminary valuation estimate early.</li>
              <li>Build in a valuation contingency clause when negotiating the purchase agreement.</li>
              <li>Ask which valuers the bank uses and whether you can request a second opinion.</li>
              <li>Understand how your specific Islamic financing structure calculates ownership or rent from the valuation.</li>
              <li>Keep a cash buffer beyond your planned down payment.</li>
              <li>For off-plan purchases, ask how valuation is handled at each construction stage.</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              Why this matters more in Islamic finance
            </h2>
            <p>
              It is tempting to think Islamic financing should be simpler or more forgiving on this front because it is not interest-based. In practice, the ownership and risk-sharing elements built into Shariah-compliant structures mean valuation accuracy carries more weight, not less.
            </p>
            <p>
              The bank is not just protecting a loan — in many structures, it is protecting an asset it partly owns. That reality shapes how conservatively valuers and Shariah-compliant institutions approach the number.
            </p>
          </section>
        </div>

        <div className='mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]'>
          <p className='text-ink/75'>
            A lower-than-expected valuation is not a sign that something has gone wrong with your application — it is usually the valuation process doing what it is designed to do. The best move is to expect the possibility of a gap and go into negotiations with enough of a buffer that a conservative number does not derail the whole purchase.
          </p>
          <Link
            href='/#calculator'
            className='focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light'
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/property-valuation-islamic-home-financing" />
      <Footer />
    </main>
  )
}
