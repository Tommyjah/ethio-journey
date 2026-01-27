'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Language } from '../types';

export default function Legacy({ language }: { language: Language }) {
  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F15A24]/5 blur-[120px] rounded-full translate-x-1/2" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 mb-12"
        >
          <Quote className="text-[#D4AF37]" size={32} />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl leading-tight text-white mb-10 italic"
        >
          {language === Language.AM 
            ? "«ኢትዮ ጆርኒ ጉዞ ብቻ አይደለም፤ የኢትዮጵያን ውበትና ታሪክ በታላቅ ክብር የምታዩበት ልዩ መንገድ ነው።»"
            : "“Ethio Journey is not just travel; it is a profound immersion into the soul of Ethiopia, curated for those who demand nothing less than perfection.”"}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-2"
        >
          <p className="text-[#F15A24] font-bold tracking-[0.3em] uppercase text-xs">
            {language === Language.AM ? 'የእኛ መሪ ቃል' : 'Our Philosophy'}
          </p>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mt-4" />
        </motion.div>
      </div>
    </section>
  );
}