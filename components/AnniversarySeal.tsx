'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AnniversarySeal() {
  return (
    <motion.div
      animate={{ 
        rotate: [-3, 3, -3],
        y: [0, -5, 0] // Subtle floating motion
      }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className="relative w-40 h-40 md:w-56 md:h-56"
    >
      <Image
        src="/images/anniversary-seal.png"
        alt="10 Years of Excellence"
        fill
        className="object-contain"
        priority
      />
      {/* This creates the animated "shine" overlay */}
      <motion.div 
        animate={{ x: [-200, 400] }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none"
      />
    </motion.div>
  );
}