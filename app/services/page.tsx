'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Car, Plane, Clock, Globe, Award, Briefcase, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { Language } from '@/types';

const SERVICES = [
  {
    id: 'corporate',
    title: { en: 'Corporate Logistics', am: 'የኮርፖሬት ትራንስፖርት አገልግሎት' },
    icon: <Briefcase className="w-8 h-8" />,
    description: {
      en: 'Reliable, large-scale fleet management for NGOs, diplomatic missions, and corporate events.',
      am: 'ለድርጅቶች፣ ለዲፕሎማቲክ ሚሲዮኖች እና ለተለያዩ ዝግጅቶች አስተማማኝ የትራንስፖርት አቅርቦት።'
    },
    features: [
      { en: 'Dedicated Account Manager', am: 'ቋሚ የደንበኛ ረዳት' },
      { en: 'Multi-vehicle Coordination', am: 'የተቀናጀ የበርካታ ተሽከርካሪዎች አገልግሎት' },
      { en: 'Monthly Invoicing & Reporting', am: 'የወር ሒሳብ አያያዝ' }
    ],
    image: '/images/tour-diplomat3.jpg'
  },
  {
    id: 'airport',
    title: { en: 'VIP Airport Transfers', am: 'የቪአይፒ አውሮፕላን ማረፊያ ዝውውር' },
    icon: <Plane className="w-8 h-8" />,
    description: {
      en: 'Seamless 24/7 meet-and-greet services at Bole International Airport with luxury V8s or sedans.',
      am: 'በቦሌ ዓለም አቀፍ አውሮፕላን ማረፊያ የ24 ሰዓት የቪአይፒ አቀባበልና የትራንስፖርት አገልግሎት።'
    },
    features: [
      { en: 'Flight Tracking', am: 'የበረራ መከታተያ' },
      { en: 'Baggage Assistance', am: 'የሻንጣ ድጋፍ' },
      { en: 'Professional Chauffeurs', am: 'ፕሮፌሽናል አሽከርካሪዎች' }
    ],
    image: '/images/tour-diplomatic.jpg'
  },
  {
    id: 'concierge',
    title: { en: 'Luxury Concierge', am: 'ልዩ የኮንሲየርጅ አገልግሎት' },
    icon: <Star className="w-8 h-8" />,
    description: {
      en: 'Personalized travel planning, high-end hotel bookings, and secure close-protection services.',
      am: 'ልዩ የጉዞ ዕቅድ፣ የሆቴል ቦታ ማስያዝና የታመነ ጥበቃ አገልግሎት።'
    },
    features: [
      { en: 'Close Protection Options', am: 'የጥበቃ አገልግሎት ምርጫዎች' },
      { en: 'Bespoke Itineraries', am: 'ለእርስዎ ብቻ የተዘጋጁ የጉዞ ዕቅዶች' },
      { en: '24/7 Support Line', am: 'የ24 ሰዓት የስልክ ድጋፍ' }
    ],
    image: '/images/tour-concierge.jpg'
  }
];

export default function ServicesPage() {
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-zinc-900/50 z-0" />
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-4"
          >
            {language === Language.AM ? 'አገልግሎቶቻችን' : 'Our Professional Services'}
          </motion.h1>
          <p className="text-white/50 tracking-[0.3em] uppercase text-xs">More Than Just a Rental</p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            <div className="flex-1 space-y-6">
              <div className="text-[#D4AF37] mb-4">{service.icon}</div>
              <h2 className="text-4xl font-serif font-bold">
                {language === Language.AM ? service.title.am : service.title.en}
              </h2>
              <p className="text-white/60 leading-relaxed text-lg italic">
                {language === Language.AM ? service.description.am : service.description.en}
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {service.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F15A24]" />
                    {language === Language.AM ? feat.am : feat.en}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full relative aspect-video lg:aspect-square overflow-hidden rounded-sm border border-white/10">
              <Image src={service.image} alt={service.title.en} fill className="object-cover opacity-80" />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Why Us Section */}
      <section className="bg-zinc-900/50 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif mb-2">The Standard of Excellence</h2>
          <div className="h-1 w-20 bg-[#D4AF37] mx-auto" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { icon: <Shield />, label: 'Security First' },
            { icon: <Clock />, label: 'Punctual Every Time' },
            { icon: <Globe />, label: 'English Speaking' },
            { icon: <Award />, label: 'Certified Fleet' }
          ].map((item, i) => (
            <div key={i} className="text-center space-y-4 group">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full border border-white/10 group-hover:border-[#F15A24] transition-colors text-white/50 group-hover:text-[#F15A24]">
                {item.icon}
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer language={language} />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(true)} language={language} />
    </div>
  );
}