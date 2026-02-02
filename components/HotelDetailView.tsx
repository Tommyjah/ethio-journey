'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  BedDouble, 
  Bath, 
  Wifi, 
  Car, 
  Utensils, 
  Droplets, 
  Dumbbell, 
  ArrowRight 
} from 'lucide-react';
import { HotelItem, Language } from '@/types';
import HotelSlideshow from './HotelSlideshow';

interface HotelDetailViewProps {
  hotel: HotelItem;
  language: Language;
  onBookClick: (hotelId: string, hotelName: string) => void;
}

export default function HotelDetailView({ 
  hotel, 
  language, 
  onBookClick 
}: HotelDetailViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'rooms' | 'amenities' | 'reviews'>('overview');

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes('Swimming')) return <Droplets size={16} />;
    if (amenity.includes('Gym')) return <Dumbbell size={16} />;
    if (amenity.includes('WiFi')) return <Wifi size={16} />;
    if (amenity.includes('Restaurant')) return <Utensils size={16} />;
    if (amenity.includes('Bar')) return <Utensils size={16} />;
    if (amenity.includes('Business')) return <Car size={16} />;
    return null;
  };

  return (
    <div className="space-y-12">
      {/* Hotel Slideshow */}
      <HotelSlideshow 
        images={hotel.images} 
        hotelName={hotel.name[language]} 
        starRating={hotel.starRating} 
        className="w-full"
      />

      {/* Hotel Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hotel Header */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {hotel.name[language]}
                </h1>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{hotel.location[language]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span>{hotel.rating} ({language === Language.EN ? 'Excellent' : 'ከፍተኛ'})</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">
                  ${hotel.pricePerNight}
                </div>
                <div className="text-sm text-gray-400">
                  {language === Language.EN ? '/ night' : '/ በቀን'}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-800">
            <div className="flex gap-8">
              {[
                { key: 'overview', label: language === Language.EN ? 'Overview' : 'ዝርዝር' },
                { key: 'rooms', label: language === Language.EN ? 'Rooms' : 'ምንጮች' },
                { key: 'amenities', label: language === Language.EN ? 'Amenities' : 'አገልግሎቶች' },
                { key: 'reviews', label: language === Language.EN ? 'Reviews' : 'አስተያየቶች' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                    activeTab === tab.key 
                      ? 'border-[#F15A24] text-white' 
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-[400px]"
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {hotel.description[language]}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-800 p-2 rounded-full">
                        <Star size={20} className="text-yellow-400" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{hotel.starRating}</div>
                        <div className="text-sm text-gray-400">
                          {language === Language.EN ? 'Stars' : 'ስታር'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-800 p-2 rounded-full">
                        <BedDouble size={20} className="text-[#F15A24]" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{hotel.roomsAvailable}</div>
                        <div className="text-sm text-gray-400">
                          {language === Language.EN ? 'Rooms' : 'ምንጮች'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-800 p-2 rounded-full">
                        <Clock size={20} className="text-[#F15A24]" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{hotel.checkInTime}</div>
                        <div className="text-sm text-gray-400">
                          {language === Language.EN ? 'Check-in' : 'መውጫ'}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-800 p-2 rounded-full">
                        <Clock size={20} className="text-[#F15A24]" />
                      </div>
                      <div>
                        <div className="font-bold text-white">{hotel.checkOutTime}</div>
                        <div className="text-sm text-gray-400">
                          {language === Language.EN ? 'Check-out' : 'መውጫ'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rooms' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {language === Language.EN ? 'Deluxe Room' : 'ዲላክስ ክፍል'}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-300 mb-4">
                    <span className="flex items-center gap-1">
                      <BedDouble size={16} />
                      {language === Language.EN ? 'King Size Bed' : 'የኢንግሊዝ ድንጋይ መንደብ'}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={16} />
                      {language === Language.EN ? 'En-suite Bathroom' : 'አንድ ምንጭ ባባሽ'}
                    </span>
                  </div>
                  <div className="text-gray-300 mb-6">
                    {language === Language.EN 
                      ? 'Spacious room with modern amenities and city views' 
                      : 'ከፍተኛ ልዩ ልምምድ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ'
                    }
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white">
                      ${hotel.pricePerNight}
                    </div>
                    <button 
                      onClick={() => onBookClick(hotel.id, hotel.name[language])}
                      className="bg-[#F15A24] hover:bg-[#F15A24]/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
                    >
                      {language === Language.EN ? 'Book Now' : 'አሁን ይያዙ'}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'amenities' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                    <div className="text-[#F15A24]">
                      {getAmenityIcon(amenity)}
                    </div>
                    <span className="text-gray-300">{amenity}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                      <span className="font-bold text-white">JD</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">John Doe</h4>
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-sm text-gray-400">5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    {language === Language.EN 
                      ? 'Excellent hotel with great service and amenities. The staff was very helpful and the rooms were clean and comfortable.' 
                      : 'ከፍተኛ ልዩ ልምምድ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ አዳዲስ'
                    }
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-4">
              {language === Language.EN ? 'Book Your Stay' : 'ጉዞዎን ይወስዱ'}
            </h3>
            
            <div className="space-y-4">
              <div className="text-3xl font-bold text-white mb-6">
                ${hotel.pricePerNight}
                <span className="text-sm font-normal text-gray-400">
                  {language === Language.EN ? '/ night' : '/ በቀን'}
                </span>
              </div>

              <button
                onClick={() => onBookClick(hotel.id, hotel.name[language])}
                className="w-full bg-[#F15A24] hover:bg-[#F15A24]/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                {language === Language.EN ? 'Book Now' : 'አሁን ይያዙ'}
              </button>

              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="text-[#F15A24]">
                    <Users size={20} />
                  </div>
                  <span>{language === Language.EN ? '2 Guests' : '2 ጓደኛዎች'}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="text-[#F15A24]">
                    <BedDouble size={20} />
                  </div>
                  <span>{language === Language.EN ? '1 Bedroom' : '1 ቤት'}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="text-[#F15A24]">
                    <Wifi size={20} />
                  </div>
                  <span>{language === Language.EN ? 'Free WiFi' : 'በነዋ ግንኙነት'}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="text-[#F15A24]">
                    <Droplets size={20} />
                  </div>
                  <span>{language === Language.EN ? 'Swimming Pool' : 'መዳቀሻ አቃላት'}</span>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4 mt-4">
                <div className="text-sm text-gray-400">
                  {language === Language.EN ? 'Rooms Available: ' : 'ምንጮችን ይከተላል: '}
                  <span className="text-white font-semibold">{hotel.roomsAvailable}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}