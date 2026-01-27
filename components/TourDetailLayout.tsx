'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { Language } from '@/types';

interface ItineraryItem {
  day: number | string;
  title: string;
  desc: string;
}

interface TourContent {
  title: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  itinerary: ItineraryItem[];
  images: string[];
}

export default function TourDetailLayout({ content }: { content: TourContent }) {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F15A24]/30">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-end pb-20 px-6">
        <Image 
          src={content.images[0] || "https://images.unsplash.com/photo-1545044846-351ba102b4d5"} 
          alt={content.title} 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/50 hover:text-[#D4AF37] mb-8 transition-colors uppercase text-[10px] tracking-[0.3em] font-bold"
          >
            <ArrowLeft size={14} /> Back to Expeditions
          </motion.button>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#F15A24] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Signature Tour</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} className="text-[#D4AF37]" /> {content.location}
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-8xl font-bold mb-4">{content.title}</h1>
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.4em] font-bold">{content.duration}</p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        
        {/* LEFT: Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold mb-6">The Experience</h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-white/80 italic font-serif">
              "{content.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/30 p-8 border border-white/5">
            {content.highlights.map((highlight, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle2 size={18} className="text-[#F15A24] shrink-0 mt-1" />
                <p className="text-sm text-white/70 leading-snug">{highlight}</p>
              </div>
            ))}
          </div>

          {/* ITINERARY */}
          <div className="space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Curated Itinerary</h2>
            <div className="space-y-0">
              {content.itinerary.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all">
                      {item.day}
                    </div>
                    {i !== content.itinerary.length - 1 && <div className="w-px h-full bg-white/10 my-4" />}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <div className="space-y-8">
          <div className="bg-zinc-900 p-8 border border-white/10 sticky top-32">
            <h3 className="font-serif text-2xl mb-6">Reserve this Journey</h3>
            <p className="text-white/40 text-xs leading-relaxed mb-8">
              Every Ethio Journey expedition is fully customizable. Contact our concierge to tailor this itinerary to your preferences.
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-[#F15A24] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 mb-4"
            >
              Request Itinerary
            </button>
            
            <div className="pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                <span>Vibe</span>
                <span className="text-[#D4AF37]">Luxury & Culture</span>
              </div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                <span>Transport</span>
                <span className="text-[#D4AF37]">Private 4x4 / Flight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}