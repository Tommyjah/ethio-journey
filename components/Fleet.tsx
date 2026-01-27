'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Luggage, Shield, Fuel } from 'lucide-react';
import { Language } from '../types';

interface FleetProps {
  language: Language;
  onBookClick: () => void; // Added prop for the modal
}

const FLEET = [
  {
    id: 'lc-300',
    name: { 
      [Language.EN]: 'Land Cruiser 300 VIP', 
      [Language.AM]: 'ላንድ ክሩዘር 300 ቪአይፒ' 
    },
    image: 'https://news-site-za.s3.af-south-1.amazonaws.com/images/2024/06/LC300-ZX-SE-lead.jpg',
    specs: { 
      capacity: '4+1', 
      luggage: '4 Large', 
      engine: 'V6 Twin Turbo', 
      safety: 'Level 2 ADAS' 
    }
  },
  {
    id: 'coaster',
    name: { 
      [Language.EN]: 'Luxury Coaster', 
      [Language.AM]: 'የቅንጦት ኮስተር' 
    },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80', 
    specs: { 
      capacity: '22', 
      luggage: '20+ Bags', 
      engine: 'Diesel Turbo', 
      safety: 'ABS / Airbags' 
    }
  }
];

export default function Fleet({ language, onBookClick }: FleetProps) {
  return (
    <section id="fleet" className="relative z-10 py-24 bg-[#050505]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] uppercase tracking-[0.5em] text-xs font-bold mb-4"
          >
            {language === Language.AM ? 'የተመረጡ ተሽከርካሪዎች' : 'The Elite Fleet'}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-5xl md:text-6xl font-bold text-white"
          >
            {language === Language.AM ? 'ምርጥ ምቾት' : 'Unrivaled Comfort'}
          </motion.h3>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FLEET.map((vehicle) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-zinc-900/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#F15A24]/30 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={vehicle.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt={vehicle.name[language]} 
                />
              </div>
              
              <div className="p-8 md:p-12">
                <h4 className="text-3xl font-serif font-bold mb-8 text-white">
                  {vehicle.name[language]}
                </h4>
                
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  <SpecItem icon={<Users size={20}/>} label="Capacity" value={vehicle.specs.capacity} />
                  <SpecItem icon={<Luggage size={20}/>} label="Luggage" value={vehicle.specs.luggage} />
                  <SpecItem icon={<Fuel size={20}/>} label="Engine" value={vehicle.specs.engine} />
                  <SpecItem icon={<Shield size={20}/>} label="Safety" value={vehicle.specs.safety} />
                </div>

                {/* Updated Button to trigger the Modal */}
                <button 
                  onClick={onBookClick}
                  className="mt-12 w-full py-5 border border-white/10 rounded-2xl hover:bg-[#F15A24] hover:border-[#F15A24] text-white font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 active:scale-95"
                >
                  {language === Language.AM ? 'አሁኑኑ ይዘዙ' : 'Book This Vehicle'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-[#F15A24] p-2 bg-[#F15A24]/10 rounded-lg">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-white/30 font-black mb-1">
          {label}
        </p>
        <p className="text-sm font-semibold text-white/90">
          {value}
        </p>
      </div>
    </div>
  );
}