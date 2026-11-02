import React, { useState } from 'react';
import { X, Check, MessageCircle, Send, Heart } from 'lucide-react';

export default function InquiryModal({ puppy, isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    message: puppy ? `Hi! I'd love to know more about ${puppy.name} (${puppy.breed}).` : "Hi! I'd love to know more about your available puppies."
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp auto-redirect option
    const text = `Hi TeddyPups!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nArea: ${formData.location || 'Dubai'}\n${puppy ? `Interested in: ${puppy.name} (${puppy.breed})\n` : ''}Message: ${formData.message}`;
    const waUrl = `https://wa.me/971541676733?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#fffdf8] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#ece1d3] z-10 overflow-hidden max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6b5b4e] hover:text-[#2c221a] hover:bg-[#f4ece1] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#dcfce7] text-[#15803d] flex items-center justify-center mx-auto shadow-inner">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2c221a]">
              Inquiry Sent with Love!
            </h3>
            <p className="text-sm text-[#665749] max-w-xs mx-auto">
              Thank you, {formData.name || 'friend'}! We are redirecting you to WhatsApp now to connect with our concierge team immediately.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#2c221a] text-white text-sm font-medium hover:bg-[#433528]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="font-hand text-sm text-[#a5734c]">
                {puppy ? `Ask about ${puppy.name}` : "Connect with us"}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#2c221a] mt-0.5">
                {puppy ? `Meet ${puppy.name}` : "Adopt a Teddy Pup"}
              </h3>
              <p className="text-xs text-[#705e4f] mt-1">
                Fill in your details and our team will get back to you promptly, or connect via WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:outline-hidden focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                  Phone or WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+971 50 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:outline-hidden focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="sarah@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:outline-hidden focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                    Your Location / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dubai Marina"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:outline-hidden focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4a3f35] mb-1">
                  Message
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#e0d3c3] bg-white text-sm text-[#2c221a] focus:outline-hidden focus:ring-2 focus:ring-[#c0824b]/40 focus:border-[#c0824b]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 bg-[#2c221a] hover:bg-[#433528] text-white py-3 rounded-full text-sm font-semibold transition-all shadow-sm active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Chat on WhatsApp</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

