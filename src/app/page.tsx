'use client';

import Container from '@/components/Container';
import Link from 'next/link';
import {
  Car,
  Home,
  Bell,
  MapPin,
  Shield,
  Trash2,
  GraduationCap,
  Zap,
  ChevronDown,
  ArrowRight,
  Check,
  Banknote,
  TrendingUp,
  Receipt,
  PiggyBank,
  BarChart3,
  CalendarX,
  RefreshCw,
  Lightbulb,
  ArrowUpRight,
} from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyItMattersSection />
      <RoiSection />
      <EnergyBenchmarkSection />
      <HowYouSaveSection />
      <WhatYouCanTrackSection />
      <SeeYourMoneySection />
      <HowItWorksSection />
      <AudienceSection />
      <PricingPreviewSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 grain-overlay">
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 45% 30%, rgba(13,107,110,0.12), transparent 55%), radial-gradient(ellipse 80% 40% at 65% 55%, rgba(2,132,199,0.05), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 flex flex-col gap-10 pt-16 pb-20 lg:flex-row lg:items-center lg:gap-16 lg:pt-24 lg:pb-28">
          {/* Left: copy */}
          <div className="flex-1 lg:max-w-[50%]">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-warm-300/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              UK household dashboard
            </p>
            {/* Headline variants — test A/B later */}
            <h1 className="font-serif text-[2.75rem] leading-[1.08] font-medium tracking-[-0.015em] text-white sm:text-[3.5rem] lg:text-[4rem]">
              Your household's
              <br />
              running costs,
              <br />
              deadlines, and
              <br />
              energy benchmarks
              <br />
              <span className="text-brand-300">— one place.</span>
            </h1>
            <p className="mt-5 max-w-md text-[1rem] leading-relaxed text-warm-300/80 sm:text-[1.125rem]">
              See your monthly spend clearly. Stay ahead of every renewal. Check
              your electricity rate against a public benchmark — so you spot
              overpayment before it rolls over.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://app.ihabibi.uk/register"
                className="btn-primary"
              >
                Start free
                <ArrowRight size={16} />
              </a>
              <a href="#roi" className="btn-secondary-light">
                See how it saves
                <ChevronDown size={16} />
              </a>
            </div>

            {/* Trust micro-line */}
            <p className="mt-5 text-xs text-warm-400/70">
              Free tier — one home, no credit card. Built in the UK.
            </p>
          </div>

          {/* Right: product preview — side-by-side mock */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none lg:max-w-[460px] xl:max-w-none">
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-black/50 backdrop-blur-sm ring-1 ring-white/5">
                {/* Header bar */}
                <div className="mb-3.5 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 text-[9px] font-bold text-white shadow shadow-sky-900/50">
                    H
                  </div>
                  <div className="leading-tight">
                    <div className="text-[8px] font-semibold uppercase tracking-[0.3em] text-sky-300/70">
                      Household
                    </div>
                    <div className="text-[12px] font-light text-white">
                      Monthly overview
                    </div>
                  </div>
                </div>

                {/* Summary cards row */}
                <div className="mb-3 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-violet-400/20 bg-violet-500/[0.06] p-2.5">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-violet-300/70">
                      Bills monthly
                    </p>
                    <p className="mt-1 text-[15px] font-bold tabular-nums text-white">
                      £342
                    </p>
                  </div>
                  <div className="rounded-xl border border-amber-400/20 bg-amber-500/[0.06] p-2.5">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-amber-200/70">
                      Due soon
                    </p>
                    <p className="mt-1 text-[15px] font-bold tabular-nums text-white">
                      4
                    </p>
                  </div>
                </div>

                {/* Total household monthly */}
                <div className="mb-3 rounded-xl border border-lime-400/20 bg-lime-500/[0.06] p-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-lime-300/70">
                    Total household monthly
                  </p>
                  <p className="mt-0.5 text-[1.25rem] font-bold tabular-nums text-white">
                    £1,847
                  </p>
                  <p className="mt-0.5 text-[9px] text-slate-400">
                    Bills + utilities + housing
                  </p>
                </div>

                {/* Electricity insight card */}
                <div className="rounded-xl border border-orange-400/25 bg-orange-500/[0.06] p-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-orange-300/70">
                    Electricity insight
                  </p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400">
                        Your unit rate
                      </span>
                      <span className="text-[11px] font-semibold tabular-nums text-white">
                        28.5p/kWh
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400">
                        Public benchmark
                      </span>
                      <span className="text-[11px] font-semibold tabular-nums text-emerald-300">
                        24.1p/kWh
                      </span>
                    </div>
                    <div className="h-px bg-white/8" />
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-slate-400">
                        Contract ends
                      </span>
                      <span className="text-[10px] font-medium text-orange-200">
                        12 Aug
                      </span>
                    </div>
                  </div>
                  <p className="mt-1.5 text-[7px] leading-snug text-slate-500">
                    Public tariff benchmark, not whole-of-market.
                  </p>
                </div>

                {/* Mini spend trend */}
                <div className="mt-3 rounded-xl border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Spend trend · this quarter
                  </p>
                  <div className="mt-1.5 flex items-end gap-1 h-10">
                    {[0.45, 0.55, 0.4, 0.65, 0.7, 0.55, 0.75, 0.6, 0.8, 0.7, 0.65, 0.9].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h * 100}%`,
                            background: `linear-gradient(to top, rgba(163,230,53,0.25), rgba(56,189,248,0.2))`,
                          }}
                        />
                      )
                    )}
                  </div>
                  <div className="mt-1 flex justify-between text-[8px] text-slate-500">
                    <span>Jan</span>
                    <span>Now</span>
                  </div>
                </div>
              </div>

              {/* Outer glow */}
              <div
                className="pointer-events-none absolute -inset-4 -z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 45%, rgba(14,165,233,0.05), transparent 65%)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY IT MATTERS — the financial reality
   ───────────────────────────────────────────── */
function WhyItMattersSection() {
  return (
    <section className="relative bg-white pt-section pb-section">
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker-teal mb-4">Why it matters</p>
          <h2 className="heading-lg max-w-3xl mx-auto">
            Most households have no idea
            <br />
            what they spend each month.
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            Bills, subscriptions, insurance, utilities, housing costs — they sit
            across different accounts, different dates, different providers.
            Without a single view, money leaks through silent renewals, tariff
            creep, and forgotten deadlines.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-7 text-center sm:text-left">
            <p className="kicker-amber">Unnoticed spend</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              £100s
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              Industry research suggests typical UK households overpay on
              auto-renewing insurance alone — often by £200 or more per policy
              per year.
            </p>
          </div>

          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-7 text-center sm:text-left">
            <p className="kicker-amber">Forgotten subscriptions</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              ~£25–40/mo
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              Streaming, apps, memberships — research shows UK households
              underestimate recurring subscription spend by roughly £25–40 per
              month.
            </p>
          </div>

          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-7 text-center sm:text-left">
            <p className="kicker-amber">Late fees & penalties</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              £100+
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              Council tax penalties, MOT fines, parking charges, late payment
              fees — these hit households every year. They are almost always
              avoidable.
            </p>
          </div>

          <div className="rounded-xl border border-orange-100 bg-orange-50/40 p-7 text-center sm:text-left">
            <p className="kicker-amber">Energy on the wrong tariff</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              £100s/yr
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              Many households stay on default rates months after a better deal
              existed. A simple unit-rate check against a public benchmark can
              flag hundreds a year.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] text-warm-400">
          H.A.B.I.B.I does not guess your bank balance — it organises what you
          already pay and compares what matters.
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROI — subscription pays for itself
   ───────────────────────────────────────────── */
function RoiSection() {
  return (
    <section id="roi" className="relative bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker-teal mb-4">Subscription pays for itself</p>
          <h2 className="heading-lg max-w-3xl mx-auto">
            You are already paying
            <br />
            for disorganisation.
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            This is the cheaper option. One found subscription or one energy
            review can cover a year of Pro. Everything else is upside.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-warm-200 bg-white p-8 shadow-sm">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-warm-400">
            Typical avoidable household leak (illustrative example)
          </p>

          <div className="mt-6 space-y-3 text-[15px]">
            <div className="flex items-center justify-between">
              <span className="text-warm-600">Forgotten subscriptions</span>
              <span className="font-medium tabular-nums text-warm-800">
                ~£25–40/mo
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-warm-600">
                One insurance auto-renewal
              </span>
              <span className="font-medium tabular-nums text-warm-800">
                ~£15–25/mo equivalent
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-warm-600">Electricity above benchmark</span>
              <span className="font-medium tabular-nums text-warm-800">
                ~£10–30/mo
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-warm-600">
                One avoided MOT / council fine
              </span>
              <span className="font-medium tabular-nums text-warm-800">
                £100+ (annualised)
              </span>
            </div>
            <div className="h-px bg-warm-200" />
            <div className="flex items-center justify-between">
              <span className="font-semibold text-warm-800">
                Realistic annual upside
              </span>
              <span className="font-bold tabular-nums text-brand-700">
                £500–1,500+
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-brand-100 bg-brand-50/30 p-4 text-center">
            <p className="text-[14px] leading-relaxed text-warm-600">
              H.A.B.I.B.I Starter{' '}
              <span className="font-semibold text-warm-800">£4.99/mo</span> (£60/yr)
              <span className="mx-2 text-warm-300">·</span>
              Pro (most households){' '}
              <span className="font-semibold text-warm-800">£9.99/mo</span> (£120/yr)
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[14px] leading-relaxed text-warm-500">
          One found subscription or one energy review can cover a year of Pro.
          Everything else is upside. You are already paying for disorganisation.
          This is the cheaper option.
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ENERGY BENCHMARKS — public today, community tomorrow
   ───────────────────────────────────────────── */
function EnergyBenchmarkSection() {
  return (
    <section id="energy-benchmarks" className="relative bg-white pt-section pb-section">
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker-teal mb-4">Energy benchmarks</p>
          <h2 className="heading-lg max-w-3xl mx-auto">
            Public benchmarks today.
            <br />
            Community insight tomorrow.
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            Start with an objective yardstick. Graduate to privacy-first
            household comparisons as the community grows.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Today */}
          <div className="rounded-2xl border border-warm-200 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="status-live">Live now</span>
            </div>
            <h3 className="font-sans text-[18px] font-semibold text-warm-800">
              Public tariff benchmarks
            </h3>
            <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-warm-600">
              <li className="flex items-start gap-2.5">
                <Check size={15} className="mt-0.5 shrink-0 text-sage" />
                Enter your electricity tariff — compare to a public Octopus
                benchmark (single-supplier reference, not whole-of-market)
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={15} className="mt-0.5 shrink-0 text-sage" />
                Configurable benchmarks flag high standing charges and unit
                rates for gas and electricity
              </li>
              <li className="flex items-start gap-2.5">
                <Check size={15} className="mt-0.5 shrink-0 text-sage" />
                Contract end dates surfaced so you act before rollover, not
                after
              </li>
            </ul>
          </div>

          {/* Tomorrow */}
          <div className="rounded-2xl border border-warm-200 bg-warm-50 p-8 shadow-sm">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="status-planned">Planned</span>
            </div>
            <h3 className="font-sans text-[18px] font-semibold text-warm-800">
              Anonymised community comparisons
            </h3>
            <ul className="mt-5 space-y-3 text-[14px] leading-relaxed text-warm-600">
              <li className="flex items-start gap-2.5">
                <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-brand-600" />
                See what similar homes in your postcode band pay for utilities
                and recurring bills
              </li>
              <li className="flex items-start gap-2.5">
                <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-brand-600" />
                Privacy-first: opt-in aggregates only, no identifiable
                neighbours
              </li>
              <li className="flex items-start gap-2.5">
                <ArrowUpRight size={15} className="mt-0.5 shrink-0 text-brand-600" />
                Your subscription gets smarter over time — benchmarks improve
                as more households join
              </li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-[12px] leading-relaxed text-warm-400">
          Benchmarks are indicative, not financial advice. Savings depend on your
          usage, region, and switching choices.
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW YOU SAVE
   ───────────────────────────────────────────── */
function HowYouSaveSection() {
  const savings = [
    {
      icon: <RefreshCw size={24} />,
      title: 'Spot price creep on auto-renewals',
      body: 'When an insurance policy or subscription renews at a higher rate, you see it in your monthly total. Timely reminders give you a window to compare and switch before you overpay.',
    },
    {
      icon: <Banknote size={24} />,
      title: 'Find subscriptions you forgot about',
      body: 'Every recurring payment is listed by category. When you see the running total, unused streaming services and forgotten memberships become obvious — and easy to cancel.',
    },
    {
      icon: <CalendarX size={24} />,
      title: 'Avoid missed deadlines and late fees',
      body: 'MOT expiry, council tax deadlines, insurance renewals — missing any of these costs money. H.A.B.I.B.I surfaces them with enough time to act, not after the penalty lands.',
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'See if your changes actually lower your spend',
      body: 'Cancelled a subscription? Switched energy provider? Renegotiated broadband? Watch your monthly total update and your spend trend shift — so you know your effort made a difference.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Check your energy against public benchmarks',
      body: 'See when your unit rate or standing charge sits above a reference tariff. Pair with renewal reminders so you review before the price rolls over.',
    },
  ];

  return (
    <section className="relative bg-slate-950 pt-section pb-section grain-overlay">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(13,107,110,0.06), transparent 55%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="kicker-light mb-4">How H.A.B.I.B.I helps you save</p>
          <h2 className="font-serif text-[2.25rem] leading-[1.15] font-medium tracking-[-0.01em] text-white sm:text-[2.75rem]">
            Clarity pays for itself.
          </h2>
          <p className="subhead-light mt-5 max-w-2xl mx-auto">
            You cannot fix what you cannot see. H.A.B.I.B.I turns scattered
            household costs into a single clear view — so you spot waste, act
            on deadlines, and see your savings in real terms.
          </p>
        </div>

        <div className="relative z-10 mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savings.map((s) => (
            <div
              key={s.title}
              className="flex gap-4 rounded-xl border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <div className="mt-0.5 shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-700/30 text-brand-300">
                {s.icon}
              </div>
              <div>
                <h3 className="font-sans text-[15px] font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-warm-300/75">
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 mx-auto mt-10 max-w-2xl rounded-xl border border-brand-500/15 bg-brand-500/[0.06] p-5 text-center backdrop-blur-sm">
          <p className="text-[13px] leading-relaxed text-warm-300/80">
            <strong className="text-white">
              No spreadsheets. No bank-statement archaeology.
            </strong>{' '}
            Add your recurring costs once and H.A.B.I.B.I keeps the picture up
            to date. Cancel or switch something? Update the amount and your
            spend trend adjusts immediately.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHAT YOU CAN TRACK
   ───────────────────────────────────────────── */
function WhatYouCanTrackSection() {
  const features = [
    {
      icon: <Receipt size={22} />,
      title: 'Bills & subscriptions',
      body: 'Track every recurring payment — broadband, streaming, insurance, mobile, memberships. See monthly totals per category, know when each one next renews.',
    },
    {
      icon: <BarChart3 size={22} />,
      title: 'Household finance',
      body: 'Visualise total monthly spend split across bills, utilities, and housing. Weekly, biweekly, or monthly trend charts. See fixed vs variable costs at a glance.',
    },
    {
      icon: <Zap size={22} />,
      title: 'Utilities & energy',
      body: 'Log suppliers, tariffs, and contract ends. Get savings signals when your rates sit above benchmarks, plus a live public electricity tariff benchmark. Gas, water, and council insights expanding.',
    },
    {
      icon: <Car size={22} />,
      title: 'Vehicles',
      body: 'Add a registration number and we pull make, model, year, tax status, and MOT expiry from the DVLA. Track every MOT, insurance policy, and tax renewal in one place.',
    },
    {
      icon: <Home size={22} />,
      title: 'Housing costs',
      body: 'Add mortgage payments, rent, or rental income. Finance aggregates housing alongside bills and utilities — so your total monthly picture is complete.',
    },
    {
      icon: <Bell size={22} />,
      title: 'Reminders & due dates',
      body: 'Custom and auto-generated reminders with due dates and status tracking. Overdue items surface first. Snooze what you cannot do yet. Mark done when complete.',
    },
    {
      icon: <MapPin size={22} />,
      title: 'Local information',
      body: 'Council name, Ordnance Survey Places data, nearby transport links, and neighbourhood context — surfaced automatically from your postcode.',
    },
    {
      icon: <Shield size={22} />,
      title: 'Neighbourhood safety',
      body: 'Policing data and crime context via police.uk. Understand your area before you move, renew your insurance, or make decisions about your home.',
    },
    {
      icon: <Trash2 size={22} />,
      title: 'Waste & recycling',
      body: 'Bin schedule prediction from recurring collection patterns, with bank holiday awareness. Council links for local rules. Right bin, right day, every time.',
    },
    {
      icon: <GraduationCap size={22} />,
      title: 'Schools & education',
      body: 'Nearby schools and colleges surfaced from your property location. Useful when moving, planning catchment areas, or researching a neighbourhood.',
    },
  ];

  return (
    <section id="what-it-tracks" className="relative bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">What you can track</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Every cost your
            <br />
            household carries.
          </h2>
          <p className="subhead mt-5 max-w-xl mx-auto">
            From broadband bills to mortgage payments, MOT dates to bin day — one
            clear dashboard that shows you what is due, what you are spending,
            and where you could save.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col rounded-xl border border-warm-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                {f.icon}
              </div>
              <h3 className="font-sans text-[15px] font-semibold text-warm-800">
                {f.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SEE WHERE YOUR MONEY GOES — trends & graphs
   ───────────────────────────────────────────── */
function SeeYourMoneySection() {
  return (
    <section className="relative bg-white pt-section pb-section">
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker-teal mb-4">See your money clearly</p>
          <h2 className="heading-lg max-w-3xl mx-auto">
            One picture of your
            <br />
            household spend.
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            Stop adding up spreadsheets or checking six different bank
            statements. H.A.B.I.B.I builds your complete spend picture — bills,
            utilities, and housing — and shows you how it changes over time.
          </p>
        </div>

        {/* Visual explainer cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-warm-200 bg-warm-50 p-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <TrendingUp size={24} />
            </div>
            <h3 className="font-sans text-[16px] font-semibold text-warm-800">
              Spend trends over time
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-warm-500">
              Weekly, biweekly, or monthly stacked charts show your expected
              spend across utilities, bills, and housing. Spot rising costs
              before they surprise you.
            </p>
          </div>

          <div className="rounded-xl border border-warm-200 bg-warm-50 p-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <PiggyBank size={24} />
            </div>
            <h3 className="font-sans text-[16px] font-semibold text-warm-800">
              Know what is fixed vs variable
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-warm-500">
              Fixed costs — bills, housing, regular charges — shown against
              variable spend. When you cancel a subscription or switch a
              provider, see the difference in your monthly total.
            </p>
          </div>

          <div className="rounded-xl border border-warm-200 bg-warm-50 p-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <CalendarX size={24} />
            </div>
            <h3 className="font-sans text-[16px] font-semibold text-warm-800">
              Upcoming payments at a glance
            </h3>
            <p className="mt-2.5 text-[14px] leading-relaxed text-warm-500">
              See every dated payment due in the next window — bills, housing,
              insurance renewals. Know what is coming before it leaves your
              account.
            </p>
          </div>
        </div>

        {/* Category breakdown visual hint */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-100 bg-brand-50/30 p-7 text-center">
          <p className="text-[14px] leading-relaxed text-warm-600">
            <strong className="text-warm-800">Bills category split.</strong> See
            your monthly bills broken down by type — broadband, streaming,
            insurance, mobile, and more. A pie chart view helps you spot which
            categories take the most, and where a cancellation or switch would
            make the biggest difference.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
   ───────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Add your household',
      body: 'Enter your postcode and vehicle registrations. We pull council data and DVLA records — no manual research required. Add your recurring bills and housing costs in under a minute each.',
    },
    {
      number: '2',
      title: 'See your monthly spend',
      body: 'Your total household cost appears — bills, utilities, housing, all in one number. Spend trends, category breakdowns, and fixed vs variable charts make the picture clear.',
    },
    {
      number: '3',
      title: 'Stay ahead of every payment',
      body: 'Overdue items appear first. Today\u2019s deadlines are highlighted. Upcoming payments are listed in date order. Know what is due before it catches you out — and spot your savings as they build.',
    },
  ];

  return (
    <section className="bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">How it works</p>
          <h2 className="heading-lg">Set it up once.</h2>
          <p className="subhead mt-5">
            Add what you own and what you pay. The dashboard keeps the picture
            current.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-warm-200">
                <span className="font-mono text-[1.25rem] font-medium">
                  {step.number}
                </span>
              </div>
              <h3 className="font-sans text-lg font-semibold text-warm-800">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-warm-500">
                {step.body}
              </p>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div className="mt-6 hidden sm:block">
                  <ArrowRight size={18} className="mx-auto text-warm-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   AUDIENCE — who it is for
   ───────────────────────────────────────────── */
function AudienceSection() {
  const personas = [
    {
      label: 'Parents & families',
      body: 'You are managing 30+ recurring dates and payments — MOTs, insurance, streaming services, school dates, bin collections. One dashboard replaces the mental load and shows you what your household actually costs each month.',
    },
    {
      label: 'Homeowners',
      body: 'Buildings insurance, boiler servicing, mortgage payments, bin schedules, council tax — everything the landlord used to handle is now on you. H.A.B.I.B.I helps you track every cost and deadline, and see your full monthly spend in one place.',
    },
    {
      label: 'Landlords & multi-property owners',
      body: 'Multiple properties mean multiple bills, multiple council deadlines, multiple compliance dates. Track costs per property, compare spend across your portfolio, and never miss a gas safety or EICR renewal.',
    },
    {
      label: 'Multi-car households',
      body: 'Each car has its own MOT date, insurance renewal, and tax deadline. They never align. We track them all and surface the next one due — alongside your total vehicle running costs.',
    },
    {
      label: 'Renters',
      body: 'You still have contents insurance, utility contracts, subscriptions, and tenancy renewals to manage. Track what you pay, spot where you can save, and stay on top of every renewal date.',
    },
  ];

  return (
    <section className="bg-white pt-section pb-section">
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">Who it is for</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Anyone managing a home
            <br />
            and its costs.
          </h2>
          <p className="subhead mt-5">
            Homeowners, renters, landlords, families, and anyone with more than
            one vehicle.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <div key={p.label} className="card-light">
              <h3 className="font-sans text-lg font-semibold text-warm-800">
                {p.label}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-warm-500">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING — aligned to product catalog
   ───────────────────────────────────────────── */
function PricingPreviewSection() {
  const tiers = [
    {
      name: 'Free',
      kicker: 'Start here',
      price: '£0',
      period: 'One home',
      description:
        'Bills, basic utility comparison, vehicles & reminders. No credit card required.',
      features: [
        '1 property',
        'Bills & subscriptions tracking',
        'Basic utility comparison',
        'DVLA lookup & MOT tracking',
        'Insurance & tax tracking',
        'Monthly spend totals & due-soon counts',
        'Manual reminders',
        'Local info & safety data',
        'Bin schedule prediction',
      ],
      cta: 'Start free',
      ctaUrl: 'https://app.ihabibi.uk/register',
      highlighted: false,
    },
    {
      name: 'Starter',
      kicker: 'Most households',
      price: '£4.99',
      period: '/mo · £49/yr',
      description: 'Up to 3 homes, advanced utility comparison, secure notes.',
      features: [
        'Everything in Free',
        'Up to 3 properties',
        'Advanced utility comparison',
        'Secure notes',
        'Spend trends & category breakdowns',
        'Auto-generated reminders',
        'Custom reminder types & snooze',
      ],
      cta: 'Start free',
      ctaUrl: 'https://app.ihabibi.uk/register',
      highlighted: true,
    },
    {
      name: 'Pro',
      kicker: 'Power users',
      price: '£9.99',
      period: '/mo · £99/yr',
      description:
        'Up to 10 homes, finance charts, optimisation insights.',
      features: [
        'Everything in Starter',
        'Up to 10 properties',
        'Finance charts & fixed/variable splits',
        'Optimisation insights',
        'Per-property spend comparison',
        'Priority support',
      ],
      cta: 'Start free',
      ctaUrl: 'https://app.ihabibi.uk/register',
      highlighted: false,
    },
    {
      name: 'Premium',
      kicker: 'Portfolios',
      price: '£19.99',
      period: '/mo · £199/yr',
      description: 'Unlimited properties. For landlords and large portfolios.',
      features: [
        'Everything in Pro',
        'Unlimited properties',
        'Advanced reporting & export',
        'Compliance tracking (gas safety, EICR)',
        'Community benchmarking when live',
      ],
      cta: 'Start free',
      ctaUrl: 'https://app.ihabibi.uk/register',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="bg-white pt-section pb-section">
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">Pricing</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Free to start.
            <br />
            Fair when you upgrade.
          </h2>
          <p className="subhead mt-5">
            Start on the free tier. Upgrade when you see the value. No
            surprises, no auto-renewal traps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm ${
                tier.highlighted
                  ? 'border-brand-300 ring-1 ring-brand-200/50 shadow-md'
                  : 'border-warm-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-6">
                  <span className="status-live">Most popular</span>
                </div>
              )}

              <div>
                <p
                  className={
                    tier.highlighted ? 'kicker-teal' : 'kicker-muted'
                  }
                >
                  {tier.kicker}
                </p>
                <p className="mt-2 font-serif text-[1.75rem] leading-none font-medium tracking-tight text-warm-800">
                  {tier.name}
                </p>
                <p className="mt-1 font-serif text-[2.25rem] leading-none font-medium tracking-tight text-warm-800">
                  {tier.price}
                </p>
                <p className="mt-1 text-[13px] text-warm-400">
                  {tier.period}
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-warm-500">
                  {tier.description}
                </p>
              </div>

              <hr className="my-6 border-warm-200" />

              <ul className="flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[14px] text-warm-700"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-sage" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaUrl}
                className={`mt-7 w-full text-center ${
                  tier.highlighted ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                {tier.cta}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* No-brainer line */}
        <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-relaxed text-warm-500">
          Less than two coffees a month to see every renewal, every
          subscription, and whether your electricity still looks fair.
        </p>

        {/* Fair pricing promise */}
        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm">
          <p className="text-[14px] leading-relaxed text-warm-500">
            <strong className="text-warm-700">Our pricing principles:</strong>{' '}
            One price per account — no per-vehicle or per-property charges.
            Annual billing saves ~17%. Clear pricing published before anyone
            pays. No auto-renewal traps. Cancel any time.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────── */
function FaqSection() {
  const faqs = [
    {
      q: 'How does H.A.B.I.B.I help me save money?',
      a: 'It gives you a single view of every recurring household cost — bills, subscriptions, insurance, utilities, housing. When you can see the total each month, unused services and creeping price rises become obvious. Timely reminders give you a window to switch or cancel before auto-renewals lock you in. And when you do make a change, your spend total updates so you can see the difference.',
    },
    {
      q: 'How do utility comparisons work?',
      a: 'You enter your tariff details — unit rate, standing charge, supplier, contract end date. H.A.B.I.B.I compares your electricity rate against a public Octopus benchmark (a single-supplier reference, not whole-of-market). If your rate sits above the benchmark, you get a savings signal. Gas, water, and council tax insights are expanding. Community anonymised comparisons are planned — opt-in aggregates only, no identifiable neighbours.',
    },
    {
      q: 'Is £9.99/month worth it?',
      a: 'For most households, one cancelled subscription or one energy tariff review saves more than a year of Pro. The ROI section above shows illustrative maths: a typical household can avoid £500–1,500+ in leaks annually. One found subscription or one energy review can cover a year of Pro. Everything else is upside.',
    },
    {
      q: 'Do you connect to my bank?',
      a: 'No. H.A.B.I.B.I does not use open banking or scrape your transactions. You enter the data you want to track. This is a privacy advantage — your financial data stays with you, not with a third-party data aggregator.',
    },
    {
      q: 'Is this just a reminders app?',
      a: 'No. A reminders app can only tell you what you already told it. H.A.B.I.B.I proactively surfaces things you might not have thought to track — MOT expiry from DVLA data, bin day from your council\u2019s collection pattern, insurance renewal windows. It also tracks your full household spend across bills, utilities, and housing — something no reminders app does.',
    },
    {
      q: 'What does the DVLA vehicle lookup do?',
      a: 'Enter a UK registration number and we pull the vehicle\u2019s make, model, year, tax status, and MOT expiry directly from DVLA records. No manual data entry for the basics. We then track upcoming renewals and alert you before they expire.',
    },
    {
      q: 'Does it work for renters?',
      a: 'Yes. While some features (like bin schedules and council data) are property-specific, renters can still track contents insurance, utility contracts, broadband and streaming bills, vehicle compliance, and personal reminders. You can also track your total monthly spend — just like a homeowner.',
    },
    {
      q: 'Can I manage multiple properties?',
      a: 'Yes. Multi-property support is built in. Each property gets its own local context — council, bin schedules, weather, and reminders — and its own spend picture. Landlords can compare costs across properties and manage compliance dates from one account.',
    },
    {
      q: 'How is my data protected?',
      a: 'We use JWT-based authentication with short-lived access tokens, bcrypt-hashed passwords, parameterised database queries via Prisma, and strict input validation on all endpoints. Your household data is never sold, shared, or used for advertising. Full stop.',
    },
    {
      q: 'What is actually working right now?',
      a: 'Vehicle management (DVLA lookup, MOT, insurance, and tax tracking), reminders (typed, status-tracked, with overdue awareness), bills and subscriptions tracking with monthly totals and due-soon surfacing, finance overview with spend trends and category breakdowns, property intelligence (weather, local info, bin schedule prediction), and electricity tariff benchmarking against public rates. Mobile notifications are in active development.',
    },
    {
      q: 'How much does it cost?',
      a: 'Free for one property. Starter is £4.99/mo or £49/yr for up to 3 properties. Pro is £9.99/mo or £99/yr for up to 10 properties — this suits most households. Premium is £19.99/mo or £199/yr for unlimited properties. Annual billing saves roughly 17%. No per-vehicle or per-property fees.',
    },
    {
      q: 'Where does the data come from?',
      a: 'DVLA for vehicle data. Ordnance Survey Places API for property geolocation. Police.uk for neighbourhood safety. Open-Meteo for weather forecasts. Council websites for bin schedules. We use real, traceable sources — no black boxes.',
    },
  ];

  return (
    <section id="faq" className="bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="kicker-teal mb-4 text-center">FAQ</p>
          <h2 className="heading mb-16 text-center">Questions we hear often.</h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border transition-colors ${
        open
          ? 'border-brand-200 bg-brand-50/20 shadow-sm'
          : 'border-warm-200 bg-white shadow-sm hover:shadow-md'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] font-semibold text-warm-800 pr-4">
          {question}
        </span>
        <span
          className={`mt-0.5 shrink-0 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        >
          <ChevronDown size={20} className="text-warm-300" />
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div>
          <p className="px-6 pb-5 text-[15px] leading-relaxed text-warm-500">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA — dual path
   ───────────────────────────────────────────── */
function FinalCtaSection() {
  return (
    <section id="waitlist" className="relative bg-slate-900 pt-section pb-section grain-overlay">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(13,107,110,0.08), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <p className="kicker-light mb-5">Get started</p>
          <h2 className="font-serif text-[2.25rem] leading-[1.15] font-medium tracking-[-0.01em] text-white sm:text-[2.75rem]">
            See what your household
            <br />
            really costs each month.
          </h2>
          <p className="subhead-light mt-5 max-w-lg mx-auto">
            Start free today. Or join the waitlist for product updates and the
            community benchmarks launch.
          </p>

          {/* Dual CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://app.ihabibi.uk/register"
              className="btn-primary px-8 py-3.5"
            >
              Start free — no card
              <ArrowRight size={16} />
            </a>
            <span className="hidden text-warm-400 sm:inline">or</span>
            <Link
              href="/waitlist"
              className="btn-secondary-light px-8 py-3.5"
            >
              Join waitlist
            </Link>
          </div>

          <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-warm-400">
            <span>Built in the United Kingdom</span>
            <span aria-hidden="true" className="text-warm-500">
              ·
            </span>
            <span>GDPR minded</span>
            <span aria-hidden="true" className="text-warm-500">
              ·
            </span>
            <span>JWT auth</span>
            <span aria-hidden="true" className="text-warm-500">
              ·
            </span>
            <span>Data you enter</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
