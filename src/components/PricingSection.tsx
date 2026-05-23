'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Container from '@/components/Container';
import {
  DEFAULT_BILLING_INTERVAL,
  FALLBACK_PLANS,
  fetchPublicPlans,
  formatGbp,
  monthlyCancelNote,
  planCtaLabel,
  planCtaUrl,
  planPrice,
  propertyLimitLabel,
  yearlySavingsToggleLabel,
  type BillingInterval,
  type PublicPlan,
} from '@/lib/pricing-plans';

function PlanCard({ plan, interval }: { plan: PublicPlan; interval: BillingInterval }) {
  const price = planPrice(plan, interval);
  const isPaid = plan.key !== 'FREE';
  const isFeatured = plan.accent === 'featured';
  const isAutomation = plan.accent === 'automation';
  const cancelNote = monthlyCancelNote(interval, isPaid);

  return (
    <div
      className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm ${
        isFeatured
          ? 'border-brand-300 ring-2 ring-brand-200/60 shadow-md lg:scale-[1.02]'
          : isAutomation
            ? 'border-brand-200 ring-1 ring-brand-100/80'
            : 'border-warm-200'
      }`}
    >
      {plan.mostPopular ? (
        <div className="absolute -top-3.5 left-6">
          <span className="status-live">Best value</span>
        </div>
      ) : null}
      {isAutomation ? (
        <div className="absolute -top-3.5 right-6">
          <span className="rounded-full border border-brand-200 bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-800">
            {plan.kicker}
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
          {isPaid ? (
            <span className="ml-1 font-sans text-[13px] font-normal text-warm-400">
              /{interval === 'YEARLY' ? 'year' : 'month'}
            </span>
          ) : null}
        </p>
        {interval === 'YEARLY' && plan.annualSavingsPercent > 0 ? (
          <p className="mt-1 text-[12px] text-sage">Save {plan.annualSavingsPercent}% vs monthly</p>
        ) : null}
        {cancelNote ? <p className="mt-1 text-[12px] text-warm-500">{cancelNote}</p> : null}
        <p className="mt-2 text-[13px] font-medium text-warm-600">{propertyLimitLabel(plan.propertyLimit)}</p>
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
        className={`mt-7 w-full text-center ${isFeatured ? 'btn-primary' : 'btn-secondary'}`}
      >
        {planCtaLabel(plan)}
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [plans, setPlans] = useState<PublicPlan[]>(FALLBACK_PLANS);
  const [interval, setInterval] = useState<BillingInterval>(DEFAULT_BILLING_INTERVAL);
  const maxSavings = Math.max(0, ...plans.map((p) => p.annualSavingsPercent));

  useEffect(() => {
    void fetchPublicPlans().then(setPlans);
  }, []);

  const consumerPlans = plans.filter((p) => !p.contactOnly);
  const portfolioPlan = plans.find((p) => p.contactOnly);

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
              Yearly <span className="text-sage">({yearlySavingsToggleLabel(plans)})</span>
            </button>
          </div>
        </div>

        <p className="mx-auto mt-4 max-w-lg text-center text-[13px] text-warm-500">
          {interval === 'MONTHLY' ? (
            <>
              Paid monthly plans cancel anytime. Switch to yearly to save up to {maxSavings}%.
            </>
          ) : (
            <>Yearly billing is charged once per year — save up to {maxSavings}% vs monthly.</>
          )}
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {consumerPlans.map((plan) => (
            <PlanCard key={plan.key} plan={plan} interval={interval} />
          ))}
        </div>

        {portfolioPlan ? (
          <div className="mt-8 rounded-2xl border border-warm-200 bg-warm-50/60 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="kicker-muted">{portfolioPlan.kicker}</p>
              <h3 className="mt-1 font-sans text-lg font-semibold text-warm-800">
                {portfolioPlan.name}
              </h3>
              <p className="mt-1 text-[14px] text-warm-500">{portfolioPlan.tagline}</p>
              <p className="mt-2 text-[13px] text-warm-400">
                From {formatGbp(portfolioPlan.monthlyPriceGbp)}/mo · unlimited properties
              </p>
            </div>
            <a
              href={planCtaUrl(portfolioPlan, interval)}
              className="btn-secondary mt-4 shrink-0 sm:mt-0"
            >
              {planCtaLabel(portfolioPlan)}
              <ArrowRight size={16} />
            </a>
          </div>
        ) : null}

        <p className="mx-auto mt-10 max-w-xl text-center text-[14px] leading-relaxed text-warm-500">
          Less than two coffees a month to see every renewal, every subscription, and whether your
          electricity still looks fair.
        </p>

        <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-warm-200 bg-white p-6 text-center shadow-sm">
          <p className="text-[14px] leading-relaxed text-warm-500">
            <strong className="text-warm-700">Our pricing principles:</strong> One price per
            account. Monthly plans cancel anytime. Yearly saves up to {maxSavings}%. Checkout uses
            one Stripe price for your chosen plan and interval.
          </p>
        </div>
      </Container>
    </section>
  );
}
