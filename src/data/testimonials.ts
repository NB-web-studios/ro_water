export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Satish Chandra",
    role: "Local Shop Owner",
    location: "Mati, Kanpur Dehat",
    rating: 5,
    text: "We have been using Mister Laddu's water delivery for our sweet shop for over 2 years now. The water is perfectly clean, has no weird smell, and the delivery is always on time, even in summer."
  },
  {
    id: "review-2",
    name: "Neha Gupta",
    role: "Homemaker",
    location: "Akbarpur, Kanpur Dehat",
    rating: 5,
    text: "With kids at home, we are very careful about water quality. Mister Laddu's RO water with TDS control has been extremely reliable. The TDS is always around 45-50, which is perfect for drinking."
  },
  {
    id: "review-3",
    name: "Prem Narayan",
    role: "Marriage Hall Manager",
    location: "Kanpur Road",
    rating: 5,
    text: "For large wedding functions, we need tons of water campers on short notice. Mister Laddu RO Plant has never disappointed. Highly professional local business."
  },
  {
    id: "review-4",
    name: "Ramesh Tripathi",
    role: "School Admin",
    location: "Rura, Kanpur Dehat",
    rating: 5,
    text: "We subscribed to their monthly school plan. Our water coolers are filled every morning without fail. Excellent service and highly hygienic container packaging."
  }
];
