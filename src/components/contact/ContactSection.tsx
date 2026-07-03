"use client";

import React, { useState } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { Phone, MapPin, Clock, MessageCircle, Send, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formState, setFormState] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormState({ name: "", phone: "", message: "" });
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 z-10 bg-brand-navy/[0.01] dark:bg-white/[0.01]">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-aqua/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.contactTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.contactHeading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-navy/70 dark:text-brand-gray/70">
            {t.contactSub}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Info cards (Left Column) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Dialing Card */}
            <div className="glass p-6 rounded-2xl border border-brand-navy/10 dark:border-white/10 flex items-start space-x-4">
              <div className="p-3 bg-brand-aqua/10 text-brand-aqua rounded-xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-brand-navy dark:text-white text-base">
                  {t.contactCallTitle}
                </h3>
                <p className="text-xs text-brand-navy/60 dark:text-brand-gray/60 mt-1 leading-relaxed">
                  {t.contactCallSub}
                </p>
                <div className="mt-3 space-y-1">
                  <a href="tel:+916394596821" className="block text-sm font-extrabold text-brand-aqua hover:underline">
                    +91 639459 6821
                  </a>
                  <a href="tel:+918924969242" className="block text-sm font-extrabold text-brand-aqua hover:underline">
                    +91 892496 9242
                  </a>
                  <a href="tel:+919794084474" className="block text-sm font-extrabold text-brand-aqua hover:underline">
                    +91 979408 4474
                  </a>
                </div>
              </div>
            </div>

            {/* Plant Location Card */}
            <div className="glass p-6 rounded-2xl border border-brand-navy/10 dark:border-white/10 flex items-start space-x-4">
              <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy dark:text-white text-base">
                  {t.contactLocTitle}
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/85 dark:text-brand-gray/85 font-medium mt-1 leading-relaxed">
                  Kanpur Road, near Amul Dairy Plant, Mati, Kanpur Dehat, Uttar Pradesh 209101
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="glass p-6 rounded-2xl border border-brand-navy/10 dark:border-white/10 flex items-start space-x-4">
              <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-brand-navy dark:text-white text-base">
                  {t.contactHoursTitle}
                </h3>
                <p className="text-xs sm:text-sm text-brand-navy/85 dark:text-brand-gray/85 font-medium mt-1 leading-relaxed">
                  {t.contactHoursSub} <br />
                  <span className="text-brand-teal font-bold">{t.contactHoursSub2}</span>
                </p>
              </div>
            </div>

            {/* Chat WhatsApp Card */}
            <a
              href="https://wa.me/916394596821"
              target="_blank"
              className="glass p-6 rounded-2xl border border-brand-teal/20 hover:border-brand-teal/50 flex items-center justify-between group transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-brand-teal/10 text-brand-teal rounded-xl">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy dark:text-white text-base group-hover:text-brand-teal transition-colors">
                    {t.contactChatTitle}
                  </h3>
                  <p className="text-xs text-brand-navy/60 dark:text-brand-gray/60">
                    {t.contactChatSub}
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-brand-teal group-hover:underline">
                {t.contactChatLink}
              </span>
            </a>

          </div>

          {/* Contact Form / Map Box (Right Column) */}
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-brand-navy/10 dark:border-white/10 shadow-2xl flex flex-col justify-between">
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-brand-navy dark:text-white pb-3 border-b border-brand-navy/5 dark:border-white/5">
                {t.contactFormTitle}
              </h3>
              
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/50 dark:text-brand-gray/50 block mb-1">
                  {t.contactFormName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={language === "en" ? "Your Name" : "आपका नाम"}
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-xl focus:border-brand-aqua focus:outline-none text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/50 dark:text-brand-gray/50 block mb-1">
                  {t.contactFormPhone}
                </label>
                <input
                  type="tel"
                  required
                  placeholder={language === "en" ? "Your Contact Number" : "आपका फ़ोन नंबर"}
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-xl focus:border-brand-aqua focus:outline-none text-xs sm:text-sm transition-all"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-brand-navy/50 dark:text-brand-gray/50 block mb-1">
                  {t.contactFormMsg}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={language === "en" ? "e.g. Need subscription details..." : "जैसे- सदस्यता की जानकारी चाहिए..."}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-xl focus:border-brand-aqua focus:outline-none text-xs sm:text-sm transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full flex items-center justify-center space-x-2 py-3.5 font-bold rounded-xl shadow-md transition-all duration-300 ${
                  submitted
                    ? "bg-brand-teal text-white"
                    : "bg-brand-aqua hover:bg-brand-aqua/95 text-brand-navy glow-aqua transform hover:-translate-y-0.5"
                }`}
              >
                {submitted ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>{t.contactFormBtnSuccess}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    <span>{t.contactFormBtnSend}</span>
                  </>
                )}
              </button>
            </form>

            {/* Google Map iframe */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy/50 dark:text-brand-gray/50 mb-2">
                {t.contactMapTitle}
              </h4>
              <div className="w-full h-[160px] rounded-2xl overflow-hidden border border-brand-navy/10 dark:border-white/10 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.536647285117!2d79.8550186981881!3d26.460232537243916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399dbd2fe4a66ccb%3A0xe6ea6bcbfbd9ec60!2sMati%2C%20Uttar%20Pradesh%20209101!5e0!3m2!1sen!2sin!4v1711123456789!5m2!1sen!2sin" 
                  className="w-full h-full border-0 filter grayscale dark:invert dark:opacity-80"
                  allowFullScreen={false} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mister Laddu RO Plant Location Map"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
