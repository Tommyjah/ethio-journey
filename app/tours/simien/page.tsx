'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mountain, Wind, Compass, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

const ITINERARY = [
  {
    day: "Day 1",
    title: { en: "The Escarpment Walk", am: "የሰሜን ተራሮች የእግር ጉዞ" },
    description: { 
      en: "Drive from Gondar to Sankaber. A gentle 2-3 hour walk along the massive escarpment where the first Gelada Baboon troops are usually spotted.",
      am: "ከጎንደር ወደ ሳንቃ በር ጉዞ። በአስደናቂው ገደል ጫፍ ላይ የሁለት ሰዓት የእግር ጉዞ እና የጭላዳ ዝንጀሮዎችን መመልከት።"
    },
    icon: <Wind size={20} />
  },
  {
    day: "Day 2",
    title: { en: "Jinbar Falls & Geech Abyss", am: "የጂንባር ፏፏቴ እና ጊጭ" },
    description: { 
      en: "Trek to the Jinbar Waterfall, one of the deepest in Africa. Continue to the Geech plateau for a 360-degree sunset view of the jagged peaks.",
      am: "ታላቁን የጂንባር ፏፏቴ መጎብኘት እና በጊጭ ተራራ ላይ ሆኖ አስደናቂውን የፀሐይ መግቢያ መመልከት።"
    },
    icon: <Compass size={20} />
  },
  {
    day: "Day 3",
    title: { en: "Chennek & Walia Ibex", am: "ጨነቅ እና ዋልያ አይቤክስ" },
    description: { 
      en: "Drive to Chennek, the best spot to see the endemic Walia Ibex and the Ethiopian Wolf. Return to Gondar for a luxury evening at Kuriftu Resort.",
      am: "ብርቅዬውን ዋልያ አይቤክስን ለመመልከት ወደ ጨነቅ ጉዞ። ምሽቱን በኩሪፍቱ ሪዞርት ማረፍ።"
    },
    icon: <Mountain size={20} />
  }
];

export default function SimienPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />
      <section className="relative h-[60vh] flex items-end pb-20 px-6">
        <Image src="/images/semien_mountains.jpg" alt="Simien Mountains" fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Endemic Wilderness</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold italic">Simien: The Roof of Africa</h1>
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
          <h3 className="text-xl font-serif font-bold mb-6">Expedition Details</h3>
          <ul className="space-y-4 mb-8 text-[10px] uppercase tracking-widest text-white/60">
             <li className="flex justify-between border-b border-white/5 pb-2"><span>Terrain</span> <span className="text-[#D4AF37]">Highland Trek</span></li>
             <li className="flex justify-between border-b border-white/5 pb-2"><span>Transport</span> <span className="text-[#D4AF37]">4x4 Expedition V8</span></li>
             <li className="flex justify-between border-b border-white/5 pb-2"><span>Wildlife</span> <span className="text-[#D4AF37]">Gelada/Walia/Wolf</span></li>
          </ul>
          <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">Book Expedition</button>
        </div>
      </section>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}