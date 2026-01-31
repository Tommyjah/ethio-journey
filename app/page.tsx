'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';

// Components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TourGrid from '@/components/TourGrid';
import Legacy from '@/components/Legacy';
import AIConcierge from '@/components/AIConcierge';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingButtons from '@/components/FloatingButtons';

// Types & Constants
import { Language } from '@/types';
import { LOCALIZATION } from '@/constants';

export default function Home() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAIConciergeOpen, setIsAIConciergeOpen] = useState(false);
  const t = LOCALIZATION[language] || LOCALIZATION[Language.EN];

  const openBooking = () => setIsModalOpen(true);

  const fleetItems = [
    { 
      title: "Executive Power", 
      img: "/images/fleet-v6300.jpg" 
    },
    { 
      title: "Group Elegance", 
      img: "/images/fleet-starex2.jpg" 
    },
    { 
      title: "State Prestige", 
      img: "/images/fleet-premium.webp" 
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] selection:bg-[#F15A24]/30">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onInquiryClick={openBooking} 
      />

      <main>
        <Hero language={language} onBookClick={openBooking} />

        <div id="services">
          <Services language={language} />
        </div>

        {/* --- SIGNATURE EXPEDITIONS (Updated Link to /tours) --- */}
        <section id="tours" className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <p className="text-[#D4AF37] tracking-[0.4em] uppercase text-[10px] font-bold mb-3">
                  {language === Language.AM ? 'ልዩ ጉዞዎች' : 'Exclusive Curations'}
                </p>
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white">
                  {language === Language.AM ? 'የኢትዮጵያን ክብር ይገልጹ' : 'The Signature Collection'}
                </h3>
              </div>
              
              <button 
                onClick={() => router.push('/tours')}
                className="group flex items-center gap-3 text-white/60 hover:text-[#D4AF37] transition-all uppercase tracking-[0.3em] text-[10px] font-bold border-b border-white/10 pb-2"
              >
                {language === Language.AM ? 'ሁሉንም ጥቅሎች ይመልከቱ' : 'Explore All Destinations'}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* TourGrid serves as the teaser on the home page */}
            <TourGrid language={language} onBookClick={openBooking} />
          </div>
        </section>

        {/* --- THE FLEET --- */}
        <section id="fleet" className="py-24 bg-black overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 text-white text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-6xl font-bold mb-4"
            >
              The Fleet
            </motion.h2>
            <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mb-6" />
            <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] mb-16">The Gold Standard of Transportation</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {fleetItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative aspect-[4/5] group overflow-hidden rounded-sm cursor-pointer"
                  onClick={() => router.push("/fleet")}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-8 left-8 text-left">
                    <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Category</p>
                    <h3 className="text-xl font-serif text-white">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => router.push("/fleet")}
              className="px-12 py-4 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-500 text-[10px] font-bold uppercase tracking-[0.4em]"
            >
              Explore Full Fleet
            </button>
          </div>
        </section>

        {/* --- DANAKIL HIGHLIGHT --- */}
        <section id="danakil" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/tour-danakil.jpg"
              alt="Danakil Expedition"
              fill
              className="object-cover opacity-60"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <div className="space-y-2 text-left">
                <h4 className="text-[#D4AF37] font-bold tracking-[0.5em] uppercase text-[10px]">The Uncharted</h4>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  Danakil <br /> <span className="italic font-light text-[#F15A24]">Depression</span>
                </h2>
              </div>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-md italic text-left">
                "A journey to the hottest place on Earth, where the landscapes feel like another planet."
              </p>
              <div className="text-left">
                <button 
                  onClick={openBooking}
                  className="px-10 py-4 bg-white text-black font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#D4AF37] transition-all duration-500 rounded-sm"
                >
                  Inquire for Expedition
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <Legacy language={language} />
      </main>

      {/* --- FLOATING ACTION BUTTONS --- */}
      <FloatingButtons 
        onOpenAIConcierge={() => setIsAIConciergeOpen(true)}
        isAIConciergeOpen={isAIConciergeOpen}
      />

      {/* AI Concierge */}
      <AIConcierge 
        language={language}
        isOpen={isAIConciergeOpen}
        onClose={() => setIsAIConciergeOpen(false)}
      />

      <Footer language={language} />

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        language={language}
      />
    </div>
  );
}