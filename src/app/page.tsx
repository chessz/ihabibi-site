'use client';

import Container from '@/components/Container';
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
  ChevronUp,
  ArrowRight,
  Check,
  Clock,
  Phone,
  Users,
} from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <CostUrgencySection />
      <AudienceSection />
      <RoadmapSection />
      <PricingPreviewSection />
      <FaqSection />
      <WaitlistCtaSection />
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
            'radial-gradient(ellipse 55% 40% at 45% 35%, rgba(13,107,110,0.10), transparent 55%), radial-gradient(ellipse 80% 50% at 60% 60%, rgba(2,132,199,0.04), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 flex flex-col gap-12 pt-20 pb-28 lg:flex-row lg:items-center lg:gap-20 lg:pt-28 lg:pb-36">
          {/* Left: copy */}
          <div className="flex-1 lg:max-w-[52%]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-300/80 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Household OS
            </p>
            <h1 className="font-serif text-[3.25rem] leading-[1.06] font-medium tracking-[-0.015em] text-white sm:text-[4rem] lg:text-[4.75rem]">
              Everything your
              <br />
              household needs
              <br />
              from you, in
              <br />
              one place.
            </h1>
            <p className="mt-6 max-w-lg text-[1.125rem] leading-relaxed text-warm-300/80">
              MOTs, insurance, bin day, council deadlines, school dates, utility renewals —
              surfaced before they become problems. No more missed renewals. No more late-night
              worry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#waitlist" className="btn-primary">
                Get early access
                <ArrowRight size={16} />
              </a>
              <a href="#features" className="btn-secondary-light">
                See what it tracks
                <ChevronDown size={16} />
              </a>
            </div>

            {/* Trust micro-line */}
            <p className="mt-6 text-xs text-warm-400/70">
              Free during early access. No credit card. Built in the UK.
            </p>
          </div>

          {/* Right: product preview */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-[440px] lg:max-w-none">
              {/* Dashboard mockup */}
              <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/50 backdrop-blur-sm ring-1 ring-white/5">
                {/* Header bar */}
                <div className="mb-4 flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-[10px] font-bold text-white shadow shadow-sky-900/50">
                    H
                  </div>
                  <div className="leading-tight">
                    <div className="text-[9px] font-semibold uppercase tracking-[0.3em] text-sky-300/70">
                      Household
                    </div>
                    <div className="text-[13px] font-light text-white">Good evening</div>
                  </div>
                </div>

                {/* Needs action panel */}
                <div className="rounded-xl border border-rose-400/30 bg-gradient-to-br from-rose-500/[0.10] to-slate-950/90 p-3.5">
                  <div className="mb-2.5 border-l-2 border-rose-400/80 pl-2.5">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-rose-300/80">
                      Needs action
                    </p>
                    <p className="text-[13px] font-semibold text-white">
                      Overdue, today & this week
                    </p>
                  </div>

                  {/* MOT overdue item */}
                  <div className="mb-2 rounded-lg border border-rose-500/30 bg-rose-950/30 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="font-mono text-[12px] font-medium text-rose-50">
                          AB12 CDE
                        </span>
                        <span className="ml-2 text-[10px] text-rose-200/60">
                          Vehicle · MOT overdue
                        </span>
                      </div>
                      <span className="shrink-0 rounded-md border border-white/10 px-2 py-0.5 text-[10px] text-sky-200/90">
                        Fix MOT
                      </span>
                    </div>
                  </div>

                  {/* Due today */}
                  <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.08] px-3 py-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-white">
                        Renew home insurance
                      </span>
                      <span className="text-[10px] tabular-nums text-amber-200/80">
                        Today
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bin day chip */}
                <div className="mt-3 rounded-xl border border-lime-500/20 bg-lime-500/[0.05] p-3.5">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-lime-300/60">
                    Next bin day
                  </p>
                  <p className="mt-1 text-[13px] font-medium text-white">
                    Recycling{' '}
                    <span className="font-normal tabular-nums text-lime-200/80">
                      — Mon 12 May
                    </span>
                  </p>
                </div>

                {/* Placeholder note */}
                <p className="mt-3 text-center text-[10px] text-slate-600/60 italic">
                  Real product screenshot coming soon
                </p>
              </div>

              {/* Outer glow */}
              <div
                className="pointer-events-none absolute -inset-6 -z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 45%, rgba(14,165,233,0.04), transparent 65%)',
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
   FEATURES — what it tracks
   ───────────────────────────────────────────── */
