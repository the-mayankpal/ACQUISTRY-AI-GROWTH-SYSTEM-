
import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
      <h2 className="text-3xl lg:text-4xl font-black text-center mb-16 text-[#101418]">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="bg-[#0066ff]/10 text-[#0066ff] w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl">1</div>
          <h3 className="text-xl font-bold text-[#101418]">Define your customer</h3>
          <p className="text-gray-600 leading-relaxed">Our AI analyzes your product and market to build the perfect ICP and lead lists in seconds.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-[#0066ff]/10 text-[#0066ff] w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl">2</div>
          <h3 className="text-xl font-bold text-[#101418]">Launch outbound</h3>
          <p className="text-gray-600 leading-relaxed">Personalized emails and LinkedIn messages are sent automatically with human-like accuracy.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-[#0066ff]/10 text-[#0066ff] w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl">3</div>
          <h3 className="text-xl font-bold text-[#101418]">Meetings get booked</h3>
          <p className="text-gray-600 leading-relaxed">Watch your calendar fill up with qualified prospects ready to talk business.</p>
        </div>
      </div>
    </section>
  );
};
