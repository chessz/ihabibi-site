/**
 * Public pricing display helpers.
 * Plan prices and features are loaded from GET {APP_API}/api/billing/plans
 * (canonical source: myjarvis backend billing-plans.ts).
 */

export const APP_ORIGIN =
  process.env.NEXT_PUBLIC_APP_ORIGIN || 'https://app.ihabibi.uk';

export const APP_API =
  process.env.NEXT_PUBLIC_APP_API_URL || 'https://app.ihabibi.uk';

export type BillingInterval = 'MONTHLY' | 'YEARLY';
export type PlanKey = 'FREE' | 'STARTER' | 'PRO' | 'PREMIUM';
export type PlanAccent = 'default' | 'featured' | 'automation';

export type PublicPlan = {
  key: PlanKey;
  name: string;
  tagline: string;
  kicker: string;
  accent: PlanAccent;
  propertyLimit: number | null;
  monthlyPriceGbp: number;
  yearlyPriceGbp: number;
  features: string[];
  mostPopular?: boolean;
  contactOnly?: boolean;
  annualSavingsPercent: number;
};

export const DEFAULT_BILLING_INTERVAL: BillingInterval = 'MONTHLY';

/** Offline fallback — keep in sync with backend billing-plans.ts */
export const FALLBACK_PLANS: PublicPlan[] = [
  {
    key: 'FREE',
    name: 'Free',
    tagline: 'One home, no card required',
    kicker: 'Start here',
    accent: 'default',
    propertyLimit: 1,
    monthlyPriceGbp: 0,
    yearlyPriceGbp: 0,
    annualSavingsPercent: 0,
    features: [
      '1 property',
      'Bills & subscriptions tracking',
      'Manual reminders',
      'Basic utility comparison',
      'Local & property info',
    ],
  },
  {
    key: 'STARTER',
    name: 'Starter',
    tagline: 'Secure notes, spend insights, and up to 3 homes',
    kicker: 'Best value',
    accent: 'featured',
    propertyLimit: 3,
    monthlyPriceGbp: 4.99,
    yearlyPriceGbp: 49,
    mostPopular: true,
    annualSavingsPercent: 18,
    features: [
      'Up to 3 properties',
      'Secure notes with document uploads',
      'Spend trends & category breakdowns',
      'Advanced utility comparison',
      'Custom reminders & snooze',
    ],
  },
  {
    key: 'PRO',
    name: 'Pro',
    tagline: 'AI reminders and deeper finance insights',
    kicker: 'Most automation',
    accent: 'automation',
    propertyLimit: 10,
    monthlyPriceGbp: 9.99,
    yearlyPriceGbp: 99,
    annualSavingsPercent: 17,
    features: [
      'Everything in Starter',
      'Up to 10 properties',
      'AI reminders in your browser',
      'Advanced finance insights & charts',
      'Per-property spend comparison',
      'Phone reminder calling — coming soon',
    ],
  },
  {
    key: 'PREMIUM',
    name: 'Portfolio',
    tagline: 'Unlimited properties with dedicated onboarding',
    kicker: 'Landlords & agencies',
    accent: 'default',
    propertyLimit: null,
    monthlyPriceGbp: 19.99,
    yearlyPriceGbp: 199,
    contactOnly: true,
    annualSavingsPercent: 17,
    features: [
      'Unlimited properties',
      'Everything in Pro',
      'Portfolio reporting & export',
      'Compliance tracking (gas safety, EICR)',
      'Dedicated onboarding — talk to us',
    ],
  },
];

export async function fetchPublicPlans(): Promise<PublicPlan[]> {
  try {
    const res = await fetch(`${APP_API}/api/billing/plans`, { cache: 'no-store' });
    if (!res.ok) return FALLBACK_PLANS;
    const data = (await res.json()) as PublicPlan[];
    return Array.isArray(data) && data.length ? data : FALLBACK_PLANS;
  } catch {
    return FALLBACK_PLANS;
  }
}

export function formatGbp(amount: number): string {
  if (amount === 0) return '£0';
  const wholePounds = Math.round(amount * 100) % 100 === 0;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: wholePounds ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function propertyLimitLabel(limit: number | null): string {
  if (limit === null) return 'Unlimited properties';
  if (limit === 1) return '1 property';
  return `Up to ${limit} properties`;
}

export function planPrice(plan: PublicPlan, interval: BillingInterval): number {
  return interval === 'YEARLY' ? plan.yearlyPriceGbp : plan.monthlyPriceGbp;
}

export function yearlySavingsToggleLabel(plans: PublicPlan[]): string {
  const paid = plans.filter((p) => p.monthlyPriceGbp > 0 && !p.contactOnly);
  if (!paid.length) return 'save on yearly';
  const max = Math.max(...paid.map((p) => p.annualSavingsPercent));
  return max > 0 ? `save ${max}%` : 'save on yearly';
}

export function planCtaLabel(plan: PublicPlan): string {
  if (plan.contactOnly) return 'Talk to us';
  if (plan.key === 'FREE') return 'Create free account';
  if (plan.key === 'STARTER') return 'Choose Starter';
  if (plan.key === 'PRO') return 'Start Pro';
  return 'Subscribe';
}

export function planCtaUrl(plan: PublicPlan, interval: BillingInterval): string {
  if (plan.key === 'FREE') return `${APP_ORIGIN}/register`;
  if (plan.contactOnly) {
    return `mailto:hello@ihabibi.uk?subject=${encodeURIComponent('Portfolio plan enquiry')}`;
  }
  return `${APP_ORIGIN}/register?plan=${plan.key}&interval=${interval}`;
}

export function monthlyCancelNote(interval: BillingInterval, isPaid: boolean): string | null {
  if (!isPaid || interval !== 'MONTHLY') return null;
  return 'Cancel anytime';
}
