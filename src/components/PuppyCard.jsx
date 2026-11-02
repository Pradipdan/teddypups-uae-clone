import React from 'react';
import { Play, Sparkles, Heart, MessageCircle, MapPin } from 'lucide-react';

export default function PuppyCard({ puppy, onSelect, onInquire }) {
  const isAvailable = puppy.status === 'available';
  const coverImage = puppy.images && puppy.images.length > 0 
    ? puppy.images[0] 
    : "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80";

  const handleCardClick = () => {
    if (onSelect) {
      onSelect(puppy);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="group bg-[#fffdf8] rounded-2xl sm:rounded-3xl border border-[#ede3d5] p-3.5 sm:p-4 hover:border-[#dfcbb8] shadow-card hover:shadow-lift transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden"
    >
      {/* Top Image Container */}
      <div className="relative aspect-4/5 w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#f7efe4] mb-3.5">
        <img
          src={coverImage}
          alt={puppy.displayName || puppy.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80";
          }}
        />

        {/* Top Floating Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
          {/* Status Badge */}
          {isAvailable ? (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#2c221a]/85 backdrop-blur-md text-[#fffdf8] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75d488] animate-pulse"></span>
              <span>Available</span>
            </span>
          ) : (
            <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#8a4239]/90 backdrop-blur-md text-[#fffdf8] shadow-sm">
              <span>Home ♥</span>
            </span>
          )}

          {/* Video Indicator */}
          {puppy.hasVideo && (
            <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-black/60 text-white backdrop-blur-md">
              <Play className="w-2.5 h-2.5 fill-white" />
              <span>Video</span>
            </span>
          )}
        </div>

        {/* Origin Pill (Bottom of Image) */}
        <div className="absolute bottom-2.5 left-2.5 pointer-events-none">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#fffdf8]/90 text-[#4a3f35] backdrop-blur-md shadow-xs border border-[#eee4d6]">
            <MapPin className="w-3 h-3 text-[#c0824b]" />
            <span>{puppy.origin}</span>
          </span>
        </div>
      </div>

      {/* Puppy Details */}
      <div className="flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2c221a] group-hover:text-[#9e5d2d] transition-colors leading-snug">
              {puppy.name}
            </h3>
            <span className="font-hand text-xs text-[#a5734c]">
              {puppy.breed}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#665749] mt-1 font-medium flex items-center space-x-1.5">
            <span className="capitalize">{puppy.gender}</span>
            <span>•</span>
            <span>{puppy.age}</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-[#f4ece1] flex items-center justify-between gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            className="flex-1 text-center py-2 px-3 rounded-full text-xs font-semibold bg-[#f5ede1] hover:bg-[#ebdcc8] text-[#2c221a] transition-colors"
          >
            Meet {puppy.name}
          </button>

          <a
            href={`https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20interested%20in%20${encodeURIComponent(puppy.name)}%20(${encodeURIComponent(puppy.breed)}).%20Could%20you%20share%20photos%20and%20details?`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 rounded-full bg-[#e8f8ec] hover:bg-[#d2f3d9] text-[#1c7430] transition-colors"
            title="Ask on WhatsApp"
            aria-label={`Ask about ${puppy.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
}

