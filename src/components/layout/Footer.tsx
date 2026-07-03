"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { Phone, Mail, MapPin, CheckCircle, ArrowUp } from "lucide-react";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-navy dark:bg-[#060a17] text-white pt-16 pb-8 z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brand-aqua/20 bg-white/5">
                <Image
                  src="/logos/company_logo.png"
                  alt="Mister Laddu RO Plant Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight leading-none text-white">
                  {t.title}
                </span>
                <span className="text-[10px] font-semibold text-brand-aqua tracking-widest uppercase mt-0.5">
                  {t.subtitle}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-brand-gray/60 leading-relaxed max-w-sm">
              {t.footerDesc}
            </p>

            <div className="flex items-center space-x-2 text-[11px] font-bold text-brand-teal">
              <CheckCircle className="w-4 h-4" />
              <span>{t.footerRegistered}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-aqua mb-4">
              {language === "en" ? "Quick Links" : "त्वरित लिंक्स"}
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-gray/60 font-semibold">
              <li>
                <Link href="#quality" className="hover:text-white transition-colors">
                  {t.navQuality}
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-white transition-colors">
                  {t.navServices}
                </Link>
              </li>
              <li>
                <Link href="#technology" className="hover:text-white transition-colors">
                  {t.navTechnology}
                </Link>
              </li>
              <li>
                <Link href="#coverage" className="hover:text-white transition-colors">
                  {t.navCoverage}
                </Link>
              </li>
              <li>
                <Link href="#order-tool" className="hover:text-white transition-colors">
                  {t.navOrderWater}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-aqua mb-4">
              {t.footerContactHeading}
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-gray/60 font-semibold">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-brand-orange shrink-0 mt-0.5" />
                <span>Kanpur Road, near Amul Dairy, Mati, Kanpur Dehat, UP - 209101</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-brand-teal shrink-0" />
                <a href="tel:+916394596821" className="hover:text-white transition-colors">
                  +91 639459 6821
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-brand-aqua shrink-0" />
                <a href="mailto:info@misterladduro.com" className="hover:text-white transition-colors">
                  info@misterladduro.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Business Verification */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase text-brand-aqua mb-4">
              {t.footerLocalHeading}
            </h4>
            <p className="text-xs text-brand-gray/60 leading-relaxed mb-4">
              {t.footerLocalDesc}
            </p>
            <div className="flex space-x-3">
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-brand-teal">
                {t.footerTdsBadge}
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-brand-aqua">
                {t.footerPhBadge}
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright & Scroll top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-gray/40 font-semibold gap-4">
          <span>
            © {new Date().getFullYear()} {t.footerCopyright}
          </span>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1 hover:text-white transition-colors focus:outline-none"
            aria-label="Scroll to top"
          >
            <span>{t.footerBackToTop}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
