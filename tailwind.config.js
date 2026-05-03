/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F9F9',
          100: '#D7F0F0',
          200: '#B0E2E2',
          300: '#80CDCD',
          400: '#4DB3B3',
          500: '#2D9999',
          600: '#1A7A7A',
          700: '#0D6B6E',
          800: '#0A5558',
          900: '#084547',
        },
        warm: {
          50: '#FAF9F7',
          100: '#F5F2EF',
          200: '#E8E4E0',
          300: '#D5CFC9',
          400: '#9C9792',
          500: '#6B6560',
          600: '#4A4541',
          700: '#2D2A27',
          800: '#1A1A1A',
          900: '#0D0C0B',
        },
        amber: {
          DEFAULT: '#C2780A',
          light: '#F5A623',
          dark: '#9C5F08',
        },
        sage: {
          DEFAULT: '#7A9A8B',
          light: '#A3BFB3',
          dark: '#5C7A6E',
        },
        slate: {
          950: '#020617',
          900: '#0F172A',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Lora', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      spacing: {
        section: '7.5rem',
        'section-sm': '5rem',
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        card: '0.75rem',
      },
    },
  },
  plugins: [],
};