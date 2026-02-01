'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Language } from '@/types';

interface FeaturedCityTourProps {
  language: Language;
  onBookClick: () => void;
}

export default function FeaturedCityTour({ language, onBookClick }: FeaturedCityTourProps) {
  const router = useRouter();

  return (
    <section className="relative py-24 px-6 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-[0.4em] rounded-full mb-4">
            {language === Language.AM ? 'የአዳዋ 00 ሙዚየም' : 'ADWA 00 MUSEUM'}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            {language === Language.AM 
              ? 'ቀጣይ ከተማ ልዩ ጉዞ' 
              : 'City Elite Tour'}
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            {language === Language.AM 
              ? 'በአዳዋ 00 ሙዚየም ላይ የተመሰረተ ልዩ ክብርና የቀጣይ ትምህርት። በቅንጦት መኪናዎች ተጓዦች በተነበቀው የአዲስ አበባ ከተማ ልዩ ጉዞ።' 
              : 'An exclusive luxury and cultural experience featuring the iconic Adwa 00 Museum. Premium vehicles and expert guides in Addis Ababa.'}
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/tour-city.webp"
                alt="Adwa 00 Museum"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              
              {/* Discount Badge */}
              <div className="absolute top-6 right-6 bg-[#F15A24] text-white px-4 py-2 rounded-full">
                <span className="font-bold text-xl">25% OFF</span>
                <span className="text-xs uppercase tracking-widest ml-2">Limited Time</span>
              </div>

              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-widest">{language === Language.AM ? 'ቀጣይ ጊዜ' : 'Premium Time'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-[#D4AF37]" />
                    <span className="text-xs uppercase tracking-widest">{language === Language.AM ? 'ግል ትምህርት' : 'Private Tour'}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">
                  {language === Language.AM ? 'የአዳዋ 00 ሙዚየም' : 'Adwa 00 Museum'}
                </h3>
                <p className="text-white/70 text-sm mb-6">
                  {language === Language.AM 
                    ? 'የአዳዋ ግዛትን በተከታታይ አወጥ። የአዳዋ ትምህርትን በአዳዋ 00 ሙዚየም ውስጥ የሚያስተው የምርጥ ትምህርት።' 
                    : 'Experience the history of Adwa Victory. A premium tour featuring the Adwa 00 Museum.'}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => router.push('/tours/city-elite')}
                    className="px-8 py-3 bg-white text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all duration-500"
                  >
                    {language === Language.AM ? 'ዝርዝርን ይመልከቱ' : 'Explore Details'}
                  </button>
                  <button
                    onClick={onBookClick}
                    className="px-8 py-3 bg-transparent border border-white text-white font-bold text-xs uppercase tracking-[0.3em] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500"
                  >
                    {language === Language.AM ? 'አሁኑኑ ይመዝገቡ' : 'Book Now'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <div className="lg:col-span-5 space-y-8">
            {/* Feature 1: National Museum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{language === Language.AM ? 'ዜና ሙዚየም' : 'National Museum'}</h4>
                  <p className="text-white/50 text-sm">{language === Language.AM ? 'የአዳዋ ግዛትን በተከታታይ አወጥ።' : 'Explore the history of Adwa Victory.'}</p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Unity Park */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{language === Language.AM ? 'አማራጭ ፓርክ' : 'Unity Park'}</h4>
                  <p className="text-white/50 text-sm">{language === Language.AM ? 'አማራጭ ፓርክን በቀጣይ መንገድ ይመልከቱ።' : 'Experience Unity Park in premium style.'}</p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Friendship Park */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{language === Language.AM ? 'ጓደኛነት ፓርክ' : 'Friendship Park'}</h4>
                  <p className="text-white/50 text-sm">{language === Language.AM ? 'ጓደኛነት ፓርክን በቀጣይ መንገድ ይመልከቱ።' : 'Experience Friendship Park in premium style.'}</p>
                </div>
              </div>
            </motion.div>

            {/* Feature 4: Entoto Forest Spa */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                  <span className="font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2">{language === Language.AM ? 'እንቶቶ ለቃይ ስፓ' : 'Entoto Forest Spa'}</h4>
                  <p className="text-white/50 text-sm">{language === Language.AM ? 'እንቶቶ ለቃይ ስፓን በቀጣይ መንገድ ይመልከቱ።' : 'Experience Entoto Forest Spa in premium style.'}</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <button
                onClick={() => router.push('/tours/city-elite')}
                className="w-full bg-[#F15A24] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-2"
              >
                {language === Language.AM ? 'የሙዚየም ጉዞን ይጀምሩ' : 'Start Museum Tour'}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
