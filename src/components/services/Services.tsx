"use client";

import React from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations, servicesTranslations } from "../../data/translations";
import { servicesData, ServiceItem } from "../../data/services";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  // Helper to resolve icon by name
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-8 h-8 text-brand-aqua" />;
    }
    return <Icons.HelpCircle className="w-8 h-8 text-brand-aqua" />;
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="relative py-20 z-10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-aqua/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.servicesTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.servicesHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 dark:text-brand-gray/70">
            {t.servicesSub}
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service: ServiceItem) => {
            // Fetch translated values
            const serviceTrans = (servicesTranslations as any)[service.id]?.[language] || {
              title: service.title,
              description: service.description,
              features: service.features,
              priceInfo: service.priceInfo
            };

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass p-8 rounded-3xl border border-brand-navy/10 dark:border-white/10 relative overflow-hidden transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top hover bar effect */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-aqua to-brand-teal transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                <div>
                  {/* Service Icon */}
                  <div className="p-4 bg-brand-aqua/10 dark:bg-white/5 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-brand-aqua group-hover:text-brand-navy">
                    <div className="group-hover:scale-110 transition-transform duration-300 group-hover:text-brand-navy">
                      {React.cloneElement(renderIcon(service.iconName), {
                        className: "w-7 h-7 text-brand-aqua group-hover:text-brand-navy transition-colors"
                      })}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-brand-navy dark:text-white mb-3">
                    {serviceTrans.title}
                  </h3>
                  <p className="text-sm text-brand-navy/70 dark:text-brand-gray/70 leading-relaxed mb-6">
                    {serviceTrans.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {serviceTrans.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center text-xs font-semibold text-brand-navy/85 dark:text-brand-gray/90">
                        <Icons.Check className="w-4 h-4 text-brand-teal mr-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing & Order CTA */}
                <div className="pt-4 border-t border-brand-navy/5 dark:border-white/5 flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-brand-navy/50 dark:text-brand-gray/50 uppercase tracking-wider">
                    {serviceTrans.priceInfo}
                  </span>
                  
                  <a
                    href="#order-tool"
                    className="flex items-center space-x-1 text-xs font-bold text-brand-aqua group-hover:text-brand-orange transition-colors"
                  >
                    <span>{t.servicesOrderBtn}</span>
                    <Icons.ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
