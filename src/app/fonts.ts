import localFont from 'next/font/local';

/** Clash Display, Satoshi and Gambetta — Fontshare / Indian Type Foundry. */
export const clash = localFont({
  src: [
    { path: '../fonts/ClashDisplay-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/ClashDisplay-Semibold.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/ClashDisplay-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-clash',
  display: 'swap',
  fallback: ['Trebuchet MS', 'Arial', 'sans-serif'],
});

export const satoshi = localFont({
  src: [
    { path: '../fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  fallback: ['Avenir Next', 'Segoe UI', 'sans-serif'],
});

export const gambetta = localFont({
  src: [
    { path: '../fonts/Gambetta-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../fonts/Gambetta-MediumItalic.woff2', weight: '500', style: 'italic' },
    { path: '../fonts/Gambetta-BoldItalic.woff2', weight: '700', style: 'italic' },
  ],
  variable: '--font-gambetta',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});
