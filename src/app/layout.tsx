import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'H.A.B.I.B.I — Household costs, renewals & energy benchmarks',
  description:
    'One UK dashboard for monthly household spend, MOT and bill reminders, and electricity tariff checks against public benchmarks. Free to start.',
  icons: {
    icon: '/logo.jpeg',
  },
  openGraph: {
    title: 'H.A.B.I.B.I — Household costs, renewals & energy benchmarks',
    description:
      'Stop overpaying and missing household deadlines — one UK dashboard. Track bills, utilities, vehicles, and compare your electricity rate against public benchmarks.',
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