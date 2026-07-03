"use client";

import React from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations, galleryTranslations } from "../../data/translations";
import { Sparkles, Eye, ShieldCheck, Truck, Droplet } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryVisualItem {
  id: string;
  gradientClass: string;
  icon: React.ReactNode;
}

export default function Gallery() {
  const { language } = useLanguage();
  const t = translations[language];

  const itemsVisuals: GalleryVisualItem[] = [
    {
      id: "plant",
      gradientClass: "from-brand-navy via-brand-navy/90 to-brand-aqua/20",
      icon: <Droplet className="w-8 h-8 text-brand-aqua animate-pulse" />
    },
    {
      id: "packaging",
      gradientClass: "from-brand-navy via-brand-navy/90 to-brand-teal/20",
      icon: <ShieldCheck className="w-8 h-8 text-brand-teal" />
    },
    {
      id: "delivery",
      gradientClass: "from-brand-navy via-brand-navy/90 to-brand-orange/20",
      icon: <Truck className="w-8 h-8 text-brand-orange" />
    },
    {
      id: "testing",
      gradientClass: "from-brand-navy via-brand-navy/90 to-brand-aqua/20",
      icon: <Sparkles className="w-8 h-8 text-brand-aqua" />
    }
  ];

  return (
    <section id="gallery" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.galleryTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.galleryHeading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-navy/70 dark:text-brand-gray/70">
            {t.gallerySub}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itemsVisuals.map((item, index) => {
            const trans = (galleryTranslations as any)[item.id]?.[language] || {
              category: "",
              title: "",
              desc: ""
            };

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[300px] rounded-3xl overflow-hidden glass border border-brand-navy/10 dark:border-white/10 flex flex-col justify-between p-6 cursor-pointer"
              >
                {/* Futuristic light beam backdrop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradientClass} opacity-60 z-0 transition-opacity duration-300 group-hover:opacity-80`} />
                
                {/* Grid abstract animation overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                {/* Dynamic visual placeholder using gradients and icons */}
                <div className="w-full h-[120px] rounded-2xl bg-brand-navy/20 dark:bg-white/5 border border-brand-navy/5 dark:border-white/5 flex items-center justify-center relative overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-aqua/5 to-brand-teal/5 animate-pulse" />
                  <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Meta details */}
                <div className="relative z-10 mt-auto">
                  <span className="text-[10px] font-bold text-brand-aqua uppercase tracking-widest leading-none">
                    {trans.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-brand-navy dark:text-white mt-1 leading-tight group-hover:text-brand-aqua transition-colors">
                    {trans.title}
                  </h3>
                  <p className="text-xs text-brand-navy/60 dark:text-brand-gray/60 mt-1 leading-relaxed line-clamp-2">
                    {trans.desc}
                  </p>
                </div>

                {/* Hover magnifying glass badge */}
                <div className="absolute top-4 right-4 bg-brand-aqua text-brand-navy p-2 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 z-10 shadow-md">
                  <Eye className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
