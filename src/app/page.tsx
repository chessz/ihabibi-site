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
} from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CostUrgencySection />
      <FeatureSection />
      <HowItWorksSection />
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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(13,107,110,0.12), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="relative z-10 flex flex-col items-start gap-16 py-24 lg:flex-row lg:py-32">
          {/* Left: text */}
          <div className="flex-1 pt-0 lg:pt-12">
            <p className="kicker-light mb-4">Household OS</p>
            <h1 className="font-serif text-[3.5rem] leading-[1.08] font-medium tracking-[-0.015em] text-white sm:text-[4rem] lg:text-[4.5rem]">
              What needs
              <br />
              you today?
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-warm-300/90">
              MOT, insurance, bin day, council deadlines, school dates — tracked and surfaced
              before they become problems. One dashboard for everything your household asks of you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#waitlist" className="btn-primary">
                Join the waitlist
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#features" className="btn-secondary-light">
                See what it tracks
                <ChevronDown size={18} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Right: product preview */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product screenshot placeholder — dark dashboard panel */}
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-sm">
                {/* Fake dashboard header */}
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 text-xs font-bold text-white shadow shadow-sky-900/40">
                    H
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-300/80">
                      Household
                    </div>
                    <div className="text-sm font-light text-white">Good evening</div>
                  </div>
                </div>

                {/* Needs action card */}
                <div className="rounded-xl border border-rose-400/30 bg-gradient-to-br from-rose-500/[0.12] to-slate-950/80 p-4">
                  <div className="mb-3 border-l-2 border-rose-400/80 pl-2.5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-rose-300/90">
                      Needs action
                    </p>
                    <p className="text-sm font-semibold text-white">
                      Overdue, today & this week
                    </p>
                  </div>

                  {/* MOT overdue */}
                  <div className="mb-2 rounded-lg border border-rose-500/30 bg-rose-950/30 px-3 py-2.5">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-mono text-xs text-rose-50">AB12 CDE</span>
                        <span className="ml-2 text-[10px] text-rose-200/70">
                          Vehicle · MOT overdue
                        </span>
                      </div>
                      <span className="rounded-md border border-white/15 px-2 py-0.5 text-[10px] text-sky-200">
                        Fix MOT
                      </span>
                    </div>
                  </div>

                  {/* Reminder due today */}
                  <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Renew home insurance</span>
                      <span className="text-[10px] tabular-nums text-amber-200/90">
                        Today
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bin day widget */}
                <div className="mt-4 rounded-xl border border-lime-500/25 bg-lime-500/[0.06] p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-lime-300/70">
                    Next bin day
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    Recycling{' '}
                    <span className="font-normal tabular-nums text-lime-200/90">
                      — Mon 12 May
                    </span>
                  </p>
                </div>

                <p className="mt-4 text-center text-[10px] text-slate-600">
                  ← Real product screenshot coming soon →
                </p>
              </div>

              {/* Decorative subtle glow behind the card */}
              <div
                className="pointer-events-none absolute -inset-4 -z-10"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 40%, rgba(56,189,248,0.06), transparent 70%)',
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
   WHY THIS MATTERS / COST URGENCY
   ───────────────────────────────────────────── */
function CostUrgencySection() {
  return (
    <section className="section-padding bg-warm-50">
      <Container>
        <div className="mx-auto max-w-3xl text-left">
          <p className="kicker-amber mb-4">The cost</p>
          <h2 className="heading mb-6">
            Missed renewals cost UK households hundreds every year. Here's what you
            shouldn't be tracking from memory.
          </h2>
          <p className="body-text">
            Most households track MOTs, insurance, bin day, council tax, and school dates across
            notes apps, shared calendars, paper reminders, and &ldquo;I&rsquo;ll remember.&rdquo; 
            The average household loses hundreds of pounds a year to missed renewals, late fees, and 
            penalty charges — and that&rsquo;s before counting the stress.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <StatCard
            kicker="MOT expiry"
            value="£1,000"
            label="Fine for driving without a valid MOT. And your insurance may be invalid too."
          />
          <StatCard
            kicker="Insurance auto-renew"
            value="£200+"
            label="Average overpay when policies auto-renew without comparison. Per vehicle."
            accent="amber"
          />
          <StatCard
            kicker="Late fees & penalties"
            value="£100s"
            label="Council tax late payment, parking penalties, missed compliance deadlines."
            accent="amber"
          />
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-warm-400">
          These aren&rsquo;t rare. They&rsquo;re the admin every household generates — and most lose
          track of.
        </p>
      </Container>
    </section>
  );
}

