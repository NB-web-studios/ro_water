"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Droplet } from "lucide-react";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-12 overflow-hidden z-10">
      {/* Background glowing elements */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-aqua/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-brand-teal/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-brand-orange/15 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center justify-center lg:justify-start space-x-2 text-xs sm:text-sm font-bold text-brand-aqua tracking-wide uppercase mb-6"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
              </span>
              <span className="flex items-center">
                <Sparkles className="w-4 h-4 mr-1 text-brand-orange" />
                {t.heroTag}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-brand-navy dark:text-white"
            >
              {t.heroHeading1} <br />
              <span className="bg-gradient-to-r from-brand-aqua via-brand-teal to-brand-orange bg-clip-text text-transparent">
                {t.heroHeadingHighlight}
              </span>
              {t.heroHeading2}
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-brand-navy/80 dark:text-brand-gray/80 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed"
            >
              {t.heroSubheading}
            </motion.p>

            {/* Features Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-brand-teal shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy/90 dark:text-brand-gray/95">
                  {t.heroFeature1}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Droplet className="w-5 h-5 text-brand-aqua shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-brand-navy/90 dark:text-brand-gray/95">
                  {t.heroFeature2}
                </span>
              </div>
              <div className="col-span-2 md:col-span-1 flex items-center space-x-2">
                <span className="flex items-center text-xs sm:text-sm font-semibold text-brand-navy/90 dark:text-brand-gray/95">
                  ⚡ {t.heroFeature3}
                </span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-4"
            >
              <Link
                href="#order-tool"
                className="group relative flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold rounded-xl shadow-lg hover:shadow-brand-orange/20 glow-orange transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{t.heroBtnOrder}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-brand-navy/15 dark:border-white/10 hover:border-brand-aqua/40 text-brand-navy dark:text-brand-gray hover:text-brand-aqua font-bold rounded-xl bg-brand-navy/5 dark:bg-white/5 backdrop-blur-md transition-all duration-300"
              >
                {t.heroBtnContact}
              </Link>
            </motion.div>
          </div>

          {/* Right Floating Container Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-brand-aqua/20 animate-[spin_40s_linear_infinite]" />
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-brand-teal/20 animate-[spin_20s_linear_infinite_reverse]" />
            
            <div className="absolute w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-brand-aqua/10 blur-[40px] animate-[pulse_4s_ease-in-out_infinite]" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="relative w-[280px] h-[340px] sm:w-[360px] sm:h-[440px] select-none pointer-events-none"
            >
              <div className="w-full h-full relative animate-float">
                <Image
                  src="/images/orange_water_container_v2.png"
                  alt="Mister Laddu RO Water Camper"
                  fill
                  sizes="(max-w-768px) 280px, 360px"
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(249,115,22,0.3)]"
                  priority
                />
              </div>

              {/* Float Quality Badge */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute top-12 right-0 sm:-right-4 glass px-4 py-2 rounded-xl flex items-center space-x-2 border border-brand-aqua/30 shadow-md"
              >
                <span className="text-[10px] sm:text-xs font-bold text-brand-teal leading-none uppercase">
                  {t.heroBadgeTds}
                </span>
                <span className="bg-brand-teal/20 text-brand-teal text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                  48 ppm
                </span>
              </motion.div>

              {/* Float Capacity Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute bottom-16 left-0 sm:-left-4 glass px-4 py-2 rounded-xl flex items-center space-x-2 border border-brand-orange/30 shadow-md"
              >
                <span className="text-[10px] sm:text-xs font-bold text-brand-orange leading-none uppercase">
                  {t.heroBadgeSize}
                </span>
                <span className="bg-brand-orange/20 text-brand-orange text-[10px] font-extrabold px-1.5 py-0.5 rounded">
                  {t.heroBadgeSizeValue}
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
