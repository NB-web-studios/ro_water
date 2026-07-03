"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations, testimonialsTranslations } from "../../data/translations";
import { testimonialsData } from "../../data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    resetTimer();
  };

  const baseReview = testimonialsData[activeIndex];
  const transReview = testimonialsTranslations[activeIndex]?.[language] || {
    name: baseReview.name,
    role: baseReview.role,
    text: baseReview.text
  };

  return (
    <section id="testimonials" className="relative py-20 z-10 overflow-hidden bg-brand-navy/[0.01] dark:bg-white/[0.01]">
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.testTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.testHeading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-navy/70 dark:text-brand-gray/70">
            {t.testSub}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative glass p-6 sm:p-12 rounded-3xl border border-brand-navy/10 dark:border-white/10 shadow-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] flex flex-col justify-between">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-brand-aqua/10 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={baseReview.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-between h-full"
            >
              {/* Rating stars */}
              <div className="flex items-center space-x-1">
                {[...Array(baseReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-lg md:text-xl font-medium text-brand-navy/90 dark:text-white/95 mt-6 leading-relaxed italic">
                "{transReview.text}"
              </p>

              {/* Reviewer Meta info */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brand-navy/10 dark:border-white/10 pt-6">
                <div>
                  <h4 className="font-extrabold text-brand-navy dark:text-white text-base">
                    {transReview.name}
                  </h4>
                  <p className="text-xs text-brand-navy/60 dark:text-brand-gray/60 mt-0.5 font-semibold">
                    {transReview.role} • <span className="text-brand-aqua">{baseReview.location}</span>
                  </p>
                </div>

                {/* Dot markers */}
                <div className="flex space-x-2">
                  {testimonialsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveIndex(index);
                        resetTimer();
                      }}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "w-6 bg-brand-aqua" : "w-2.5 bg-brand-navy/20 dark:bg-white/20"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-between px-3 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 sm:p-3 rounded-full glass border border-brand-navy/10 dark:border-white/10 hover:bg-brand-aqua hover:text-brand-navy transition-all duration-300 pointer-events-auto shadow-md"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 sm:p-3 rounded-full glass border border-brand-navy/10 dark:border-white/10 hover:bg-brand-aqua hover:text-brand-navy transition-all duration-300 pointer-events-auto shadow-md"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