function StatCard({
  kicker,
  value,
  label,
  accent,
}: {
  kicker: string;
  value: string;
  label: string;
  accent?: 'amber';
}) {
  return (
    <div className="card-stat text-center sm:text-left">
      <p className={accent === 'amber' ? 'kicker-amber' : 'kicker-teal'}>{kicker}</p>
      <p
        className={`mt-3 font-serif text-[3rem] leading-none font-medium tracking-tight ${
          accent === 'amber' ? 'text-amber' : 'text-brand-700'
        }`}
      >
        {value}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-warm-500">{label}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FEATURES
   ───────────────────────────────────────────── */
function FeatureSection() {
  return (
    <section id="features" className="section-padding bg-white">
      <Container>
        <p className="kicker-teal mb-4">Everything in one place</p>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="heading max-w-2xl">
            Vehicles, property, local area — all surfaced in a single household dashboard.
          </h2>
          <p className="body-text max-w-md text-warm-400">
            Not six different apps. One place that knows what you own, where you live, and what needs
            your attention next.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Car size={24} />}
            title="Vehicles"
            description="MOT, insurance, and tax tracking with DVLA lookup. Add a registration number and we pull the details. Know what&rsquo;s expiring and when."
          />
          <FeatureCard
            icon={<Home size={24} />}
            title="Property"
            description="Set your primary home to unlock weather, bin day, council info, utilities review dates, and local data — all per property."
          />
          <FeatureCard
            icon={<Bell size={24} />}
            title="Reminders"
            description="Custom and auto-generated reminders with due dates, types, and status tracking. Overdue items surface first. Snooze or mark done."
          />
          <FeatureCard
            icon={<MapPin size={24} />}
            title="Local info"
            description="Council name, OS Places data, nearby transport, and neighbourhood context — surfaced from your postcode."
          />
          <FeatureCard
            icon={<Shield size={24} />}
            title="Safety"
            description="Neighbourhood policing data and crime context via police.uk API. Know your area before you move or renew."
          />
          <FeatureCard
            icon={<Trash2 size={24} />}
            title="Waste & recycling"
            description="Bin day prediction from manual recurring schedules. Bank holiday awareness. Council links. Right bin, right day."
          />
        </div>

        {/* Additional row for education + utilities */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <FeatureCard
            icon={<GraduationCap size={24} />}
            title="Education"
            description="Nearby schools and colleges, surfaced from your property location. Useful when moving or planning catchment areas."
          />
          <FeatureCard
            icon={<Zap size={24} />}
            title="Utilities"
            description="Track current supplier, tariff end dates, and review windows. Future: community-driven cost comparison to help you switch and save."
          />
        </div>
      </Container>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="card-light group">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-100">
        {icon}
      </div>
      <h3 className="font-sans text-lg font-semibold text-warm-800">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-warm-500">{description}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HOW IT WORKS
   ───────────────────────────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Add your home & vehicles',
      description:
        'Enter your postcode and registration numbers. We pull council data, DVLA records, and surface what matters for your household.',
    },
    {
      number: '02',
      title: 'We surface what&rsquo;s due',
      description:
        'MOT expiry, insurance renewal windows, bin collection dates, tax deadlines — automatically surfaced in your action-first dashboard.',
    },
    {
      number: '03',
      title: 'Nothing gets missed',
      description:
        'Overdue items, due-today tasks, and this-week deadlines are promoted. Snooze what you can&rsquo;t do yet. Mark done and move on.',
    },
  ];

  return (
    <section className="section-padding bg-warm-50">
      <Container>
        <p className="kicker-teal mb-4">How it works</p>
        <h2 className="heading mb-6 max-w-xl">
          Set it up once. Let it surface what matters.
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="mb-6 font-mono text-[2.5rem] font-medium leading-none tracking-tight text-brand-200/60">
                {step.number}
              </div>
              <h3 className="font-sans text-xl font-semibold text-warm-800">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-warm-500">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="mt-6 hidden sm:block">
                  <ArrowRight size={20} className="text-warm-300" />
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
   WHO IT'S FOR
   ───────────────────────────────────────────── */
function AudienceSection() {
  const personas = [
    {
      label: 'Busy parents',
      description:
        'School dates, bin day, MOTs — you&rsquo;re tracking 30+ recurring dates across five different places. One dashboard replaces them all.',
    },
    {
      label: 'Homeowners',
      description:
        'Everything the landlord used to handle is now on you. We help you learn what to track and make sure nothing slips through.',
    },
    {
      label: 'Landlords',
      description:
        'Multiple properties, multiple councils, multiple compliance dates. Manage every property from a single account.',
    },
    {
      label: 'Multi-car households',
      description:
        'Two or more cars means MOTs, insurance policies, and tax dates that never align. We keep them all straight.',
    },
    {
      label: 'Life organisers',
      description:
        'You already run your life from spreadsheets and Notion. A purpose-built household OS does it better — with automatic surfacing.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <Container>
        <p className="kicker-teal mb-4">Built for</p>
        <h2 className="heading mb-6 max-w-2xl">
          If any of this sounds familiar, it&rsquo;s for you.
        </h2>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personas.map((p) => (
            <div key={p.label} className="card-light">
              <h3 className="font-sans text-lg font-semibold text-warm-800">{p.label}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-warm-500">{p.description}</p>
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
      icon: <Bell size={24} />,
      title: 'Mobile notifications',
      description:
        'Push alerts for due dates and deadlines on your phone. Know before something expires — without opening the dashboard.',
      status: 'in-progress' as const,
    },
    {
      icon: <Zap size={24} />,
      title: 'AI reminder calls',
      description:
        'Voice calls when something urgent needs your attention. A phone call you actually want to receive — because it saves you money.',
      status: 'in-design' as const,
    },
    {
      icon: <ArrowRight size={24} />,
      title: 'Community cost comparison',
      description:
        'Utility and insurance cost data from the community. See what similar households pay — and where you could switch and save.',
      status: 'planned' as const,
    },
  ];

  return (
    <section className="section-padding bg-warm-50">
      <Container>
        <p className="kicker-teal mb-4">Coming next</p>
        <h2 className="heading mb-6 max-w-2xl">
          What we&rsquo;re building.
        </h2>
        <p className="body-text mb-14 max-w-xl">
          These are the next things on our roadmap. Status labels show where each one is right now.
          We ship when it&rsquo;s ready, not before.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="card-light">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                {item.icon}
              </div>
              <h3 className="font-sans text-lg font-semibold text-warm-800">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-warm-500">{item.description}</p>
              <div className="mt-4">
                <span
                  className={
                    item.status === 'in-progress'
                      ? 'status-in-progress'
                      : item.status === 'in-design'
                      ? 'status-in-design'
                      : 'status-planned'
                  }
                >
                  {item.status === 'in-progress'
                    ? 'In development'
                    : item.status === 'in-design'
                    ? 'In design'
                    : 'Planned'}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-warm-400">
          Timelines are targets, not promises. We ship when it&rsquo;s ready.
        </p>
      </Container>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PRICING PREVIEW
   ───────────────────────────────────────────── */
function PricingPreviewSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <p className="kicker-teal mb-4">Pricing</p>
        <h2 className="heading mb-6 max-w-xl">
          Free during early access. Simple subscription later.
        </h2>
        <p className="body-text mb-14 max-w-xl">
          No fake prices. No credit card required right now. We&rsquo;ll publish real pricing before
          anyone pays a penny.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {/* Free tier */}
          <div className="card-light relative border-2 border-brand-200 bg-brand-50/30">
            <div className="absolute -top-3 left-6">
              <span className="status-in-progress">Available now</span>
            </div>
            <p className="kicker-teal">Early access</p>
            <p className="mt-3 font-serif text-[2.5rem] leading-none font-medium tracking-tight text-warm-800">
              Free
            </p>
            <p className="mt-2 text-sm text-warm-500">No credit card required</p>
            <ul className="mt-8 space-y-3">
              {[
                'All current features',
                'Vehicles, property, reminders',
                'Local info, safety, waste & recycling',
                'Multi-property support',
                'Help shape the product',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-warm-700">
                  <Check size={18} className="mt-0.5 shrink-0 text-sage" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="btn-primary mt-8 w-full text-center">
              Join the waitlist
            </a>
          </div>

          {/* Paid tier (coming) */}
          <div className="card-light">
            <p className="kicker-warm">Full membership</p>
            <p className="mt-3 font-serif text-[2.5rem] leading-none font-medium tracking-tight text-warm-800">
              TBD
            </p>
            <p className="mt-2 text-sm text-warm-500">Simple subscription · price to be confirmed</p>
            <ul className="mt-8 space-y-3">
              {[
                'Everything in early access',
                'Mobile push notifications',
                'AI reminder voice calls',
                'Community cost comparison',
                'Priority support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-warm-700">
                  <Check size={18} className="mt-0.5 shrink-0 text-warm-300" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-warm-400">
              We&rsquo;ll publish real pricing before anyone pays. One household, one price. No
              per-vehicle charges. No hidden fees.
            </p>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-warm-400">
          We&rsquo;ll never do per-vehicle pricing, hidden fees, or auto-renew traps. One household,
          one price. Fair and simple.
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
      q: 'What makes this different from a reminders app?',
      a: 'Reminders apps tell you what you already told them. H.A.B.I.B.I surfaces things you might not have thought to track — MOT expiry pulled from DVLA data, bin day predicted from your council schedule, insurance renewal windows you&rsquo;d otherwise miss. It&rsquo;s proactive, not just a list.',
    },
    {
      q: 'How does the vehicle lookup work?',
      a: 'Add your registration number. We pull make, model, year, tax status, and MOT expiry directly from DVLA records. No manual entry for the basics — and we notify you before things expire.',
    },
    {
      q: 'Does it sync with my calendar?',
      a: 'Not yet — calendar integration is on the roadmap. For now, the dashboard is your single source of truth for everything household. Push notifications are in active development.',
    },
    {
      q: 'Is my data secure?',
      a: 'Yes. We use JWT-based authentication, bcrypt-hashed passwords, parameterised database queries via Prisma, and strict input validation on all endpoints. Your household data is never sold, shared, or used for advertising. Full stop.',
    },
    {
      q: 'How much will it cost?',
      a: 'Free during early access. When we launch paid plans, it&rsquo;ll be a simple subscription — one household, one price. No per-vehicle charges, no surprise fees. Exact pricing will be published well before anyone is asked to pay.',
    },
    {
      q: 'Can I use it across multiple properties?',
      a: 'Yes. Multi-property support is built in from day one. Landlords and people with second homes can manage everything from a single account — each property gets its own local context, bin schedules, and reminders.',
    },
    {
      q: 'What&rsquo;s actually working right now?',
      a: 'Vehicles (DVLA lookup, MOT, insurance, tax tracking), reminders (typed, status-tracked, overdue-aware), property (primary home with weather, local info, bin schedule prediction with bank holiday awareness), and the action-first dashboard. Mobile notifications and AI calls are in development.',
    },
    {
      q: 'Where is the data sourced from?',
      a: 'DVLA for vehicle data, Ordnance Survey Places API for property location, police.uk for neighbourhood safety, Open-Meteo for weather forecasts, and council websites for bin schedules. No black boxes — real, traceable data sources.',
    },
  ];

  return (
    <section id="faq" className="section-padding bg-warm-50">
      <Container>
        <div className="mx-auto max-w-2xl">
          <p className="kicker-teal mb-4 text-center">Questions</p>
          <h2 className="heading mb-14 text-center">Before you ask.</h2>

          <div className="space-y-4">
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
    <div className="card-light">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-sans text-[15px] font-semibold text-warm-800">{question}</span>
        {open ? (
          <ChevronUp size={20} className="mt-0.5 shrink-0 text-brand-700" />
        ) : (
          <ChevronDown size={20} className="mt-0.5 shrink-0 text-warm-300" />
        )}
      </button>
      <div
        className={`faq-answer ${open ? 'open' : ''}`}
        role="region"
        aria-hidden={!open}
      >
        <p className="pt-4 text-[15px] leading-relaxed text-warm-500">{answer}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WAITLIST / FINAL CTA
   ───────────────────────────────────────────── */
function WaitlistCtaSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // In production: POST to waitlist service (Loops, ConvertKit, Resend, etc.)
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="section-padding bg-slate-900">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-light mb-4">Start now</p>
          <h2 className="font-serif text-[2.5rem] leading-[1.15] font-medium tracking-[-0.01em] text-white sm:text-[3rem]">
            Your household won&rsquo;t track itself.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-warm-300/80">
            Join the waitlist. Get early access. Help us build the household OS you&rsquo;ve been
            improvising without.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-xl border border-sage/30 bg-sage/10 px-8 py-6 text-center">
              <Check size={32} className="mx-auto mb-3 text-sage" />
              <p className="text-lg font-semibold text-white">You&rsquo;re on the list.</p>
              <p className="mt-2 text-sm text-warm-300">
                We&rsquo;ll be in touch when early access opens. No spam, ever.
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
                  placeholder="you@example.com"
                  className="flex-1 rounded-lg border border-white/15 bg-slate-800 px-4 py-3 text-[15px] text-white placeholder:text-warm-400 focus:border-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-700/30"
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Join waitlist
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
              <p className="mt-4 text-xs text-warm-400">
                No spam. No sharing. Early access invites go out in batches.
              </p>
            </form>
          )}

          <div className="mx-auto mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-warm-400">
            <span>Built in the UK</span>
            <span aria-hidden="true">·</span>
            <span>GDPR compliant</span>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
          </div>
        </div>
      </Container>
    </section>
  );
}