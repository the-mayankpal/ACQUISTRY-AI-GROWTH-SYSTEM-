
import React from 'react';
import { BRANDS } from '../constants';

export const TrustedBy: React.FC = () => {
  // Triple the list to ensure the marquee is always filled regardless of screen width
  const marqueeBrands = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-16 text-center border-t border-gray-100 mt-20">
      <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
        Trusted by modern growth teams
      </p>
      
      <div className="relative w-full overflow-hidden marquee-container">
        <div className="flex w-fit items-center gap-16 md:gap-24 animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700">
          {marqueeBrands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="text-2xl md:text-3xl font-black italic text-gray-500 hover:text-gray-900 transition-colors cursor-default select-none tracking-tight"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
