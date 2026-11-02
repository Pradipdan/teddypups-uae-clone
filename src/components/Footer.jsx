import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Instagram, Heart, ArrowUpRight } from 'lucide-react';

export default function Footer({ navigate }) {
  const handleNavClick = (path, e) => {
    if (e) e.preventDefault();
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#231a14] text-[#f5ede1] pt-16 pb-24 lg:pb-12 border-t border-[#3a2c22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#3d2e23]">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-[#3d2e23] border border-[#523e30] flex items-center justify-center p-1.5 shadow-inner">
                <img
                  src="https://puppy.instabizweb.com/brand/logo.png"
                  alt="TeddyPups U.A.E."
                  className="w-full h-full object-contain brightness-110"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#fffdf8] tracking-tight">
                  TeddyPups
                </span>
                <span className="text-[10px] tracking-widest uppercase block text-[#e8a36e] font-semibold">
                  U.A.E. · Dubai
                </span>
              </div>
            </div>
            
            <h4 className="font-serif text-lg text-[#fffdf8] font-normal italic">
              Home, at last.
            </h4>
            <p className="text-sm text-[#bfb1a4] leading-relaxed max-w-sm">
              TeddyPups U.A.E. is a Dubai-based brand specializing in miniature and teacup puppies, offering premium boutique services and worldwide shipping under ethical standards.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#d8c7b8]">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#33241a] border border-[#4d382b]">
                🇦🇪 Licensed in Dubai
              </span>
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#33241a] border border-[#4d382b]">
                ✈️ Worldwide Cargo
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-lg text-[#fffdf8] font-semibold tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#bfb1a4]">
              {[
                { label: 'Available puppies', path: '/puppies' },
                { label: 'Gone home', path: '/gone-home' },
                { label: 'Happy families', path: '/happy-families' },
                { label: 'How it works', path: '/how-it-works' },
                { label: 'Delivery & collection', path: '/how-it-works#delivery' },
                { label: 'FAQ', path: '/faq' },
                { label: 'Visit & contact', path: '/contact' },
              ].map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(item.path, e)}
                    className="hover:text-[#fffdf8] transition-colors inline-flex items-center space-x-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-lg text-[#fffdf8] font-semibold tracking-wide">
              Say hello
            </h3>
            <ul className="space-y-3 text-sm text-[#bfb1a4]">
              <li>
                <a
                  href="https://wa.me/971541676733"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 hover:text-[#fffdf8] group"
                >
                  <MessageCircle className="w-5 h-5 text-[#75d488] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase text-[#a09083] font-semibold">WhatsApp (24/7)</span>
                    <span className="text-[#fffdf8] font-medium group-hover:underline">+971 54 167 6733</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@teddypups.ae"
                  className="flex items-start space-x-3 hover:text-[#fffdf8] group"
                >
                  <Mail className="w-5 h-5 text-[#e8a36e] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase text-[#a09083] font-semibold">Email</span>
                    <span className="text-[#fffdf8] font-medium group-hover:underline">contact@teddypups.ae</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#d97736] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs uppercase text-[#a09083] font-semibold">Showroom</span>
                    <span className="text-[#fffdf8] block">Downtown Dubai, United Arab Emirates</span>
                    <a
                      href="https://maps.google.com/?q=Downtown+Dubai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-[#e8a36e] hover:underline mt-1"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#33241a] border border-[#4d382b] flex items-center justify-center text-[#d8c7b8] hover:text-[#fffdf8] hover:bg-[#433225] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#33241a] border border-[#4d382b] flex items-center justify-center text-[#d8c7b8] hover:text-[#fffdf8] hover:bg-[#433225] transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#33241a] border border-[#4d382b] flex items-center justify-center text-[#d8c7b8] hover:text-[#fffdf8] hover:bg-[#433225] transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                f
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c7d71] space-y-3 sm:space-y-0">
          <p>© 2026 TeddyPups U.A.E. · All rights reserved.</p>
          <p className="font-hand text-sm text-[#e8a36e] flex items-center space-x-1">
            <span>every puppy is family</span>
            <Heart className="w-3.5 h-3.5 text-[#e87070] fill-current inline ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
}

