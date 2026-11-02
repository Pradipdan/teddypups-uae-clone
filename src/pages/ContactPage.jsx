import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Check, Send, ArrowUpRight, Heart } from 'lucide-react';
import { puppiesData } from '../data/puppies';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [selectedPuppy, setSelectedPuppy] = useState('any puppy (not sure yet)');
  const [message, setMessage] = useState('');
  const [posted, setPosted] = useState(false);

  const availablePuppies = puppiesData.filter(p => p.status === 'available');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosted(true);

    const letterContent = `Dear TeddyPups,\nMy name is ${name || 'Friend'},\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location || 'Dubai'}\nCurious about: ${selectedPuppy}\nMessage: ${message || 'Looking forward to meeting the puppies!'}\nwith love, a future puppy parent`;
    const waUrl = `https://wa.me/971541676733?text=${encodeURIComponent(letterContent)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-hand text-sm text-[#a5734c]">always delighted to hear from you</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#231a14] tracking-tight">
          Get in touch with us
        </h1>
        <p className="text-sm sm:text-base text-[#615143] leading-relaxed max-w-xl mx-auto">
          Have questions about our puppies or adoption process? Fill out the letter, and our team will get back to you promptly. Whether ready to adopt or just seeking info, we'd love to hear from you!
        </p>
      </div>

      {/* Main Grid: Letter Form & Showroom Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: The Interactive Letter Form */}
        <div className="lg:col-span-7 bg-[#fffdf8] rounded-3xl p-6 sm:p-10 border border-[#ede3d5] shadow-card relative">
          
          <div className="absolute top-6 right-6">
            <span className="font-hand text-xs text-[#a5734c] bg-[#faf3ea] px-3 py-1 rounded-full border border-[#ede2d2]">
              📮 puppy mail
            </span>
          </div>

          {posted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto shadow-inner">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
                Letter Posted with Love!
              </h3>
              <p className="text-sm text-[#615143] max-w-md mx-auto leading-relaxed">
                Thank you, {name}! Your letter has been delivered to our Downtown Dubai team. We're connecting you with our concierge on WhatsApp right now.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Natural language letter inputs */}
              <div className="font-serif text-lg sm:text-xl text-[#2c221a] leading-loose space-y-4">
                <div>
                  <span className="text-[#a5734c] font-hand text-2xl">Dear TeddyPups,</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-2">
                  <span>my name is</span>
                  <input
                    type="text"
                    required
                    placeholder="your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-b-2 border-[#c0824b] bg-transparent text-[#2c221a] font-serif font-bold px-2 py-0.5 focus:outline-hidden focus:border-[#7b4f2a] min-w-[160px] text-base sm:text-lg"
                  />
                  <span>, and you can reach me on</span>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-b-2 border-[#c0824b] bg-transparent text-[#2c221a] font-serif font-bold px-2 py-0.5 focus:outline-hidden focus:border-[#7b4f2a] min-w-[180px] text-base sm:text-lg"
                  />
                </div>

                <div className="flex flex-wrap items-baseline gap-2">
                  <span>or by email at</span>
                  <input
                    type="email"
                    placeholder="email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-b-2 border-[#c0824b] bg-transparent text-[#2c221a] font-serif font-bold px-2 py-0.5 focus:outline-hidden focus:border-[#7b4f2a] min-w-[200px] text-base sm:text-lg"
                  />
                  <span>.</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-2">
                  <span>I live in</span>
                  <input
                    type="text"
                    placeholder="e.g. Dubai Marina, Abu Dhabi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border-b-2 border-[#c0824b] bg-transparent text-[#2c221a] font-serif font-bold px-2 py-0.5 focus:outline-hidden focus:border-[#7b4f2a] min-w-[180px] text-base sm:text-lg"
                  />
                  <span>, and I'm curious about</span>
                  <select
                    value={selectedPuppy}
                    onChange={(e) => setSelectedPuppy(e.target.value)}
                    className="border-b-2 border-[#c0824b] bg-[#faf5ee] text-[#2c221a] font-serif font-bold px-3 py-1 rounded-lg text-sm sm:text-base focus:outline-hidden cursor-pointer"
                  >
                    <option value="any puppy (not sure yet)">any puppy (not sure yet)</option>
                    {availablePuppies.map((p) => (
                      <option key={p.id} value={`${p.name} (${p.breed}, ${p.gender.toLowerCase()})`}>
                        {p.name} ({p.breed}, {p.gender.toLowerCase()})
                      </option>
                    ))}
                  </select>
                  <span>.</span>
                </div>

                <div>
                  <label className="block text-xs font-sans text-[#7a6b5e] font-semibold uppercase tracking-wider mb-2">
                    Your personal message (optional):
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Tell us about your home, questions on vaccinations, travel schedules, or when you'd like to visit our showroom..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3.5 rounded-2xl bg-[#faf6ef] border border-[#ede3d5] text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b] font-sans"
                  />
                </div>

                <div className="text-right pt-2">
                  <span className="font-hand text-base text-[#a5734c] block">
                    with love, a future puppy parent
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2c221a] hover:bg-[#433528] text-white text-sm font-bold shadow-md transition-all active:scale-98 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Post my letter</span>
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right: Showroom & Direct Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Contact Cards */}
          <div className="bg-[#faf5ee] rounded-3xl p-6 sm:p-8 border border-[#ece1d3] space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
              Direct Contact
            </h3>

            <div className="space-y-4">
              <a
                href="https://wa.me/971541676733"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-[#eee2d2] hover:border-[#25D366] transition-colors group shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#e8f8ec] text-[#1c7430] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#736356] block">WhatsApp (24/7 Support)</span>
                  <span className="font-serif text-base font-bold text-[#2c221a] group-hover:text-[#1c7430]">+971 54 167 6733</span>
                </div>
              </a>

              <a
                href="tel:+971541676733"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-[#eee2d2] hover:border-[#a5734c] transition-colors group shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#faf3ea] text-[#a5734c] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#736356] block">Call Showroom</span>
                  <span className="font-serif text-base font-bold text-[#2c221a] group-hover:text-[#a5734c]">+971 54 167 6733</span>
                </div>
              </a>

              <a
                href="mailto:contact@teddypups.ae"
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white border border-[#eee2d2] hover:border-[#a5734c] transition-colors group shadow-xs"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#faf3ea] text-[#a5734c] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#736356] block">Email</span>
                  <span className="font-serif text-base font-bold text-[#2c221a] group-hover:text-[#a5734c]">contact@teddypups.ae</span>
                </div>
              </a>
            </div>
          </div>

          {/* Showroom Location Box */}
          <div className="bg-[#2c221a] text-[#fffdf8] rounded-3xl p-6 sm:p-8 space-y-4 shadow-md">
            <div className="flex items-center space-x-2 text-[#e8a36e]">
              <MapPin className="w-5 h-5" />
              <span className="text-xs font-semibold tracking-wider uppercase">Downtown Dubai Showroom</span>
            </div>
            
            <h4 className="font-serif text-xl sm:text-2xl font-bold">
              Visit us in Downtown Dubai
            </h4>
            
            <p className="text-xs sm:text-sm text-[#cfc1b4] leading-relaxed">
              Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. Showroom visits are by friendly appointment to ensure private bonding time.
            </p>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Downtown+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white text-[#2c221a] text-xs font-bold hover:bg-[#f4ece1] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
