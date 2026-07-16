import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Meezan vs HBL vs Dubai Islamic Bank: Home Financing Compared',
  description:
    'Comparing Islamic home financing from Meezan Bank, HBL, and Dubai Islamic Bank Pakistan — real rates, down payments, and what the fine print does not tell you.',
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
            Meezan Bank vs HBL vs Dubai Islamic Bank: Home Financing Compared (2026)
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            So you have decided you want to buy a house the halal way. Good — that is the easy part. The hard part is figuring out which bank to actually walk into.
          </p>
          </div>
        </header>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              Every bank will tell you its product is “Shariah-compliant, transparent, and competitive.” That is technically true of all three banks in this comparison. It is just not very useful when you are trying to pick one.
            </p>
            <p>
              I went through the public rate sheets, product pages, and fine print for Meezan Bank, HBL Islamic, and Dubai Islamic Bank Pakistan so you do not have to open five browser tabs and lose an afternoon to it. Here is what actually differs between them — and where the differences are smaller than the marketing suggests.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Quick answer, if you are in a hurry
            </h2>
            <p>
              Meezan Bank currently has the clearest published numbers and the only genuinely subsidized option. HBL publishes a floor and cap on its rate, which is oddly rare and worth knowing about. Dubai Islamic Bank does not publish an exact rate at all — everything is priced off KIBOR at the time you apply, so you will not know your number until you are sitting across from someone.
            </p>
            <p>
              None of that means one bank is “better” outright. It depends on whether you value a known fixed number now, or you are comfortable with a rate that moves with the market later.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Meezan Bank — Easy Home
            </h2>
            <p>
              Meezan is Pakistan’s largest Islamic bank, and it shows in how much detail they actually publish. Their Easy Home product runs on a Diminishing Musharakah structure — you and the bank co-own the property, you pay rent on the bank’s share, and each month a slice of that rent converts into you buying a bit more ownership.
            </p>
            <p>
              The current published rate is a fixed 12.49% for the first three years, after which it becomes variable and tracks the market. Down payment requirements sit around 25-35% depending on whether you are salaried or self-employed, and the maximum tenure goes up to 25 years for salaried and self-employed professional customers.
            </p>
            <p>
              Here is the part that is genuinely worth knowing: Meezan also runs a government-backed scheme called Mera Ghar Mera Ashiana, which subsidizes the profit rate down to 5% or 8% (fixed) for the first ten years, with only a 10% down payment. If you qualify, this is arguably the single best-value Islamic home financing option in Pakistan right now, full stop.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              HBL Islamic — HBL Islamic HomeFinance
            </h2>
            <p>
              HBL’s version runs on Musharakah too. What is unusual here is that HBL publishes a floor rate of 8% and a cap rate of 30%. Practically, that means your rate can move with the market, but it can never fall below 8% and can never climb above 30%, no matter how wild KIBOR gets.
            </p>
            <p>
              It protects you from an extreme spike, but a cap at 30% is not exactly a tight ceiling either. HBL finances up to 70% of the property value, with tenure options from 3 to 25 years, and missed payments trigger a small charity donation rather than a late payment penalty.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Dubai Islamic Bank Pakistan — Home Finance
            </h2>
            <p>
              DIB Pakistan uses a structure called Shirkat-ul-melk cum Ijarah — again, co-ownership plus a lease arrangement on the bank’s share. The catch is that DIB does not publish a flat percentage anywhere on their public site. Your rental rate is calculated as “relevant KIBOR + margin,” reviewed every six or twelve months depending on which renewal option you pick.
            </p>
            <p>
              What this means in plain terms: you genuinely will not know your exact rate until you are mid-application, because the margin the bank adds on top of KIBOR is not published. DIB will finance up to Rs. 75 million, which is a notably higher ceiling than the other two.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              So which one should you actually pick?
            </h2>
            <p>
              If you are a first-time buyer and your property fits within the size limits, the Meezan Mera Ghar Mera Ashiana scheme is hard to beat purely on cost. If your property is larger or you do not qualify for the government scheme, Meezan’s standard 12.49% and HBL’s floor-and-cap structure end up fairly close in practice.
            </p>
            <p>
              Dubai Islamic Bank makes the most sense if you need a larger financing amount than the other two comfortably offer, and you are okay with not knowing your exact number until you sit down with them.
            </p>
            <p>
              One thing worth saying plainly: do not pick a bank purely because its headline rate looks lowest on a comparison table. Ask about processing fees, property valuation charges, and early-settlement terms too.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              A quicker way to compare the actual numbers
            </h2>
            <p>
              Reading rate sheets is one thing; seeing what a specific property price and down payment actually turns into as a monthly number is another. If you want to skip the mental math, our <a href="/#calculator" className="text-emerald underline decoration-2 underline-offset-4">Islamic home financing calculator</a> lets you plug in a property price, down payment, tenure, and profit rate for any of the banks above, and see the estimated monthly payment instantly.
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
                Is one of these banks “more halal” than the others?
              </h3>
              <p className="mt-2 text-ink/75">
                No — all three structures are Shariah-compliant models overseen by each bank’s own Shariah board. They differ in mechanics and pricing, not in religious permissibility.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Why do the rates look similar to conventional mortgage rates?
              </h3>
              <p className="mt-2 text-ink/75">
                Islamic banks are allowed to use market benchmarks like KIBOR to set their profit or rental rates. The structure is what determines compliance, not the number itself.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                Can I switch from a conventional mortgage to one of these?
              </h3>
              <p className="mt-2 text-ink/75">
                Yes, this is usually called balance transfer or replacement financing, and most of these banks offer it.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            Rates and figures in this article reflect publicly published bank information as of mid-2026 and can change. Confirm exact current terms directly with the bank before applying.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/islamic-home-financing-pakistan" />
      <Footer />
    </main>
  )
}
