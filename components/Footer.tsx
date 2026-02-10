'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { 
  Instagram, 
  Facebook, 
  Music2, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  FileText,
  Scale,
  RotateCcw
} from 'lucide-react';
import { Language } from '@/types';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const router = useRouter();

  // Navigation Helper to scroll to top after routing
  const navigateTo = (path: string) => {
    router.push(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-left">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-6">
            <div className="cursor-pointer group" onClick={() => navigateTo('/')}>
              <h3 className="text-3xl font-serif font-bold text-white tracking-tighter">
                ETHIO <span className="text-[#F15A24] italic font-light group-hover:text-[#D4AF37] transition-colors">JOURNEY</span>
              </h3>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold mt-1">
                Luxury Travel & Logistics
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed uppercase tracking-widest max-w-[280px]">
              Defining the gold standard of travel across the Horn of Africa.
            </p>
            <div className="flex gap-6 pt-2">
              <a href="https://www.instagram.com/ethio_journey_tour" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F15A24] transition-all transform hover:-translate-y-1"><Instagram size={22} /></a>
              <a href="https://www.facebook.com/ETHIO_JOURNEY_tour_travel_and_car_rental_plc" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F15A24] transition-all transform hover:-translate-y-1"><Facebook size={22} /></a>
              <a href="https://www.tiktok.com/@ethiojourneytour" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F15A24] transition-all transform hover:-translate-y-1"><Music2 size={22} /></a>
              <a href="https://wa.me/251911444646" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#F15A24] transition-all transform hover:-translate-y-1"><MessageCircle size={22} /></a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-[#D4AF37] text-[12px] uppercase tracking-[0.3em] font-bold mb-8 text-white/90">Explore</h4>
            <ul className="space-y-5 text-sm uppercase tracking-widest text-white/70 font-medium">
              <li><button onClick={() => navigateTo('/expeditions')} className="hover:text-[#F15A24] transition-colors">Expeditions</button></li>
              <li><button onClick={() => navigateTo('/fleet')} className="hover:text-[#F15A24] transition-colors">The Fleet</button></li>
              <li><button onClick={() => navigateTo('/about')} className="hover:text-[#F15A24] transition-colors">Our Legacy</button></li>
              <li><button onClick={() => navigateTo('/contact')} className="hover:text-[#F15A24] transition-colors">Inquiry</button></li>
            </ul>
          </div>

          {/* Column 3: Legal & Governance (Updated with actual routes) */}
          <div>
            <h4 className="text-[#D4AF37] text-[12px] uppercase tracking-[0.3em] font-bold mb-8 text-white/90">Governance</h4>
            <ul className="space-y-5 text-sm uppercase tracking-widest text-white/70 font-medium">
              <li>
                <button onClick={() => navigateTo('/privacy-policy')} className="flex items-center gap-2 hover:text-white transition-colors">
                  <ShieldCheck size={14} className="text-[#F15A24]" /> Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/terms-of-service')} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Scale size={14} className="text-[#F15A24]" /> Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/refund-policy')} className="flex items-center gap-2 hover:text-white transition-colors">
                  <RotateCcw size={14} className="text-[#F15A24]" /> Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('/booking-conditions')} className="flex items-center gap-2 hover:text-white transition-colors">
                  <FileText size={14} className="text-[#F15A24]" /> Booking Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[#D4AF37] text-[12px] uppercase tracking-[0.3em] font-bold mb-8 text-white/90">Newsletter</h4>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-6 leading-relaxed">Join our inner circle for <br/> exclusive travel access.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center border-b border-white/20 pb-3 group focus-within:border-[#F15A24] transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent text-xs text-white w-full focus:outline-none placeholder:text-white/20 tracking-widest"
                required
              />
              <button type="submit" className="text-[#F15A24] hover:translate-x-2 transition-transform cursor-pointer px-2">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <MapPin size={16} className="text-[#F15A24]" /> 
            <span className="tracking-wide">Bole, Addis Ababa, Ethiopia</span>
          </div>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-bold">
            © 2026 ETHIO JOURNEY LUXURY TRAVEL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}