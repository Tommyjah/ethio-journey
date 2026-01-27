'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Language } from '@/types';
import { motion } from 'framer-motion';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  // We'll keep language as EN for legal docs as per standard practice, 
  // but you can pass it as a prop if needed.
  const [language, setLanguage] = React.useState<Language>(Language.EN);

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => {}} />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[#D4AF37] font-serif text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">
              {title}
            </h1>
            <div className="w-20 h-[1px] bg-[#F15A24] mb-12" />
            
            <div className="prose prose-invert prose-gold max-w-none text-white/70 leading-relaxed font-light">
              {children}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer language={language} />
    </div>
  );
}