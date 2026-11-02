import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { faqsData } from '../data/faqs';

export default function FaqPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState(1); // open first by default

  const categories = ['All', 'Health & Care', 'Showroom', 'Adoption', 'Import Process', 'Delivery', 'Support'];

  const filteredFaqs = faqsData.filter((f) => {
    const matchesSearch = 
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCategory === 'All' || f.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="font-hand text-sm text-[#a5734c]">clarity & peace of mind</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#231a14] tracking-tight">
          Questions & answers
        </h1>
        <p className="text-sm sm:text-base text-[#615143] leading-relaxed">
          Can't find what you're looking for? Message us on WhatsApp — our concierge team is available 24/7.
        </p>
      </div>

      {/* Sniff out a question search input */}
      <div className="bg-[#faf5ee] rounded-3xl p-4 sm:p-6 border border-[#ece1d3] shadow-xs space-y-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7a6c]" />
          <input
            type="text"
            placeholder="sniff out a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#fffdf8] border border-[#e2d5c3] text-sm text-[#2c221a] placeholder:text-[#9c897a] focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-[#2c221a] text-white shadow-xs'
                  : 'bg-[#fffdf8] text-[#55473a] border border-[#e2d5c3] hover:bg-[#f2e7d7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#fffdf8] rounded-2xl border border-[#ece0d1] overflow-hidden shadow-xs hover:border-[#dfcebb] transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#2c221a] hover:text-[#9e5d2d] transition-colors"
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full bg-[#f6eee3] text-[#a5734c] flex items-center justify-center text-xs shrink-0 font-sans font-bold">
                      ?
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#a5734c] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#a5734c] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#5d4f43] leading-relaxed border-t border-[#f7efe4] bg-[#fdfbf7]/50">
                    <div className="mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#a5734c] bg-[#faf3ea] px-2 py-0.5 rounded-md">
                        {faq.category}
                      </span>
                    </div>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 bg-[#faf5ee] rounded-2xl border border-[#ede3d5] p-6 space-y-2">
            <HelpCircle className="w-8 h-8 text-[#a5734c] mx-auto" />
            <h4 className="font-serif font-bold text-lg text-[#2c221a]">
              No questions found
            </h4>
            <p className="text-xs text-[#705f52]">
              Try searching with different keywords or ask our concierge directly on WhatsApp.
            </p>
          </div>
        )}
      </div>

      {/* Ask your own question banner */}
      <div className="bg-[#2c221a] text-[#fffdf8] rounded-3xl p-8 text-center space-y-4 shadow-lg">
        <span className="font-hand text-sm text-[#e8a36e]">we're always here for you</span>
        <h3 className="font-serif text-2xl font-bold">
          Ask your own question
        </h3>
        <p className="text-xs sm:text-sm text-[#cfc1b4] max-w-md mx-auto leading-relaxed">
          Have a question about a specific puppy, flight timeline, or grooming routine? Send us a quick note.
        </p>
        <div className="pt-2">
          <a
            href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I%20have%20a%20question%20about%20your%20puppies."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Ask on WhatsApp (+971 54 167 6733)</span>
          </a>
        </div>
      </div>

    </div>
  );
}

