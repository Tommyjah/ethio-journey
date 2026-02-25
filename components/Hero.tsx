'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { useRouter } from 'next/navigation';

interface HeroProps {
  language: Language;
  onBookClick: () => void;
}

export default function Hero({ language, onBookClick }: HeroProps) {
  const router = useRouter();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      
      {/* --- BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/tour-danakildepression.webp"
          alt="Ethio Journey Luxury Expedition"
          fill
          priority 
          className="object-cover opacity-60" 
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[#F15A24] font-bold tracking-[0.4em] uppercase text-sm mb-4">
            {language === Language.AM ? 'እንኳን ደህና መጡ' : 'The Pinnacle of Ethiopian Travel'}
          </h2>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            {language === Language.AM 
              ? 'ክብርን በተግባር ይለማመዱ' 
              : 'Redefining Luxury'}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => router.push('/tours')}
              className="bg-[#F15A24] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto"
            >
              {language === Language.AM ? 'የተመረጡ ጉዞዎችን ይመልከቱ' : 'Explore Signature Journeys'}
            </button>
            <button 
              onClick={onBookClick}
              className="bg-transparent text-white border-2 border-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 w-full md:w-auto"
            >
              {language === Language.AM ? 'አሁኑኑ ያስይዙ' : 'Book Now'}
            </button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}