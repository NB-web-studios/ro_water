"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { ShieldCheck, Activity, RefreshCw, Award, Droplet } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustIndicators() {
  const { language } = useLanguage();
  const t = translations[language];
  const [lastCheckTime, setLastCheckTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString(language === "en" ? "en-IN" : "hi-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
    const checkHour = language === "en" ? "09:30 AM" : "पूर्वाह्न 09:30";
    setLastCheckTime(`${formattedDate} - ${checkHour}`);
  }, [language]);

  return (
    <section id="quality" className="relative py-12 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-6 sm:p-10 border border-brand-aqua/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-aqua/5 blur-2xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-teal/5 blur-2xl rounded-full" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-brand-navy/10 dark:border-white/10">
            <div>
              <div className="flex items-center space-x-2 text-brand-aqua font-bold text-xs sm:text-sm uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-brand-teal animate-[pulse_2s_infinite]" />
                <span>{t.dashTag}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white mt-2">
                {t.dashHeading}
              </h2>
              <p className="text-xs sm:text-sm text-brand-navy/60 dark:text-brand-gray/60 mt-1">
                {t.dashSub}
              </p>
            </div>
            
            <div className="flex items-center space-x-3 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 px-4 py-2.5 rounded-xl self-start md:self-center">
              <RefreshCw className="w-4 h-4 text-brand-teal animate-spin" style={{ animationDuration: "12s" }} />
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase tracking-wider text-brand-navy/50 dark:text-brand-gray/50 leading-none">
                  {t.dashLastCheck}
                </span>
                <span className="text-xs font-bold text-brand-navy dark:text-brand-gray mt-0.5">
                  {lastCheckTime || "Today - 09:30 AM"}
                </span>
              </div>
            </div>
          </div>

          {/* Real-time parameters grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            
            {/* Param 1: TDS Level */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-brand-navy/[0.02] dark:bg-white/[0.02] border border-brand-navy/5 dark:border-white/5 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-aqua/10 text-brand-aqua rounded-xl">
                  <Activity className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-brand-teal bg-brand-teal/15 px-2 py-0.5 rounded-full uppercase">
                  {t.dashParamExcellent}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-brand-navy/50 dark:text-brand-gray/50 uppercase tracking-widest">
                  {t.dashTdsLabel}
                </span>
                <h3 className="text-3xl font-black text-brand-navy dark:text-white mt-1">
                  48 <span className="text-sm font-semibold text-brand-navy/60 dark:text-brand-gray/60">PPM</span>
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-navy/5 dark:border-white/5">
                <div className="w-full bg-brand-navy/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-aqua h-full rounded-full" style={{ width: "32%" }} />
                </div>
                <div className="flex justify-between text-[9px] text-brand-navy/40 dark:text-brand-gray/40 mt-1 font-semibold">
                  <span>{t.dashTdsRange}</span>
                  <span>{t.dashTdsStatus}</span>
                </div>
              </div>
            </motion.div>

            {/* Param 2: pH Level */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-brand-navy/[0.02] dark:bg-white/[0.02] border border-brand-navy/5 dark:border-white/5 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl">
                  <Droplet className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-brand-teal bg-brand-teal/15 px-2 py-0.5 rounded-full uppercase">
                  {t.dashParamOptimal}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-brand-navy/50 dark:text-brand-gray/50 uppercase tracking-widest">
                  {t.dashPhLabel}
                </span>
                <h3 className="text-3xl font-black text-brand-navy dark:text-white mt-1">
                  7.2 <span className="text-sm font-semibold text-brand-navy/60 dark:text-brand-gray/60">pH</span>
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-navy/5 dark:border-white/5">
                <div className="w-full bg-brand-navy/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full" style={{ width: "52%" }} />
                </div>
                <div className="flex justify-between text-[9px] text-brand-navy/40 dark:text-brand-gray/40 mt-1 font-semibold">
                  <span>{t.dashPhRange}</span>
                  <span>{t.dashPhStatus}</span>
                </div>
              </div>
            </motion.div>

            {/* Param 3: Purification Level */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-brand-navy/[0.02] dark:bg-white/[0.02] border border-brand-navy/5 dark:border-white/5 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-brand-orange bg-brand-orange/15 px-2 py-0.5 rounded-full uppercase">
                  {t.dashParamActive}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-brand-navy/50 dark:text-brand-gray/50 uppercase tracking-widest">
                  {t.dashStagesLabel}
                </span>
                <h3 className="text-2xl font-black text-brand-navy dark:text-white mt-1">
                  RO+UV+TDS
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-navy/5 dark:border-white/5">
                <div className="w-full bg-brand-navy/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-orange h-full rounded-full" style={{ width: "100%" }} />
                </div>
                <div className="flex justify-between text-[9px] text-brand-navy/40 dark:text-brand-gray/40 mt-1 font-semibold">
                  <span>{t.dashStagesRange}</span>
                  <span>{t.dashStagesStatus}</span>
                </div>
              </div>
            </motion.div>

            {/* Param 4: Microbiological Status */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-brand-navy/[0.02] dark:bg-white/[0.02] border border-brand-navy/5 dark:border-white/5 p-5 rounded-2xl flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-brand-aqua/10 text-brand-aqua rounded-xl">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-extrabold text-brand-teal bg-brand-teal/15 px-2 py-0.5 rounded-full uppercase">
                  {t.dashParamCertified}
                </span>
              </div>
              <div className="mt-4">
                <span className="text-[11px] font-bold text-brand-navy/50 dark:text-brand-gray/50 uppercase tracking-widest">
                  {t.dashPathogenLabel}
                </span>
                <h3 className="text-3xl font-black text-brand-navy dark:text-white mt-1">
                  0.0 <span className="text-sm font-semibold text-brand-navy/60 dark:text-brand-gray/60">CFU</span>
                </h3>
              </div>
              <div className="mt-4 pt-3 border-t border-brand-navy/5 dark:border-white/5">
                <div className="w-full bg-brand-navy/10 dark:bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full" style={{ width: "0%" }} />
                </div>
                <div className="flex justify-between text-[9px] text-brand-navy/40 dark:text-brand-gray/40 mt-1 font-semibold">
                  <span>{t.dashPathogenRange}</span>
                  <span>{t.dashPathogenStatus}</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom quick text */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs font-semibold text-brand-navy/70 dark:text-brand-gray/70">
            <span>
              ℹ️ {t.dashFootnote}
            </span>
            <span className="text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-lg">
              ✓ {t.dashCompliance}
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
