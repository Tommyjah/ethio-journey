'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Globe, PhoneCall, ArrowUpRight } from 'lucide-react';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change / Escape key
  useEffect(() => {
    const handleEscape = () => setMobileMenuOpen(false);
    const handleHashChange = () => setMobileMenuOpen(false);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') handleEscape();
    });
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
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
    { name: language === Language.AM ? 'ቅርስ' : 'Heritage', path: '/heritage' },
    { name: t.navTours || 'Itineraries', path: '/tours' },
    { name: t.navFleet || 'Our Vehicles', path: '/fleet' },
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
          
          {/* Admin Access */}
          <button
            onClick={() => handleNavigation('/admin/login')}
            className="text-[10px] font-bold uppercase tracking-[0.3em] border border-white/10 px-4 py-2 rounded-full hover:bg-[#F15A24]/10 hover:text-[#F15A24] transition-all group"
          >
            {language === Language.AM ? 'አዲስ ግንዛብ' : 'Admin'}
          </button>

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

        {/* Mobile Toggle - hidden when menu is open since the menu has its own close button */}
        <button 
          className={`lg:hidden text-white p-2 relative z-[310] ${mobileMenuOpen ? 'pointer-events-none opacity-0' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay - elegant full-screen menu */}
      <div 
        className={`fixed inset-0 bg-black z-[305] lg:hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="relative h-full w-full flex flex-col overflow-y-auto">
          {/* Top bar inside the menu: brand on left, close on right */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 overflow-hidden rounded-sm border border-white/10">
                <Image
                  src="/images/logo.jpg"
                  alt="Ethio Journey Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold tracking-tighter text-white">
                  ETHIO <span className="font-light italic text-[#F15A24]">JOURNEY</span>
                </span>
                <span className="text-[6px] tracking-[0.4em] uppercase text-[#D4AF37] font-bold">
                  Luxury Travel & Logistics
                </span>
              </div>
            </div>
            <button
              className="text-white p-2 hover:text-[#F15A24] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Navigation links section */}
          <nav className="flex-1 flex flex-col justify-center px-8 py-10">
            <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.4em] font-bold mb-8 text-center">
              {language === Language.AM ? 'አሰሳ' : 'Navigation'}
            </p>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.path)}
                  className={`w-full text-left py-4 px-4 text-2xl font-serif transition-all border-b border-white/5 flex items-center justify-between group ${
                    pathname === link.path 
                      ? 'text-[#F15A24] pl-6' 
                      : 'text-white hover:text-[#F15A24] hover:pl-6'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight 
                    size={20} 
                    className={`transition-transform ${
                      pathname === link.path ? 'text-[#F15A24]' : 'text-white/30 group-hover:text-[#F15A24] group-hover:rotate-45'
                    }`} 
                  />
                </button>
              ))}
            </div>
          </nav>

          {/* Actions section at the bottom */}
          <div className="px-6 pb-8 pt-4 border-t border-white/5 space-y-3">
            {/* Book Now CTA */}
            <button
              onClick={() => { onInquiryClick(); setMobileMenuOpen(false); }}
              className="w-full bg-[#F15A24] text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#ff6a35] transition-all"
            >
              <PhoneCall size={16} />
              {language === Language.AM ? 'አሁኑኑ ይዘዙ' : 'Book Now'}
            </button>

            {/* Secondary actions row */}
            <div className="grid grid-cols-2 gap-3">
              {/* Admin */}
              <button
                onClick={() => { handleNavigation('/admin/login'); setMobileMenuOpen(false); }}
                className="border border-white/10 text-white px-4 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 hover:border-[#F15A24]/30 transition-all"
              >
                {language === Language.AM ? 'አዲስ ግንዛብ' : 'Admin'}
              </button>

              {/* Language Toggle */}
              <button
                onClick={() => { setLanguage(language === Language.EN ? Language.AM : Language.EN); }}
                className="border border-white/10 text-white px-4 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 hover:border-[#D4AF37]/30 transition-all"
              >
                <Globe size={14} className="text-[#D4AF37]" />
                {language === Language.EN ? 'አማርኛ' : 'ENGLISH'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}