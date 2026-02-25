'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Language } from '@/types';
import { useState } from 'react';

const HERITAGE_SITES = [
  {
    id: 'lalibela',
    name: 'Lalibela',
    description: 'Rock-hewn churches',
    image: '/images/tour-lalibela1.webp',
    details: '11 medieval monolithic cave churches of this 13th-century New Jerusalem'
  },
  {
    id: 'axum',
    name: 'Axum',
    description: 'Obelisks/Stelae',
    image: '/images/tour-axumnew.webp',
    details: 'Ancient obelisks and stelae marking the graves of Axumite kings'
  },
  {
    id: 'gondar',
    name: 'Gondar',
    description: 'Fasil Ghebbi Castles',
    image: '/images/tour_minilik.jpg',
    details: 'Medieval fortress city with impressive castles and palaces'
  },
  {
    id: 'harar',
    name: 'Harar',
    description: 'Jugol Wall',
    image: '/images/tour-harar1.jpg',
    details: 'Ancient walled city with 82 mosques and unique cultural traditions'
  }
];

export default function HeritagePage() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(Language.EN);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => {}} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/tour_lal.jpg"
          alt="Ethiopian Heritage"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs font-bold mb-4"
          >
            Ethiopian Heritage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl font-bold"
          >
            {language === Language.AM ? 'የኢትዮጵያ ቅርስ' : 'Heritage Showcase'}
          </motion.h1>
        </div>
      </section>

      {/* Horizontal Slider */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {language === Language.AM ? 'ቅርስን አግኙ' : 'Explore Ethiopia\'s Heritage'}
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {language === Language.AM 
                ? 'ኢትዮጵያ ታሪክን በተከታታይ አወጥ።' 
                : 'Discover the rich cultural heritage of Ethiopia through these iconic sites'}
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 no-scrollbar">
              {HERITAGE_SITES.map((site, index) => (
                <motion.div
                  key={site.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex-shrink-0 snap-center w-[300px] sm:w-[400px] md:w-[450px] group"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-3xl font-serif font-bold text-white mb-2">{site.name}</h3>
                      <p className="text-[#D4AF37] text-sm uppercase tracking-widest mb-6">{site.description}</p>
                       <button
                        className="bg-[#F15A24] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
                        onClick={() => router.push(`/heritage/${site.id}`)}
                      >
                        {language === Language.AM ? 'ዝርዝርን ይመልከቱ' : 'Learn More'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Scroll Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {HERITAGE_SITES.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/30"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Site Details Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {HERITAGE_SITES.map((site, index) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-48 h-48 md:h-auto">
                    <Image
                      src={site.image}
                      alt={site.name}
                      fill
                      className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {site.name}
                    </h3>
                    <p className="text-[#D4AF37] text-sm uppercase tracking-widest mb-4">{site.description}</p>
                    <p className="text-white/60 mb-6">{site.details}</p>
                    <button
                      className="text-[#F15A24] font-bold uppercase tracking-widest text-sm hover:text-white transition-colors"
                      onClick={() => router.push(`/heritage/${site.id}`)}
                    >
                      {language === Language.AM ? 'የጉዞውን ይፈልጉ' : 'Explore Tour'}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}
