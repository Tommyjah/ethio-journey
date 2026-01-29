'use client';

import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { Language, ChatMessage } from '../types';
import { LOCALIZATION } from '../constants';

interface AIConciergeProps {
  language?: Language;
}

export interface AIConciergeRef {
  openWithPrompt: (prompt: string) => void;
}

const AIConcierge = forwardRef<AIConciergeRef, AIConciergeProps>((props, ref) => {
  const { language } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  const currentLang = language || Language.EN;
  const t = LOCALIZATION[currentLang] || LOCALIZATION[Language.EN];

  useImperativeHandle(ref, () => ({
    openWithPrompt: (prompt: string) => {
      setIsOpen(true);
      if (prompt && prompt.trim()) {
        processMessage(prompt);
      }
    }
  }));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const processMessage = async (text: string) => {
    if (isLoading || !text.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', content: text };
    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: text,
          language: currentLang 
        }),
      });

      // Handle Rate Limiting (429) without crashing the component
      if (response.status === 429) {
        setMessages((prev) => [...prev, { 
          role: 'assistant', 
          content: "Our elite concierge service is currently in high demand. Please allow a moment before your next request." 
        }]);
        return;
      }

      // Handle General Server Errors (500)
      if (!response.ok) {
        setMessages((prev) => [...prev, { 
          role: 'assistant', 
          content: "The private line is currently occupied. Please try again shortly or contact us directly." 
        }]);
        return;
      }

      const data = await response.json();
      
      const assistantMsg: ChatMessage = { 
        role: 'assistant', 
        content: data.text || "Our specialists are currently preparing your itinerary. Please try again shortly." 
      };
      
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("Concierge Network Error:", error);
      setMessages((prev) => [...prev, { 
        role: 'assistant', 
        content: "We are having trouble connecting to the lounge. Please check your connection." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    const msg = input;
    setInput('');
    processMessage(msg);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-10 right-10 z-[160] w-20 h-20 bg-[#F15A24] rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(241,90,36,0.5)] hover:scale-110 transition-all duration-300 ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Open AI Concierge"
      >
        <MessageSquare className="text-white" size={32} />
      </button>
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[170] bg-black/80 backdrop-blur-md transition-opacity duration-500" 
          onClick={() => setIsOpen(false)} 
        />
      )}

      {/* Chat Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[600px] z-[180] bg-[#0A0A0A] border-l border-white/10 transition-all duration-500 ease-in-out transform shadow-2xl flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-10 border-b border-white/10 flex items-center justify-between bg-[#0A0A0A]/40 backdrop-blur-2xl">
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 bg-[#F15A24]/10 rounded-2xl flex items-center justify-center border border-[#F15A24]/20">
              <Bot className="text-[#F15A24]" size={28} />
            </div>
            <div>
              <h3 className="font-serif text-3xl font-bold text-white">{t.aiTitle || 'AI Concierge'}</h3>
              <p className="text-[10px] text-[#D4AF37] font-bold tracking-[0.4em] uppercase">Private Attaché</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-3 rounded-2xl transition-all text-white">
            <X size={32} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-10 space-y-10 scroll-smooth no-scrollbar">
          {messages.length === 0 && (
            <div className="text-center py-24 space-y-10">
              <div className="w-32 h-32 mx-auto bg-[#F15A24]/5 rounded-[4rem] flex items-center justify-center border border-[#F15A24]/10 animate-pulse">
                <Sparkles className="text-[#F15A24]/40" size={64} />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-4xl font-bold text-white">The Lounge is Open</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed max-w-sm mx-auto">
                  How may I assist in architecting your bespoke expedition today?
                </p>
              </div>
            </div>
          )}
          
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-6 duration-500`}>
              <div className={`max-w-[85%] p-8 rounded-[2.5rem] text-lg leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-[#F15A24] text-white font-medium shadow-2xl' 
                  : 'bg-white/5 border border-white/10 text-white/90'
              }`}>
                {msg.content}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center space-x-4">
                <Loader2 className="animate-spin text-[#F15A24]" size={24} />
                <span className="text-base text-white/50 font-light">Composing recommendations...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} className="h-4" />
        </div>

        {/* Input Area */}
        <div className="p-10 border-t border-white/10 bg-[#0A0A0A]/40 backdrop-blur-2xl">
          <div className="relative group">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
              placeholder={t.aiPlaceholder || 'Message your attaché...'}
              disabled={isLoading}
              className="w-full bg-white/5 border border-white/10 rounded-[2rem] py-6 pl-10 pr-20 outline-none focus:border-[#F15A24] transition-all placeholder:text-white/20 text-white text-xl font-light disabled:cursor-not-allowed"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-5 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#F15A24] rounded-2xl flex items-center justify-center text-white disabled:opacity-20 transition-all hover:bg-[#D43D10] shadow-xl"
            >
              <Send size={28} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

AIConcierge.displayName = 'AIConcierge';

export default AIConcierge;