'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { LOCALIZATION } from '../constants';
import { Search } from 'lucide-react';

interface HotelHeroProps {
  language: Language;
  onBookClick: () => void;
}

export default function HotelHero({ language, onBookClick }: HotelHeroProps) {
  const t = LOCALIZATION[language];

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hotels/skylighthotel.jpg"
          alt="Luxury Hotels in Addis Ababa"
          fill
          priority 
          className="object-cover opacity-50" 
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[#F15A24] font-bold tracking-[0.4em] uppercase text-sm mb-4">
            {language === Language.AM ? 'ልዩ ማረፊያዎች' : 'Luxury Accommodations'}
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            {language === Language.AM 
              ? 'እንደ አምላክ ይከተላል' 
              : 'Hotel Excellence'}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === Language.AM 
              ? 'በአዲስ አበባ ልዩ ልምምድ ሆቴሎችን ይፈልጉ' 
              : 'Discover premium hotels in Addis Ababa with world-class amenities and exceptional service'}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.location.href = '/hotels'}
              className="bg-[#F15A24] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto flex items-center justify-center gap-2"
            >
              <Search size={20} />
              {language === Language.AM ? 'ሆቴሎችን ይፈልጉ' : 'Search Hotels'}
            </button>
            
            <button 
              onClick={onBookClick}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto"
            >
              {language === Language.AM ? 'አሁኑኑ ያስይዙ' : 'Book Now'}
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}