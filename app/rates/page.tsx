import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RatesTable from '@/components/RatesTable'

export const metadata: Metadata = {
  title: 'Islamic Bank Home Financing Rates Pakistan 2026 Compared',
  description:
    'Compare Islamic bank home financing rates in Pakistan across Meezan, HBL, Dubai Islamic, BankIslami, and Bank Alfalah. Review profit rates, down payments, tenure, and structure types for 2026.',
  keywords: [
    'islamic home financing rates pakistan',
    'meezan home finance rates',
    'hbl islamic home finance',
    'dubai islamic bank pakistan rates',
    'bankislami muskun rates',
    'bank alfalah islamic home financing',
  ],
}

export default function RatesPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Header />
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="rounded-[2rem] border border-line bg-card p-8 shadow-[0_30px_80px_-40px_rgba(22,35,31,0.4)] sm:p-10 lg:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            Bank comparison
          </p>
          <h1 className="max-w-3xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Islamic Home Financing Rates in Pakistan — Compared
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            Review how major Islamic finance providers in Pakistan differ on profit rates,
            down payment expectations, maximum tenure and contract structure before you apply.
          </p>
          <p className="mt-4 text-sm font-medium text-ink/60">
            Last updated: 2026-07-11
          </p>
        </div>
      </section>

      <div className="lattice-divider bg-cream" />

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:pb-24">
        <div className="mb-8 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-sage">
            Current offers
          </p>
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Compare the latest public rate guidance from leading banks
          </h2>
        </div>

        <RatesTable />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:pb-24">
        <div className="rounded-3xl border border-line bg-emerald/5 p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-sage">
            Disclaimer
          </p>
          <p className="mt-3 max-w-3xl text-ink/75">
            Rates are collected from public bank sources and change periodically. Confirm exact figures with the bank before applying. Last verified: 2026-07-11.
          </p>
        </div>
      </section>

      <div className="lattice-divider bg-cream" />

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <div className="flex flex-col gap-6 rounded-[2rem] border border-line bg-card p-8 shadow-[0_25px_70px_-35px_rgba(22,35,31,0.25)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sage">
              Calculator
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink">
              Want your exact monthly payment?
            </h2>
            <p className="mt-3 max-w-2xl text-ink/70">
              Use the calculator to estimate your monthly payment based on your property value,
              down payment and financing term.
            </p>
          </div>

          <Link
            href="/#calculator"
            className="focus-ring inline-flex items-center justify-center rounded-full bg-emerald px-6 py-3 font-medium text-cream transition hover:bg-emerald-light"
          >
            Try the calculator
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
