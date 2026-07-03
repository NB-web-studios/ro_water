export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export const statsData: StatItem[] = [
  {
    id: "customers",
    value: 1200,
    suffix: "+",
    label: "Happy Customers",
    description: "Active households and commercial setups served daily."
  },
  {
    id: "water",
    value: 250,
    suffix: "K+",
    label: "Campers Delivered",
    description: "Pure and chilled water campers successfully delivered."
  },
  {
    id: "coverage",
    value: 15,
    suffix: "+",
    label: "Villages & Towns",
    description: "Service coverage across Mati, Akbarpur, Rura, and nearby areas."
  },
  {
    id: "experience",
    value: 5,
    suffix: "+ Years",
    label: "Years of Trust",
    description: "Providing pure RO water since our plant's foundation."
  }
];
