import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { clash, gambetta, satoshi } from './fonts';

const title = 'Habibi — calls you before things slip';
const description =
  'Personal life admin for UK households. Today’s list, a PIN-locked document vault, bills, vehicles and home costs. Phone reminder calls are coming soon on Pro. Free for one home. No bank login.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ihabibi.uk'),
  title,
  description,
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://ihabibi.uk',
    locale: 'en_GB',
    siteName: 'Habibi',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${clash.variable} ${satoshi.variable} ${gambetta.variable}`}>
      <body className="min-h-screen antialiased">
        <Script id="hb-motion" strategy="beforeInteractive">
          {`(function(){try{var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;var shot=/(?:^|[?&])shot=1(?:&|$)/.test(location.search);if(reduce||shot)document.documentElement.classList.add('is-settled');else document.documentElement.classList.add('js-motion');}catch(e){}})();`}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
