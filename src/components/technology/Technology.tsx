"use client";

import React, { useState } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations, technologyTranslations } from "../../data/translations";
import { ShieldAlert, Cpu, Sparkles, Filter, CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TechIconItem {
  id: string;
  icon: React.ReactNode;
}

export default function Technology() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeTechId, setActiveTechId] = useState<string>("ro");

  const iconsList: TechIconItem[] = [
    { id: "ro", icon: <Filter className="w-6 h-6 text-brand-aqua" /> },
    { id: "uv", icon: <Cpu className="w-6 h-6 text-brand-teal" /> },
    { id: "tds", icon: <Sparkles className="w-6 h-6 text-brand-orange" /> },
    { id: "filtration", icon: <CheckCircle2 className="w-6 h-6 text-brand-aqua" /> },
    { id: "testing", icon: <ShieldAlert className="w-6 h-6 text-brand-teal" /> }
  ];

  // Get active tech specs
  const activeTechDetails = (technologyTranslations as any)[activeTechId]?.[language];

  return (
    <section id="technology" className="relative py-20 z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-teal/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.techTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.techHeading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-navy/70 dark:text-brand-gray/70">
            {t.techSub}
          </p>
        </div>

        {/* Tab Layout for Technology */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Tech List Buttons (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
            {iconsList.map((item) => {
              const isActive = activeTechId === item.id;
              const details = (technologyTranslations as any)[item.id]?.[language];

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTechId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-brand-aqua/10 dark:bg-white/5 border-brand-aqua shadow-md glow-aqua"
                      : "bg-transparent border-brand-navy/5 dark:border-white/5 hover:border-brand-aqua/30"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl transition-colors duration-300 ${
                      isActive ? "bg-brand-aqua text-brand-navy" : "bg-brand-navy/5 dark:bg-white/5"
                    }`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy dark:text-white text-sm sm:text-base leading-tight">
                        {details?.title}
                      </h3>
                      <p className="text-xs text-brand-navy/60 dark:text-brand-gray/60 mt-1 line-clamp-1">
                        {details?.shortDesc}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                    isActive ? "text-brand-aqua translate-x-1" : "text-brand-navy/30 dark:text-white/30"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Active Tech Description Box (Right Column) */}
          <div className="lg:col-span-7">
            <div className="glass rounded-3xl p-6 sm:p-10 border border-brand-navy/10 dark:border-white/10 h-full flex flex-col justify-between min-h-[380px] sm:min-h-[440px] relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {activeTechDetails && (
                  <motion.div
                    key={activeTechId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-between h-full"
                  >
                    <div>
                      {/* Title header */}
                      <div className="flex items-center justify-between pb-6 border-b border-brand-navy/10 dark:border-white/10">
                        <span className="text-xs font-bold text-brand-teal uppercase tracking-widest bg-brand-teal/15 px-3 py-1 rounded-full">
                          {t.techSpecTag}
                        </span>
                        <span className="text-[10px] sm:text-xs font-bold text-brand-navy/50 dark:text-brand-gray/50">
                          {t.techSpecsLabel}
                        </span>
                      </div>

                      {/* Extended Details */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white mt-6">
                        {activeTechDetails.title}
                      </h3>
                      <p className="text-sm sm:text-base text-brand-navy/80 dark:text-brand-gray/85 leading-relaxed mt-4">
                        {activeTechDetails.extendedDesc}
                      </p>
                    </div>

                    {/* Technical specifications subcard */}
                    <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-brand-navy/10 dark:border-white/10">
                      <div>
                        <span className="text-[10px] font-bold text-brand-navy/40 dark:text-brand-gray/40 uppercase tracking-wider block">
                          {t.techMetricLabel}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-brand-aqua mt-1 block">
                          {activeTechDetails.metric}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-brand-navy/40 dark:text-brand-gray/40 uppercase tracking-wider block">
                          {t.techBenefitLabel}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-brand-teal mt-1 block">
                          {activeTechDetails.benefit}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
