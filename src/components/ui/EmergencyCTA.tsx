"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { translations } from "../../data/translations";
import { Zap, X, MessageSquare, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function EmergencyCTA() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isOpen, setIsOpen] = useState(false);

  const handleEmergencyOrder = (method: "whatsapp" | "call") => {
    if (method === "whatsapp") {
      const text = encodeURIComponent(
        "🚨 *EMERGENCY WATER DELIVERY REQUEST* 🚨\n\nI need a water camper delivered urgently to my location within 30-60 minutes. Please contact me immediately!"
      );
      window.open(`https://wa.me/916394596821?text=${text}`, "_blank");
    } else {
      window.location.href = "tel:+916394596821";
    }
  };

  return (
    <div className="fixed bottom-20 left-6 z-40 select-none">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2 px-4 py-3 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold rounded-full shadow-2xl glow-orange animate-[pulse_2s_infinite]"
            title={t.emergBtn}
          >
            <Zap className="w-5 h-5 fill-white animate-bounce" />
            <span className="text-xs tracking-wide uppercase">{t.emergBtn}</span>
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="glass p-5 rounded-2xl border border-brand-orange/30 shadow-2xl max-w-[280px] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange" />
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded-md text-brand-navy/40 dark:text-white/40 hover:bg-brand-navy/5 dark:hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2 text-brand-orange mb-2">
              <Zap className="w-5 h-5 fill-brand-orange shrink-0" />
              <h4 className="font-extrabold text-sm uppercase tracking-wider">
                {t.emergTitle}
              </h4>
            </div>

            <p className="text-xs text-brand-navy/80 dark:text-brand-gray/80 leading-relaxed font-semibold">
              {t.emergDesc}
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                onClick={() => handleEmergencyOrder("whatsapp")}
                className="flex items-center justify-center space-x-1 py-2 bg-brand-teal text-white text-[11px] font-bold rounded-lg shadow-md hover:bg-brand-teal/90 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{t.emergWhatsAppBtn}</span>
              </button>
              <button
                onClick={() => handleEmergencyOrder("call")}
                className="flex items-center justify-center space-x-1 py-2 bg-brand-navy text-white dark:bg-white dark:text-brand-navy text-[11px] font-bold rounded-lg shadow-md hover:opacity-90 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.emergCallBtn}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
