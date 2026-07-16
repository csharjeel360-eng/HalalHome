import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'

export const metadata: Metadata = {
  title: 'Salaried vs Self-Employed: How Islamic Home Financing Eligibility Rules Differ',
  description:
    'A practical guide to how salaried and self-employed applicants are assessed differently for Islamic home financing in Pakistan.',
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
            Salaried vs Self-Employed: How Islamic Home Financing Eligibility Rules Differ
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            If you have ever compared notes with a friend who applied for Islamic home financing and found their experience was nothing like yours, there is a good chance one of you is salaried and the other is self-employed.
          </p>
          </div>
        </header>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              The core product is the same — Diminishing Musharakah, no interest, co-ownership with the bank — but the eligibility path leading up to approval can look surprisingly different depending on which category you fall into.
            </p>
            <p>
              If you are self-employed, this matters more than you might expect. A lot of applicants assume the process will be roughly the same as it is for their salaried friends, get partway through the paperwork, and then hit friction they did not see coming.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              The starting point is the same for everyone
            </h2>
            <p>
              Regardless of employment type, every applicant needs the basics: a valid CNIC or NICOP, a satisfactory credit history, an age that fits within the bank&apos;s minimum-and-maximum window, and a monthly income that clears the bank&apos;s minimum threshold for the product you are applying for.
            </p>
            <p>
              Where things diverge is in how you prove that income, how stable the bank considers it, and how much financing you can actually get approved for.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Income verification: where the real difference shows up
            </h2>
            <p>
              For salaried applicants, proving income is fairly mechanical. Banks typically ask for a salary certificate, recent salary slips, bank statements showing regular salary credits, and an employment certificate.
            </p>
            <p>
              For self-employed applicants, the picture is more layered. Banks generally ask for proof of business ownership, tax returns, bank statements reflecting business income and cash flow, and additional documentation depending on the business structure.
            </p>
            <p>
              Since your income is not a fixed number handed to you by an employer, banks have to do more work to assess whether your cash flow is stable enough to support a 15-25 year commitment.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Minimum employment or business tenure
            </h2>
            <p>
              Salaried applicants are often expected to show around one to two years with their current employer, plus a longer overall job history of consistent employment. Self-employed applicants are typically expected to show that their business or practice has been operational for a minimum of two to three years, and sometimes longer.
            </p>
            <p>
              A newly registered business, even a genuinely profitable one, can struggle to meet this threshold simply because it has not existed long enough to build a track record the bank can evaluate.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Minimum income thresholds can differ too
            </h2>
            <p>
              Minimum income requirements vary by bank and product, but it is common to see self-employed applicants held to a somewhat higher minimum income bar than salaried applicants for the equivalent product. The reasoning is not discriminatory — it reflects the fact that self-employed income tends to be less predictable month to month.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Debt burden ratio: same rule, different practical impact
            </h2>
            <p>
              Most banks apply a Debt Burden Ratio cap, commonly somewhere between 40-50%, meaning your total monthly debt obligations should not exceed that percentage of your verified monthly income. For salaried applicants, this is relatively straightforward. For self-employed applicants, the bank often uses an average of income over the past couple of years, or a more conservative estimate, which can make your approved financing amount more conservative than your current earning capacity might suggest.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Financing-to-property-value ratios
            </h2>
            <p>
              Some banks distinguish between salaried and self-employed applicants even in how much of the property value they are willing to finance. It is not unusual to see a slightly higher financing ratio for salaried and self-employed professional applicants compared with self-employed business owners, because professional income is often easier to verify.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Co-applicants can help bridge the gap
            </h2>
            <p>
              If your individual income or documentation falls short, adding a co-applicant such as a spouse, parent, or sibling and using income clubbing can meaningfully improve your eligibility. This applies to both salaried and self-employed applicants, but it tends to be used more often by self-employed applicants.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Practical tips if you are self-employed
            </h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>Keep your tax filings current and consistent.</li>
              <li>Separate personal and business banking if you have not already.</li>
              <li>Apply once your business has a solid multi-year track record.</li>
              <li>Ask upfront about the specific tenure and income requirements at the bank you are considering.</li>
              <li>Consider a co-applicant with salaried, well-documented income if your own documentation is thinner than you would like.</li>
            </ul>
          </section>
        </div>

        <div className="mt-10 rounded-[2rem] border border-line bg-card p-8 shadow-[0_20px_55px_-35px_rgba(22,35,31,0.25)]">
          <p className="text-ink/75">
            The underlying Islamic financing structure does not change based on how you earn your income — you will still be entering a Diminishing Musharakah arrangement either way. What changes is how much friction you encounter getting there, and how conservatively the bank estimates your repayment capacity.
          </p>
          <Link
            href="/#calculator"
            className="focus-ring mt-6 inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/salaried-vs-self-employed-islamic-home-financing" />
      <Footer />
    </main>
  )
}
