'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, ShieldCheck, Landmark, History } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

const ITINERARY = [
  {
    day: "Day 1",
    title: { en: "The Stelae & The Ark", am: "ሐውልቶች እና ጽዮን ማርያም" },
    description: { 
      en: "Morning exploration of the Northern Stelae Park, featuring the Great Stele. Afternoon visit to the Church of Our Lady Mary of Zion, the final resting place of the Ark of the Covenant.",
      am: "ታላላቅ የአክሱም ሐውልቶችን መጎብኘት። ከሰዓት ታቦተ ጽዮን ወደሚገኝበት የቅድስት ማርያም ቤተክርስቲያን ጉብኝት።"
    },
    icon: <Landmark size={20} />
  },
  {
    day: "Day 2",
    title: { en: "Palaces of the Past", am: "የጥንት ቤተመንግስቶች" },
    description: { 
      en: "Visit the Dungur Palace (Queen of Sheba's Palace) and the Ezana Stone. Evening private dinner featuring traditional Tigrayan cuisine and honey wine.",
      am: "የንግሥተ ሳባ ቤተመንግስት እና የዓፄ ኢዛናን የድንጋይ ላይ ጽሁፍ መጎብኘት።"
    },
    icon: <History size={20} />
  }
];

export default function AxumPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />
      <section className="relative h-[60vh] flex items-end pb-20 px-6">
        <Image src="/images/tour-axum1.jpg" alt="Axum" fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.5em] mb-4 block">Foundation of History</span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold">Axum: The Eternal Empire</h1>
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
          <h3 className="text-xl font-serif font-bold mb-6">Tour Essentials</h3>
          <ul className="space-y-4 mb-8">
             <li className="flex justify-between text-[10px] uppercase tracking-widest border-b border-white/5 pb-2"><span>Duration</span> <span className="text-[#D4AF37]">2 Days</span></li>
             <li className="flex justify-between text-[10px] uppercase tracking-widest border-b border-white/5 pb-2"><span>Focus</span> <span className="text-[#D4AF37]">Ancient Ruins</span></li>
          </ul>
          <button onClick={() => setIsModalOpen(true)} className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">Inquire Now</button>
        </div>
      </section>
    </div>
  );
}