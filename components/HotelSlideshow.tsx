'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { HotelImage } from '@/types';

interface HotelSlideshowProps {
  images: HotelImage[];
  hotelName: string;
  starRating: number;
  className?: string;
}

export default function HotelSlideshow({ 
  images, 
  hotelName, 
  starRating, 
  className = '' 
}: HotelSlideshowProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const handleImageChange = (newIndex: number) => {
    if (newIndex === currentImageIndex) return;
    
    setIsAutoPlaying(false);
    setDirection(newIndex > currentImageIndex ? 1 : -1);
    setCurrentImageIndex(newIndex);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image Container */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ 
              opacity: 0, 
              x: direction > 0 ? 100 : -100 
            }}
            animate={{ 
              opacity: 1, 
              x: 0 
            }}
            exit={{ 
              opacity: 0, 
              x: direction > 0 ? -100 : 100 
            }}
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex].url}
              alt={images[currentImageIndex].alt}
              fill
              className="object-cover"
              quality={90}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Hotel Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {hotelName}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(starRating)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className="text-yellow-400 fill-yellow-400" 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-300">
                      {starRating} {starRating === 1 ? 'Star' : 'Stars'}
                    </span>
                  </div>
                </div>
                
                <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
              
              {/* Image Type */}
              <div className="mt-4">
                <span className="bg-[#F15A24]/90 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
                  {images[currentImageIndex].type}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#F15A24] text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#F15A24] text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`relative h-24 overflow-hidden rounded-lg transition-all duration-300 ${
              index === currentImageIndex 
                ? 'ring-2 ring-[#F15A24] scale-105' 
                : 'opacity-60 hover:opacity-100 hover:scale-105'
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover"
              quality={60}
            />
            
            {/* Thumbnail Overlay */}
            <div className={`absolute inset-0 transition-all duration-300 ${
              index === currentImageIndex ? 'bg-[#F15A24]/10' : 'bg-black/30'
            }`} />
            
            {/* Image Type Label */}
            <div className="absolute bottom-0 left-0 right-0 p-1">
              <span className="text-xs font-semibold text-white bg-black/70 px-1 py-0.5 rounded">
                {image.type}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}