function FeatureSection() {
  const features = [
    {
      icon: <Car size={22} />,
      title: 'Vehicles',
      body: 'Add a registration number and we pull make, model, year, tax status, and MOT expiry from the DVLA. Track every MOT, insurance policy, and tax renewal in one place.',
    },
    {
      icon: <Home size={22} />,
      title: 'Property',
      body: 'Set your home address to unlock weather forecasts, bin day predictions, council information, utilities review dates, and local data — all per property.',
    },
    {
      icon: <Bell size={22} />,
      title: 'Reminders',
      body: 'Custom and auto-generated reminders with due dates, types, and status tracking. Overdue items surface first. Snooze what you cannot do yet. Mark done when complete.',
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
    {
      icon: <Zap size={22} />,
      title: 'Utilities',
      body: 'Track your current suppliers, tariff end dates, and contract review windows. Future: community-driven cost comparisons to help you switch and save.',
    },
  ];

  return (
    <section id="features" className="relative bg-white pt-section pb-section">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">What it tracks</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Every responsibility your
            <br />
            household generates.
          </h2>
          <p className="subhead mt-5 max-w-xl mx-auto">
            Not six different apps. Not scattered spreadsheets. One dashboard that knows what
            you own, where you live, and what needs your attention next.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col rounded-xl border border-warm-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3.5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
                {f.icon}
              </div>
              <h3 className="font-sans text-[15px] font-semibold text-warm-800">{f.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-warm-500">{f.body}</p>
            </div>
          ))}
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
      body: 'Enter your postcode and vehicle registrations. We pull council data and DVLA records — no manual research required.',
    },
    {
      number: '2',
      title: 'We surface what is due',
      body: 'MOT expiry, insurance renewal windows, bin collection dates, tax deadlines — automatically identified and prioritised in your dashboard.',
    },
    {
      number: '3',
      title: 'Nothing gets missed',
      body: 'Overdue items appear first. Today\u2019s deadlines are highlighted. This week\u2019s tasks are listed. Snooze, mark done, move on.',
    },
  ];

  return (
    <section className="bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">How it works</p>
          <h2 className="heading-lg">Set it up once.</h2>
          <p className="subhead mt-5">
            Add what you own, and the dashboard keeps track of what matters.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-sm ring-1 ring-warm-200">
                <span className="font-mono text-[1.25rem] font-medium">{step.number}</span>
              </div>
              <h3 className="font-sans text-lg font-semibold text-warm-800">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-warm-500">{step.body}</p>

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
   COST URGENCY — the problem
   ───────────────────────────────────────────── */
function CostUrgencySection() {
  return (
    <section className="relative bg-white pt-section pb-section">
      {/* Top divider */}
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker-amber mb-4">Why it matters</p>
          <h2 className="heading-lg max-w-3xl mx-auto">
            Most households lose hundreds
            <br />
            each year to missed admin.
          </h2>
          <p className="subhead mt-5 max-w-2xl mx-auto">
            MOT expiry, insurance auto-renewal traps, council tax penalties, parking fines,
            missed compliance deadlines. None of these are rare — they are the predictable
            consequence of tracking everything from memory.
          </p>
        </div>

        {/* Stat cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-7 text-center sm:text-left">
            <p className="kicker-amber">MOT expiry</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              £1,000
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              The maximum fine for driving without a valid MOT. Your insurance may also be
              invalidated. Per vehicle.
            </p>
          </div>

          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-7 text-center sm:text-left">
            <p className="kicker-amber">Insurance loyalty penalty</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              £200+
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              The average overpay when a policy auto-renews without comparison. Per vehicle,
              per year.
            </p>
          </div>

          <div className="rounded-xl border border-amber-100 bg-amber-50/40 p-7 text-center sm:text-left">
            <p className="kicker-amber">Late fees & penalties</p>
            <p className="mt-2 font-serif text-[2.75rem] leading-none font-medium tracking-tight text-amber">
              £100s
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-warm-500">
              Council tax late payment, parking penalties, missed compliance deadlines — the
              costs add up across a household every year.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[14px] text-warm-400">
          H.A.B.I.B.I surfaces these before they become problems. Not through guesswork —
          through actual DVLA lookups, council data, and your own recurring schedules.
        </p>
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
      label: 'Homeowners',
      body: 'Everything the landlord used to handle is now on you — buildings insurance, boiler servicing, bin schedules, council tax. H.A.B.I.B.I helps you learn what to track and ensures nothing is overlooked.',
    },
    {
      label: 'Parents & families',
      body: 'School inset days, parents\u2019 evenings, MOTs, insurance renewals, bin collections — you are tracking 30+ recurring dates across calendars, notes, and memory. One dashboard replaces the mental load.',
    },
    {
      label: 'Landlords & multi-property owners',
      body: 'Multiple properties mean multiple councils, multiple bin schedules, multiple compliance dates. Manage every property — gas safety, EICR, insurance — from a single account.',
    },
    {
      label: 'Multi-car households',
      body: 'Each car has its own MOT date, insurance renewal, and tax deadline. They never align. We track them all and surface the next one due, before it becomes urgent.',
    },
    {
      label: 'Renters',
      body: 'You still have contents insurance, moving dates, tenancy renewals, and utility contracts to manage. H.A.B.I.B.I works for renters too — start with what you control.',
    },
  ];

  return (
    <section className="bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">Who it is for</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            If you are responsible for a household, this is built for you.
          </h2>
          <p className="subhead mt-5">
            Homeowners, renters, landlords, families, and anyone managing more than one vehicle.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <div key={p.label} className="card-light">
              <h3 className="font-sans text-lg font-semibold text-warm-800">{p.label}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-warm-500">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROADMAP
   ───────────────────────────────────────────── */
function RoadmapSection() {
  const items = [
    {
      icon: <Bell size={20} />,
      title: 'Mobile notifications',
      body: 'Push alerts for due dates and deadlines. Know before something expires — without opening the dashboard.',
      status: 'live' as const,
      label: 'In development',
    },
    {
      icon: <Phone size={20} />,
      title: 'AI reminder calls',
      body: 'Voice calls when something urgent needs your attention. A phone call you actually want — because it saves you money.',
      status: 'building' as const,
      label: 'In design',
    },
    {
      icon: <Users size={20} />,
      title: 'Community cost comparison',
      body: 'Utility and insurance cost data from other households. See what similar homes pay — and where you could switch and save.',
      status: 'planned' as const,
      label: 'Planned',
    },
  ];

  return (
    <section className="bg-white pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">Roadmap</p>
          <h2 className="heading-lg max-w-2xl mx-auto">What we are building next.</h2>
          <p className="subhead mt-5">
            Each item carries a status label so you know where it stands. We ship when it is
            ready, not before.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="card-light">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                {item.icon}
              </div>
              <div className="mb-3">
                <span
                  className={
                    item.status === 'live'
                      ? 'status-live'
                      : item.status === 'building'
                      ? 'status-building'
                      : 'status-planned'
                  }
                >
                  {item.label}
                </span>
              </div>
              <h3 className="font-sans text-[16px] font-semibold text-warm-800">
                {item.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-warm-500">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-warm-400">
          Timelines are targets, not promises. We ship when we are confident it is right.
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING PREVIEW
   ───────────────────────────────────────────── */
function PricingPreviewSection() {
  const tiers = [
    {
      name: 'Core',
      kicker: 'Early access',
      price: 'Free',
      period: 'during development',
      description: 'Everything you need to get on top of your household admin. No credit card, no catch.',
      features: [
        '1 property',
        'Up to 2 vehicles',
        'DVLA lookup & MOT tracking',
        'Insurance & tax tracking',
        'Manual reminders',
        '3-day weather forecast',
        'Basic bin schedule (1 per property)',
        'Local info & safety data',
        'Schools & education data',
      ],
      cta: 'Join waitlist',
      highlighted: true,
    },
    {
      name: 'Plus',
      kicker: 'Coming later',
      price: 'Indicative',
      period: 'likely £5–7 / month',
      description: 'For active households and families who want automated surfacing and richer coverage.',
      features: [
        'Everything in Core',
        'Up to 3 properties',
        'Up to 5 vehicles',
        'Auto-generated reminders (MOT, insurance, tax)',
        '7-day weather forecast',
        'Multiple bin schedules per property',
        'Email alerts for due dates',
        'Custom reminder types & snooze',
      ],
      cta: null,
      highlighted: false,
    },
    {
      name: 'Estate',
      kicker: 'Coming later',
      price: 'Indicative',
      period: 'likely £10–13 / month',
      description: 'For landlords, multi-property owners, and anyone who wants the full household OS.',
      features: [
        'Everything in Plus',
        'Unlimited properties & vehicles',
        'Mobile push notifications',
        'AI reminder voice calls',
        'Community utility benchmarking',
        'Compliance tracking (gas safety, EICR)',
        'Advanced reporting & export',
        'Priority support',
      ],
      cta: null,
      highlighted: false,
    },
  ];

  return (
    <section className="bg-warm-50 pt-section pb-section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">Pricing</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Free during early access.
            <br />
            Fair tiers later.
          </h2>
          <p className="subhead mt-5">
            Everything is free while we build the product. When paid plans arrive, pricing will be
            published well in advance — no one pays without knowing exactly what they are getting.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                tier.highlighted
                  ? 'border-brand-300 ring-1 ring-brand-200/50 shadow-md'
                  : 'border-warm-200'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-6">
                  <span className="status-live">Available now</span>
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
                <p className="mt-2 font-serif text-[2rem] leading-none font-medium tracking-tight text-warm-800">
                  {tier.name}
                </p>
                <p className="mt-1 font-serif text-[2.25rem] leading-none font-medium tracking-tight text-warm-800">
                  {tier.price}
                </p>
                <p className="mt-1 text-[13px] text-warm-400">{tier.period}</p>
                <p className="mt-3 text-[14px] leading-relaxed text-warm-500">
                  {tier.description}
                </p>
              </div>

              <hr className="my-6 border-warm-200" />

              <ul className="flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-warm-700">
                    <Check size={15} className="mt-0.5 shrink-0 text-sage" />
                    {f}
                  </li>
                ))}
              </ul>

              {tier.cta ? (
                <a href="#waitlist" className="btn-primary mt-7 w-full text-center">
                  {tier.cta}
                  <ArrowRight size={16} />
                </a>
              ) : (
                <div className="mt-7 rounded-lg border border-warm-200 bg-warm-50 px-4 py-3.5 text-center">
                  <p className="text-[13px] text-warm-400">
                    Available when paid plans launch
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fair pricing promise */}
        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm">
          <p className="text-[14px] leading-relaxed text-warm-500">
            <strong className="text-warm-700">Our pricing principles:</strong> One price per account
            — no per-vehicle or per-property charges. Clear pricing published before anyone pays.
            No auto-renewal traps. Cancel any time. Early access users will be offered a
            grandfather rate when paid plans launch.
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-[13px] text-warm-400">
          All pricing shown is indicative and may change before launch. We will communicate any
          changes clearly and well in advance.
        </p>
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
      q: 'Is this just a reminders app?',
      a: 'No. A reminders app can only tell you what you already told it. H.A.B.I.B.I proactively surfaces things you might not have thought to track — MOT expiry from DVLA data, bin day from your council\u2019s collection pattern, insurance renewal windows, and more. It is a household command centre, not a to-do list.',
    },
    {
      q: 'What does the DVLA vehicle lookup do?',
      a: 'Enter a UK registration number and we pull the vehicle\u2019s make, model, year, tax status, and MOT expiry directly from DVLA records. No manual data entry for the basics. We then track upcoming renewals and alert you before they expire.',
    },
    {
      q: 'Does it work for renters?',
      a: 'Yes. While some features (like bin schedules and council data) are property-specific, renters can still track contents insurance, tenancy renewals, utility contracts, vehicle compliance, and personal reminders. You do not need to own the property to benefit from the dashboard.',
    },
    {
      q: 'Can I manage multiple properties?',
      a: 'Yes. Multi-property support is built in. Each property gets its own local context — council, bin schedules, weather, and reminders. Landlords can manage compliance dates (gas safety certificates, EICR, insurance) across all properties from one account.',
    },
    {
      q: 'How is my data protected?',
      a: 'We use JWT-based authentication with short-lived access tokens, bcrypt-hashed passwords, parameterised database queries via Prisma, and strict input validation on all endpoints. Your household data is never sold, shared, or used for advertising. Full stop.',
    },
    {
      q: 'What is actually working right now?',
      a: 'Vehicle management (DVLA lookup, MOT, insurance, and tax tracking), reminders (typed, status-tracked, with overdue awareness), property intelligence (primary home with weather, local info, and bin schedule prediction with bank holiday handling), and the action-first dashboard. Mobile notifications are in active development.',
    },
    {
      q: 'How much will it cost eventually?',
      a: 'We have not set final pricing yet. When paid plans launch, it will be a straightforward subscription — one price per household, regardless of how many vehicles or properties you manage. No per-vehicle fees. We will publish pricing well before we ask anyone to pay.',
    },
    {
      q: 'Where does the data come from?',
      a: 'DVLA for vehicle data. Ordnance Survey Places API for property geolocation. Police.uk for neighbourhood safety. Open-Meteo for weather forecasts. Council websites for bin schedules. We use real, traceable sources — no black boxes.',
    },
  ];

  return (
    <section id="faq" className="bg-white pt-section pb-section">
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
    <div className={`rounded-xl border transition-colors ${open ? 'border-brand-200 bg-brand-50/20 shadow-sm' : 'border-warm-200 bg-white shadow-sm hover:shadow-md'}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] font-semibold text-warm-800 pr-4">
          {question}
        </span>
        <span className={`mt-0.5 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} className="text-warm-300" />
        </span>
      </button>
      <div className={`faq-answer ${open ? 'open' : ''}`}>
        <div>
          <p className="px-6 pb-5 text-[15px] leading-relaxed text-warm-500">{answer}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FINAL CTA / WAITLIST
   ───────────────────────────────────────────── */
function WaitlistCtaSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production: POST to waitlist service
    setSubmitted(true);
  };

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
          <p className="kicker-light mb-5">Get early access</p>
          <h2 className="font-serif text-[2.25rem] leading-[1.15] font-medium tracking-[-0.01em] text-white sm:text-[2.75rem]">
            Your household will not
            <br />
            organise itself.
          </h2>
          <p className="subhead-light mt-5 max-w-lg mx-auto">
            Join the waitlist for early access. Help shape the household OS before it opens
            to everyone.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-sage/25 bg-sage/8 px-8 py-7 text-center backdrop-blur-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/15">
                <Check size={28} className="text-sage" />
              </div>
              <p className="text-xl font-semibold text-white">You are on the list.</p>
              <p className="mt-2 text-[14px] text-warm-300">
                We will be in touch when early access opens. No spam, ever.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10">
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 rounded-xl border border-white/15 bg-slate-800/80 px-5 py-3.5 text-[15px] text-white placeholder:text-warm-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/25 backdrop-blur-sm"
                />
                <button type="submit" className="btn-primary py-3.5 whitespace-nowrap">
                  Join waitlist
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="mt-4 text-[13px] text-warm-400">
                No spam. No sharing your address. Invites go out in batches.
              </p>
            </form>
          )}

          <div className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-warm-400">
            <span>Built in the United Kingdom</span>
            <span aria-hidden="true" className="text-warm-500">·</span>
            <span>GDPR compliant</span>
            <span aria-hidden="true" className="text-warm-500">·</span>
            <span>No credit card required</span>
          </div>
        </div>
      </Container>
    </section>
  );
}