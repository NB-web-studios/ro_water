"use client";

import React, { useState, useRef, useEffect } from "react";
import { Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import { translations } from "../../data/translations";

export default function CallFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];
  const containerRef = useRef<HTMLDivElement>(null);

  const phoneNumbers = [
    { label: language === "en" ? "Line 1 (Primary)" : "लाइन 1 (मुख्य)", number: "+91 639459 6821", tel: "+916394596821" },
    { label: language === "en" ? "Line 2 (Delivery)" : "लाइन 2 (डिलीवरी)", number: "+91 892496 9242", tel: "+918924969242" },
    { label: language === "en" ? "Line 3 (Support)" : "लाइन 3 (सहायता)", number: "+91 979408 4474", tel: "+919794084474" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="fixed bottom-24 right-6 z-40 select-none">
      {/* Popover Menu (Expands to the left) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 15, y: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 15, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-16 bottom-0 w-64 glass p-4 rounded-2xl border border-brand-navy/10 dark:border-white/10 shadow-2xl flex flex-col space-y-2.5 text-left"
          >
            <div className="pb-1.5 border-b border-brand-navy/5 dark:border-white/5">
              <span className="text-[10px] font-bold text-brand-aqua uppercase tracking-widest">
                {language === "en" ? "Call Support" : "कॉल सहायता"}
              </span>
            </div>
            {phoneNumbers.map((phone, idx) => (
              <a
                key={idx}
                href={`tel:${phone.tel}`}
                className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-brand-aqua/10 dark:hover:bg-white/5 group transition-all duration-200"
              >
                <div className="p-2 bg-brand-aqua/10 text-brand-aqua rounded-lg group-hover:bg-brand-aqua group-hover:text-brand-navy transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[9px] font-bold text-brand-navy/55 dark:text-brand-gray/55 uppercase leading-none">
                    {phone.label}
                  </span>
                  <span className="text-xs font-extrabold text-brand-navy dark:text-white mt-0.5 whitespace-nowrap">
                    {phone.number}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Trigger */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer focus:outline-none border-2 border-white/20 transition-all duration-300 ${
          isOpen
            ? "bg-brand-navy dark:bg-white text-white dark:text-brand-navy border-brand-navy/35 dark:border-white/35 rotate-90"
            : "bg-brand-aqua hover:bg-brand-aqua/95 text-brand-navy glow-aqua"
        }`}
        style={!isOpen ? { boxShadow: "0 0 20px rgba(0, 180, 216, 0.4)" } : undefined}
        title={language === "en" ? "Call Support Lines" : "कॉल सपोर्ट लाइन्स"}
        aria-label="Call Support Lines"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6 animate-pulse" />}
      </motion.button>
    </div>
  );
}
