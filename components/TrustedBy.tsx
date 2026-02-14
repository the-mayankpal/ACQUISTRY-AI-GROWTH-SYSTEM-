
import React from 'react';
import { BRANDS } from '../constants';

export const TrustedBy: React.FC = () => {
  // Only duplicate once for the infinite marquee effect to save on DOM size
  const marqueeBrands = [...BRANDS, ...BRANDS];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12 md:py-16 text-center border-t border-gray-100 mt-12 md:mt-20">
      <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 md:mb-12">
        Trusted by modern growth teams
      </p>
      
      <div className="relative w-full overflow-hidden marquee-container">
        <div className="flex w-fit items-center gap-12 md:gap-24 animate-marquee whitespace-nowrap opacity-40 hover:opacity-100 transition-all duration-700 grayscale">
          {marqueeBrands.map((brand, index) => (
            <div 
              key={`${brand.name}-${index}`} 
              className="text-xl md:text-3xl font-black italic text-gray-500 hover:text-gray-900 transition-colors cursor-default select-none tracking-tight"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
