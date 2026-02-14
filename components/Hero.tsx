
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 lg:py-24 text-center">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
        <h2 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-[#101418] max-w-3xl mx-auto">
          Your AI Growth System That Gets You <br className="hidden md:block" />
          <span className="text-[#0066ff]">B2B Clients</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed px-4">
          Find profitable niches, automate cold outreach, <br className="hidden md:block" />
          analyze sales calls, and create growth <br className="hidden md:block" />
          strategies – all powered by AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 pt-4 px-6 sm:px-0">
          <button className="w-full sm:w-auto bg-[#0066ff] text-white font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-xl text-base md:text-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-xl md:text-2xl">play_circle</span>
            Watch a demo
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-100 shadow-sm font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-xl text-base md:text-lg hover:bg-gray-50 transition-all text-[#101418]">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};
