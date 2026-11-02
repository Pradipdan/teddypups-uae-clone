import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActions() {
  const whatsappUrl = "https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20available%20puppies.";

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none"></span>
          
          <MessageCircle className="w-7 h-7 fill-white" />

          {/* Hover Tooltip */}
          <span className="absolute right-16 bg-[#2c221a] text-[#fffdf8] text-xs font-medium py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat on WhatsApp (24/7) 👋
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[#fffdf8]/95 backdrop-blur-md border-t border-[#ede4d8] p-2.5 px-4 flex items-center space-x-3 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white py-2.5 px-4 rounded-full text-sm font-semibold shadow-sm active:scale-98 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp us</span>
        </a>

        <a
          href="tel:+971541676733"
          className="flex items-center justify-center space-x-2 bg-[#f4ece1] text-[#2c221a] py-2.5 px-5 rounded-full text-sm font-semibold border border-[#e2d5c3] active:scale-98 transition-transform"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </a>
      </div>
    </>
  );
}
