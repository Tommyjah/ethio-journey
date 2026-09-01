'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sun, Users, Clock, Camera, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';
import { useState } from 'react';
import { HERITAGE_SITES, HeritageSite } from '@/constants/heritage';

export default function HeritageDetailPage() {
  const params = useParams();
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Find the heritage site by slug
  const site: HeritageSite | undefined = HERITAGE_SITES.find(
    (s) => s.slug === params.slug
  );

  if (!site) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Site Not Found</h1>
          <p className="text-white/60">The requested heritage site does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => {}} />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-[100px]">
        <Image
          src={site.coverImage}
          alt={site.name[language]}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs font-bold mb-4"
          >
            {language === Language.AM ? 'ቅርስ' : 'Heritage Site'}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl font-bold mb-6"
          >
            {site.name[language]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            {site.description[language]}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* History Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* History Text */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
                <span className="text-[#F15A24]">🏛️</span>
                {language === Language.AM ? 'ታሪክ' : 'History & Origin'}
              </h2>
              <div className="prose prose-invert max-w-none">
                {site.history[language].split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-white/80 mb-6 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Visitor Information */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-serif font-bold mb-6 text-[#D4AF37]">
                  {language === Language.AM ? 'ምግባረ መረጃ' : 'Visitor Information'}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-[#F15A24] mt-1" size={20} />
                    <div>
                      <p className="text-sm text-white/60 mb-1">
                        {language === Language.AM ? 'አመሰከለው የጉዞ ወቅት' : 'Best Time to Visit'}
                      </p>
                      <p className="font-semibold">{site.travelTips[language].bestTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Sun className="text-[#F15A24] mt-1" size={20} />
                    <div>
                      <p className="text-sm text-white/60 mb-1">
                        {language === Language.AM ? 'አየር ሁኔታ' : 'Weather'}
                      </p>
                      <p className="font-semibold">{site.travelTips[language].weather}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Users className="text-[#F15A24] mt-1" size={20} />
                    <div>
                      <p className="text-sm text-white/60 mb-1">
                        {language === Language.AM ? 'አካላዊ ተራንት' : 'Local Customs'}
                      </p>
                      <p className="font-semibold">{site.travelTips[language].customs}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full mt-8 bg-[#F15A24] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                  onClick={() => setIsModalOpen(true)}
                >
                  {language === Language.AM 
                    ? `ወደ ${site.name[language]} ትራንስፖርት ይዘዙ` 
                    : `Book a Tour to ${site.name[Language.EN]}`
                  }
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Highlights Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-12 flex items-center gap-3">
              <span className="text-[#F15A24]">⭐</span>
              {language === Language.AM ? 'ሁሉንም ያንብቡ' : 'Key Highlights'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {site.highlights[language].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#D4AF37] transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] mb-4">
                    <Star size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{highlight}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold mb-12 flex items-center gap-3">
              <span className="text-[#F15A24]">📷</span>
              {language === Language.AM ? 'ምስከረም' : 'Photo Gallery'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {site.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
                >
                  <Image
                    src={image}
                    alt={`${site.name[language]} - Photo ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-bold uppercase tracking-widest text-sm">
                      {language === Language.AM ? 'ምስከረም' : 'View Gallery'}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-2xl p-12 border border-white/10"
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              {language === Language.AM 
                ? `ወደ ${site.name[language]} ትራንስፖርት ይዘዙ` 
                : `Experience ${site.name[Language.EN]}`
              }
            </h2>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
              {language === Language.AM 
                ? `ወደ ${site.name[language]} ትራንስፖርት ይዘዙ በአንድ ቀላል የግል የተነበቀው ጉዞን ይጎብኙ።` 
                : `Book your private tour to ${site.name[Language.EN]} and experience this incredible heritage site.`
              }
            </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                className="bg-[#F15A24] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                {language === Language.AM ? 'አሁኑኑ ይዘዙ' : 'Book Now'}
              </button>
              <button
                className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                {language === Language.AM ? 'ያግኙን' : 'Contact Us'}
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language}
        tourName={site.name[language]}
      />

      <Footer language={language} />
    </div>
  );
}
