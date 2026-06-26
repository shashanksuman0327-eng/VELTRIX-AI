'use client';
import { memo, useMemo, useState } from 'react';
import { defaultBilling, defaultCurrency, pricingMatrix } from '@/constants/site';
import type { BillingCycle, Currency } from '@/types';
import { formatPlanPrice } from '@/utils/pricing';

const PriceText = memo(function PriceText({ value, currency, billing }: { value: number | null; currency: Currency; billing: BillingCycle }) {
  return <span className="price">{formatPlanPrice(value, currency, billing)}</span>;
});

const PlanCard = memo(function PlanCard({ plan, currency, billing }: { plan: (typeof pricingMatrix.plans)[number]; currency: Currency; billing: BillingCycle }) {
  const note = billing === 'annual' && plan.baseMonthly[currency] !== null ? ' / month, billed annually' : plan.baseMonthly[currency] === null ? 'tailored contract' : ' / month';
  return <article className={`plan glass ${plan.featured ? 'featured' : ''}`} aria-label={`${plan.name} plan`}>
    <h3 className="text-2xl font-extrabold">{plan.name}</h3><p className="muted mt-1 text-sm">{plan.summary}</p>
    <PriceText value={plan.baseMonthly[currency]} currency={currency} billing={billing} /><small className="muted">{note}</small>
    <ul className="my-6 space-y-3">{plan.features.map((feature) => <li key={feature} className="muted text-sm">✓ {feature}</li>)}</ul>
    <a className="btn primary w-full" href="#footer">{plan.cta}</a>
  </article>;
});

export function PricingCards() {
  const [currency, setCurrency] = useState<Currency>(defaultCurrency); const [billing, setBilling] = useState<BillingCycle>(defaultBilling);
  const currencies = useMemo(() => Object.keys(pricingMatrix.currencies) as Currency[], []);
  return <>
    <div className="my-8 flex flex-wrap items-center justify-between gap-4">
      <select className="select" aria-label="Currency" value={currency} onChange={(event) => setCurrency(event.target.value as Currency)}>{currencies.map((item) => <option key={item}>{item}</option>)}</select>
      <div className="rounded-full border border-white/15 bg-white/5 p-1" role="group" aria-label="Billing cycle">{(['monthly', 'annual'] as BillingCycle[]).map((item) => <button key={item} className={`rounded-full px-4 py-2 transition ${billing === item ? 'bg-white text-slate-950' : 'text-slate-400'}`} onClick={() => setBilling(item)}>{item === 'annual' ? 'Annual · save 20%' : 'Monthly'}</button>)}</div>
    </div>
    <div className="plans">{pricingMatrix.plans.map((plan) => <PlanCard key={plan.key} plan={plan} currency={currency} billing={billing} />)}</div>
  </>;
}
