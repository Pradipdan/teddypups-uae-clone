import React, { useState } from 'react';
import { Heart, Star, MessageCircle, X, Sparkles, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function HappyFamiliesPage({ navigate }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-hand text-sm text-[#a5734c]">warm hearts & wagging tails</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#231a14] tracking-tight">
          Happy families & puppies
        </h1>
        <p className="text-sm sm:text-base text-[#615143] leading-relaxed max-w-xl mx-auto">
          We are truly honored to see our puppies become cherished members of loving families. These heartwarming moments have been shared by our valued clients who welcomed a Teddy Pup into their homes and hearts.
        </p>
      </div>

      {/* Testimonials Quote Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-[#faf5ee] rounded-3xl p-6 border border-[#ece1d3] shadow-card hover:shadow-lift transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-1 text-[#f59e0b]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-sm text-[#4a3f35] leading-relaxed italic">
                "{t.quote}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#ede2d2] flex items-center space-x-3">
              <div 
                className="w-12 h-12 rounded-full overflow-hidden bg-[#e8dece] shrink-0 border border-[#dfd0be] cursor-pointer"
                onClick={() => setSelectedPhoto(t)}
              >
                <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-[#2c221a]">{t.author}</h4>
                <p className="text-xs text-[#7d6c5f]">{t.location}</p>
                <span className="text-[10px] text-[#a5734c] font-hand">{t.puppy}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Gallery Grid */}
      <section className="space-y-6 pt-8">
        <div className="text-center">
          <span className="font-hand text-sm text-[#a5734c]">captured moments</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a]">
            Customer Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#736356] mt-1">
            Tap any picture to zoom and read the moment's story!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              onClick={() => setSelectedPhoto(t)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#f4ece1] border border-[#ede3d5] shadow-xs cursor-pointer"
            >
              <img
                src={t.image}
                alt={t.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-white text-xs font-medium drop-shadow-sm">{t.caption}</span>
                <span className="text-[10px] text-[#ffd6b0] drop-shadow-sm">{t.author} · {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="relative bg-[#fffdf8] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#ede3d5]">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-square w-full bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-lg text-[#2c221a]">
                  {selectedPhoto.author}
                </span>
                <span className="text-xs text-[#a5734c] font-hand font-medium">
                  {selectedPhoto.puppy}
                </span>
              </div>
              <p className="text-xs text-[#736356]">{selectedPhoto.location}</p>
              <p className="text-sm text-[#4a3f35] italic pt-1">
                "{selectedPhoto.quote}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Box */}
      <div className="bg-[#2c221a] text-[#fffdf8] rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4">
        <Heart className="w-8 h-8 text-[#e87070] fill-current mx-auto" />
        <h3 className="font-serif text-2xl sm:text-3xl font-bold">
          Ready to join the TeddyPups family?
        </h3>
        <p className="text-xs sm:text-sm text-[#cfc1b4] max-w-md mx-auto leading-relaxed">
          Start your adoption journey today. Speak with our puppy concierge to meet available puppies in Dubai.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('/puppies')}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-[#2c221a] text-xs sm:text-sm font-bold shadow-sm hover:bg-[#f4ece1]"
          >
            Browse Available Puppies
          </button>
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20learn%20more%20about%20adopting%20a%20puppy."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-sm"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>

    </div>
  );
}
