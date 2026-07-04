"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function LanguageButton() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-[168px] right-6 z-40 select-none">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        onClick={toggleLanguage}
        className="w-14 h-14 rounded-full bg-brand-aqua text-brand-navy dark:bg-white dark:text-brand-navy flex flex-col items-center justify-center shadow-2xl cursor-pointer focus:outline-none border-2 border-white/20 glow-aqua font-bold text-sm tracking-wide"
        title={language === "en" ? "Translate to Hindi" : "अंग्रेजी में अनुवाद करें"}
        aria-label="Toggle Language"
      >
        <Globe className="w-4 h-4 mb-0.5 animate-spin" style={{ animationDuration: "10s" }} />
        <span>{language === "en" ? "हि" : "EN"}</span>
      </motion.button>
    </div>
  );
}
