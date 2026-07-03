import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ui/ThemeProvider";
import { LanguageProvider } from "../components/ui/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mister Laddu RO Plant | Pure Chilled Water Delivery in Kanpur Dehat",
  description: "Advanced RO + UV + TDS technology delivering safe and mineral-balanced drinking water camper containers directly to homes, offices, sweet shops, and weddings in Mati, Akbarpur, and Rura.",
  keywords: ["Mister Laddu RO", "RO water supply Kanpur Dehat", "drinking water Mati", "water delivery Akbarpur", "chilled water campers Rura", "pure water supplier", "wedding water supply Kanpur Road"],
  openGraph: {
    title: "Mister Laddu RO Plant | Premium Drinking Water Delivery",
    description: "Advanced RO + UV + TDS technology delivering safe and pure drinking water to your doorstep in Kanpur Dehat.",
    url: "https://misterladduro.com",
    siteName: "Mister Laddu RO Plant",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured schema LD+JSON
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mister Laddu RO Plant",
    "image": "https://misterladduro.com/logos/company_logo.png",
    "telephone": "+91-6394596821",
    "email": "info@misterladduro.com",
    "url": "https://misterladduro.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kanpur Road, near Amul Dairy Plant, Mati",
      "addressLocality": "Akbarpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "209101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.4607,
      "longitude": 79.8661
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://wa.me/916394596821"
    ],
    "priceRange": "₹",
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Mati"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Akbarpur"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Rura"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Kanpur Dehat"
      }
    ],
    "serviceType": "RO Water Delivery"
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <LanguageProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
