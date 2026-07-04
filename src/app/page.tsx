import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import TrustIndicators from "../components/hero/TrustIndicators";
import Services from "../components/services/Services";
import Technology from "../components/technology/Technology";
import WhyChooseUs from "../components/services/WhyChooseUs";
import Statistics from "../components/services/Statistics";
import Testimonials from "../components/testimonials/Testimonials";
import Gallery from "../components/gallery/Gallery";
import CoverageMap from "../components/contact/CoverageMap";
import WhatsAppOrderTool from "../components/order/WhatsAppOrderTool";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/layout/Footer";

// UI / floating elements
import CanvasWave from "../components/ui/CanvasWave";
import EmergencyCTA from "../components/ui/EmergencyCTA";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import LanguageButton from "../components/ui/LanguageButton";
import CallFloatingButton from "../components/ui/CallFloatingButton";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      
      {/* Dynamic Water backdrop wave illustration */}
      <CanvasWave />

      {/* Floating Action Elements */}
      <EmergencyCTA />
      <WhatsAppButton />
      <CallFloatingButton />
      <LanguageButton />

      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Container Flow */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Water Quality Indicators / Dashboard */}
        <TrustIndicators />

        {/* 4. Services Grid */}
        <Services />

        {/* 5. Purification Technology Switcher */}
        <Technology />

        {/* 6. Why Choose Us Grid */}
        <WhyChooseUs />

        {/* 7. Animated Statistics counters */}
        <Statistics />

        {/* 8. Carousel Testimonials reviews */}
        <Testimonials />

        {/* 9. Plant & Camper Gallery */}
        <Gallery />

        {/* 10. Service Area Coverage Map */}
        <CoverageMap />

        {/* 11. Custom WhatsApp Ordering Tool */}
        <WhatsAppOrderTool />

        {/* 12. Contact details & Form */}
        <ContactSection />

      </main>

      {/* 13. Footer credentials and copyrights */}
      <Footer />

    </div>
  );
}
