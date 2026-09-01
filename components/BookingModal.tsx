'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Users, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { sendInquiry } from '@/app/actions/sendEmail';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  tourName?: string;
  hotelName?: string;
  type?: 'tour' | 'hotel';
}

// Input validation functions
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string) => {
  const phoneRegex = /^(?:\+251|0)[1-9]\d{8}$/;
  return phoneRegex.test(phone);
};

// WhatsApp message formatter
const formatWhatsAppMessage = (formData: FormData, language: Language, type: 'tour' | 'hotel', tourName?: string, hotelName?: string) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const guests = formData.get('guests');
  const requirements = formData.get('requirements');
  const itemName = type === 'hotel' ? hotelName : tourName;

  if (language === Language.AM) {
    let message = `👋🏽ሰላም Ethio Journey,
    
📌 የተጠቀመው ምርወና: ${type === 'hotel' ? 'ኮተል' : 'ጉዞ'}
${itemName ? `🏨 ${itemName}` : ''}

👤 ስም: ${name}
📧 ኢሜይል: ${email}
${phone ? `📱 ስልክ: ${phone}` : ''}
📅 ቀን: ${date}
👥 አጋጣሚዎች: ${guests}

💬 አስፈላጊ መጠራቀም:
${requirements || 'ምንም አልተሰጠም'}

✅ የመያዝ ትእዛዝዎ ተቀብለል። እንደገና ተገናኝነት ይፈልጉ!`;
    return message;
  } else {
    let message = `👋🏽 Hello Ethio Journey,
    
📌 Booking Type: ${type === 'hotel' ? 'Hotel' : 'Tour'}
${itemName ? `🏨 ${itemName}` : ''}

👤 Name: ${name}
📧 Email: ${email}
${phone ? `📱 Phone: ${phone}` : ''}
📅 Date: ${date}
👥 Guests: ${guests}

💬 Special Requirements:
${requirements || 'None'}

✅ Your booking request has been received. We'll contact you shortly!`;
    return message;
  }
};

export default function BookingModal({ isOpen, onClose, language, tourName, hotelName, type = 'tour' }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // ---------------------------------------------------------
  // ⚙️ CONFIGURATION: ADJUST YOUR CONTACT DETAILS HERE
  // ---------------------------------------------------------
  const WHATSAPP_NUMBER = "251911444646"; // Format: CountryCode + Number (No + sign)
  // ---------------------------------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const phone = formData.get('phone');

    // Client-side validation
    const newErrors: { [key: string]: string } = {};
    if (!validateEmail(email?.toString() || '')) {
      newErrors.email = language === Language.AM ? 'ያስገቡት ኢሜይል አይገባም' : 'Invalid email format';
    }
    if (phone && !validatePhone(phone.toString())) {
      newErrors.phone = language === Language.AM ? 'ያስገቡት ስልክ ቁጥር አይገባም' : 'Invalid phone number format';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    // 1. Send Email via Server Action
    const result = await sendInquiry(formData);

    if (result.success) {
      setIsSent(true);

      // 2. Prepare WhatsApp Redirect
      const message = formatWhatsAppMessage(formData, language, type, tourName, hotelName);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

      // 3. Wait 2 seconds so they see the success UI, then redirect
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        onClose();
        setIsSent(false);
      }, 2500);

    } else {
      alert(`${language === Language.AM ? "ችግር ተፈጥሯል፣ እባክዎ እንደገና ይሞክሩ" : "Something went wrong. Please try again."} (${result.error})`);
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-start sm:items-center justify-center p-4 md:p-6 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl my-auto"
          >
            <button onClick={onClose} className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              {isSent ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="flex justify-center text-[#F15A24]"><CheckCircle2 size={80} strokeWidth={1.5} /></div>
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif font-bold text-white">
                      {language === Language.AM ? 'በተሳካ ሁኔታ ተልኳል!' : 'Request Received'}
                    </h2>
                    <p className="text-zinc-400">
                      {language === Language.AM 
                        ? 'የመያዝ ትእዛዝዎ ተቀብለል። በቅርቡ እናገናኛለን!' 
                        : 'Your booking request has been received. We\'ll contact you shortly!'}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "0%" }}
                            transition={{ duration: 2.5, ease: "linear" }}
                            className="h-full bg-[#F15A24]"
                        />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-serif font-bold text-white mb-2">
                    {language === Language.AM ? 'ጉዞዎን ይጀምሩ' : 'Begin Your Journey'}
                  </h2>
                  <p className="text-zinc-400 mb-8">
                    {language === Language.AM 
                      ? 'ዝርዝርዎን ያስገቡ እና የእኛ የግል ረዳት በቅርቡ ያነጋግርዎታል።' 
                      : 'Enter your details and our concierge will contact you shortly.'}
                  </p>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {tourName && (
                      <input 
                        type="hidden" 
                        name="tour" 
                        value={tourName} 
                      />
                    )}
                    {hotelName && (
                      <input 
                        type="hidden" 
                        name="tour" 
                        value={hotelName} 
                      />
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#F15A24] font-bold">Full Name</label>
                        <input name="name" required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F15A24] transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#F15A24] font-bold">Email Address</label>
                        <input 
                          name="email" 
                          required 
                          type="email" 
                          placeholder="john@luxury.com" 
                          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#F15A24]'}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#F15A24] font-bold">Phone Number</label>
                        <input 
                          name="phone" 
                          type="tel" 
                          placeholder="+251 911 444 646" 
                          className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white focus:outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#F15A24]'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#F15A24] font-bold">Travel Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-3.5 text-white/30" size={18} />
                          <input name="date" required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#F15A24]" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-[#F15A24] font-bold">Guests</label>
                        <div className="relative">
                          <Users className="absolute left-4 top-3.5 text-white/30" size={18} />
                          <select name="guests" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-[#F15A24] appearance-none">
                            <option>1 - 2 Persons</option>
                            <option>3 - 5 Persons</option>
                            <option>6+ Persons</option>
                          </select>
                        </div>
                      </div>
                    </div>

                     <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-[#F15A24] font-bold">Requirements</label>
                      <textarea name="requirements" rows={3} placeholder="..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F15A24] resize-none" />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-[#F15A24] hover:bg-[#ff6a35] disabled:bg-zinc-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all group active:scale-[0.98]"
                    >
                      <span className="uppercase tracking-widest text-sm">
                        {isSubmitting ? 'Processing...' : language === Language.AM ? 'ጥያቄ ይላኩ' : 'Confirm Inquiry'}
                      </span>
                      {!isSubmitting && <MessageCircle size={18} className="group-hover:rotate-12 transition-transform" />}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}