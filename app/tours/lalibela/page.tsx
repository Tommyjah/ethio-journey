'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar, CheckCircle2, ChevronRight, Music, Coffee, Utensils } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

const ITINERARY = [
  {
    day: "Day 1",
    title: { en: "Arrival & The Northern Cluster", am: "መድረሻ እና የሰሜን አብያተ ክርስቲያናት" },
    description: { 
      en: "VIP transfer from Lalibela Airport. Afternoon exploration of Bet Medhane Alem, the world’s largest monolithic church, and the iconic cross-shaped Bet Giyorgis at sunset.",
      am: "ከአውሮፕላን ማረፊያ በልዩ መኪና መጓጓዝ። ከሰዓት በኋላ ቤተ መድኃኔዓለምን እና አስደናቂውን የቤተ ጊዮርጊስን ውቅር በአካል መመልከት።"
    },
    icon: <MapPin size={20} />
  },
  {
    day: "Day 2",
    title: { en: "The Cave Church & Eastern Cluster", am: "የዋሻው ቤተክርስቲያን እና የምስራቅ አብያተ ክርስቲያናት" },
    description: { 
      en: "Morning drive to Yimrehane Kristos, a hidden marble church inside a cave. Afternoon visit to the remaining Southeastern cluster followed by a traditional Honey Wine (Tej) tasting.",
      am: "ጠዋት ወደ ይምርሐነ ክርስቶስ ጉዞ። ከሰዓት የደቡብ ምስራቅ አብያተ ክርስቲያናትን መጎብኘትና የባህል ማር ጠጅ መቅመስ።"
    },
    icon: <Coffee size={20} />
  },
  {
    day: "Day 3",
    title: { en: "Monastery Trek & Farewell", am: "የተራራ ላይ ገዳማት እና ስንብት" },
    description: { 
      en: "Optional sunrise mule trek to Asheton Maryam for panoramic highland views. Traditional coffee ceremony before your private transfer to the airport.",
      am: "ማለዳ ወደ አሸተን ማርያም ጉዞ። ከጉዞው በፊት የኢትዮጵያ ባህላዊ የቡና ሥነ-ሥርዓት ይከናወናል።"
    },
    icon: <Music size={20} />
  }
];

export default function LalibelaDetailPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />

      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-end pb-20 px-6">
        <Image 
          src="https://images.unsplash.com/photo-1545044846-351ba102b4d5?q=80&w=2000" 
          alt="Lalibela" 
          fill 
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em] mb-4 block">UNESCO World Heritage</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Lalibela: The New Jerusalem</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Itinerary */}
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-8 border-b border-white/10 pb-4">The Experience</h2>
            <div className="space-y-12">
              {ITINERARY.map((item, index) => (
                <div key={index} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                      {item.icon}
                    </div>
                    {index !== ITINERARY.length - 1 && <div className="w-px h-full bg-white/10 mt-4" />}
                  </div>
                  <div className="pb-12">
                    <span className="text-[#F15A24] text-[10px] font-bold uppercase tracking-widest">{item.day}</span>
                    <h3 className="text-2xl font-bold mt-1 mb-4">{language === Language.AM ? item.title.am : item.title.en}</h3>
                    <p className="text-white/50 leading-relaxed italic">
                      {language === Language.AM ? item.description.am : item.description.en}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Details & Booking Card */}
        <div className="space-y-8">
          <div className="bg-zinc-900/50 p-8 border border-white/5 rounded-sm sticky top-32">
            <h3 className="text-xl font-serif font-bold mb-6">Tour Essentials</h3>
            
            <ul className="space-y-4 mb-8">
              {[
                { label: "Duration", val: "3 Days / 2 Nights" },
                { label: "Accommodation", val: "Mezena Resort & Spa" },
                { label: "Transport", val: "Private V8 Executive" },
                { label: "Dining", val: "All-Inclusive Premium" }
              ].map((info) => (
                <li key={info.label} className="flex justify-between text-xs border-b border-white/5 pb-2">
                  <span className="text-white/40 uppercase tracking-widest">{info.label}</span>
                  <span className="text-white font-bold">{info.val}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all"
            >
              Request Custom Itinerary
            </button>
            
            <p className="text-[9px] text-zinc-500 mt-4 text-center italic">
              *Domestic flights from Addis Ababa are included in the premium package.
            </p>
          </div>

          <div className="p-8 border border-white/5 rounded-sm">
            <h4 className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
              <CheckCircle2 size={14} /> Included in Tour
            </h4>
            <ul className="text-[10px] text-white/40 space-y-2 uppercase tracking-tighter">
              <li>• Private Professional Guide</li>
              <li>• All Church Entrance Fees</li>
              <li>• Luxury SUV Transportation</li>
              <li>• Cultural Dining Experiences</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer Decoration */}
      <footer className="py-24 border-t border-white/5 text-center">
         <div className="w-px h-20 bg-gradient-to-b from-[#F15A24] to-transparent mx-auto mb-8" />
         <p className="text-zinc-700 text-[10px] tracking-[0.8em] uppercase">
            Ethio Journey • Authenticity Refined
         </p>
      </footer>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}