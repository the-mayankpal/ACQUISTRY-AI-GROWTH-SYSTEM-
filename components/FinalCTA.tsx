
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="bg-[#0066ff] rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-transparent"></div>
        <div className="absolute -right-12 -top-12 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-12 -bottom-12 w-48 h-48 md:w-64 md:h-64 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight">
            Build Your AI Acquisition System
          </h2>
          <p className="text-blue-100 text-base md:text-lg lg:text-xl px-2">
            Stop hunting. Start closing. Join 500+ B2B companies using Acquisity to scale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 pt-4 px-4 md:px-0">
            <button className="w-full sm:w-auto bg-white text-[#0066ff] font-black px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl hover:shadow-2xl hover:-translate-y-1 transition-all">
              Book a call
            </button>
            <button className="w-full sm:w-auto bg-transparent border-2 border-white/30 font-black px-8 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl text-lg md:text-xl hover:bg-white/10 transition-all">
              Try for free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
