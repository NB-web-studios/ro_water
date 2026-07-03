"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent("Hello Mister Laddu RO Plant, I would like to inquire about RO water camper delivery.");
    window.open(`https://wa.me/916394596821?text=${text}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        onClick={handleWhatsAppRedirect}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl cursor-pointer focus:outline-none border-2 border-white/20 glow-teal"
        style={{ boxShadow: "0 0 20px rgba(37, 211, 102, 0.4)" }}
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </motion.button>
    </div>
  );
}
