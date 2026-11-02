import React, { useState, useMemo } from 'react';
import { Search, Filter, X, Sparkles, MessageCircle } from 'lucide-react';
import { puppiesData, breedsList, originList, genderList } from '../data/puppies';
import PuppyCard from '../components/PuppyCard';

export default function PuppiesPage({ onSelectPuppy, onInquire, initialFilter = {} }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBreed, setSelectedBreed] = useState(initialFilter.breed || 'All');
  const [selectedGender, setSelectedGender] = useState(initialFilter.gender || 'All');
  const [selectedOrigin, setSelectedOrigin] = useState(initialFilter.origin || 'All');

  // Filter available puppies
  const availablePuppies = useMemo(() => {
    return puppiesData.filter(p => p.status === 'available');
  }, []);

  const filteredPuppies = useMemo(() => {
    return availablePuppies.filter((p) => {
      // Search
      const matchesSearch = 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.displayName.toLowerCase().includes(searchTerm.toLowerCase());

      // Breed filter
      const matchesBreed = selectedBreed === 'All' || p.breed.toLowerCase().includes(selectedBreed.toLowerCase());

      // Gender filter
      const matchesGender = selectedGender === 'All' || p.gender.toLowerCase() === selectedGender.toLowerCase();

      // Origin filter
      const matchesOrigin = selectedOrigin === 'All' || p.origin.toLowerCase().includes(selectedOrigin.toLowerCase());

      return matchesSearch && matchesBreed && matchesGender && matchesOrigin;
    });
  }, [availablePuppies, searchTerm, selectedBreed, selectedGender, selectedOrigin]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedBreed('All');
    setSelectedGender('All');
    setSelectedOrigin('All');
  };

  const hasActiveFilters = searchTerm !== '' || selectedBreed !== 'All' || selectedGender !== 'All' || selectedOrigin !== 'All';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-8">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="font-hand text-sm text-[#a5734c]">real puppies, ready for love</span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#231a14] tracking-tight">
          Available puppies
        </h1>
        <p className="text-sm sm:text-base text-[#615143] leading-relaxed">
          Every puppy is vet-certified, microchipped, vaccinated, and raised with dedicated love. Meet them in our Downtown Dubai showroom or let us import your dream teacup puppy.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-[#faf5ee] rounded-3xl p-4 sm:p-6 border border-[#ece1d3] shadow-xs space-y-4">
        
        {/* Search input */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#8c7a6c]" />
          <input
            type="text"
            placeholder="Search by name, breed, teacup size..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#fffdf8] border border-[#e2d5c3] text-sm text-[#2c221a] placeholder:text-[#9c897a] focus:outline-hidden focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Breed Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none flex-1">
            {breedsList.map((breed) => (
              <button
                key={breed}
                onClick={() => setSelectedBreed(breed)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedBreed === breed
                    ? 'bg-[#2c221a] text-white shadow-xs'
                    : 'bg-[#fffdf8] text-[#55473a] border border-[#e2d5c3] hover:bg-[#f2e7d7]'
                }`}
              >
                {breed}
              </button>
            ))}
          </div>

          {/* Gender Selector */}
          <div className="flex items-center space-x-1 bg-[#fffdf8] p-1 rounded-full border border-[#e2d5c3]">
            {genderList.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  selectedGender === g
                    ? 'bg-[#2c221a] text-white'
                    : 'text-[#615143] hover:text-[#2c221a]'
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          {/* Origin Selector */}
          <div className="flex items-center space-x-1 bg-[#fffdf8] p-1 rounded-full border border-[#e2d5c3]">
            {originList.map((o) => (
              <button
                key={o}
                onClick={() => setSelectedOrigin(o)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedOrigin === o
                    ? 'bg-[#2c221a] text-white'
                    : 'text-[#615143] hover:text-[#2c221a]'
                }`}
              >
                {o === 'Downtown Dubai' ? 'Dubai Showroom' : o === 'Imported for you' ? 'Imported' : 'All Origin'}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-xs font-semibold text-[#a5734c] hover:underline px-2 py-1"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs sm:text-sm font-medium text-[#736254]">
        <span>
          Showing <strong>{filteredPuppies.length}</strong> available {filteredPuppies.length === 1 ? 'puppy' : 'puppies'}
        </span>
        <span className="font-hand text-[#a5734c] hidden sm:inline">
          updated daily from Dubai showroom & Seoul partners
        </span>
      </div>

      {/* Puppies Grid */}
      {filteredPuppies.length > 0 ? (
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
      ) : (
        <div className="text-center py-16 bg-[#faf5ee] rounded-3xl border border-[#ede3d5] p-8 space-y-4">
          <div className="text-4xl">🐾</div>
          <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
            No puppies match your criteria
          </h3>
          <p className="text-sm text-[#665749] max-w-md mx-auto">
            Looking for a specific breed or color? We can source rare teacup breeds directly through our custom import concierge.
          </p>
          <div className="pt-2 flex items-center justify-center space-x-3">
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-full bg-[#f4ece1] text-[#2c221a] text-xs font-bold border border-[#dfd0be]"
            >
              Clear filters
            </button>
            <a
              href="https://wa.me/971541676733?text=Hi%20TeddyPups!%20I'm%20looking%20for%20a%20specific%20breed."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-bold shadow-xs"
            >
              Request a custom breed on WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
