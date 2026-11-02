import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Heart, ChevronRight } from 'lucide-react';

export default function Navbar({ currentPath, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Puppies', path: '/puppies' },
    { label: 'Gone home', path: '/gone-home' },
    { label: 'Happy families', path: '/happy-families' },
    { label: 'How it works', path: '/how-it-works' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Visit & contact', path: '/contact' },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-[#2c221a] text-[#f7eee3] text-xs py-2 px-4 text-center tracking-wide font-medium flex items-center justify-center space-x-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e8a36e] animate-pulse"></span>
        <span className="font-hand text-sm">every puppy is family</span>
        <span className="hidden sm:inline opacity-60">· Licensed by UAE Ministry of Climate Change & Environment</span>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#fffdf8]/90 backdrop-blur-md shadow-sm border-b border-[#f0e8de] py-3.5'
            : 'bg-[#fffdf8] border-b border-[#f4ece1] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#f6eee2] border border-[#e8dccb] flex items-center justify-center p-1.5 shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="https://puppy.instabizweb.com/brand/logo.png"
                alt="TeddyPups U.A.E."
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=128&q=80";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2c221a] leading-none">
                TeddyPups
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-[#a5734c]">
                U.A.E. · Dubai
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[14px] font-medium text-[#4a3f35]">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#f4ece1] text-[#2c221a] font-semibold shadow-xs'
                      : 'hover:text-[#2c221a] hover:bg-[#faf5ee]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (WhatsApp) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-[#2c221a] text-[#fffdf8] hover:bg-[#433528] px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#75d488]" />
              <span>WhatsApp us</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center space-x-2">
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#f4ece1] text-[#2c221a]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-[#2c221a]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-[#2c221a] hover:bg-[#f4ece1] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#fffdf8] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#f0e8de]">
                <div>
                  <span className="font-hand text-lg text-[#a5734c]">where to, friend?</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#4a3f35] hover:text-[#2c221a] rounded-full hover:bg-[#f4ece1]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <button
                      key={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium text-base transition-colors ${
                        isActive
                          ? 'bg-[#f4ece1] text-[#2c221a] font-semibold'
                          : 'text-[#4a3f35] hover:bg-[#faf5ee] hover:text-[#2c221a]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="pt-6 border-t border-[#f0e8de] space-y-3">
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-[#2c221a] text-[#fffdf8] py-3 rounded-full text-sm font-medium shadow"
              >
                <MessageCircle className="w-4 h-4 text-[#75d488]" />
                <span>WhatsApp Us (+971 54 167 6733)</span>
              </a>
              <a
                href="tel:+971541676733"
                className="w-full flex items-center justify-center space-x-2 bg-[#faf5ee] border border-[#e8dfd5] text-[#2c221a] py-2.5 rounded-full text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </a>
              <p className="text-center text-xs text-[#a5734c] font-hand pt-2">
                every puppy is family ❤️
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

