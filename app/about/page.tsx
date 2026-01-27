'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Crown, BookOpen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Language } from '../../types';
import Navbar from '../../components/Navbar';
import BookingModal from '../../components/BookingModal';
import AnniversarySeal from '../../components/AnniversarySeal';

export default function AboutPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onInquiryClick={openBooking} 
      />

      {/* 1. HERO SECTION (Clean, focus on title) */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/posterr.jpg"
            alt="Our Legacy"
            fill
            priority
            className="object-cover opacity-60 scale-105 transition-transform duration-[10s] ease-linear"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <motion.h1
            className="font-serif text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
          >
            {language === Language.AM ? 'ታሪካችን' : 'Our Legacy'}
          </motion.h1>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
          <p className="text-[#D4AF37] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold">
             {language === Language.AM ? 'ኢትዮ ጆርኒ' : 'Ethio Journey'}
          </p>
        </motion.div>
      </section>

      {/* 2. THE BLACK SPACE (Dedicated Seal Area) */}
      <section className="relative py-24 bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Subtle radial glow to make the seal pop */}
        <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <AnniversarySeal />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h2 className="text-xl md:text-2xl font-serif text-white/90 italic">
            {language === Language.AM 
              ? 'አስር ዓመታት በታላቅ ጉዞ' 
              : 'A Decade of Extraordinary Journeys'}
          </h2>
          <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37]/50 to-transparent mx-auto mt-10" />
        </motion.div>
      </section>

      {/* 3. STORY SECTION */}
      <section className="relative z-10 py-24 bg-black">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          
          <motion.button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-white/40 hover:text-[#D4AF37] transition-colors mb-16 group cursor-pointer"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {language === Language.AM ? 'ወደ መነሻ ተመለስ' : 'Back to Home'}
            </span>
          </motion.button>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group"
            >
              <Image
                src="/images/posterr.jpg"
                alt="Ethiopian Landscape"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            <div className="space-y-8">
              <h2 className="text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-[10px]">
                {language === Language.AM ? 'የእኛ ታሪክ' : 'The Heritage'}
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                 {language === Language.AM ? 'የአስር አመት ልምድ' : '10 Years of Refined Discovery'}
              </h3>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed font-light italic">
                {language === Language.AM 
                  ? 'ላለፉት 10 ዓመታት ኢትዮ ጆርኒ በኢትዮጵያ የቅንጦት ጉዞ ቀዳሚ ሆኖ ቆይቷል።'
                  : 'Founded on the pillars of safety, exclusivity, and heritage, we have spent a decade curating the most profound luxury expeditions across the Horn of Africa.'}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <motion.section className="mb-32 py-20 border-y border-white/5">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { label: language === Language.AM ? 'ዓመታት' : 'Years of Excellence', val: '10+' },
                { label: language === Language.AM ? 'ጉዞዎች' : 'Luxury Expeditions', val: '500+' },
                { label: language === Language.AM ? 'ድጋፍ' : 'Concierge Support', val: '24/7' },
                { label: language === Language.AM ? 'ታማኝነት' : 'Client Satisfaction', val: '100%' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#D4AF37] font-serif text-5xl font-bold mb-2">{stat.val}</div>
                  <div className="text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { icon: <Shield size={32} />, title: 'Safety' },
                { icon: <Crown size={32} />, title: 'Exclusivity' },
                { icon: <BookOpen size={32} />, title: 'Heritage' },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-6 group-hover:border-[#D4AF37] transition-all text-[#D4AF37]">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center">
        <p className="text-zinc-700 text-[10px] tracking-[0.5em] uppercase font-bold">
          © 2026 Ethio Journey • A Decade of Excellence
        </p>
      </footer>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language} 
      />
    </div>
  );
}