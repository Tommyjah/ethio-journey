'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Users, Luggage, Wind, Car, Zap, Crown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

// Updated paths: Ensure these files exist in your /public/images/fleet/ folder
const FLEET_DATA = [
  {
    id: 'v8-executive',
    name: 'Land Cruiser V8 Executive',
    // Path logic: /public/images/fleet/v8.jpg becomes /images/fleet/v8.jpg
    image: '/images/fleet-landcruiser.jpg', 
    capacity: '4 Passengers',
    luggage: '4 Large Bags',
    icon: <Car size={16} />,
     description: {
      en: 'The best of off-road luxury. Perfect for deep trips with uncompromising comfort.',
      am: 'ከፍተኛ ጥራት ያለውና ምቹ የሆነው ላንድ ክሩዘር V8 ለረጅም ጉዞዎች ተመራጭ ነው።'
    },
    features: ['Professional Driver', 'Satellite Tracking', 'Climate Control', 'Premium Sound']
  },
  {
    id: 'bz4x-electric',
    name: 'Toyota bZ4X Electric',
    image: '/images/fleet-bz4x.jpg',
    capacity: '4 Passengers',
    luggage: '2 Bags',
    icon: <Zap size={16} />,
    description: {
      en: 'Modern, silent, and sustainable. Experience the future of Addis Ababa travel in our premium electric fleet.',
      am: 'ዘመናዊ፣ ጸጥታ የሰፈነበትና ለአካባቢ ተስማሚ የሆነው የቶዮታ ቢዜድ ፎር ኤክስ የኤሌክትሪክ መኪና።'
    },
    features: ['Zero Emissions', 'Silent Cabin', 'Urban Agility', 'Smart Tech']
  },
  {
    id: 'luxury-limousine',
    name: 'Presidential Limousine',
    image: '/images/fleet-limousin.jpg',
    capacity: '8 Passengers',
    luggage: '3 Bags',
    icon: <Crown size={16} />,
    description: {
      en: 'The ultimate statement for state visits and high-profile events. Privacy and prestige redefined.',
      am: 'ለታዋቂ እንግዶችና ለልዩ ዝግጅቶች የተዘጋጀ እጅግ ዘመናዊ ሊሞዚን።'
    },
    features: ['Privacy Partition', 'Mini Bar', 'VIP Concierge', 'Starlight Ceiling']
  },
  {
    id: 'hilux-pickup',
    name: 'Hilux Adventure Pickup',
    image: '/images/fleet-toyotahilux.jpg',
    capacity: '4 Passengers',
    luggage: 'Large Cargo Space',
    icon: <Car size={16} />,
    description: {
      en: 'Rugged reliability for heavy terrain and equipment. The workhorse of Ethiopian exploration.',
      am: 'ለማንኛውም አስቸጋሪ መንገድና ለጭነት የሚሆን ጠንካራው ቶዮታ ኃይለክስ።'
    },
    features: ['Off-road Capability', 'Reinforced Chassis', 'All-Terrain Tires', 'Reliability']
  },
  {
    id: 'hiace-minibus',
    name: 'Luxury Hiace Minibus',
    image: '/images/fleet-toyotahiacei.jpg',
    capacity: '12 Passengers',
    luggage: '10 Bags',
    icon: <Users size={16} />,
    description: {
      en: 'Spacious and comfortable for medium-sized groups or corporate delegations.',
      am: 'ለድርጅት ስብሰባዎችና ለቤተሰብ ጉዞዎች ምቹ የሆነው ሃይ ኤስ ሚኒባስ።'
    },
    features: ['Sliding Door', 'Rear AC', 'In-car Entertainment', 'Expert Driver']
  }
];

export default function FleetPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37]">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onInquiryClick={() => setIsModalOpen(true)} 
      />

      {/* Hero Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
             <h1 className="font-serif text-5xl md:text-8xl font-bold mb-6 tracking-tight">
                {language === Language.AM ? 'የተሽከርካሪዎች ዝርዝር' : 'Our Vehicles'}
              </h1>
            <div className="flex items-center justify-center gap-4">
               <div className="h-[1px] w-12 bg-[#F15A24]" />
               <p className="text-[#D4AF37] tracking-[0.5em] uppercase text-[10px] md:text-xs font-bold">
                 Uncompromising • Reliability • Safety
               </p>
               <div className="h-[1px] w-12 bg-[#F15A24]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Inventory Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-40">
          {FLEET_DATA.map((vehicle, index) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 relative aspect-[16/9] overflow-hidden bg-zinc-900 group">
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={index < 2} // Preload first two images for performance
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Specs Container */}
              <div className="w-full lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#D4AF37]">
                    {vehicle.icon}
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Premium Class</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">{vehicle.name}</h2>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm text-[11px] text-white/60">
                      <Users size={14} className="text-[#F15A24]" /> {vehicle.capacity}
                    </span>
                    <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm text-[11px] text-white/60">
                      <Luggage size={14} className="text-[#F15A24]" /> {vehicle.luggage}
                    </span>
                  </div>
                </div>

                <p className="text-white/50 leading-relaxed font-light text-lg italic border-l-2 border-[#D4AF37] pl-6">
                  "{language === Language.AM ? vehicle.description.am : vehicle.description.en}"
                </p>

                <div className="grid grid-cols-2 gap-y-4 gap-x-8 border-t border-white/10 pt-8">
                  {vehicle.features.map(feature => (
                    <div key={feature} className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-white/40">
                      <div className="w-1 h-1 bg-[#F15A24] rounded-full" /> {feature}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full px-12 py-5 bg-[#D4AF37] text-black font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 rounded-sm"
                >
                  {language === Language.AM ? 'አሁኑኑ ይያዙ' : 'Reserve Experience'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-24 border-t border-white/5 text-center bg-black">
         <p className="text-zinc-700 text-[10px] tracking-[0.8em] uppercase mb-8">
            Ethio Journey • Curating the Horn of Africa
         </p>
         <div className="w-px h-20 bg-gradient-to-b from-[#F15A24] to-transparent mx-auto" />
      </footer>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language} 
      />
    </div>
  );
}