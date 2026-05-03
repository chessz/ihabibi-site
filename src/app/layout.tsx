import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'H.A.B.I.B.I — Household OS',
  description:
    'The household command centre that tracks every renewal, deadline, and responsibility across your home, vehicles, and local area.',
  openGraph: {
    title: 'H.A.B.I.B.I — Household OS',
    description:
      'MOT, insurance, bin day, council deadlines, school dates — tracked and surfaced before they become problems.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}