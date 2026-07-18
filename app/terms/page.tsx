import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service | Egtafy',
  description: 'Terms of service for Egtafy, the halal home financing calculator and educational website.',
  alternates: {
    canonical: 'https://egtafy.com/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">Terms of Service</p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Terms of Service for Egtafy
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            These terms govern your use of Egtafy and its content.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-lg leading-8 text-ink/80">
          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">Estimation tool only</h2>
            <p>
              Egtafy provides educational estimates for Islamic home financing scenarios in Pakistan. The calculator is an estimation tool only and is not financial advice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">No guarantee of accuracy</h2>
            <p>
              Figures shown on this site are for informational purposes and may differ from the final numbers provided by banks, developers, or financing institutions. You should confirm all figures directly with your bank or licensed advisor before making any financial decision.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">Limitation of liability</h2>
            <p>
              Egtafy and its owner shall not be liable for any loss, damage, or inconvenience arising from the use of this website or reliance on its content. Use of the site is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-ink">Governing use</h2>
            <p>
              By using this website, you agree to use it lawfully and respectfully. You may not use the site in a way that harms, misrepresents, or disrupts its operation.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
