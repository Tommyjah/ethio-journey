'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Added for navigation
import Image from 'next/image'; // Switched to Next.js Image
import { Language } from '../types';
import { TOURS, LOCALIZATION } from '../constants';

interface TourGridProps {
  language?: Language;
  onBookClick?: () => void;
}

export default function TourGrid({ language = Language.EN, onBookClick }: TourGridProps) {
  const router = useRouter();
  const t = LOCALIZATION[language] || LOCALIZATION[Language.EN];

  return (
    <section id="tours" className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#F15A24] uppercase tracking-[0.4em] text-xs font-bold"
          >
            {t.toursTitle || 'Signature Expeditions'}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white"
          >
            {language === Language.AM ? 'የተመረጡ ጉዞዎች' : 'Handpicked Journeys'}
          </motion.h3>
        </div>
        
        <motion.button 
          whileHover={{ x: 5 }}
          onClick={() => router.push('/tours')} // Now functional
          className="text-white/40 hover:text-[#F15A24] transition-colors flex items-center gap-2 font-bold tracking-widest text-xs uppercase"
        >
          {language === Language.AM ? 'ሁሉንም ጉዞዎች ይመልከቱ' : 'View All Journeys'} 
          <ArrowUpRight size={18} />
        </motion.button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {TOURS.map((tour, index) => (
          <motion.div 
            key={tour.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ y: -15 }}
            onClick={() => router.push(`/tours/${tour.id}`)} // FIX: Makes card clickable
            className="group relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 cursor-pointer"
          >
            {/* Image Layer - Switched to Next.js Image for better optimization */}
            <div className="absolute inset-0">
              <Image 
                src={tour.image} 
                alt={tour.name[language] || tour.name[Language.EN]}
                fill
                className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e: any) => {
                  // Fallback to Unsplash if your local image is missing
                  e.target.src = "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2000";
                }}
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
            
            {/* Content Layer */}
            <div className="absolute inset-0 p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-4 text-white/60 text-xs mb-4 font-bold tracking-widest uppercase">
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-[#F15A24]" /> 
                  {tour.duration}
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span className="text-[#D4AF37]">Premium</span>
              </div>
              
              <h4 className="text-3xl font-bold text-white mb-3 font-serif">
                {tour.name[language] || tour.name[Language.EN]}
              </h4>
              
              <p className="text-white/50 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                {tour.description[language] || tour.description[Language.EN]}
              </p>

              {/* Booking Trigger inside the card */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents navigating to the detail page
                  if (onBookClick) onBookClick();
                }}
                className="text-[#F15A24] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {language === Language.AM ? 'አሁኑኑ ይዘዙ' : 'Quick Contact'}
              </button>

              <div className="h-1 w-0 group-hover:w-full bg-[#F15A24] transition-all duration-700 mt-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}