type RateRow = {
  bank: string
  product: string
  rate: string
  downPayment: string
  tenure: string
  structure: string
}

const rows: RateRow[] = [
  {
    bank: 'Meezan Bank',
    product: 'Easy Home',
    rate: '12.49% fixed (first 3 yrs), then variable — or 5%/8% fixed for 10 yrs under Mera Ghar Mera Ashiana govt scheme',
    downPayment: '10% (subsidized) / up to 35% standard',
    tenure: '25 years',
    structure: 'Diminishing Musharakah',
  },
  {
    bank: 'HBL Islamic',
    product: 'HBL Islamic HomeFinance',
    rate: 'Floor 8%, cap 30%, variable (fixed available at bank discretion)',
    downPayment: 'Up to 70% financed',
    tenure: '25 years',
    structure: 'Musharakah (Shirkat-ul-Milk)',
  },
  {
    bank: 'Dubai Islamic Bank Pakistan',
    product: 'Home Finance',
    rate: 'Variable — KIBOR + margin, revised every 6–12 months',
    downPayment: 'Not publicly listed / up to Rs. 75 million financing',
    tenure: 'Up to Rs. 75 million financing',
    structure: 'Shirkat-ul-melk cum Ijarah',
  },
  {
    bank: 'BankIslami',
    product: 'MUSKUN-Islami',
    rate: 'Rate on request',
    downPayment: 'Not publicly listed',
    tenure: 'Rs. 200K – 150 million financing',
    structure: 'Musharakah units',
  },
  {
    bank: 'Bank Alfalah Islamic',
    product: 'Roshan Apna Ghar (overseas Pakistanis)',
    rate: 'Without lien: 1yr KIBOR + 1.5% / With lien: 1yr KIBOR only',
    downPayment: 'Up to 99% with RDA/NPC lien',
    tenure: '25 years',
    structure: 'Shariah-compliant',
  },
]

const headers = ['Bank', 'Product Name', 'Profit Rate', 'Down Payment', 'Max Tenure', 'Structure Type']

export default function RatesTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_25px_70px_-35px_rgba(22,35,31,0.35)]">
      <div className="hidden md:block">
        <table className="min-w-full divide-y divide-line text-left">
          <thead className="bg-cream/80">
            <tr>
              {headers.map((header) => (
                <th key={header} className="px-5 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-sage">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-card">
            {rows.map((row) => (
              <tr key={row.bank} className="align-top text-sm text-ink/80">
                <td className="px-5 py-4 font-display text-base font-semibold text-ink">{row.bank}</td>
                <td className="px-5 py-4">{row.product}</td>
                <td className="max-w-[280px] px-5 py-4">{row.rate}</td>
                <td className="max-w-[220px] px-5 py-4">{row.downPayment}</td>
                <td className="px-5 py-4">{row.tenure}</td>
                <td className="px-5 py-4">{row.structure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 p-4 md:hidden">
        {rows.map((row) => (
          <div key={row.bank} className="rounded-2xl border border-line bg-cream/70 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold text-ink">{row.bank}</p>
                <p className="mt-1 text-sm text-ink/70">{row.product}</p>
              </div>
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald">
                {row.structure}
              </span>
            </div>

            <dl className="mt-4 space-y-3 text-sm text-ink/80">
              <div className="flex justify-between gap-4 border-b border-line/70 pb-2">
                <dt className="font-medium text-ink">Profit Rate</dt>
                <dd className="text-right">{row.rate}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line/70 pb-2">
                <dt className="font-medium text-ink">Down Payment</dt>
                <dd className="text-right">{row.downPayment}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-line/70 pb-2">
                <dt className="font-medium text-ink">Max Tenure</dt>
                <dd className="text-right">{row.tenure}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="font-medium text-ink">Structure</dt>
                <dd className="text-right">{row.structure}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}
