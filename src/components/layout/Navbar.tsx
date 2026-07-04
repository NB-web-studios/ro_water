"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../ui/ThemeProvider";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { Sun, Moon, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: "#" },
    { name: t.navQuality, href: "#quality" },
    { name: t.navServices, href: "#services" },
    { name: t.navTechnology, href: "#technology" },
    { name: t.navWhyUs, href: "#why-choose-us" },
    { name: t.navCoverage, href: "#coverage" },
    { name: t.navOrderWater, href: "#order-tool" },
    { name: t.navContact, href: "#contact" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="#" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brand-aqua/20 bg-brand-navy/10 dark:bg-white/5 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logos/company_logo.png"
                  alt="Mister Laddu RO Plant Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl leading-normal text-brand-navy dark:text-white">
                  {t.title}
                </span>
                <span className="text-[10px] font-semibold text-brand-aqua tracking-widest uppercase mt-0.5">
                  {t.subtitle}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium hover:text-brand-aqua transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full border border-brand-navy/10 dark:border-white/10 hover:bg-brand-navy/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-brand-navy" />
                  ) : (
                    <Sun className="w-5 h-5 text-brand-aqua" />
                  )}
                </button>

                {/* Call Support CTA */}
                <Link
                  href="tel:+916394596821"
                  className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold rounded-full border border-brand-aqua text-brand-aqua hover:bg-brand-aqua hover:text-brand-navy transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t.callUs}</span>
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <div className="flex items-center space-x-3 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-brand-navy/10 dark:border-white/10 hover:bg-brand-navy/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-brand-navy" />
                ) : (
                  <Sun className="w-5 h-5 text-brand-aqua" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-brand-navy/5 dark:hover:bg-white/5 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass border-t border-brand-navy/5 dark:border-white/5 mt-2"
            >
              <div className="px-4 pt-2 pb-6 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-base font-semibold rounded-lg hover:bg-brand-aqua/10 hover:text-brand-aqua transition-all duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-brand-navy/10 dark:border-white/10">
                  <Link
                    href="tel:+916394596821"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-brand-aqua text-brand-navy font-bold rounded-xl shadow-md glow-aqua transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t.callUs} +91 639459 6821</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
