import type { BillingCycle, Currency, PlanKey } from '@/types';

export const navItems = [
  ['Platform', '#platform'], ['Command Center', '#dashboard'], ['Pricing', '#pricing'], ['Customers', '#customers'], ['FAQ', '#faq'],
] as const;

export const features = [
  { title: 'AI Agents', description: 'Deploy resilient autonomous agents with governed tools, memory, retries, and escalation paths.', icon: '✦', stat: '24/7', accent: '#8b5cf6' },
  { title: 'Workflow Automation', description: 'Orchestrate approvals, handoffs, and data syncs across every business system.', icon: '⟲', stat: '18k', accent: '#06b6d4' },
  { title: 'Predictive Analytics', description: 'Forecast demand, risk, and operational drift with real-time models.', icon: '⌁', stat: '94%', accent: '#22c55e' },
  { title: 'Enterprise Security', description: 'Zero-trust controls, audit trails, SSO, SCIM, and policy-aware execution.', icon: '◇', stat: 'SOC2', accent: '#f59e0b' },
  { title: 'Knowledge Engine', description: 'Unify documents, warehouses, tickets, and CRM context into one reasoning layer.', icon: '◈', stat: '4.8B', accent: '#ec4899' },
  { title: 'Smart Integrations', description: 'Native connectors and typed actions for the tools your teams already use.', icon: '⇄', stat: '120+', accent: '#60a5fa' },
  { title: 'Live Dashboards', description: 'Observe agents, workflows, and business KPIs from an executive cockpit.', icon: '▣', stat: '<80ms', accent: '#a78bfa' },
  { title: 'Natural Language Commands', description: 'Let operators ask, instruct, and govern automation with plain language.', icon: '⌘', stat: '12x', accent: '#14b8a6' },
] as const;

export const pricingMatrix: { annualDiscount: number; currencies: Record<Currency, { locale: string; label: string }>; plans: Array<{ key: PlanKey; name: string; summary: string; baseMonthly: Record<Currency, number | null>; cta: string; featured?: boolean; features: string[] }> } = {
  annualDiscount: 0.2,
  currencies: { USD: { locale: 'en-US', label: 'USD' }, EUR: { locale: 'de-DE', label: 'EUR' }, INR: { locale: 'en-IN', label: 'INR' } },
  plans: [
    { key: 'starter', name: 'Starter', summary: 'For teams piloting safe agentic workflows.', baseMonthly: { USD: 79, EUR: 75, INR: 6499 }, cta: 'Start building', features: ['Agent builder', '10 workflows', 'Core integrations', 'Community support'] },
    { key: 'professional', name: 'Professional', summary: 'For operators scaling always-on automation.', baseMonthly: { USD: 249, EUR: 229, INR: 19999 }, cta: 'Scale operations', featured: true, features: ['Unlimited agents', 'Advanced analytics', 'SSO', 'Priority support'] },
    { key: 'enterprise', name: 'Enterprise', summary: 'For global organizations with custom controls.', baseMonthly: { USD: null, EUR: null, INR: null }, cta: 'Contact sales', features: ['Dedicated VPC', 'Custom models', 'SCIM + audit logs', '24/7 solutions team'] },
  ],
};
export const defaultCurrency: Currency = 'USD';
export const defaultBilling: BillingCycle = 'annual';
