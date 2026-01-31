'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, MessageSquare } from 'lucide-react';

interface FloatingButtonsProps {
  onOpenAIConcierge: () => void;
  isAIConciergeOpen: boolean;
}

export default function FloatingButtons({ onOpenAIConcierge, isAIConciergeOpen }: FloatingButtonsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3">
      {/* WhatsApp Button - Always visible */}
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/251911444646"
        target="_blank"
        rel="noopener noreferrer"
        className="w-[60px] h-[60px] bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(37,211,102,0.5)] group relative transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-black text-white text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-bold border border-white/10">
          Contact Us
        </span>
        <MessageCircle size={32} className="font-bold" />
      </motion.a>

      {/* AI Concierge Button */}
      <motion.button
        onClick={onOpenAIConcierge}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-[60px] h-[60px] bg-[#F15A24] text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(241,90,36,0.5)] group relative transition-all duration-300`}
        aria-label="Open AI Concierge"
      >
        <span className="absolute right-full mr-4 bg-black text-white text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap uppercase tracking-widest font-bold border border-white/10">
          AI Trip Planner
        </span>
        <MessageSquare size={32} className="font-bold" />
      </motion.button>
    </div>
  );
}
