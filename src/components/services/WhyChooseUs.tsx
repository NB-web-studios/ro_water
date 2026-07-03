"use client";

import React from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations, whyTranslations } from "../../data/translations";
import { ShieldCheck, Truck, Percent, Sparkles, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const t = translations[language];

  const iconsMap: Record<string, React.ReactNode> = {
    pure: <ShieldCheck className="w-6 h-6 text-brand-teal" />,
    fast: <Truck className="w-6 h-6 text-brand-aqua" />,
    price: <Percent className="w-6 h-6 text-brand-orange" />,
    package: <Sparkles className="w-6 h-6 text-brand-teal" />,
    local: <UserCheck className="w-6 h-6 text-brand-aqua" />
  };

  const bordersMap: Record<string, string> = {
    pure: "border-brand-teal/20 hover:border-brand-teal/50",
    fast: "border-brand-aqua/20 hover:border-brand-aqua/50",
    price: "border-brand-orange/20 hover:border-brand-orange/50",
    package: "border-brand-teal/20 hover:border-brand-teal/50",
    local: "border-brand-aqua/20 hover:border-brand-aqua/50"
  };

  return (
    <section id="why-choose-us" className="relative py-20 z-10 overflow-hidden bg-brand-navy/[0.01] dark:bg-white/[0.01]">
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-aqua/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Info (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left">
            <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
              {t.whyTag}
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white leading-tight">
              {t.whyHeading}
            </h2>
            <p className="mt-6 text-sm sm:text-base text-brand-navy/70 dark:text-brand-gray/70 leading-relaxed">
              {t.whySub}
            </p>
            <div className="mt-8 self-center lg:self-start">
              <a
                href="#order-tool"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-aqua text-brand-navy font-bold rounded-xl shadow-md glow-aqua transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.whyBtn}
              </a>
            </div>
          </div>

          {/* Cards Grid (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {whyTranslations.map((point, index) => {
              const details = point[language];
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`glass p-6 rounded-2xl border transition-all duration-300 ${bordersMap[point.id]} ${
                    index === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-brand-navy/5 dark:bg-white/5 rounded-xl shrink-0">
                      {iconsMap[point.id]}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy dark:text-white text-base">
                        {details.title}
                      </h3>
                      <p className="text-xs text-brand-navy/70 dark:text-brand-gray/70 mt-2 leading-relaxed">
                        {details.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
