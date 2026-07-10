/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#16231F',
        cream: '#F3F5F1',
        card: '#FFFFFF',
        emerald: {
          DEFAULT: '#1F4B3F',
          light: '#2E6155',
          dark: '#122E27',
        },
        gold: {
          DEFAULT: '#B98A3D',
          light: '#D3AC63',
          dark: '#8F6A2A',
        },
        sage: '#6E8F82',
        line: '#DDE2D9',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        lattice: "url('/images/lattice.svg')",
      },
    },
  },
  plugins: [],
}
