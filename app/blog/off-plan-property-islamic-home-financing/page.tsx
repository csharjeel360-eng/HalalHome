import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Off-Plan Property and Islamic Home Financing: What Buyers Need to Know Before Investing',
  description:
    'A practical guide to off-plan property buying, how Islamic home financing differs from conventional mortgages, and what to check before investing.',
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
            Off-Plan Property and Islamic Home Financing: What Buyers Need to Know Before Investing
          </h1>
          <p className='mt-5 max-w-3xl text-lg leading-8 text-ink/75'>
            Buying a home before it is even built sounds like a leap of faith. Yet off-plan property remains one of the most popular ways to enter the real estate market, especially where Islamic finance plays a central role.
          </p>
        </header>

        <div className='mt-12 space-y-10 text-lg leading-8 text-ink/80'>
          <section>
            <p>
              Lower entry prices, flexible payment plans, and the promise of strong capital growth make off-plan deals attractive. But when you add Shariah compliance into the mix, things get more layered than a typical mortgage conversation.
            </p>
            <p>
              This guide breaks down what off-plan property actually means, why Islamic home financing works differently from conventional loans, and what you genuinely need to check before signing anything.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              What is off-plan property, exactly?
            </h2>
            <p>
              Off-plan property refers to a unit that you buy directly from a developer before construction is complete, sometimes before it has even started. You are essentially purchasing based on floor plans, 3D renderings, a show unit, and the developer&apos;s track record rather than a finished, walkable space.
            </p>
            <p>
              Developers sell off-plan because it helps fund construction. Buyers get involved because prices are typically lower than completed properties, payment plans are spread out over the construction period, and early investors often see the value of their unit rise by the time it is handed over.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              Why Islamic home financing is not just a halal mortgage
            </h2>
            <p>
              Conventional mortgages are built around interest, which is explicitly prohibited in Islamic finance. So instead of lending money and charging interest on it, Islamic financial institutions use ownership-based and partnership-based structures where the bank has a stake in the asset, at least temporarily.
            </p>
            <p>
              The most common structures include Murabaha, Ijara, Musharakah Mutanaqisah, and Istisna. For off-plan purchases, Istisna is usually the most relevant because it is designed for construction finance and is therefore more compatible with buying pre-construction.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              The real Shariah issue with off-plan buying
            </h2>
            <p>
              Islamic law generally prohibits the sale of something that does not yet exist or is not in the seller&apos;s possession. That creates a challenge for off-plan properties because the asset is still under construction at the time of purchase.
            </p>
            <p>
              This is why Istisna contracts exist. Scholars developed Istisna to permit financing of manufactured or constructed goods before they are complete, provided the specifications, price, and delivery timeline are clearly defined in the contract.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              Questions to ask before you commit
            </h2>
            <ul className='list-disc space-y-3 pl-6'>
              <li>Is the financing structure actually appropriate for an off-plan purchase?</li>
              <li>Who holds the risk during construction?</li>
              <li>What happens if the project is delayed or cancelled?</li>
              <li>How is the profit rate or rental rate determined, and can it change?</li>
              <li>What is your exit strategy if you want to sell before handover?</li>
              <li>Is the developer track record solid?</li>
            </ul>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              Payment plans and financing usually work together
            </h2>
            <p>
              Most off-plan developments offer staged payment plans tied to construction milestones. When Islamic financing is layered on top, the bank usually steps in to fund the later-stage payments or the final balance while you cover the initial deposit yourself.
            </p>
            <p>
              This is where Istisna financing tends to be more practical, because it can be structured to match the construction schedule rather than releasing the full amount upfront.
            </p>
          </section>

          <section>
            <h2 className='mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl'>
              A practical checklist before you sign
            </h2>
            <ul className='list-disc space-y-3 pl-6'>
              <li>Confirm the developer is registered and the project has regulatory approval.</li>
              <li>Verify that buyer payments go into an escrow account, not directly to the developer.</li>
              <li>Get the Islamic financing structure in writing, along with confirmation from a recognized Shariah body.</li>
              <li>Compare profit rates and total repayment costs across more than one institution.</li>
              <li>Read the resale and assignment clauses carefully if you are buying for investment.</li>
              <li>Get independent legal advice before committing.</li>
            </ul>
          </section>
        </div>

        <div className='mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]'>
          <p className='text-ink/75'>
            Off-plan property can be a smart move, and Islamic home financing gives buyers a way to do it without compromising on their principles. The key is to understand the contract structure, the developer risk, and the financing terms before signing.
          </p>
          <Link
            href='/#calculator'
            className='focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light'
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/off-plan-property-islamic-home-financing" />
      <Footer />
    </main>
  )
}
