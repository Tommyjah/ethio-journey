'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Send, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import { Language } from '../../types';
import { sendInquiry } from '@/app/actions/sendEmail';

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
const formatWhatsAppMessage = (formData: FormData, language: Language) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const tour = formData.get('tour');
  const requirements = formData.get('requirements');

  if (language === Language.AM) {
    let message = `👋🏽ሰላም Ethio Journey,
    
📌 የተጠቀመው አይነት: ${tour}

👤 ስም: ${name}
📧 ኢሜይል: ${email}
${phone ? `📱 ስልክ: ${phone}` : ''}

💬 መልዕክት:
${requirements || 'ምንም አልተሰጠም'}

✅ የጥያቄዎ ተቀብለል። እንደገና ተገናኝነት ይፈልጉ!`;
    return message;
  } else {
    let message = `👋🏽 Hello Ethio Journey,
    
📌 Inquiry Type: ${tour}

👤 Name: ${name}
📧 Email: ${email}
${phone ? `📱 Phone: ${phone}` : ''}

💬 Message:
${requirements || 'None'}

✅ Your inquiry has been received. We'll contact you shortly!`;
    return message;
  }
};

export default function ContactPage() {
  const router = useRouter();
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const WHATSAPP_NUMBER = "251911444646";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar language={language} setLanguage={setLanguage} onInquiryClick={() => {}} />

      {/* Header Space */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            {language === Language.AM ? 'ያግኙን' : 'Concierge Desk'}
          </h1>
          <p className="text-[#D4AF37] tracking-[0.4em] uppercase text-[10px] md:text-xs">
            Personalized Luxury Service
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: Contact Information */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-2xl font-serif mb-8 text-white/90">Our Headquarters</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={20} />
                <p className="text-white/60 font-light leading-relaxed">
                  Around 22, Weha Lemat, Meklit Building<br />
                  3rd Floor, House #4<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>
              
              <div className="flex items-center gap-4 group cursor-pointer">
                <Phone className="text-[#D4AF37]" size={20} />
                <a href="tel:+251911444646" className="text-white/60 group-hover:text-white transition-colors">
                  +251 911 444 646
                </a>
              </div>

              <div className="flex items-center gap-4 group cursor-pointer">
                <Mail className="text-[#D4AF37]" size={20} />
                <a href="mailto:info@ethiojourney.com" className="text-white/60 group-hover:text-white transition-colors">
                  info@ethiojourney.com
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl">
            <h3 className="text-lg font-serif mb-4 italic">Instant Assistance</h3>
            <p className="text-white/50 text-sm mb-6">Speak directly with our travel designers on WhatsApp for immediate itinerary support.</p>
            <a 
              href="https://wa.me/251911444646" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full border border-[#25D366]/30 hover:bg-[#25D366] hover:text-white transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span className="font-bold text-xs uppercase tracking-widest">Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>

         {/* Right: Elegant Contact Form */}
         <motion.div 
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 0.4 }}
           className="bg-zinc-900/30 p-8 md:p-12 rounded-3xl border border-white/5"
         >
           {isSent ? (
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }} 
               animate={{ opacity: 1, scale: 1 }}
               className="py-12 text-center space-y-6"
             >
               <div className="flex justify-center text-[#D4AF37]"><MessageCircle size={80} strokeWidth={1.5} /></div>
               <div className="space-y-2">
                 <h2 className="text-3xl font-serif font-bold text-white">
                   {language === Language.AM ? 'በተሳካ ሁኔታ ተልኳል!' : 'Request Received'}
                 </h2>
                 <p className="text-zinc-400">
                   {language === Language.AM 
                     ? 'ከእኛ ግንኙነት በቅርቡ ተነበቀዎታል።' 
                     : 'We have received your request and will contact you shortly.'}
                 </p>
               </div>
             </motion.div>
           ) : (
              <form className="space-y-8" onSubmit={async (e) => {
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
                
                const result = await sendInquiry(formData);
                
                if (result.success) {
                  setIsSent(true);
                  
                  // Prepare WhatsApp Redirect
                  const message = formatWhatsAppMessage(formData, language);
                  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

                  // Wait 2 seconds so they see the success UI, then redirect
                  setTimeout(() => {
                    window.open(whatsappUrl, '_blank');
                  }, 2500);
                } else {
                  alert(`${language === Language.AM ? "ችግር ተፈጥሯል፣ እባክዎ እንደገና ይሞክሩ" : "Something went wrong. Please try again."} (${result.error})`);
                }
                
                setIsSubmitting(false);
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#D4AF37] outline-none transition-colors text-sm font-light" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className={`w-full bg-transparent border-b py-2 outline-none transition-colors text-sm font-light ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className={`w-full bg-transparent border-b py-2 outline-none transition-colors text-sm font-light ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#D4AF37]'}`} 
                    placeholder="+251 911 444 646" 
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Inquiry Type</label>
                 <select 
                   name="tour"
                   className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#D4AF37] outline-none transition-colors text-sm font-light appearance-none"
                 >
                   <option className="bg-zinc-950">Luxury Expedition</option>
                   <option className="bg-zinc-950">Private Fleet Hire</option>
                   <option className="bg-zinc-950">Corporate Travel</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Your Message</label>
                 <textarea 
                   rows={4} 
                   name="requirements"
                   required
                   className="w-full bg-transparent border-b border-white/10 py-2 focus:border-[#D4AF37] outline-none transition-colors text-sm font-light resize-none" 
                   placeholder="How can we craft your journey?" 
                 />
               </div>

               <button 
                 type="submit"
                 disabled={isSubmitting}
                 className="w-full py-4 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-[0.3em] hover:bg-white transition-all duration-500 rounded-sm disabled:opacity-50"
               >
                 {isSubmitting ? (language === Language.AM ? 'በ обробке...' : 'Processing...') : (language === Language.AM ? 'ጥያቄ ይላኩ' : 'Send Request')}
               </button>
             </form>
           )}
         </motion.div>
      </section>

      {/* Footer Back Button */}
      <footer className="py-12 text-center">
        <button 
          onClick={() => router.push('/')}
          className="text-white/30 hover:text-[#D4AF37] transition-colors text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Back to Experience
        </button>
      </footer>
    </div>
  );
}