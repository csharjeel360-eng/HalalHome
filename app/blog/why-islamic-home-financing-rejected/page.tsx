import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import RelatedPosts from '@/components/RelatedPosts'
import AuthorByline from '@/components/AuthorByline'

export const metadata: Metadata = {
  title: 'Why Was My Islamic Home Financing Application Rejected?',
  description:
    'Got rejected for Islamic home financing in Pakistan? Here is what usually causes rejections, including income ratio, credit history, valuation gaps, and paperwork issues.',
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
              Why Was My Islamic Home Financing Application Rejected?
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
              You filled out the forms, waited, and then the bank said no. Here is what usually caused it — and what to do next.
            </p>
          </div>
        </header>

        <div className="mt-8">
          <AuthorByline />
        </div>

        <div className="mt-12 space-y-10 text-lg leading-8 text-ink/80">
          <section>
            <p>
              If your Islamic home financing application got rejected, you are probably re-reading the email and looking for the reason buried inside polite banking language. Most rejection letters do not spell it out clearly, which makes the whole experience feel even more frustrating.
            </p>
            <p>
              In most cases, the problem is not personal — it is usually a numbers-and-paperwork issue that can be fixed.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Your income-to-installment ratio did not work
            </h2>
            <p>
              This is one of the most common reasons applications are turned down. Banks look at how much of your monthly income would go toward the new installment. If you already have other loans, credit cards, or regular monthly obligations, the ratio can become too high.
            </p>
            <p>
              The fix is often simple: lower the property price, increase the down payment, or stretch the term so the monthly installment becomes more manageable.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Your credit history had something the bank did not like
            </h2>
            <p>
              Banks pull credit information from eCIB before approving anything. A late payment, an old default, a forgotten loan, or a co-signed obligation can all create problems. Many applicants are surprised to discover something negative is sitting on their history until they get rejected.
            </p>
            <p>
              Pulling your own credit report before reapplying can help you spot issues early and resolve them.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              The property did not value the way you expected
            </h2>
            <p>
              You may agree on a price with the seller, but the bank&apos;s valuator may come back with a lower figure. If the valuation is too low, the bank may require a bigger down payment or reject the request altogether.
            </p>
            <p>
              This happens more often with older properties, less-established locations, or properties where recent market evidence is weak.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Your employment type did not match what the bank was underwriting for
            </h2>
            <p>
              Salaried employees, self-employed business owners, and freelancers are assessed differently. Self-employed applicants are often rejected not because of a lack of real income, but because their paperwork is not as clean or consistent as the bank expects.
            </p>
            <p>
              Clear bank statements, tax records, and business documentation can make a genuine difference.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Takaful requirements were not met
            </h2>
            <p>
              Islamic banks generally require Takaful coverage on the financed property. If the Takaful application is flagged, delayed, or not accepted, the approval can be stalled or denied even when the rest of the file looks fine.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Your age plus the tenure did not fit the bank&apos;s limit
            </h2>
            <p>
              Many banks cap the age at the end of the financing term. If the requested tenure is too long for your age, the bank may reduce the amount offered or reject the application.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Joint applications had a mismatch between applicants
            </h2>
            <p>
              If you applied with a spouse, sibling, or parent, the bank may assess both incomes and liabilities together. A weak credit record or inconsistent paperwork from one applicant can affect the entire application.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink sm:text-3xl">
              What to do next
            </h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>Ask the bank directly for the specific reason for rejection, even if you have to follow up more than once.</li>
              <li>Pull your own credit report before reapplying anywhere.</li>
              <li>Recalculate your numbers with a more conservative down payment or a longer tenure.</li>
              <li>Try another bank, because underwriting criteria can vary between institutions.</li>
              <li>Fix the paperwork if you are self-employed by getting bank statements and tax records consistent before reapplying.</li>
            </ul>
            <p className="mt-4">
              A rejection usually feels personal, but it is often a numbers-and-paperwork problem rather than a judgment on you. Many people who fix the specific issue behind it get approved on a second try within a few months.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/blog" className="inline-flex items-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light">
            Back to blog
          </Link>
        </div>
      </article>

      <RelatedPosts currentSlug="/blog/why-islamic-home-financing-rejected" />
      <Footer />
    </main>
  )
}
