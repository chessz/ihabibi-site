'use client';

import { useEffect, useState } from 'react';
import {
  FALLBACK_PLANS,
  fetchPublicPlans,
  formatGbp,
  planCtaLabel,
  planCtaUrl,
  type PlanKey,
  type PublicPlan,
} from '@/lib/pricing-plans';

const CONSUMER_ORDER: PlanKey[] = ['FREE', 'STARTER', 'PRO'];

function rank(key: PlanKey): number {
  const index = CONSUMER_ORDER.indexOf(key);
  return index === -1 ? 99 : index;
}

function homesLine(plan: PublicPlan): string {
  if (plan.propertyLimit === null) return 'Unlimited homes.';
  if (plan.propertyLimit === 1) return 'One home.';
  return `Up to ${plan.propertyLimit} homes.`;
}

function PlanCard({ plan }: { plan: PublicPlan }) {
  const isFree = plan.key === 'FREE';
  const featured = plan.accent === 'featured' || plan.mostPopular;

  return (
    <article className={`plan${featured ? ' featured' : ''}`}>
      <div className="badge">{plan.kicker}</div>
      <h3>{plan.name}</h3>
      <div className="price">
        {formatGbp(plan.monthlyPriceGbp)}{' '}
        <span>{isFree ? '/ one home' : '/ month'}</span>
      </div>
      <p className="plan-sub">
        {isFree ? (
          plan.tagline
        ) : (
          <>
            Or{' '}
            <a href={planCtaUrl(plan, 'YEARLY')}>
              {formatGbp(plan.yearlyPriceGbp)}/year
            </a>
            . {homesLine(plan)}
          </>
        )}
      </p>
      <ul>
        {plan.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <a className={isFree ? 'btn btn-teal' : 'btn btn-ghost-dark'} href={planCtaUrl(plan, 'MONTHLY')}>
        {planCtaLabel(plan)}
      </a>
    </article>
  );
}

export default function PricingSection() {
  const [plans, setPlans] = useState<PublicPlan[]>(FALLBACK_PLANS);

  useEffect(() => {
    void fetchPublicPlans().then(setPlans);
  }, []);

  const consumer = plans.filter((plan) => !plan.contactOnly).sort((a, b) => rank(a.key) - rank(b.key));
  const portfolio = plans.find((plan) => plan.contactOnly);
  const savings = consumer
    .filter((plan) => plan.monthlyPriceGbp > 0)
    .map((plan) => plan.annualSavingsPercent)
    .filter((value) => value > 0);
  const minSave = savings.length ? Math.min(...savings) : 0;
  const maxSave = savings.length ? Math.max(...savings) : 0;
  const saveLabel = minSave === maxSave ? `${maxSave}%` : `${minSave}–${maxSave}%`;

  return (
    <section id="pricing">
      <div className="wrap">
        <p className="sec-kicker">Trust, then price</p>
        <h2 className="sec-title">
          Built for a UK household, not a <em>bank feed.</em>
        </h2>
        <p className="sec-sub">Same prices as the live plans. Upgrade when the house pays for it.</p>

        <div className="trust-row">
          <div className="trust-card">
            <h3>No bank login</h3>
            <p>You type what you pay. We don’t use open banking or scrape your transactions.</p>
          </div>
          <div className="trust-card">
            <h3>Built in the UK</h3>
            <p>DVLA for vehicles, a public Octopus energy reference, council context from your postcode.</p>
          </div>
          <div className="trust-card">
            <h3>PIN-locked documents</h3>
            <p>
              Secure Notes sit behind a PIN on Starter and above. Encryption at rest is planned — we
              won’t claim it until it ships.
            </p>
          </div>
        </div>

        <div className="pricing">
          {consumer.map((plan) => (
            <PlanCard key={plan.key} plan={plan} />
          ))}
        </div>

        <p className="price-note">
          {savings.length ? <>Yearly billing saves about {saveLabel}. </> : null}
          {portfolio ? (
            <>
              Landlords: {portfolio.name} from {formatGbp(portfolio.monthlyPriceGbp)}/mo for unlimited
              properties —{' '}
              <a href={planCtaUrl(portfolio, 'MONTHLY')}>talk to us at hello@ihabibi.uk</a>.
            </>
          ) : (
            <>
              Landlords: talk to us at <a href="mailto:hello@ihabibi.uk">hello@ihabibi.uk</a>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
