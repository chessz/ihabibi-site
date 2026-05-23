'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Container from '@/components/Container';
import {
  MARKETING_PLANS,
  PORTFOLIO_PLAN,
  annualSavingsPercent,
  formatGbp,
  planCtaUrl,
  portfolioCtaUrl,
  type BillingInterval,
  type MarketingPlan,
} from '@/lib/pricing-plans';

function PlanCard({
  plan,
  interval,
}: {
  plan: MarketingPlan;
  interval: BillingInterval;
}) {
  const price = interval === 'YEARLY' ? plan.yearlyPriceGbp : plan.monthlyPriceGbp;
  const savings = annualSavingsPercent(plan.monthlyPriceGbp, plan.yearlyPriceGbp);
  const isFeatured = plan.visualTier === 'featured';
  const isUpgrade = plan.visualTier === 'upgrade';
  const isFree = plan.key === 'FREE';

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm ${
        isFeatured
          ? 'border-brand-300 ring-2 ring-brand-200/60 shadow-md lg:scale-[1.02]'
          : isUpgrade
            ? 'border-violet-200 ring-1 ring-violet-100/80'
            : 'border-warm-200'
      }`}
    >
      {isFeatured ? (
        <div className="absolute -top-3.5 left-6">
          <span className="status-live">Best value</span>
        </div>
      ) : null}
      {isUpgrade ? (
        <div className="absolute -top-3.5 right-6">
          <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-700">
            Most automation
          </span>
        </div>
      ) : null}

      <div>
        <p className={isFeatured ? 'kicker-teal' : 'kicker-muted'}>{plan.kicker}</p>
        <p className="mt-2 font-serif text-[1.75rem] leading-none font-medium tracking-tight text-warm-800">
          {plan.name}
        </p>
        <p className="mt-3 font-serif text-[2.25rem] leading-none font-medium tracking-tight text-warm-800">
          {formatGbp(price)}
          {!isFree ? (
            <span className="ml-1 font-sans text-[13px] font-normal text-warm-400">
              /{interval === 'YEARLY' ? 'year' : 'month'}
            </span>
          ) : null}
        </p>
        {!isFree && interval === 'YEARLY' && savings > 0 ? (
          <p className="mt-1 text-[12px] text-sage">Save {savings}% vs monthly</p>
        ) : null}
        <p className="mt-2 text-[13px] font-medium text-warm-600">{plan.propertyLimit}</p>
        <p className="mt-3 text-[14px] leading-relaxed text-warm-500">{plan.tagline}</p>
      </div>

      <hr className="my-6 border-warm-200" />

      <ul className="flex-1 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14px] text-warm-700">
            <Check size={15} className="mt-0.5 shrink-0 text-sage" />
            {f}
          </li>
        ))}
      </ul>

      <a
        href={planCtaUrl(plan, interval)}
        className={`mt-7 w-full text-center ${
          isFeatured
            ? 'btn-primary'
            : isUpgrade
              ? 'inline-flex items-center justify-center gap-2 rounded-xl bg-violet-700 px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-violet-600'
              : isFree
                ? 'btn-secondary'
                : 'btn-secondary'
        }`}
      >
        {plan.cta}
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [interval, setInterval] = useState<BillingInterval>('YEARLY');

  return (
    <section id="pricing" className="bg-white pt-section pb-section">
      <div className="section-divider" />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker-teal mb-4">Pricing</p>
          <h2 className="heading-lg max-w-2xl mx-auto">
            Free to start.
            <br />
            Upgrade when you see the value.
          </h2>
          <p className="subhead mt-5">
            Starter covers most households — secure notes, spend trends, and better reminders. Pro
            adds AI automation when you are ready.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            className="inline-flex rounded-full border border-warm-200 bg-warm-50 p-1 text-sm"
            role="group"
            aria-label="Billing interval"
          >
            <button
              type="button"
              onClick={() => setInterval('MONTHLY')}
              className={`rounded-full px-4 py-1.5 transition ${
                interval === 'MONTHLY'
                  ? 'bg-brand-700 text-white'
                  : 'text-warm-600 hover:text-warm-800'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setInterval('YEARLY')}
              className={`rounded-full px-4 py-1.5 transition ${
                interval === 'YEARLY'
                  ? 'bg-brand-700 text-white'
                  : 'text-warm-600 hover:text-warm-800'
              }`}
            >
              Yearly <span className="text-sage">(save ~17%)</span>
            </button>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-lg text-center text-[13px] text-warm-500">
          Pay annually and save roughly two months compared to monthly billing on Starter and Pro.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MARKETING_PLANS.map((plan) => (
            <PlanCard key={plan.key} plan={plan} interval={interval} />
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-warm-200 bg-warm-50/60 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="kicker-muted">{PORTFOLIO_PLAN.kicker}</p>
            <h3 className="mt-1 font-sans text-lg font-semibold text-warm-800">
              {PORTFOLIO_PLAN.name}
            </h3>
            <p className="mt-1 text-[14px] text-warm-500">{PORTFOLIO_PLAN.tagline}</p>
            <p className="mt-2 text-[13px] text-warm-400">
              From {formatGbp(PORTFOLIO_PLAN.monthlyPriceGbp)}/mo · unlimited properties
            </p>
          </div>
          <a href={portfolioCtaUrl()} className="btn-secondary mt-4 shrink-0 sm:mt-0">
            {PORTFOLIO_PLAN.cta}
            <ArrowRight size={16} />
          </a>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-relaxed text-warm-500">
          Less than two coffees a month to see every renewal, every subscription, and whether your
          electricity still looks fair.
        </p>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm">
          <p className="text-[14px] leading-relaxed text-warm-500">
            <strong className="text-warm-700">Our pricing principles:</strong> One price per
            account — no per-vehicle or per-property charges. Annual billing saves ~17%. Clear pricing
            published before anyone pays. Cancel any time via Stripe.
          </p>
        </div>
      </Container>
    </section>
  );
}
