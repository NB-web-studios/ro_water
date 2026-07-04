"use client";

import React, { useState } from "react";
import { useLanguage } from "../ui/LanguageContext";
import { translations } from "../../data/translations";
import { MessageSquare, Calendar, Compass, ShoppingCart } from "lucide-react";

export default function WhatsAppOrderTool() {
  const { language } = useLanguage();
  const t = translations[language];

  const [quantity, setQuantity] = useState(2);
  const [frequency, setFrequency] = useState("one-time"); // "one-time", "daily", "weekly", "monthly"
  const [name, setName] = useState("");
  const [area, setArea] = useState("mati"); // "mati", "akbarpur", "rura", "other"
  const [customAddress, setCustomAddress] = useState("");

  const itemPrice = 40; // Base price for 20L camper
  const subscriptionDiscounts: Record<string, number> = {
    "one-time": 0,
    daily: 0.15,
    weekly: 0.1,
    monthly: 0.2
  };

  const calculatedSubtotal = quantity * itemPrice;
  const discountRate = subscriptionDiscounts[frequency];
  const discountAmount = calculatedSubtotal * discountRate;
  const calculatedTotal = calculatedSubtotal - discountAmount;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert(language === "en" ? "Please enter your name." : "कृपया अपना नाम दर्ज करें।");
      return;
    }

    const frequencyLabels: Record<string, string> = {
      "one-time": language === "en" ? "One-time Delivery" : "एक बार वितरण",
      daily: language === "en" ? "Daily Subscription - 15% OFF" : "दैनिक योजना - 15% छूट",
      weekly: language === "en" ? "Weekly Subscription - 10% OFF" : "साप्ताहिक योजना - 10% छूट",
      monthly: language === "en" ? "Monthly Subscription - 20% OFF" : "मासिक योजना - 20% छूट"
    };

    const areaLabels: Record<string, string> = {
      mati: language === "en" ? "Mati" : "माती",
      akbarpur: language === "en" ? "Akbarpur" : "अकबरपुर",
      rura: language === "en" ? "Rura" : "रूरा",
      other: language === "en" ? "Nearby Villages" : "आसपास के गाँव"
    };

    // Compile order message
    const orderText = `*MISTER LADDU RO PLANT - NEW ORDER* 💧
----------------------------------
👤 *Name / नाम:* ${name}
📦 *Product / उत्पाद:* 20 Litre Chilled RO Camper
🔢 *Quantity / मात्रा:* ${quantity} Camper(s)
📅 *Plan / योजना:* ${frequencyLabels[frequency]}
📍 *Area / क्षेत्र:* ${areaLabels[area]}
🏠 *Address / पता:* ${customAddress || "Call for location pin"}

----------------------------------
💳 *Estimated Bill / अनुमानित बिल:* ₹${calculatedTotal}
📞 Please confirm and schedule my delivery status!`;

    const encodedText = encodeURIComponent(orderText);
    const whatsappUrl = `https://wa.me/916394596821?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="order-tool" className="relative py-20 z-10 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[280px] h-[280px] bg-brand-orange/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs sm:text-sm font-bold text-brand-aqua tracking-widest uppercase mb-3">
            {t.orderTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy dark:text-white">
            {t.orderHeading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-navy/70 dark:text-brand-gray/70">
            {t.orderSub}
          </p>
        </div>

        {/* Form Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          
          {/* Configurator Form (Left Column) */}
          <div className="lg:col-span-7 glass rounded-3xl p-6 sm:p-8 border border-brand-navy/10 dark:border-white/10 shadow-2xl">
            <form onSubmit={handleWhatsAppSend} className="space-y-6">
              
              {/* Quantity Picker */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-gray/60 block mb-3">
                  {t.orderQTitle}
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-12 h-12 rounded-xl bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 flex items-center justify-center font-bold text-xl hover:bg-brand-aqua hover:text-brand-navy transition-all duration-300"
                  >
                    -
                  </button>
                  <span className="text-3xl font-extrabold text-brand-navy dark:text-white w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.min(50, prev + 1))}
                    className="w-12 h-12 rounded-xl bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 flex items-center justify-center font-bold text-xl hover:bg-brand-aqua hover:text-brand-navy transition-all duration-300"
                  >
                    +
                  </button>
                  <span className="text-xs font-semibold text-brand-navy/60 dark:text-brand-gray/60 pl-2">
                    ({quantity * 20} {t.orderQLiters})
                  </span>
                </div>
              </div>

              {/* Delivery Frequency */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-gray/60 block mb-3">
                  {t.orderFTitle}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: "one-time", label: language === "en" ? "One-Time" : "एक बार", info: language === "en" ? "Standard" : "मानक" },
                    { id: "daily", label: language === "en" ? "Daily" : "दैनिक", info: language === "en" ? "15% Off" : "15% छूट" },
                    { id: "weekly", label: language === "en" ? "Weekly" : "साप्ताहिक", info: language === "en" ? "10% Off" : "10% छूट" },
                    { id: "monthly", label: language === "en" ? "Monthly" : "मासिक", info: language === "en" ? "20% Off" : "20% छूट" }
                  ].map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id)}
                      className={`p-3 rounded-xl border text-center transition-all duration-300 ${
                        frequency === freq.id
                          ? "bg-brand-aqua/10 dark:bg-white/5 border-brand-aqua text-brand-aqua"
                          : "bg-transparent border-brand-navy/5 dark:border-white/5 text-brand-navy dark:text-white hover:border-brand-aqua/30"
                      }`}
                    >
                      <span className="text-sm font-bold block">{freq.label}</span>
                      <span className="text-[10px] opacity-70 mt-0.5 block">{freq.info}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Area fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-gray/60 block mb-2">
                    {t.orderNTitle}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={language === "en" ? "Enter name" : "नाम दर्ज करें"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-xl focus:border-brand-aqua focus:outline-none text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-gray/60 block mb-2">
                    {t.orderATitle}
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-4 py-3 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-xl focus:border-brand-aqua focus:outline-none text-sm transition-all text-brand-navy dark:text-white"
                  >
                    <option value="mati" className="dark:bg-brand-navy text-brand-navy dark:text-white">{language === "en" ? "Mati (RO Hub)" : "माती (RO हब)"}</option>
                    <option value="akbarpur" className="dark:bg-brand-navy text-brand-navy dark:text-white">{language === "en" ? "Akbarpur Town" : "अकबरपुर कस्बा"}</option>
                    <option value="rura" className="dark:bg-brand-navy text-brand-navy dark:text-white">{language === "en" ? "Rura Sector" : "रूरा सेक्टर"}</option>
                    <option value="other" className="dark:bg-brand-navy text-brand-navy dark:text-white">{language === "en" ? "Nearby Villages" : "आसपास के गाँव"}</option>
                  </select>
                </div>
              </div>

              {/* Address Area */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-navy/60 dark:text-brand-gray/60 block mb-2">
                  {t.orderAddrTitle}
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder={language === "en" ? "e.g. Near Shiv Mandir, Main Road, Mati" : "जैसे- शिव मंदिर के पास, मुख्य मार्ग, माती"}
                  value={customAddress}
                  onChange={(e) => setCustomAddress(e.target.value)}
                  className="w-full px-4 py-3 bg-brand-navy/5 dark:bg-white/5 border border-brand-navy/10 dark:border-white/10 rounded-xl focus:border-brand-aqua focus:outline-none text-sm transition-all resize-none"
                />
              </div>

              {/* WhatsApp Checkout Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 py-4 bg-brand-teal hover:bg-brand-teal/95 text-white font-bold rounded-xl shadow-lg glow-teal transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.orderBtnConfirm}</span>
              </button>

            </form>
          </div>

          {/* Pricing Breakdown Card (Right Column) */}
          <div className="lg:col-span-5">
            <div className="glass rounded-3xl p-6 sm:p-8 border border-brand-navy/10 dark:border-white/10 h-full flex flex-col justify-between relative overflow-hidden">
              
              <div>
                <span className="text-[10px] font-bold text-brand-aqua uppercase tracking-widest bg-brand-aqua/10 px-2.5 py-1 rounded-md">
                  {t.orderSummaryTitle}
                </span>

                <div className="mt-8 space-y-4">
                  {/* Row 1: Quantity */}
                  <div className="flex justify-between text-sm text-brand-navy/70 dark:text-brand-gray/70">
                    <span>{t.orderSummaryQty}</span>
                    <span className="font-bold">{quantity} camper(s)</span>
                  </div>

                  {/* Row 2: Subtotal */}
                  <div className="flex justify-between text-sm text-brand-navy/70 dark:text-brand-gray/70">
                    <span>{t.orderSummaryBase} (₹{itemPrice}/ea)</span>
                    <span className="font-bold">₹{calculatedSubtotal}</span>
                  </div>

                  {/* Row 3: Discounts */}
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-sm text-brand-teal">
                      <span>{t.orderSummaryDiscount} ({discountRate * 100}%)</span>
                      <span className="font-bold">- ₹{discountAmount}</span>
                    </div>
                  )}

                  {/* Row 4: Delivery fee */}
                  <div className="flex justify-between text-sm text-brand-navy/70 dark:text-brand-gray/70">
                    <span>{t.orderSummaryDelivery}</span>
                    <span className="font-bold text-brand-teal">{t.orderSummaryFree}</span>
                  </div>
                </div>

                <div className="border-t border-brand-navy/10 dark:border-white/10 my-6 pt-6 flex justify-between items-baseline">
                  <span className="text-base font-extrabold text-brand-navy dark:text-white">
                    {t.orderSummaryTotal}
                  </span>
                  <span className="text-3xl font-black text-brand-orange">
                    ₹{calculatedTotal}
                  </span>
                </div>
              </div>

              {/* Visual trust factors */}
              <div className="mt-8 space-y-3.5 pt-6 border-t border-brand-navy/10 dark:border-white/10 text-xs font-semibold text-brand-navy/80 dark:text-brand-gray/80">
                <div className="flex items-center">
                  <ShoppingCart className="w-4.5 h-4.5 text-brand-aqua mr-2.5" />
                  <span>{t.orderSummaryFeature1}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4.5 h-4.5 text-brand-teal mr-2.5" />
                  <span>{t.orderSummaryFeature2}</span>
                </div>
                <div className="flex items-center">
                  <Compass className="w-4.5 h-4.5 text-brand-orange mr-2.5" />
                  <span>{t.orderSummaryFeature3}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
