import React, { useState } from 'react';
import { 
  MapPin, Plane, ShieldCheck, Heart, Clock, Truck, 
  CheckCircle2, ArrowRight, MessageCircle, Sparkles 
} from 'lucide-react';

export default function HowItWorksPage({ navigate }) {
  const [activeTab, setActiveTab] = useState('local'); // 'local' or 'imported'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-16 sm:space-y-24">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-hand text-sm text-[#a5734c]">clear, transparent & caring</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#231a14] tracking-tight">
          How it works
        </h1>
        <p className="text-sm sm:text-base text-[#615143] leading-relaxed max-w-xl mx-auto">
          Whether you choose to visit us locally in Downtown Dubai or order a premium breed from overseas, TeddyPups is here to make the experience unforgettable.
        </p>
      </div>

      {/* Two Ways Home Toggle & Steps */}
      <section className="bg-[#faf5ee] rounded-3xl p-6 sm:p-12 border border-[#ece1d3] shadow-card">
        
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="font-hand text-sm text-[#a5734c]">choose your way</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a] mt-1">
            Two ways home
          </h2>
          
          {/* Pathway Selector Tabs */}
          <div className="mt-6 inline-flex p-1.5 rounded-full bg-[#f0e5d6] border border-[#ded1be]">
            <button
              onClick={() => setActiveTab('local')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'local'
                  ? 'bg-[#2c221a] text-white shadow-sm'
                  : 'text-[#5a4c3f] hover:text-[#2c221a]'
              }`}
            >
              In Dubai (Meet in person)
            </button>
            <button
              onClick={() => setActiveTab('imported')}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'imported'
                  ? 'bg-[#2c221a] text-white shadow-sm'
                  : 'text-[#5a4c3f] hover:text-[#2c221a]'
              }`}
            >
              Imported (Order upon request)
            </button>
          </div>
        </div>

        {/* Local Showroom Content */}
        {activeTab === 'local' ? (
          <div className="space-y-10 animate-fade-in">
            <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#e8ded0] max-w-3xl mx-auto text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#eef7f0] text-[#1e7c3b]">
                Downtown Dubai Showroom
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
                Meet your puppy in person
              </h3>
              <p className="text-sm text-[#615245] leading-relaxed">
                Step into our Downtown Dubai showroom and experience the joy of choosing your puppy face-to-face. We source healthy, well-socialized puppies from trusted local breeders, ensuring they're raised with care, proper nutrition, and veterinary checks.
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Explore our puppies</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  Browse our website to view available puppies. Each listing includes high-res photos, breed details, age, and health records.
                </p>
              </div>

              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Choose your puppy</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  Once you find a puppy you love, open their profile to enquire. You can also reach out to our team directly on WhatsApp.
                </p>
              </div>

              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Meet before you choose</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  Spend time cuddling and bonding in our Downtown showroom before making your decision. Bring the whole family!
                </p>
              </div>

              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Pick-up or delivery</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  Take your puppy home same day or have them delivered safely to your door within Dubai in an air-conditioned pet carrier.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Imported Concierge Content */
          <div className="space-y-10 animate-fade-in">
            <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#e8ded0] max-w-3xl mx-auto text-center space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#fef5e7] text-[#b46b14]">
                Europe & Korea ➔ Dubai
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
                Order upon request
              </h3>
              <p className="text-sm text-[#615245] leading-relaxed">
                Looking for a truly exceptional companion? Our Order Upon Request service gives you access to some of the world's most sought-after teacup breeds — ethically sourced from the most reputable certified breeders across Europe, Korea, and beyond.
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#c0824b] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Reserve your puppy</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  Browse our selection or specify your dream breed. Our reservation-only model ensures each puppy is individually sourced.
                </p>
              </div>

              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#c0824b] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Personalized consultation</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  We work closely with you to finalize details, share live video updates, and guide you through parental lineage records.
                </p>
              </div>

              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#c0824b] text-white flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Import and arrival</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  We manage all health checks, passport papers, flight nanny, and Dubai Ministry clearances for a stress-free arrival.
                </p>
              </div>

              <div className="bg-[#fffdf8] rounded-2xl p-6 border border-[#ede3d5] shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#c0824b] text-white flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h4 className="font-serif font-bold text-lg text-[#2c221a]">Welcome home</h4>
                <p className="text-xs text-[#6e5d50] leading-relaxed">
                  Upon arrival, our concierge team provides hands-on orientation, puppy care kit, and 24/7 post-adoption guidance.
                </p>
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Our premium puppy promise */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-hand text-sm text-[#a5734c]">puppy passport guarantee</span>
          <h2 className="font-serif text-3xl font-bold text-[#2c221a] mt-1">
            Our premium puppy promise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fffdf8] rounded-3xl p-8 border border-[#ede3d5] shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#faf5ee] text-[#a5734c] flex items-center justify-center mx-auto mb-2">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#2c221a]">Hand-selected breeders</h3>
            <p className="text-xs sm:text-sm text-[#665749] leading-relaxed">
              We work only with certified breeders who uphold the highest ethical and veterinary welfare standards.
            </p>
          </div>

          <div className="bg-[#fffdf8] rounded-3xl p-8 border border-[#ede3d5] shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#faf5ee] text-[#a5734c] flex items-center justify-center mx-auto mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#2c221a]">Full transparency</h3>
            <p className="text-xs sm:text-sm text-[#665749] leading-relaxed">
              Photos, videos, and government health certificates are shared with you prior to travel or pickup.
            </p>
          </div>

          <div className="bg-[#fffdf8] rounded-3xl p-8 border border-[#ede3d5] shadow-card text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#faf5ee] text-[#a5734c] flex items-center justify-center mx-auto mb-2">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#2c221a]">Safe, stress-free delivery</h3>
            <p className="text-xs sm:text-sm text-[#665749] leading-relaxed">
              We handle every detail of the import and delivery process so your puppy arrives happy, healthy, and ready to love you.
            </p>
          </div>
        </div>
      </section>

      {/* Delivery & Collection Section */}
      <section id="delivery" className="bg-[#2c221a] text-[#fffdf8] rounded-3xl p-8 sm:p-14 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="font-hand text-sm text-[#e8a36e]">from showroom to doorstep</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Delivery & collection
          </h2>
          <p className="text-xs sm:text-sm text-[#d8c7b8]">
            From a same-day visit in Downtown Dubai to a flight from Korea, every puppy travels comfortably and arrives safely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32] space-y-2">
            <h3 className="font-serif font-bold text-base text-white">Same-day pickup</h3>
            <p className="text-xs text-[#cfc1b4] leading-relaxed">
              Local showroom puppies are available immediately — visit, fall in love, and go home together.
            </p>
          </div>

          <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32] space-y-2">
            <h3 className="font-serif font-bold text-base text-white">Delivery in Dubai</h3>
            <p className="text-xs text-[#cfc1b4] leading-relaxed">
              Prefer to stay home? We deliver your puppy to your doorstep within Dubai safely and comfortably.
            </p>
          </div>

          <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32] space-y-2">
            <h3 className="font-serif font-bold text-base text-white">Safe international cargo</h3>
            <p className="text-xs text-[#cfc1b4] leading-relaxed">
              We handle all paperwork and ensure comfortable travel in climate-controlled cabins with flight nannies.
            </p>
          </div>

          <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32] space-y-2">
            <h3 className="font-serif font-bold text-base text-white">Worldwide delivery</h3>
            <p className="text-xs text-[#cfc1b4] leading-relaxed">
              We safely deliver puppies to loving homes all around the world via trusted international airline partners.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20like%20to%20know%20more%20about%20delivery%20options."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#20ba59]"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask us on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
