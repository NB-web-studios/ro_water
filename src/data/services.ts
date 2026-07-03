export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  priceInfo: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "purification",
    title: "RO + UV + TDS Purification",
    description: "Multi-stage advanced filtration eliminating impurities, bacteria, and virus while balancing essential minerals.",
    iconName: "Droplet",
    features: ["48 PPM TDS rating", "Hygienically processed", "Zero heavy metals"],
    priceInfo: "Starting at ₹30 / camper"
  },
  {
    id: "delivery",
    title: "Express Home Delivery",
    description: "Never run out of pure drinking water. Timely deliveries scheduled to your doorstep in Mati and Akbarpur.",
    iconName: "Truck",
    features: ["Scheduled timeslot", "Trained delivery staff", "Clean handling"],
    priceInfo: "₹40 per 20L Camper"
  },
  {
    id: "bulk-orders",
    title: "Bulk & Event Orders",
    description: "Reliable high-volume supply for parties, large gatherings, and local commercial needs.",
    iconName: "Calendar",
    features: ["Dedicated delivery support", "Any volume size", "Discounted rates"],
    priceInfo: "Custom quoting available"
  },
  {
    id: "wedding-supply",
    title: "Wedding Water Supply",
    description: "Premium branded campers and dispensers for your special day. Spotless aesthetics & unmatched reliability.",
    iconName: "Award",
    features: ["Chilled water options", "Uniform container styling", "Round-the-clock service"],
    priceInfo: "Special event pricing"
  },
  {
    id: "commercial",
    title: "Commercial & Office Supply",
    description: "Recurring delivery plans tailored to corporations, government offices, and schools near Kanpur Dehat.",
    iconName: "Briefcase",
    features: ["Monthly invoicing", "Dedicated dispenser setup", "Priority service"],
    priceInfo: "B2B rates from ₹35 / container"
  },
  {
    id: "subscriptions",
    title: "Smart Subscription Plans",
    description: "Set it and forget it. Flexible weekly or monthly plans to keep your home or business hydrated.",
    iconName: "Clock",
    features: ["No daily ordering hassle", "Pause/Resume anytime", "Free dispenser placement"],
    priceInfo: "Plans from ₹450 / month"
  }
];
