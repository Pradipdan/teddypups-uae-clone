import React, { useState } from 'react';
import { 
  ShieldCheck, Heart, Sparkles, MessageCircle, ArrowRight, 
  MapPin, Plane, CheckCircle2, Star, ChevronDown, ChevronUp, Play
} from 'lucide-react';
import { puppiesData } from '../data/puppies';
import { testimonials } from '../data/testimonials';
import { faqsData } from '../data/faqs';
import PuppyCard from '../components/PuppyCard';

export default function HomePage({ navigate, onSelectPuppy, onInquire }) {
  const [selectedBreed, setSelectedBreed] = useState('All');
  const [activeFaq, setActiveFaq] = useState(null);
  const [chatBreed, setChatBreed] = useState('Maltipoo');

  const breeds = ['All', 'Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu'];

  const availablePuppies = puppiesData.filter(p => p.status === 'available');
  
  const filteredPuppies = selectedBreed === 'All'
    ? availablePuppies.slice(0, 8)
    : availablePuppies.filter(p => p.breed.toLowerCase().includes(selectedBreed.toLowerCase())).slice(0, 8);

  const heroFeaturedPuppy = availablePuppies[0] || puppiesData[0];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#f4ece1] border border-[#e5d8c6] text-xs font-semibold text-[#4a3f35] shadow-xs mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Licensed by UAE Ministry of Climate Change & Environment</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#231a14] tracking-tight leading-[1.08]">
                Premium teacup <br className="hidden sm:inline" />
                <span className="text-[#a5734c] italic font-normal">puppies in Dubai</span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-xl text-[#5c4e42] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted, certified international breeders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => navigate('/puppies')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#2c221a] hover:bg-[#433528] text-white text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all active:scale-98 flex items-center justify-center space-x-2"
                >
                  <span>Browse Available Puppies</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate('/how-it-works')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#faf5ee] hover:bg-[#f2e6d6] text-[#2c221a] border border-[#e5d8c6] text-sm sm:text-base font-semibold transition-all active:scale-98"
                >
                  How It Works
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-[#f0e6d8] max-w-lg mx-auto lg:mx-0">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a]">100%</div>
                  <div className="text-xs text-[#78695d]">Vet Checked & Vaccinated</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a]">Downtown</div>
                  <div className="text-xs text-[#78695d]">Dubai Showroom</div>
                </div>
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a]">24/7</div>
                  <div className="text-xs text-[#78695d]">Concierge Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                
                {/* Decorative background shapes */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#f4ece1] rounded-full blur-2xl opacity-60"></div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#fdecdb] rounded-full blur-2xl opacity-60"></div>

                {/* Card Container */}
                <div className="relative bg-[#fffdf8] rounded-3xl p-4 sm:p-5 border border-[#ede3d5] shadow-lift">
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-[#f7efe4] mb-4">
                    <img
                      src={heroFeaturedPuppy.images[0]}
                      alt={heroFeaturedPuppy.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2c221a]/85 backdrop-blur-md text-white text-xs font-semibold flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#75d488] animate-pulse"></span>
                      <span>Featured Pup · {heroFeaturedPuppy.name}</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-[#ede4d8] flex items-center justify-between">
                      <div>
                        <div className="font-serif font-bold text-[#2c221a] text-sm sm:text-base">
                          {heroFeaturedPuppy.name} ({heroFeaturedPuppy.breed})
                        </div>
                        <div className="text-xs text-[#736355] flex items-center space-x-2">
                          <span>{heroFeaturedPuppy.gender}</span>
                          <span>•</span>
                          <span>{heroFeaturedPuppy.age}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => onSelectPuppy(heroFeaturedPuppy)}
                        className="px-3.5 py-1.5 rounded-full bg-[#2c221a] text-white text-xs font-medium hover:bg-[#433528]"
                      >
                        Details
                      </button>
                    </div>
                  </div>

                  {/* Little quote note */}
                  <div className="text-center">
                    <p className="font-hand text-sm text-[#9b6c47]">
                      "Every puppy is loved, pampered & ready for your hugs"
                    </p>
                  </div>
                </div>

                {/* Floating pill */}
                <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white border border-[#ede3d5] shadow-md rounded-2xl px-4 py-2.5 flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#e8f8ec] flex items-center justify-center text-[#15803d]">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2c221a]">Official Microchip</div>
                    <div className="text-[10px] text-[#78695d]">UAE Vet Health Passport</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet the pups section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <span className="font-hand text-sm sm:text-base text-[#a5734c]">
              our adorable companions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c221a] mt-1">
              Meet the pups
            </h2>
            <p className="text-sm sm:text-base text-[#6b5c4f] mt-2 max-w-xl">
              Real puppies, real photos, looking for their families right now.
            </p>
          </div>

          <button
            onClick={() => navigate('/puppies')}
            className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#a5734c] hover:text-[#784c2a] transition-colors"
          >
            <span>See all available puppies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Breed Quick Filters */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {breeds.map((breed) => (
            <button
              key={breed}
              onClick={() => setSelectedBreed(breed)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                selectedBreed === breed
                  ? 'bg-[#2c221a] text-white shadow-xs'
                  : 'bg-[#faf5ee] text-[#55473a] hover:bg-[#f0e5d6]'
              }`}
            >
              {breed}
            </button>
          ))}
        </div>

        {/* Puppies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPuppies.map((puppy) => (
            <PuppyCard
              key={puppy.id}
              puppy={puppy}
              onSelect={onSelectPuppy}
              onInquire={onInquire}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/puppies')}
            className="px-8 py-3.5 rounded-full bg-[#f4ece1] hover:bg-[#ebdcc8] text-[#2c221a] text-sm font-bold border border-[#dfd0be] transition-all shadow-xs"
          >
            Meet them all ({availablePuppies.length} available)
          </button>
        </div>
      </section>

      {/* Two ways to meet your puppy */}
      <section className="bg-[#f7f2ea] py-16 sm:py-20 border-y border-[#ede3d5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-hand text-sm text-[#a5734c]">flexible & bespoke</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c221a] mt-1">
              Two ways to meet your puppy
            </h2>
            <p className="text-sm sm:text-base text-[#68594c] mt-2">
              Whether you want to visit our showroom today or reserve an exclusive imported companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Showroom Card */}
            <div className="bg-[#fffdf8] rounded-3xl p-8 border border-[#e8ded0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4ece1] text-[#9e5d2d] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#eef7f0] text-[#1e7c3b]">
                  In our showroom
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a]">
                  Puppies in Dubai
                </h3>
                <p className="text-sm text-[#5f5044] leading-relaxed">
                  See them, love them, take them home. Come meet our locally available puppies in our Downtown Dubai showroom before you decide. Spend time cuddling and bonding in a calm, welcoming environment.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f2e7db]">
                <button
                  onClick={() => {
                    navigate('/puppies');
                  }}
                  className="w-full py-3 rounded-full bg-[#2c221a] hover:bg-[#433528] text-white text-sm font-semibold transition-colors"
                >
                  Meet local puppies
                </button>
              </div>
            </div>

            {/* Imported Card */}
            <div className="bg-[#fffdf8] rounded-3xl p-8 border border-[#e8ded0] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#f4ece1] text-[#9e5d2d] flex items-center justify-center">
                  <Plane className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#fef5e7] text-[#b46b14]">
                  Order upon request
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a]">
                  Imported for you
                </h3>
                <p className="text-sm text-[#5f5044] leading-relaxed">
                  Exclusive Korean teacup puppies, delivered. Order from the world's most reputable certified breeders across Europe and Korea. We handle all veterinary clearances, climate-controlled transport, and door-to-door delivery.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#f2e7db]">
                <button
                  onClick={() => {
                    navigate('/how-it-works');
                  }}
                  className="w-full py-3 rounded-full bg-[#f4ece1] hover:bg-[#ebdecb] text-[#2c221a] text-sm font-semibold border border-[#dfd0be] transition-colors"
                >
                  See imported puppies process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your puppy journey (Concierge steps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-hand text-sm text-[#a5734c]">a joyful experience</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c221a]">
              Your puppy journey
            </h2>
            <p className="text-sm sm:text-base text-[#6b5c4f]">
              A premium, step-by-step concierge experience. We make adoption simple, secure, and purely joyful.
            </p>

            <div className="space-y-6 pt-2">
              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c221a]">
                    Choose your breed
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665749] mt-0.5">
                    Select your preferred breed or tell us what you're looking for. We'll guide you based on availability and your lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c221a]">
                    Get photos & details
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665749] mt-0.5">
                    Our team will share real photos, health details, and all necessary information directly on WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-9 h-9 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2c221a]">
                    Secure & safe delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665749] mt-0.5">
                    Once confirmed, we handle everything professionally and ensure your puppy reaches you safely and stress-free.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20know%20more%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Say hello on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Interactive WhatsApp Chat Simulator Preview */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md bg-[#e5ddd5] rounded-3xl shadow-xl overflow-hidden border border-[#d1c7bc]">
              
              {/* WhatsApp Chat Header */}
              <div className="bg-[#075e54] text-white px-4 py-3 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg overflow-hidden">
                  🐶
                </div>
                <div>
                  <div className="font-bold text-sm leading-tight">TeddyPups U.A.E.</div>
                  <div className="text-[11px] text-[#9ee7cb] flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]"></span>
                    <span>online · Concierge Desk</span>
                  </div>
                </div>
              </div>

              {/* Chat Bubble Canvas */}
              <div className="p-4 space-y-3 bg-[#f0ede6] min-h-[300px] text-xs sm:text-sm">
                
                {/* User msg */}
                <div className="flex justify-end">
                  <div className="bg-[#dcf8c6] text-[#2c221a] p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs">
                    Hi TeddyPups! I'd love to know more about your puppies.
                  </div>
                </div>

                {/* Agent msg */}
                <div className="flex justify-start">
                  <div className="bg-white text-[#2c221a] p-3 rounded-2xl rounded-tl-xs max-w-[85%] shadow-xs space-y-2">
                    <p>
                      Hello friend! ❤️ Select your preferred breed or tell us what you're looking for:
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Maltipoo', 'Pomeranian', 'Poodle', 'Cavapoo', 'Shih Tzu'].map(b => (
                        <button
                          key={b}
                          onClick={() => setChatBreed(b)}
                          className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                            chatBreed === b ? 'bg-[#075e54] text-white' : 'bg-[#f4ece1] text-[#4a3f35]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulated response */}
                <div className="flex justify-start">
                  <div className="bg-white text-[#2c221a] p-3 rounded-2xl rounded-tl-xs max-w-[85%] shadow-xs">
                    Great choice! We have adorable <strong>{chatBreed}</strong> puppies available right now. We are sending real photos and official health certificates directly to your chat! 🐾
                  </div>
                </div>

              </div>

              {/* Input field mock */}
              <div className="bg-[#f0f0f0] p-3 border-t border-[#d8d0c5] flex items-center space-x-2">
                <input
                  type="text"
                  disabled
                  placeholder="Type a message..."
                  className="flex-1 bg-white px-3 py-1.5 rounded-full text-xs text-gray-500 border border-gray-200"
                />
                <a
                  href={`https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20interested%20in%20a%20${encodeURIComponent(chatBreed)}%20puppy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#075e54] text-white"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Why families trust TeddyPups */}
      <section className="bg-[#2c221a] text-[#fffdf8] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-hand text-sm text-[#e8a36e]">puppy passport to peace of mind</span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 text-[#fffdf8]">
              Why families trust TeddyPups
            </h2>
            <p className="text-sm sm:text-base text-[#d8c7b8] mt-2">
              Uncompromising health protocols, ethical sourcing, and personalized concierge care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32]">
              <div className="w-10 h-10 rounded-xl bg-[#4a3b2e] text-[#75d488] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                Vet-checked & healthy
              </h3>
              <p className="text-xs sm:text-sm text-[#cfc1b4] leading-relaxed">
                Every puppy comes vaccinated, dewormed, microchipped, and with a verified government health certificate.
              </p>
            </div>

            <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32]">
              <div className="w-10 h-10 rounded-xl bg-[#4a3b2e] text-[#e8a36e] flex items-center justify-center mb-4">
                <Plane className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                Korea to Dubai, safely
              </h3>
              <p className="text-xs sm:text-sm text-[#cfc1b4] leading-relaxed">
                Hand-selected trusted breeders, pressurized climate cabins, flight nanny care from start to finish.
              </p>
            </div>

            <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32]">
              <div className="w-10 h-10 rounded-xl bg-[#4a3b2e] text-[#60a5fa] flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                Support 24/7
              </h3>
              <p className="text-xs sm:text-sm text-[#cfc1b4] leading-relaxed">
                Always here to help, from answering pre-adoption questions to veterinary diet and training support.
              </p>
            </div>

            <div className="bg-[#382d23] rounded-2xl p-6 border border-[#4d3e32]">
              <div className="w-10 h-10 rounded-xl bg-[#4a3b2e] text-[#f472b6] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-white mb-1.5">
                Trusted by families
              </h3>
              <p className="text-xs sm:text-sm text-[#cfc1b4] leading-relaxed">
                Over 1,000+ healthy puppies happily settled into wonderful homes across the UAE and worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Families preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-hand text-sm text-[#a5734c]">real moments of joy</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c221a] mt-1">
            Happy families & puppies
          </h2>
          <p className="text-sm sm:text-base text-[#6b5c4f] mt-2">
            Heartwarming moments shared by our valued clients who welcomed a Teddy Pup into their hearts.
          </p>
        </div>

        {/* Featured Testimonial Quote */}
        <div className="bg-[#faf5ee] rounded-3xl p-6 sm:p-10 border border-[#eee2d2] mb-10 max-w-4xl mx-auto text-center relative shadow-sm">
          <div className="text-4xl text-[#c0824b] font-serif mb-2">“</div>
          <p className="text-base sm:text-xl text-[#3d3126] font-medium leading-relaxed italic max-w-2xl mx-auto">
            TeddyPups truly made our dream a reality. They supported us at every step of the import journey. Our Maltipoo arrived healthy, cheerful, and absolutely perfect. Having 24/7 support throughout gave us complete peace of mind.
          </p>
          <div className="mt-4">
            <span className="font-serif font-bold text-[#2c221a] text-base">Sarah M.</span>
            <span className="text-xs text-[#7d6b5e] block">Downtown Dubai, UAE</span>
          </div>
        </div>

        {/* Happy Families Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {testimonials.slice(0, 4).map((t) => (
            <div key={t.id} className="group relative aspect-square rounded-2xl overflow-hidden bg-[#f4ece1] shadow-card">
              <img
                src={t.image}
                alt={t.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-3">
                <span className="text-white text-xs font-medium line-clamp-1">{t.caption}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/happy-families')}
            className="px-6 py-2.5 rounded-full bg-[#f4ece1] hover:bg-[#ebdcc8] text-[#2c221a] text-xs sm:text-sm font-semibold border border-[#ded0bf]"
          >
            See every happy family →
          </button>
        </div>
      </section>

      {/* Questions, answered FAQ preview */}
      <section className="bg-[#faf6ef] py-16 sm:py-20 border-t border-[#ede2d2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-hand text-sm text-[#a5734c]">clarity & reassurance</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2c221a] mt-1">
              Questions, answered
            </h2>
            <p className="text-sm text-[#6d5e51] mt-2">
              Everything you need to know about our health guarantees, adoption, and delivery.
            </p>
          </div>

          <div className="space-y-3">
            {faqsData.slice(0, 4).map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#fffdf8] rounded-2xl border border-[#ece0d1] overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2c221a] hover:text-[#9e5d2d] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#a5734c] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#a5734c] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#5d4f43] leading-relaxed border-t border-[#f7efe4]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/faq')}
              className="px-6 py-2.5 rounded-full bg-[#2c221a] hover:bg-[#433528] text-white text-xs sm:text-sm font-semibold shadow-xs"
            >
              Read all questions & answers
            </button>
          </div>
        </div>
      </section>

      {/* Ready to meet your new best friend banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-gradient-to-br from-[#2c221a] to-[#433427] rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-hand text-sm text-[#e8a36e]">welcome home</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Ready to meet your new best friend?
            </h2>
            <p className="text-sm sm:text-base text-[#cfc1b4] leading-relaxed">
              Bring home a healthy, happy teacup or designer puppy with expert guidance every step of the way. We help you find the right match and ensure a smooth, safe delivery across the UAE.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20ready%20to%20adopt%20a%20puppy."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-md transition-all active:scale-98 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all active:scale-98"
              >
                Visit & contact
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

