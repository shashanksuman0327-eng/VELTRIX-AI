import { pricingMatrix } from '@/constants/site';
import type { BillingCycle, Currency } from '@/types';

export function formatPlanPrice(value: number | null, currency: Currency, billing: BillingCycle) {
  if (value === null) return 'Custom';
  const adjusted = billing === 'annual' ? value * (1 - pricingMatrix.annualDiscount) : value;
  return new Intl.NumberFormat(pricingMatrix.currencies[currency].locale, { style: 'currency', currency, maximumFractionDigits: 0 }).format(adjusted);
}
