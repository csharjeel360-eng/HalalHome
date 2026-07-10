'use client'

import { useMemo, useState } from 'react'

function formatPKR(n: number) {
  if (!isFinite(n) || isNaN(n)) return '—'
  return new Intl.NumberFormat('en-PK', {
    maximumFractionDigits: 0,
  }).format(Math.round(n))
}

// Converts a raw number into "X Lakh" / "X Crore" style, common in Pakistan.
function toLocalUnit(n: number) {
  if (n >= 10000000) return `${(n / 10000000).toFixed(2)} Crore`
  if (n >= 100000) return `${(n / 100000).toFixed(2)} Lakh`
  return formatPKR(n)
}

export default function Calculator() {
  const [price, setPrice] = useState(10000000) // 1 crore
  const [downPaymentPct, setDownPaymentPct] = useState(20)
  const [years, setYears] = useState(20)
  const [profitRate, setProfitRate] = useState(10)

  const results = useMemo(() => {
    const downPayment = (price * downPaymentPct) / 100
    const financedAmount = price - downPayment
    const monthlyRate = profitRate / 100 / 12
    const totalMonths = years * 12

    if (financedAmount <= 0 || totalMonths <= 0) {
      return { monthlyPayment: 0, totalPaid: 0, totalProfit: 0, financedAmount }
    }

    // Standard reducing-balance annuity formula. In a Diminishing Musharaka
    // structure this represents rent-on-remaining-share + buyout instalment,
    // and produces the same monthly figure banks quote.
    const monthlyPayment =
      monthlyRate === 0
        ? financedAmount / totalMonths
        : (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))) /
          (Math.pow(1 + monthlyRate, totalMonths) - 1)

    const totalPaid = monthlyPayment * totalMonths
    const totalProfit = totalPaid - financedAmount

    return { monthlyPayment, totalPaid, totalProfit, financedAmount }
  }, [price, downPaymentPct, years, profitRate])

  return (
    <section id="calculator" className="bg-emerald py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold-light">
            Calculator
          </p>
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Estimate your monthly payment
          </h2>
          <p className="mt-4 text-cream/75">
            Enter your numbers below. Everything updates instantly — nothing is sent
            anywhere.
          </p>
        </div>

        <div className="grid gap-8 rounded-2xl bg-card p-6 shadow-xl sm:p-10 md:grid-cols-5 md:gap-12">
          {/* Inputs */}
          <div className="space-y-7 md:col-span-3">
            <NumberField
              label="Property price"
              value={price}
              display={toLocalUnit(price)}
              min={1000000}
              max={100000000}
              step={100000}
              onChange={setPrice}
            />
            <Field
              label="Down payment"
              value={downPaymentPct}
              display={`${downPaymentPct}% · ${toLocalUnit((price * downPaymentPct) / 100)}`}
              min={5}
              max={50}
              step={1}
              onChange={setDownPaymentPct}
            />
            <Field
              label="Financing term"
              value={years}
              display={`${years} years`}
              min={5}
              max={25}
              step={1}
              onChange={setYears}
            />
            <Field
              label="Annual profit rate"
              value={profitRate}
              display={`${profitRate}%`}
              min={5}
              max={20}
              step={0.25}
              onChange={setProfitRate}
            />
            <p className="text-xs text-ink/50">
              Profit rate varies by bank and changes over time — check your bank&apos;s
              current rate before deciding.
            </p>
          </div>

          {/* Results */}
          <div className="flex flex-col justify-between rounded-xl bg-cream p-6 md:col-span-2">
            <div>
              <p className="text-sm text-ink/60">Estimated monthly payment</p>
              <p className="font-mono text-4xl font-medium text-emerald">
                Rs {formatPKR(results.monthlyPayment)}
              </p>
            </div>

            <div className="mt-8 space-y-4 border-t border-line pt-6">
              <Row label="Bank-financed amount" value={`Rs ${formatPKR(results.financedAmount)}`} />
              <Row label="Total paid over term" value={`Rs ${formatPKR(results.totalPaid)}`} />
              <Row label="Total rent/profit paid" value={`Rs ${formatPKR(results.totalProfit)}`} />
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-cream/60">
          This is an estimate for planning purposes only, based on a standard
          reducing-balance structure. Confirm exact figures with your bank before
          making a decision.
        </p>
      </div>
    </section>
  )
}

function NumberField({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-4">
        <div>
          <label className="text-sm font-medium text-ink/70">{label}</label>
          <p className="font-mono text-sm text-emerald">{display}</p>
        </div>
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-32 rounded-md border border-line bg-cream px-3 py-2 text-sm text-ink shadow-sm focus:border-emerald focus:outline-none focus:ring-2 focus:ring-emerald/20"
          aria-label={`${label} value`}
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="focus-ring h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-emerald"
        aria-label={label}
      />
    </div>
  )
}

function Field({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string
  value: number
  display: string
  min: number
  max: number
  step: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink/70">{label}</label>
        <span className="font-mono text-sm text-emerald">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="focus-ring h-2 w-full cursor-pointer appearance-none rounded-full bg-line accent-emerald"
        aria-label={label}
      />
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-sm text-ink/60">{label}</span>
      <span className="font-mono text-sm font-medium text-ink">{value}</span>
    </div>
  )
}
