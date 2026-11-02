import React, { useState } from 'react';
import { Heart, Search, Sparkles, MessageCircle } from 'lucide-react';
import { puppiesData } from '../data/puppies';

export default function GoneHomePage({ onSelectPuppy, navigate }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Puppies that are adopted / gone home
  const goneHomePuppies = puppiesData.filter(p => p.status === 'gone_home' || p.status === 'adopted');

  const filtered = goneHomePuppies.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-hand text-sm text-[#a5734c]">happily ever after</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#231a14] tracking-tight">
          Gone home
        </h1>
        <p className="font-hand text-base sm:text-lg text-[#855734]">
          every one of them was a Teddy Pup once
        </p>
        <p className="text-xs sm:text-sm text-[#665749] leading-relaxed max-w-xl mx-auto">
          These precious puppies have already found their loving families across Dubai and the world. Browse their adoption boarding tickets below!
        </p>
      </div>

      {/* Search & Info Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#faf5ee] p-4 rounded-2xl border border-[#ece1d3]">
        <div className="text-xs sm:text-sm text-[#5d4f43]">
          <strong>{goneHomePuppies.length}</strong> adorable puppies placed in loving homes ♥
        </div>

        <div className="w-full sm:w-72">
          <input
            type="text"
            placeholder="Search by name or breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-[#ded1c0] bg-white text-xs sm:text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
          />
        </div>
      </div>

      {/* Vintage Boarding Ticket Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((puppy) => {
          const img = puppy.images && puppy.images.length > 0 ? puppy.images[0] : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80";
          return (
            <div
              key={puppy.id}
              onClick={() => onSelectPuppy(puppy)}
              className="ticket-edge bg-[#fffdf8] rounded-2xl p-4 border border-[#e8ded2] cursor-pointer group flex flex-col justify-between"
            >
              {/* Ticket Top Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-dashed border-[#e0d3c3] text-[11px] font-mono tracking-widest uppercase text-[#8c7b6d]">
                <span className="flex items-center space-x-1">
                  <span>home</span>
                  <Heart className="w-3 h-3 text-[#d94f4f] fill-current" />
                </span>
                <span>admit one</span>
                <span className="text-[#a5734c]">ticket home</span>
              </div>

              {/* Photo & Puppy info */}
              <div className="pt-3.5 pb-2 flex space-x-4 items-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#f4ece1] shrink-0 border border-[#e2d5c3] shadow-xs">
                  <img
                    src={img}
                    alt={puppy.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=400&q=80";
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-xl font-bold text-[#2c221a] truncate group-hover:text-[#9e5d2d] transition-colors">
                    {puppy.name}
                  </h3>
                  <p className="text-xs text-[#6e5d50] font-medium mt-0.5">
                    {puppy.breed}, {puppy.gender.toLowerCase()}
                  </p>
                  <div className="mt-2 inline-block px-2.5 py-0.5 rounded-md text-[10px] font-semibold bg-[#faf3ea] text-[#8c5a32] border border-[#e8dbcc]">
                    {puppy.origin.includes('Dubai') ? 'Dubai showroom' : 'TeddyPups Overseas'}
                  </div>
                </div>
              </div>

              {/* Ticket Bottom Stamp */}
              <div className="pt-3 border-t border-dashed border-[#e0d3c3] flex items-center justify-between text-xs text-[#8c7b6d]">
                <span className="font-hand text-[13px] text-[#a5734c]">Loved forever</span>
                <span className="text-[11px] font-semibold text-[#2c221a] group-hover:underline">
                  View card →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Call to action */}
      <div className="bg-[#faf5ee] rounded-3xl p-8 sm:p-12 text-center border border-[#eee2d2] space-y-4 max-w-2xl mx-auto">
        <Heart className="w-8 h-8 text-[#d94f4f] fill-current mx-auto" />
        <h2 className="font-serif text-2xl font-bold text-[#2c221a]">
          Fell in love with an adopted puppy?
        </h2>
        <p className="text-sm text-[#615245] leading-relaxed">
          If you missed out on any of our adopted puppies, we can match and source a puppy with the exact same pedigree, breed, color, and size!
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20saw%20a%20puppy%20on%20your%20Gone%20Home%20page%20and%20would%20love%20a%20similar%20one."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Request a similar puppy on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

