"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { statsData, StatItem } from "../../data/stats";

function CountUpItem({ item, label, description }: { item: StatItem; label: string; description: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const duration = 2000;
    const startValue = 0;
    const endValue = item.value;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeProgress * (endValue - startValue) + startValue);
      
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, item.value]);

  return (
    <div
      ref={elementRef}
      className="glass p-6 sm:p-8 rounded-3xl border border-brand-navy/10 dark:border-white/10 text-center relative overflow-hidden flex flex-col justify-center items-center shadow-lg transition-transform duration-300 hover:scale-[1.02]"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-aqua/5 blur-2xl rounded-full" />
      <span className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-aqua tracking-tight leading-none">
        {count}
        {item.suffix}
      </span>
      <h3 className="text-sm sm:text-base font-bold text-brand-navy dark:text-white mt-3">
        {label}
      </h3>
      <p className="text-xs text-brand-navy/60 dark:text-brand-gray/60 mt-1 max-w-[200px] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Statistics() {
  const { language } = useLanguage();
  const t = translations[language] as any;

  const translationKeys: Record<string, { label: string; desc: string }> = {
    customers: { label: t.statsHappyCustomers, desc: t.statsHappyCustomersDesc },
    water: { label: t.statsCampersDelivered, desc: t.statsCampersDeliveredDesc },
    coverage: { label: t.statsCoverage, desc: t.statsCoverageDesc },
    experience: { label: t.statsExperience, desc: t.statsExperienceDesc }
  };

  return (
    <section className="relative py-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item) => {
            const trans = translationKeys[item.id] || { label: item.label, desc: item.description };
            return (
              <CountUpItem
                key={item.id}
                item={item}
                label={trans.label}
                description={trans.desc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
