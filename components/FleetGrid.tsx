'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gauge, Users } from 'lucide-react';
import { Language } from '../types';
import { FLEET, LOCALIZATION } from '../constants';

interface FleetGridProps {
  language?: Language;
}

export default function FleetGrid({ language = Language.EN }: FleetGridProps) {
  const t = LOCALIZATION[language] || LOCALIZATION[Language.EN];
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-6 mb-20">
          <h2 className="text-[#F15A24] uppercase tracking-[0.5em] text-xs font-bold">
            {language === Language.AM ? 'ሙሉ ተለዋዋጭነት' : 'Absolute Mobility'}
          </h2>
          <h3 className="font-serif text-5xl md:text-7xl font-bold text-white">
            {t.fleetTitle || 'Ethio Journey Fleet'}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FLEET.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-8 bg-zinc-900">
                <img 
                  src={item.image} 
                  alt={item.model}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold text-white uppercase tracking-tight">{item.model}</h4>
                    <p className="text-[#F15A24] text-xs font-bold tracking-widest uppercase mt-1">{item.category}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/5">
                  <div className="flex flex-col items-center gap-2">
                    <Users size={16} className="text-white/40" />
                    <span className="text-[10px] text-white/60 uppercase">
                      {language === Language.AM ? 'መጠን' : 'Capacity'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Gauge size={16} className="text-white/40" />
                    <span className="text-[10px] text-white/60 uppercase">
                      {language === Language.AM ? 'ኃይል' : 'Power'}
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Shield size={16} className="text-white/40" />
                    <span className="text-[10px] text-white/60 uppercase">
                      {language === Language.AM ? 'የላቀ' : 'Elite'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-4">
                  <span className="text-white/60 text-sm">
                    {language === Language.AM ? 'ከቀን' : 'From'} ${item.pricePerDay}
                  </span>
                  <span className="text-white/40 text-xs">{t.perDay || '/ day'}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}