'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Language } from '../../types';
import Navbar from '../../components/Navbar';
import BookingModal from '../../components/BookingModal';

const EXPEDITIONS_DATA = [
  {
    id: 'gorgora',
    name: 'Gorora Cultural Trek',
    duration: '4 Days',
    price: '$850',
    description: 'Experience the untouched beauty of Gorora. A journey through ancient trails, high-altitude plateaus, and vibrant local traditions.',
    includes: ['Luxury Camping Gear', 'Professional Guide', 'Organic Breakfast', 'Spring Water'],
    image: '/images/tour-gorgora.webp',
  },
  {
    id: 'chebera',
    name: 'Chebera Churchura Wild',
    duration: '5 Days',
    price: '$1,200',
    description: 'The sanctuary of the African Elephant. Explore deep river valleys and dense forest ecosystems while staying in premium mobile camps.',
    includes: ['All Meals', 'Armed Scout Detail', '4x4 Transport', 'Field Tents'],
    image: '/images/tour-chebera.jpg',
  },
  {
    id: 'koysha',
    name: 'Koysha Nature Escape',
    duration: '3 Days',
    price: '$750',
    description: 'Witness the engineering marvel and natural splendor of the Koysha region. A perfect blend of modern progress and wild birdlife.',
    includes: ['Eco-Lodge Stay', 'Boat Expedition', 'Photography Guide', 'Mineral Water'],
    image: '/images/tour-koysha.jpg',
  },
  {
    id: 'benyuna',
    name: 'Benyuna Lodge Retreat',
    duration: '2 Days',
    price: '$450',
    description: 'A high-altitude luxury getaway. Wake up to the serene sounds of the Ethiopian highlands in one of the country\'s most exclusive lodges.',
    includes: ['Gourmet Dining', 'Lodge Suite', 'Guided Forest Walk', 'Wine Tasting'],
    image: '/images/tour-benyouna.jpg',
  },
  {
    id: 'langano',
    name: 'Langano Lakeside Sun',
    duration: '3 Days',
    price: '$550',
    description: 'Relax by the unique copper-colored waters of Lake Langano. Ideal for swimming, kayaking, and sunset beach dinners.',
    includes: ['Beachfront Access', 'Kayaking Equipment', 'Breakfast Buffet', 'Evening Bonfire'],
    image: '/images/tour-langano.jpg',
  },
  {
    id: 'danakil',
    name: 'Danakil Depression Tour',
    duration: '4 Days',
    price: '$1,500',
    description: 'The ultimate adventure to the hottest place on Earth. Visit the active Erta Ale volcano and the kaleidoscopic salt springs of Dallol.',
    includes: ['Security Escort', 'High-Spec Tents', 'Chef-Prepared Meals', 'Ice-Cold Water'],
    image: '/images/tour-danakildepression.webp',
  },
];

export default function ExpeditionsPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openBooking = () => setIsModalOpen(true);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={openBooking} />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Expeditions"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-4 uppercase tracking-tighter">
            Our <span className="italic font-light text-[#D4AF37]">Expeditions</span>
          </h1>
          <p className="text-[#D4AF37] tracking-[0.4em] uppercase text-xs font-bold">
            Curated Journeys • Unmatched Luxury
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => router.push('/')}
            className="flex items-center gap-2 text-white/50 hover:text-[#D4AF37] transition-colors mb-12 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Return Home</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPEDITIONS_DATA.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-500"
              >
                {/* Image & Price Tag */}
                <div className="relative h-72 overflow-hidden">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                    <span className="text-[#D4AF37] font-serif font-bold">{pkg.price}</span>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-[#F15A24] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-serif text-3xl font-bold mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 italic">
                    {pkg.description}
                  </p>

                  {/* Inclusions */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#D4AF37]">Inclusions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.includes.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-white/70">
                          <CheckCircle2 size={12} className="text-[#F15A24]" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={openBooking}
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-[10px] rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
                  >
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} language={language} />
    </div>
  );
}