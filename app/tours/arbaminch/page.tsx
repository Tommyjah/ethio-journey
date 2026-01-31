'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Moon, Coffee, DoorOpen, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

const ITINERARY = [
  {
    day: "Day 1",
    title: { en: "The Gates & The Hyena Man", am: "ጀጎል ግንብ እና የጅብ መኖ" },
    description: { 
      en: "Enter through the historic gates of Jugol. After sunset, witness the world-famous Hyena Man feeding wild hyenas, a tradition of peace between humans and predators.",
      am: "የጀጎልን ታሪካዊ በሮች መጎብኘት። ምሽት ላይ በዓለም ታዋቂ የሆነውን የጅብ መኖ ሥነ-ሥርዓት መመልከት።"
    },
    icon: <Moon size={20} />
  },
  {
    day: "Day 2",
    title: { en: "The Poet's House & Coffee Roots", am: "የአርተር ራምቦ ቤት እና የሐረር ቡና" },
    description: { 
      en: "Visit the Arthur Rimbaud House, explore the 82 mosques, and dive into the vibrant spice markets. End with an authentic Harari coffee cupping session.",
      am: "የአርተር ራምቦን ቤት መጎብኘት፣ በቅመማ ቅመም ገበያ መዘዋወር እና ምርጥ የሐረር ቡናን መቅመስ።"
    },
    icon: <Coffee size={20} />
  }
];

export default function HararPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />
      <section className="relative h-[60vh] flex items-end pb-20 px-6">
        <Image src="/images/tour-arbaminch.jpg" alt="Arbaminch" fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Forbidden City Heritage</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold">Harar: The Living Labyrinth</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <h2 className="text-3xl font-serif font-bold border-b border-white/10 pb-4">Itinerary</h2>
          {ITINERARY.map((item, i) => (
            <div key={i} className="flex gap-8 group">
               <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">{item.icon}</div>
                {i !== ITINERARY.length - 1 && <div className="w-px h-full bg-white/10 mt-4" />}
              </div>
              <div className="pb-12">
                <span className="text-[#F15A24] text-[10px] font-bold uppercase tracking-widest">{item.day}</span>
                <h3 className="text-2xl font-bold mt-1 mb-4">{language === Language.AM ? item.title.am : item.title.en}</h3>
                <p className="text-white/50 leading-relaxed italic">{language === Language.AM ? item.description.am : item.description.en}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-zinc-900/50 p-8 border border-white/5 rounded-sm h-fit sticky top-32">
          <h3 className="text-xl font-serif font-bold mb-6">Cultural Insight</h3>
          <ul className="space-y-4 mb-8 text-[10px] uppercase tracking-widest text-white/60">
             <li className="flex justify-between border-b border-white/5 pb-2"><span>Vibe</span> <span className="text-[#D4AF37]">Spiritual/Ancient</span></li>
             <li className="flex justify-between border-b border-white/5 pb-2"><span>Stay</span> <span className="text-[#D4AF37]">Luxury Cultural GuestHouse</span></li>
          </ul>
          <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">Request Cultural Tour</button>
        </div>
      </section>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}