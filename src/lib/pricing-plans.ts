export const APP_ORIGIN = 'https://app.ihabibi.uk';

export type BillingInterval = 'MONTHLY' | 'YEARLY';

export type MarketingPlanKey = 'FREE' | 'STARTER' | 'PRO' | 'PORTFOLIO';

export type MarketingPlan = {
  key: MarketingPlanKey;
  name: string;
  kicker: string;
  tagline: string;
  monthlyPriceGbp: number;
  yearlyPriceGbp: number;
  propertyLimit: string;
  features: string[];
  cta: string;
  /** featured = Starter (best value), upgrade = Pro */
  visualTier: 'default' | 'featured' | 'upgrade' | 'portfolio';
  contactOnly?: boolean;
};

export const MARKETING_PLANS: MarketingPlan[] = [
  {
    key: 'FREE',
    name: 'Free',
    kicker: 'Start here',
    tagline: 'One home, no card required.',
    monthlyPriceGbp: 0,
    yearlyPriceGbp: 0,
    propertyLimit: '1 property',
    features: [
      'Bills & subscriptions tracking',
      'Manual reminders',
      'Basic utility comparison',
      'Local & property info',
      'DVLA lookup & MOT tracking',
    ],
    cta: 'Create free account',
    visualTier: 'default',
  },
  {
    key: 'STARTER',
    name: 'Starter',
    kicker: 'Best value',
    tagline: 'Secure notes, spend insights, and up to 3 homes.',
    monthlyPriceGbp: 4.99,
    yearlyPriceGbp: 49,
    propertyLimit: 'Up to 3 properties',
    features: [
      'Secure notes with document uploads',
      'Spend trends & category breakdowns',
      'Advanced utility comparison',
      'Custom reminders & snooze',
      'Household organisation tools',
    ],
    cta: 'Choose Starter',
    visualTier: 'featured',
  },
  {
    key: 'PRO',
    name: 'Pro',
    kicker: 'Most automation',
    tagline: 'AI reminders and deeper finance insights.',
    monthlyPriceGbp: 9.99,
    yearlyPriceGbp: 99,
    propertyLimit: 'Up to 10 properties',
    features: [
      'Everything in Starter',
      'AI reminders in your browser',
      'Advanced finance insights & charts',
      'Per-property spend comparison',
      'Phone reminder calling — coming soon',
    ],
    cta: 'Start Pro',
    visualTier: 'upgrade',
  },
];

export const PORTFOLIO_PLAN: MarketingPlan = {
  key: 'PORTFOLIO',
  name: 'Portfolio',
  kicker: 'Landlords & agencies',
  tagline: 'Unlimited properties with dedicated onboarding.',
  monthlyPriceGbp: 19.99,
  yearlyPriceGbp: 199,
  propertyLimit: 'Unlimited properties',
  features: [
    'Everything in Pro',
    'Portfolio reporting & export',
    'Compliance tracking (gas safety, EICR)',
    'Dedicated support — talk to us first',
  ],
  cta: 'Talk to us',
  visualTier: 'portfolio',
  contactOnly: true,
};

export function annualSavingsPercent(monthly: number, yearly: number): number {
  if (!monthly) return 0;
  const monthlyYear = monthly * 12;
  if (monthlyYear <= yearly) return 0;
  return Math.round(((monthlyYear - yearly) / monthlyYear) * 100);
}

export function formatGbp(amount: number): string {
  if (amount === 0) return '£0';
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
}

export function planCtaUrl(plan: MarketingPlan, interval: BillingInterval): string {
  if (plan.key === 'FREE') {
    return `${APP_ORIGIN}/register`;
  }
  if (plan.contactOnly) {
    return `mailto:hello@ihabibi.uk?subject=${encodeURIComponent('Portfolio plan enquiry')}`;
  }
  return `${APP_ORIGIN}/register?plan=${plan.key}&interval=${interval}`;
}

export function portfolioCtaUrl(): string {
  return `mailto:hello@ihabibi.uk?subject=${encodeURIComponent('Portfolio plan enquiry')}`;
}
