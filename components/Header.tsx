'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Rates', href: '/rates' },
  { label: 'Blog', href: '/blog' },
  { label: 'Calculator', href: '/#calculator' },
  { label: 'FAQ', href: '/#faq' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
        <a href="/" className="font-display text-base font-semibold text-cream sm:text-lg">
          Egtafy<span className="text-gold-light"> HalalHome</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-cream/90 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="focus-ring rounded transition hover:text-gold-light">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/#calculator"
            className="focus-ring hidden rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition hover:bg-gold-light sm:inline-flex"
          >
            Calculate now
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-cream transition hover:bg-cream/20 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
              <span className="block h-0.5 w-5 rounded-full bg-current" />
            </div>
          </button>
        </div>
      </nav>

      <div className={`px-4 pb-3 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="rounded-2xl border border-white/10 bg-ink/90 p-4 shadow-2xl backdrop-blur">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring mb-2 block rounded px-3 py-2 text-sm text-cream/90 transition hover:bg-white/10 hover:text-gold-light"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#calculator"
            className="focus-ring mt-2 inline-flex rounded-full bg-gold px-4 py-2 text-sm font-medium text-ink transition hover:bg-gold-light"
            onClick={() => setIsMenuOpen(false)}
          >
            Calculate now
          </a>
        </div>
      </div>
    </header>
  )
}
