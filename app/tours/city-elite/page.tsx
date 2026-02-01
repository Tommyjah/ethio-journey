'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowLeft, CheckCircle2, Calendar, Cloud, Sun, Wind } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import BookingModal from '@/components/BookingModal';
import Footer from '@/components/Footer';
import { Language } from '@/types';

export default function CityEliteTour() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  // Mock real-time city status data
  const cityStatus = {
    weather: {
      temp: "25°C",
      condition: "Sunny",
      humidity: "65%",
      wind: "12 km/h",
      icon: <Sun size={24} className="text-[#D4AF37]" />
    },
    museum: {
      status: "Open",
      visitors: "150",
      lastUpdated: "2 minutes ago"
    },
    city: {
      population: "5.2M",
      time: "10:45 AM",
      currency: "ETB",
      exchangeRate: "1 USD = 55 ETB"
    }
  };

  const tourContent = {
    title: "City Elite Tour",
    location: "Addis Ababa",
    duration: "Full Day",
    description: "Experience the ultimate luxury tour of Addis Ababa featuring the iconic Adwa 00 Museum. A journey through history, culture, and relaxation.",
    highlights: [
      "VIP access to Adwa 00 Museum",
      "Premium Land Cruiser transportation",
      "Expert guide with deep historical knowledge",
      "Luxury spa experience at Entoto Forest",
      "Exclusive cultural experiences",
      "Fine dining included"
    ],
    itinerary: [
      {
        day: "08:00",
        title: "Pickup & Breakfast",
        desc: "Luxury transfer from your hotel with complimentary breakfast service."
      },
      {
        day: "09:30",
        title: "National Museum",
        desc: "Private guided tour of Ethiopia's most important historical museum featuring Lucy and ancient artifacts."
      },
      {
        day: "11:30",
        title: "Unity Park",
        desc: "Exclusive access to Unity Park with traditional cultural performances and royal palace gardens."
      },
      {
        day: "13:30",
        title: "Lunch & Refreshments",
        desc: "Fine dining experience at Addis Ababa's premier restaurant with traditional Ethiopian cuisine."
      },
      {
        day: "15:00",
        title: "Adwa 00 Museum",
        desc: "VIP guided tour of the iconic Adwa 00 Museum featuring interactive exhibits and historical collections."
      },
      {
        day: "17:00",
        title: "Friendship Park",
        desc: "Scenic visit to Friendship Park with beautiful gardens and panoramic city views."
      },
      {
        day: "18:30",
        title: "Entoto Forest Spa",
        desc: "Relaxing spa experience at Entoto Forest with traditional Ethiopian treatments and massage therapy."
      },
      {
        day: "20:30",
        title: "Dinner & Transfer",
        desc: "Gourmet dinner followed by private transfer back to your hotel."
      }
    ],
    images: [
      "/images/tour-city.webp",
      "/images/tour-city1.jpg",
      "/images/tour-city2.jpg",
      "/images/tour-city3.webp"
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#F15A24]/30">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />

      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex items-end pb-20 px-6">
        <Image 
          src={tourContent.images[0]} 
          alt={tourContent.title} 
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
            <ArrowLeft size={14} /> Back to Tours
          </motion.button>
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#F15A24] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Premium Experience</span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest flex items-center gap-2">
                <MapPin size={12} className="text-[#D4AF37]" /> {tourContent.location}
              </span>
              <span className="text-white/60 text-[10px] uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} className="text-[#D4AF37]" /> {tourContent.duration}
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-8xl font-bold mb-4">{tourContent.title}</h1>
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.4em] font-bold">ADWA 00 MUSEUM & PREMIUM EXPERIENCE</p>
          </motion.div>
        </div>
      </section>

      {/* REAL-TIME CITY STATUS */}
      <section className="py-12 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Weather Widget */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  {cityStatus.weather.icon}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{cityStatus.weather.temp}</h3>
                  <p className="text-white/60 text-sm">{cityStatus.weather.condition}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Humidity</span>
                  <span className="text-white">{cityStatus.weather.humidity}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Wind</span>
                  <span className="text-white">{cityStatus.weather.wind}</span>
                </div>
              </div>
            </div>

            {/* Museum Status Widget */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#F15A24]/10 flex items-center justify-center text-[#F15A24]">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{cityStatus.museum.status}</h3>
                  <p className="text-white/60 text-sm">{language === Language.AM ? 'የሚገኘው' : 'Current Status'}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">Visitors</span>
                  <span className="text-white">{cityStatus.museum.visitors}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">{language === Language.AM ? 'አጋላጭነት' : 'Last Updated'}</span>
                  <span className="text-white">{cityStatus.museum.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* City Info Widget */}
            <div className="bg-black/50 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-[#00A3FF]/10 flex items-center justify-center text-[#00A3FF]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Addis Ababa</h3>
                  <p className="text-white/60 text-sm">{language === Language.AM ? 'አዲስ አበባ' : 'Capital City'}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">{language === Language.AM ? 'የሚገኘው' : 'Time'}</span>
                  <span className="text-white">{cityStatus.city.time}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-white/40">{language === Language.AM ? 'የታችሇሉ' : 'Currency'}</span>
                  <span className="text-white">{cityStatus.city.exchangeRate}</span>
                </div>
              </div>
            </div>
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
              "{tourContent.description}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-900/30 p-8 border border-white/5">
            {tourContent.highlights.map((highlight, i) => (
              <div key={i} className="flex gap-4 items-start">
                <CheckCircle2 size={18} className="text-[#F15A24] shrink-0 mt-1" />
                <p className="text-sm text-white/70 leading-snug">{highlight}</p>
              </div>
            ))}
          </div>

          {/* LUXURY TIMELINE */}
          <div className="space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Luxury Timeline</h2>
            <div className="space-y-0">
              {tourContent.itinerary.map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-all">
                      {item.day}
                    </div>
                    {i !== tourContent.itinerary.length - 1 && <div className="w-px h-full bg-white/10 my-4" />}
                  </div>
                  <div className="pb-12">
                    <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-white">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GALLERY */}
          <div className="space-y-12">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Tour Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tourContent.images.map((img, i) => (
                <div key={i} className="relative aspect-[3/4] overflow-hidden rounded-lg group cursor-pointer">
                  <Image
                    src={img}
                    alt={`Tour image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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
              Book City Elite Tour
            </button>
            
            <div className="pt-8 border-t border-white/5 space-y-4">
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                <span>Vibe</span>
                <span className="text-[#D4AF37]">Luxury & Culture</span>
              </div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                <span>Transport</span>
                <span className="text-[#D4AF37]">Private 4x4</span>
              </div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                <span>Duration</span>
                <span className="text-[#D4AF37]">{tourContent.duration}</span>
              </div>
              <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/50">
                <span>Language</span>
                <span className="text-[#D4AF37]">English & Amharic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer language={language} />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language}
        tourName="City Elite Tour"
      />
    </div>
  );
}
