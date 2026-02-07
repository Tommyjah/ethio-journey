'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, BedDouble, Bath, Users, Wifi, Car, Utensils, Droplets, Dumbbell, Calendar, Clock, Check } from 'lucide-react';
import { Language } from '@/types';
import { HOTELS } from '@/constants/hotels';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HotelDetailView from '@/components/HotelDetailView';
import { LOCALIZATION } from '@/constants';

export default function HotelsPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [checkIn, setCheckIn] = useState<string>('');
  const [checkOut, setCheckOut] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [selectedHotel, setSelectedHotel] = useState<string | null>(null);
  const t = LOCALIZATION[language];

  const handleSearch = () => {
    console.log('Searching for hotels', { checkIn, checkOut, guests });
  };

  const handleBookHotel = (hotelId: string, hotelName: string) => {
    router.push('/booking?type=hotel&id=' + hotelId + '&name=' + encodeURIComponent(hotelName));
  };

  const handleViewDetails = (hotelId: string) => {
    setSelectedHotel(selectedHotel === hotelId ? null : hotelId);
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] selection:bg-[#F15A24]/30">
      <Navbar 
        language={language} 
        setLanguage={setLanguage} 
        onInquiryClick={() => {}} 
      />

      {/* Hero Section with Enhanced Visibility & Ken Burns */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.15 }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src="/images/hotels/welcomegemini.jpg"
              alt={t.heroTitle}
              fill
              className="object-cover opacity-90 brightness-[1.3] contrast-[1.1]"
              priority
            />
          </motion.div>
          
          {/* Lightened overlay to ensure image clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 z-[1]" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {t.heroSubtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <div className="relative -mt-24 z-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1A1A1A] rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Calendar size={16} />
                {language === Language.EN ? 'Check-in Date' : 'መውጫ ቀን'}
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#F15A24] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/30"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Calendar size={16} />
                {language === Language.EN ? 'Check-out Date' : 'መውጫ ቀን'}
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#F15A24] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/30"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                <Users size={16} />
                {language === Language.EN ? 'Guests' : 'ጓደኛዎች'}
              </label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                min={1}
                max={10}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#F15A24] focus:outline-none focus:ring-2 focus:ring-[#F15A24]/30"
              />
            </div>
            
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                className="w-full bg-[#F15A24] hover:bg-[#F15A24]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
              >
                <Search size={20} />
                {language === Language.EN ? 'Search Hotels' : 'ሆቴሎችን ይፈልጉ'}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hotels Grid */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === Language.EN ? 'Luxury Hotels in Addis Ababa' : 'በአዲስ አበባ ልዩ ልምምድ ሆቴሎች'}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {language === Language.EN ? 'Discover our handpicked selection of premium hotels offering world-class amenities.' : 'ዓለም አንደ ደረጃ አገልግሎቶችን እና ትዳርሰውን አገልግሎት የሚሰጡትን የጥራት ሆቴሎችን ያገኛልዎትን የቅንጦት ምርጥ ይከተላሉ'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {HOTELS.map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-[#1A1A1A] rounded-xl overflow-hidden border border-gray-800 hover:border-[#F15A24]/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={hotel.images[0].url}
                    alt={hotel.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    {hotel.rating}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{hotel.name[language]}</h3>
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                    <MapPin size={16} />
                    <span>{hotel.location[language]}</span>
                  </div>
                  <p className="text-gray-300 mb-6 line-clamp-2">{hotel.description[language]}</p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                    <div>
                      <div className="text-3xl font-bold text-white">${hotel.pricePerNight}</div>
                      <div className="text-sm text-gray-400">{language === Language.EN ? '/ night' : '/ በቀን'}</div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewDetails(hotel.id)}
                        className="px-4 py-2 text-sm font-medium text-white border border-gray-700 rounded-lg hover:border-[#F15A24] transition-all"
                      >
                        {language === Language.EN ? 'Details' : 'ዝርዝር'}
                      </button>
                      <button
                        onClick={() => handleBookHotel(hotel.id, hotel.name[language])}
                        className="px-6 py-2 text-sm font-semibold text-white bg-[#F15A24] rounded-lg transition-all"
                      >
                        {language === Language.EN ? 'Book' : 'ያዙ'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Hotel Detail View */}
          {selectedHotel && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              {(() => {
                const hotel = HOTELS.find(h => h.id === selectedHotel);
                return hotel ? (
                  <HotelDetailView
                    hotel={hotel}
                    language={language}
                    onBookClick={handleBookHotel}
                  />
                ) : null;
              })()}
            </motion.div>
          )}
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}