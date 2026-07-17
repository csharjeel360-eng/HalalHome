import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Egtafy | Islamic Home Financing Calculator',
  description: 'Learn about Egtafy, the independent Islamic home financing calculator built to help Pakistani families understand halal financing clearly.',
  alternates: {
    canonical: 'https://www.egtafy.com/about',
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="mx-auto max-w-4xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">About Us</p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Why I built Egtafy
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            I built Egtafy because I wanted Pakistani families to understand halal home financing options without hidden interest, confusing jargon, or guesswork.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-lg leading-8 text-ink/80">
          <section>
            <p>
              My name is Sharjeel, and I created Egtafy to make Islamic home financing easier to understand. Many families in Pakistan want a Shariah-compliant path to home ownership, but the terms, structures, and rates can feel overwhelming.
            </p>
            <p className="mt-4">
              I wanted to build a simple calculator and educational resource that explains Diminishing Musharaka, Ijara, profit rates, and the practical realities of financing in a clear, honest way.
            </p>
          </section>

          <section>
            <p>
              Egtafy is an independent website and is not affiliated with any specific bank or financial institution. It is meant to support learning and planning, not replace professional banking advice.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
