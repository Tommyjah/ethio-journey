'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

const TOURS_DATA = [
  {
    id: 'lalibela',
    title: 'Lalibela: The Living Heritage',
    location: 'Amhara Region',
    duration: '2-3 Days',
    image: '/images/lalibela.jpg',
    description: {
      en: 'Explore the 11 medieval monolithic cave churches of this 13th-century New Jerusalem.',
      am: 'የ13ኛው ክፍለ ዘመን የአለም ድንቅ የታሪክ ቅርስ የሆኑትን የላሊበላ ውቅር አብያተ ክርስቲያናትን ይጎብኙ።'
    },
    tag: 'Spiritual'
  },
  {
    id: 'danakil',
    title: 'Danakil: The Alien Landscape',
    location: 'Afar Region',
    duration: '4 Days',
    image: '/images/tour-danakildepression.webp',
    description: {
      en: 'A journey to the hottest place on Earth, featuring the Erta Ale lava lake and Dallol sulfur springs.',
      am: 'በዓለም ላይ በጣም ሞቃታማ ወደሆነውና አስደናቂ የተፈጥሮ ክስተቶች ወዳሉበት ዳሎል እና ኤርታ አሌ የሚደረግ ጉዞ።'
    },
    tag: 'Extreme Adventure'
  },
  {
    id: 'koysha',
    title: 'Koysha: The Green Frontier',
    location: 'South West Ethiopia',
    duration: '3 Days',
    image: '/images/tour-koysha.jpg',
    description: {
      en: 'Experience the pristine forests and luxury eco-lodges of the Koysha project.',
      am: 'በደቡብ ምዕራብ ኢትዮጵያ የሚገኘውን አስደናቂውን የኮይሻ ፕሮጀክትና የተፈጥሮ ውበት ይጎብኙ።'
    },
    tag: 'Eco-Luxury'
  },
  {
    id: 'gorgora',
    title: 'Gorgora: Lake Tana Port',
    location: 'North Gondar',
    duration: '2 Days',
    image: '/images/tour-gorgora.webp',
    description: {
      en: 'Discover the hidden monasteries and the new Gorgora eco-resort on the shores of Lake Tana.',
      am: 'በጣና ሐይቅ ዳርቻ የሚገኘውን ታሪካዊውን የጎርጎራ ወደብና አዲሱን የመዝናኛ ስፍራ ይጎብኙ።'
    },
    tag: 'Resort'
  },
  {
    id: 'langano',
    title: 'Langano: Golden Sands',
    location: 'Oromia Region',
    duration: '2 Days',
    image: '/images/tour-langano.jpg',
    description: {
      en: 'Relax by the copper-colored waters of Lake Langano at premium resorts.',
      am: 'ወርቃማ አሸዋ ባለውና ለመዋኘት ምቹ በሆነው ላንጋኖ ሐይቅ ዳርቻ ዘና የሚሉበት የሽርሽር ጉዞ።'
    },
    tag: 'Relaxation'
  },
  {
    id: 'beyouna',
    title: 'Beyouna & Entoto',
    location: 'Addis Ababa',
    duration: '1 Day',
    image: '/images/tour-benyouna.jpg',
    description: {
      en: 'A sanctuary of luxury and nature at the highest peak of the capital.',
      am: 'በአዲስ አበባ ከፍተኛ ስፍራ ላይ የሚገኝ አስደናቂ የተፈጥሮና የቅንጦት መዝናኛ።'
    },
    tag: 'Urban Escape'
  },
  {
    id: 'simien',
    title: 'Simien: Roof of Africa',
    location: 'North Gondar',
    duration: '3-5 Days',
    image: '/images/semien_mountains.jpg',
    description: {
      en: 'Trek through jagged peaks and deep precipices. Home to the endemic Gelada baboon.',
      am: 'በሰሜን ተራሮች ብሔራዊ ፓርክ አስደናቂ የተፈጥሮ ውበት የሚመለከቱበት ልዩ ጉዞ።'
    },
    tag: 'Adventure'
  },
  {
    id: 'harar',
    title: 'Harar: The Walled City',
    location: 'Eastern Ethiopia',
    duration: '2 Days',
    image: '/images/tour-harar.jpg',
    description: {
      en: 'A labyrinth of 82 mosques and ancient tradition of hyena feeding.',
      am: 'ጥንታዊቷን የሐረር ጀጎል ግንብና አስደናቂ ባህሎችን ይጎብኙ።'
    },
    tag: 'Cultural'
  }
];

export default function ToursPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37]">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/tour-city1.jpg"
          alt="Ethiopian Landscape"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        
        <div className="relative z-10 text-center px-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs font-bold mb-4"
          >
            Featured Destinations
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-8xl font-bold"
          >
            {language === Language.AM ? 'ልዩ የጉብኝት መርሃ ግብሮች' : 'Main Journeys'}
          </motion.h1>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {TOURS_DATA.map((tour, index) => (
            <motion.div 
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/tours/${tour.id}`} className="block relative aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-zinc-900">
                <Image 
                  src={tour.image} 
                  alt={tour.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-[#F15A24] text-white text-[9px] uppercase tracking-widest font-bold px-3 py-1">
                    {tour.tag}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10" />
                
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                    <MapPin size={14} />
                    <span className="text-[10px] uppercase tracking-widest font-bold">{tour.location}</span>
                  </div>
                  
                  <h3 className="text-3xl font-serif font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {tour.title}
                  </h3>
                  
                  <p className="text-white/60 text-sm line-clamp-2 font-light italic mb-6">
                    {language === Language.AM ? tour.description.am : tour.description.en}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest">
                      <Clock size={12} /> {tour.duration}
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#D4AF37] transform transition-all group-hover:translate-x-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold">Explore</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}