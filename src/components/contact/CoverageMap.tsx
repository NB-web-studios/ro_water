"use client";

import React, { useState } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations, coverageAreasTranslations } from "../../data/translations";
import { MapPin, Navigation, Compass, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface AreaVisualItem {
  id: string;
  status: "active" | "limited" | "coming-soon";
  coordinates: { x: number; y: number };
}

export default function CoverageMap() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedAreaId, setSelectedAreaId] = useState<string>("mati");

  const areasVisualInfo: AreaVisualItem[] = [
    { id: "mati", status: "active", coordinates: { x: 50, y: 50 } },
    { id: "akbarpur", status: "active", coordinates: { x: 68, y: 38 } },
    { id: "rura", status: "active", coordinates: { x: 30, y: 65 } },
    { id: "bara", status: "limited", coordinates: { x: 75, y: 72 } }
  ];

  // Find active area data
  const baseAreaVisual = areasVisualInfo.find((a) => a.id === selectedAreaId) || areasVisualInfo[0];
  const transAreaDetails = coverageAreasTranslations.find((a) => a.id === selectedAreaId)?.[language] || {
    name: "",
    distance: "",
    time: ""
  };

  return (
    <section id="coverage" className="relative py-20 z-10">
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-brand-aqua/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.mapTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.mapHeading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-navy/70 dark:text-brand-gray/70">
            {t.mapSub}
          </p>
        </div>

        {/* Coverage details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Interactive Map Visual (Left Column) */}
          <div className="lg:col-span-7 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden min-h-[360px] sm:min-h-[440px]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,180,216,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,180,216,0.08)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] rounded-full border border-brand-aqua/20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-brand-teal/15 pointer-events-none" />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-orange animate-ping opacity-75" />

            <div className="relative z-10 flex justify-between items-center pb-4 border-b border-brand-navy/10 dark:border-white/10">
              <span className="text-[10px] font-bold text-brand-aqua uppercase tracking-widest flex items-center">
                <Compass className="w-4 h-4 mr-1.5 animate-spin" style={{ animationDuration: "20s" }} />
                {t.mapRadarTag}
              </span>
              <span className="text-[10px] font-bold text-brand-navy/50 dark:text-brand-gray/50">
                Kanpur Dehat, UP
              </span>
            </div>

            {/* Render Pins on Map */}
            <div className="relative flex-grow min-h-[220px] sm:min-h-[300px]">
              {areasVisualInfo.map((area) => {
                const isSelected = area.id === selectedAreaId;
                const areaTrans = coverageAreasTranslations.find((a) => a.id === area.id)?.[language];
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedAreaId(area.id)}
                    style={{ left: `${area.coordinates.x}%`, top: `${area.coordinates.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                  >
                    {isSelected && (
                      <span className="absolute -inset-4 rounded-full bg-brand-aqua/20 animate-ping" />
                    )}

                    <div className={`p-2.5 rounded-xl border transition-all duration-300 flex items-center space-x-1.5 shadow-md ${
                      isSelected
                        ? "bg-brand-aqua text-brand-navy border-brand-aqua scale-110"
                        : "glass text-brand-navy dark:text-white border-brand-navy/10 dark:border-white/10 hover:border-brand-aqua/40"
                    }`}>
                      <MapPin className="w-4 h-4" />
                      <span className="text-[10px] font-extrabold tracking-wide whitespace-nowrap">
                        {area.id === "mati" ? (language === "en" ? "RO Plant Hub" : "RO प्लांट हब") : areaTrans?.name.split(" ")[0]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 flex items-center justify-between text-xs text-brand-navy/70 dark:text-brand-gray/70 pt-4 border-t border-brand-navy/10 dark:border-white/10">
              <span>{t.mapCenterText}</span>
              <span className="font-extrabold text-brand-teal">✓ {t.mapOperatingText}</span>
            </div>
          </div>

          {/* Area Description Side Box (Right Column) */}
          <div className="lg:col-span-5">
            <div className="glass rounded-3xl p-6 sm:p-10 border border-brand-navy/10 dark:border-white/10 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-aqua uppercase tracking-widest">
                  {t.mapDetailsTag}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white mt-4">
                  {transAreaDetails.name}
                </h3>
                
                {/* Active indicator */}
                <div className="mt-4 flex items-center space-x-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${
                    baseAreaVisual.status === "active" ? "bg-brand-teal" : "bg-brand-orange"
                  }`} />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {baseAreaVisual.status === "active" ? t.mapActiveStatus : t.mapLimitedStatus}
                  </span>
                </div>

                <div className="space-y-4 mt-8">
                  {/* Distance */}
                  <div className="flex items-center space-x-3 p-3 bg-brand-navy/5 dark:bg-white/5 rounded-xl">
                    <Navigation className="w-5 h-5 text-brand-aqua" />
                    <div>
                      <span className="text-[10px] text-brand-navy/50 dark:text-brand-gray/50 font-bold uppercase leading-none block">
                        {t.mapDistanceLabel}
                      </span>
                      <span className="text-sm font-extrabold mt-0.5 block">
                        {transAreaDetails.distance}
                      </span>
                    </div>
                  </div>

                  {/* Delivery Speed */}
                  <div className="flex items-center space-x-3 p-3 bg-brand-navy/5 dark:bg-white/5 rounded-xl">
                    <Navigation className="w-5 h-5 text-brand-teal" style={{ transform: "rotate(90deg)" }} />
                    <div>
                      <span className="text-[10px] text-brand-navy/50 dark:text-brand-gray/50 font-bold uppercase leading-none block">
                        {t.mapSpeedLabel}
                      </span>
                      <span className="text-sm font-extrabold mt-0.5 block text-brand-teal">
                        {transAreaDetails.time}
                      </span>
                    </div>
                  </div>
                </div>

                <ul className="mt-8 space-y-2 text-xs font-semibold text-brand-navy/80 dark:text-brand-gray/80">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2" />
                    <span>{t.mapFeature1}</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-teal mr-2" />
                    <span>{t.mapFeature2}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-navy/10 dark:border-white/10">
                <a
                  href="#order-tool"
                  className="flex items-center justify-center w-full py-3 bg-brand-navy/10 dark:bg-white/10 hover:bg-brand-aqua hover:text-brand-navy text-xs font-bold rounded-xl transition-all duration-300 border border-brand-navy/10 dark:border-white/5 hover:border-brand-aqua"
                >
                  {t.mapConfigureBtn}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
