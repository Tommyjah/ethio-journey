'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { Language } from '../types';
import { LOCALIZATION } from '../constants';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onInquiryClick: () => void;
}

export default function Navbar({ language, setLanguage, onInquiryClick }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = pathname === '/';

  const t = LOCALIZATION[language] || LOCALIZATION[Language.EN];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setMobileMenuOpen(false);

    // If it's an anchor link (like #contact) on the home page
    if (path.startsWith('/#')) {
      if (isHomePage) {
        const id = path.replace('/#', '');
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(path);
      }
      return;
    }

    if (path === '/') {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push('/');
      }
      return;
    }

    if (pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    router.push(path);
  };

  const navLinks = [
    { name: t.navTours || 'Tours', path: '/tours' },
    { name: t.navFleet || 'The Fleet', path: '/fleet' },
    { name: t.navServices || 'Services', path: '/services' },
    { name: t.navAbout || 'Our Legacy', path: '/about' },
    // NEW: Link to the Contact section we will build
    { name: language === Language.AM ? 'ያግኙን' : 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[200] transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* BRANDING */}
        <div 
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-sm border border-white/10 group-hover:border-[#F15A24] transition-all duration-500">
            <Image
              src="/images/logo.jpg"
              alt="Ethio Journey Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white group-hover:text-[#F15A24] transition-colors">
              ETHIO <span className="font-light italic text-[#F15A24] group-hover:text-white transition-colors">JOURNEY</span>
            </span>
            <span className="text-[7px] md:text-[8px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold">
              Luxury Travel & Logistics
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all ${
                pathname === link.path 
                  ? 'text-[#F15A24]' 
                  : 'text-white/70 hover:text-[#F15A24]'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-4 w-[1px] bg-white/10 mx-2" />

          {/* Language Toggle */}
          <button 
            onClick={() => setLanguage(language === Language.EN ? Language.AM : Language.EN)}
            className="flex items-center space-x-2 border border-white/10 px-4 py-2 rounded-full hover:bg-white/5 transition-all group"
          >
            <Globe size={14} className="text-[#D4AF37] group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] text-white font-bold tracking-widest">{language === Language.EN ? 'AM' : 'EN'}</span>
          </button>

          {/* Inquiry CTA - Only for the Booking Modal */}
          <button 
            onClick={onInquiryClick}
            className="bg-[#F15A24] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(241,90,36,0.2)]"
          >
            {language === Language.AM ? 'ይዘዙ' : 'Book Now'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/98 backdrop-blur-3xl z-[190] flex flex-col items-center justify-center space-y-8">
           {navLinks.map((link) => (
             <button 
               key={link.name} 
               onClick={() => handleNavigation(link.path)} 
               className={`text-3xl font-serif transition-colors ${
                 pathname === link.path ? 'text-[#F15A24]' : 'text-white hover:text-[#F15A24]'
               }`}
             >
               {link.name}
             </button>
           ))}
           
           <button 
             onClick={() => { onInquiryClick(); setMobileMenuOpen(false); }} 
             className="bg-[#F15A24] text-white px-12 py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
           >
             <PhoneCall size={16} />
             {language === Language.AM ? 'አሁኑኑ ይዘዙ' : 'Inquire Now'}
           </button>

           <button 
             onClick={() => { setLanguage(language === Language.EN ? Language.AM : Language.EN); setMobileMenuOpen(false); }} 
             className="text-[#D4AF37] text-xs tracking-[0.4em] font-bold"
           >
             {language === Language.EN ? 'አማርኛ' : 'ENGLISH'}
           </button>
        </div>
      )}
    </nav>
  );
}