import React, { useState } from 'react';
import { 
  ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, 
  ShieldCheck, Heart, MapPin, Check, Send, Sparkles, Share2
} from 'lucide-react';
import { puppiesData } from '../data/puppies';
import PuppyCard from '../components/PuppyCard';

export default function PuppyDetailPage({ puppySlug, navigate, onSelectPuppy, onInquire }) {
  const puppy = puppiesData.find(p => p.slug === puppySlug) || puppiesData[0];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Form state
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formArea, setFormArea] = useState('');
  const [formMessage, setFormMessage] = useState(`Hi! I'd love to know more about ${puppy.name} (${puppy.breed}).`);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Prev & Next Puppy
  const currentIndex = puppiesData.findIndex(p => p.slug === puppySlug);
  const prevPuppy = currentIndex > 0 ? puppiesData[currentIndex - 1] : puppiesData[puppiesData.length - 1];
  const nextPuppy = currentIndex < puppiesData.length - 1 ? puppiesData[currentIndex + 1] : puppiesData[0];

  // Related puppies
  const relatedPuppies = puppiesData
    .filter(p => p.slug !== puppy.slug && (p.breed === puppy.breed || p.status === 'available'))
    .slice(0, 4);

  const images = puppy.images && puppy.images.length > 0
    ? puppy.images
    : ["https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `Hi TeddyPups!\n\nI'm inquiring about ${puppy.name} (${puppy.breed})\nName: ${formName}\nPhone: ${formPhone}\nEmail: ${formEmail}\nArea: ${formArea || 'Dubai'}\nMessage: ${formMessage}`;
    const waUrl = `https://wa.me/971541676733?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      {/* Breadcrumb & Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate('/puppies')}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#6b5c4f] hover:text-[#2c221a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Available puppies</span>
          <span className="text-[#a5734c]">/</span>
          <span className="text-[#2c221a] font-bold">{puppy.name}</span>
        </button>

        <span className="font-hand text-xs sm:text-sm text-[#a5734c]">
          {puppy.origin}
        </span>
      </div>

      {/* Hero Showcase (Section 1: hello, it's me) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Gallery Slider */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-4/5 sm:aspect-square w-full rounded-3xl overflow-hidden bg-[#f7efe4] border border-[#ede3d5] shadow-lift group">
            <img
              src={images[activeImageIndex]}
              alt={`${puppy.name} photo ${activeImageIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-300"
            />

            {/* Slider arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#2c221a] backdrop-blur-md flex items-center justify-center shadow-md transition-all active:scale-95"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#2c221a] backdrop-blur-md flex items-center justify-center shadow-md transition-all active:scale-95"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Photo Counter */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 text-white text-xs backdrop-blur-md font-mono">
              {activeImageIndex + 1} / {images.length}
            </div>

            {/* Status tag */}
            <div className="absolute top-4 left-4">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#2c221a]/85 text-white backdrop-blur-md shadow-sm">
                {puppy.status === 'available' ? '● Available' : '♥ Gone home'}
              </span>
            </div>
          </div>

          {/* Thumbnail row */}
          {images.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#2c221a] scale-95 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Puppy Info Card */}
        <div className="lg:col-span-5 space-y-6 bg-[#faf5ee] rounded-3xl p-6 sm:p-8 border border-[#eee2d2]">
          
          <div>
            <span className="font-hand text-sm text-[#a5734c]">hello, it's me</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#231a14] mt-1">
              {puppy.name}
            </h1>
            <p className="text-sm font-medium text-[#7a6a5d] mt-1">
              {puppy.displayName || `${puppy.name}, ${puppy.breed} puppy`}
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 gap-3 py-4 border-y border-[#e8ded0]">
            <div className="bg-[#fffdf8] rounded-xl p-3 border border-[#ede3d5]">
              <span className="text-[11px] uppercase tracking-wider text-[#8a796b] font-semibold block">Breed</span>
              <span className="font-serif text-base font-bold text-[#2c221a]">{puppy.breed}</span>
            </div>

            <div className="bg-[#fffdf8] rounded-xl p-3 border border-[#ede3d5]">
              <span className="text-[11px] uppercase tracking-wider text-[#8a796b] font-semibold block">Gender</span>
              <span className="font-serif text-base font-bold text-[#2c221a]">{puppy.gender}</span>
            </div>

            <div className="bg-[#fffdf8] rounded-xl p-3 border border-[#ede3d5]">
              <span className="text-[11px] uppercase tracking-wider text-[#8a796b] font-semibold block">Age</span>
              <span className="font-serif text-base font-bold text-[#2c221a]">{puppy.age}</span>
            </div>

            <div className="bg-[#fffdf8] rounded-xl p-3 border border-[#ede3d5]">
              <span className="text-[11px] uppercase tracking-wider text-[#8a796b] font-semibold block">Where</span>
              <span className="font-serif text-sm font-bold text-[#2c221a] leading-tight block">{puppy.origin}</span>
            </div>
          </div>

          <p className="text-sm text-[#5d4f43] leading-relaxed">
            {puppy.description}
          </p>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <a
              href={`https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'd%20love%20to%20ask%20about%20${encodeURIComponent(puppy.name)}%20(${encodeURIComponent(puppy.breed)}).%20Please%20share%20health%20records%20and%20videos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full text-sm font-bold shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Ask about {puppy.name} on WhatsApp</span>
            </a>

            <button
              onClick={scrollToForm}
              className="w-full py-3 px-6 rounded-full bg-[#2c221a] hover:bg-[#433528] text-white text-sm font-semibold transition-all active:scale-98"
            >
              Send an enquiry
            </button>
          </div>

          <div className="text-center pt-2">
            <span className="text-xs text-[#8c7b6d] flex items-center justify-center space-x-1">
              <span>🇦🇪 Available for viewings & safe worldwide cargo delivery</span>
            </span>
          </div>

        </div>
      </section>

      {/* Section 2: What comes with [Name] */}
      <section className="bg-[#fffdf8] rounded-3xl p-8 sm:p-12 border border-[#eee2d2] shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="font-hand text-sm text-[#a5734c]">comprehensive medical & care package</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a] mt-1">
            What comes with {puppy.name}
          </h2>
          <p className="text-sm text-[#665749] mt-2">
            Every Teddy Pup comes with our gold-standard health verification.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#faf5ee] rounded-2xl p-6 border border-[#ece1d3] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2c221a]">Vaccinated</h3>
            <p className="text-xs text-[#6e5f53]">Up to date on all puppy core vaccinations & deworming cycle.</p>
          </div>

          <div className="bg-[#faf5ee] rounded-2xl p-6 border border-[#ece1d3] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2c221a]">Dewormed</h3>
            <p className="text-xs text-[#6e5f53]">Multi-stage preventative deworming administered by licensed vets.</p>
          </div>

          <div className="bg-[#faf5ee] rounded-2xl p-6 border border-[#ece1d3] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2c221a]">Health Certificate</h3>
            <p className="text-xs text-[#6e5f53]">Verified official health book and government-authorized vet signoff.</p>
          </div>

          <div className="bg-[#faf5ee] rounded-2xl p-6 border border-[#ece1d3] text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto mb-3">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2c221a]">Thoroughly Checked</h3>
            <p className="text-xs text-[#6e5f53]">Ears, eyes, heart, joints, bite, and coat inspected before joining your home.</p>
          </div>
        </div>
      </section>

      {/* Section 3: The Way Home (Steps) */}
      <section className="bg-[#faf6ef] rounded-3xl p-8 sm:p-12 border border-[#eee2d2]">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <span className="font-hand text-sm text-[#a5734c]">the way home</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a] mt-1">
              Coming home with {puppy.name}
            </h2>
            <p className="text-sm text-[#665749] mt-2">
              Our 4-step seamless adoption concierge.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#ede3d5] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                1
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#2c221a]">Reserve your puppy</h3>
                <p className="text-xs sm:text-sm text-[#665749] mt-0.5">Tell us which puppy has captured your heart and secure your reservation.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#ede3d5] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                2
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#2c221a]">Personalized consultation</h3>
                <p className="text-xs sm:text-sm text-[#665749] mt-0.5">We finalize details with you, review medical documents, and share daily video updates.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#ede3d5] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                3
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#2c221a]">Import & arrival or Showroom Meet</h3>
                <p className="text-xs sm:text-sm text-[#665749] mt-0.5">We manage travel arrangements, flight nanny, and Dubai municipality clearance.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-4 sm:p-5 rounded-2xl border border-[#ede3d5] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#2c221a] text-white flex items-center justify-center font-bold text-xs shrink-0">
                4
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-[#2c221a]">Welcome home</h3>
                <p className="text-xs sm:text-sm text-[#665749] mt-0.5">We help your new puppy settle in and ensure a smooth transition with 24/7 care support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Enquiry Form (dear TeddyPups...) */}
      <section id="enquiry-section" className="max-w-2xl mx-auto bg-[#fffdf8] rounded-3xl p-6 sm:p-10 border border-[#ede2d2] shadow-sm">
        <div className="text-center mb-6">
          <span className="font-hand text-sm text-[#a5734c]">dear TeddyPups…</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c221a] mt-1">
            Ask about {puppy.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#665749] mt-1">
            Leave your details and our team will get back to you promptly — or message us on WhatsApp for the quickest reply.
          </p>
        </div>

        {formSubmitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#2c221a]">
              Thank you, {formName}!
            </h3>
            <p className="text-sm text-[#665749]">
              Your inquiry has been received. Opening WhatsApp to connect directly with your dedicated puppy consultant.
            </p>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                Your name *
              </label>
              <input
                type="text"
                required
                placeholder="Sarah Smith"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                Phone or WhatsApp *
              </label>
              <input
                type="tel"
                required
                placeholder="With country code, e.g. +971 50 123 4567"
                value={formPhone}
                onChange={(e) => setFormPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  placeholder="sarah@example.com"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                  Your area (optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dubai Marina"
                  value={formArea}
                  onChange={(e) => setFormArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                Message (optional)
              </label>
              <textarea
                rows="3"
                value={formMessage}
                onChange={(e) => setFormMessage(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#2c221a] hover:bg-[#433528] text-white text-sm font-bold shadow-md transition-all active:scale-98"
            >
              Send enquiry
            </button>
          </form>
        )}
      </section>

      {/* Prev / Next Puppy Navigation */}
      <div className="flex items-center justify-between border-t border-[#ede2d2] pt-8">
        <button
          onClick={() => onSelectPuppy(prevPuppy)}
          className="text-left group"
        >
          <span className="text-xs text-[#8c7b6d] block font-medium group-hover:text-[#2c221a]">
            ← Previous pup
          </span>
          <span className="font-serif font-bold text-base sm:text-lg text-[#2c221a] group-hover:underline">
            {prevPuppy.name}
          </span>
        </button>

        <button
          onClick={() => onSelectPuppy(nextPuppy)}
          className="text-right group"
        >
          <span className="text-xs text-[#8c7b6d] block font-medium group-hover:text-[#2c221a]">
            Next pup →
          </span>
          <span className="font-serif font-bold text-base sm:text-lg text-[#2c221a] group-hover:underline">
            {nextPuppy.name}
          </span>
        </button>
      </div>

      {/* Related puppies */}
      {relatedPuppies.length > 0 && (
        <section className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
              You may also love
            </h3>
            <button
              onClick={() => navigate('/puppies')}
              className="text-xs sm:text-sm font-semibold text-[#a5734c] hover:underline"
            >
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPuppies.map((p) => (
              <PuppyCard
                key={p.id}
                puppy={p}
                onSelect={onSelectPuppy}
                onInquire={onInquire}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

