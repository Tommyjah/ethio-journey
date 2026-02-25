'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Car, Map, Hotel, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

const SERVICES = [
  {
    id: 'rental',
    icon: <Car size={32} />,
    title: { [Language.EN]: 'Premium Car Rental', [Language.AM]: 'የቅንጦት መኪና ኪራይ' },
    desc: { 
      [Language.EN]: 'Chauffeur-driven VIP Land Cruisers and luxury coasters for your stay.', 
      [Language.AM]: 'ለቆይታዎ ምርጥ የሆኑ ቪአይፒ ላንድ ክሩዘሮች እና የቅንጦት ኮስተሮች።' 
    }
  },
  {
    id: 'tours',
    icon: <Map size={32} />,
    title: { [Language.EN]: 'Guided Itineraries', [Language.AM]: 'መሪ ያለባቸው ጉዞዎች' },
    desc: { 
      [Language.EN]: 'Expert-led journeys to the historical and natural wonders of Ethiopia.', 
      [Language.AM]: 'በታሪክ እና በተፈጥሮ ድንቆች ላይ በባለሙያዎች የሚመሩ ጉዞዎች።' 
    }
  },
  {
    id: 'hotels',
    icon: <Hotel size={32} />,
    title: { [Language.EN]: 'Boutique Lodging', [Language.AM]: 'ምርጥ ማረፊያዎች' },
    desc: { 
      [Language.EN]: 'Exclusive bookings at Ethiopia’s most prestigious hotels and lodges.', 
      [Language.AM]: 'በኢትዮጵያ ታዋቂ ሆቴሎች እና ሎጆች ውስጥ የሚደረጉ ልዩ ምዝገባዎች።' 
    }
  },
  {
    id: 'security',
    icon: <ShieldCheck size={32} />,
    title: { [Language.EN]: 'VIP Security', [Language.AM]: 'ቪአይፒ ጥበቃ' },
    desc: { 
      [Language.EN]: 'Professional logistical security for high-profile travelers.', 
      [Language.AM]: 'ለታዋቂ ተጓዦች የሚደረግ ሙያዊ የደህንነት ጥበቃ።' 
    }
  }
];

export default function Services({ language }: { language: Language }) {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F15A24] font-bold tracking-[0.3em] uppercase text-xs mb-4"
          >
            {language === Language.AM ? 'አገልግሎቶቻችን' : 'Our Services'}
          </motion.h2>
           <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            {language === Language.AM ? 'ልዩ የጉዞ ልምድ' : 'The Best of Travel'}
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#F15A24]/10 flex items-center justify-center text-[#F15A24] mb-6 group-hover:scale-110 group-hover:bg-[#F15A24] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">
                {service.title[language]}
              </h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {service.desc[language]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}