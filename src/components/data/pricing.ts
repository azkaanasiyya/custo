export interface PricingPlan {
  name: string;
  price: number;
  desc: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: 29,
    desc: 'Ideal for solo founders and small teams just getting started with CRM.',
    features: [
      'Up to 3 Users',
      '2 GB Storage',
      'Core CRM Features',
      '1 Sales Pipeline',
      'Basic Email Integration',
    ],
  },
  {
    name: 'Growth',
    price: 79,
    desc: 'Best for scaling teams that need advanced collaboration tools.',
    features: [
      'Up to 10 Users',
      'Workflow Automation',
      'Multiple Pipelines',
      'Team Collaboration Tools',
      'Activity & Deal Reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    desc: 'Tailored for large organizations with complex workflows.',
    features: [
      'Unlimited Users',
      'Role-Based Permissions',
      'Advanced Workflow Automation',
      'Custom Dashboards',
      'Priority Support',
    ],
  },
];
