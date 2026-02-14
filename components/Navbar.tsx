
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      sticky top-0 z-[60] w-full transition-all duration-300
      ${scrolled ? 'pt-0' : 'pt-2 md:pt-4'}
    `}>
      <div className="max-w-7xl mx-auto px-3 md:px-6">
        <header className={`
          relative transition-all duration-500 ease-in-out
          bg-white/95 backdrop-blur-md
          border border-gray-100
          ${isMenuOpen ? 'rounded-t-2xl' : 'rounded-2xl md:rounded-full'}
          ${scrolled ? 'shadow-lg py-2 md:py-2.5' : 'shadow-sm py-2.5 md:py-4'}
          px-3 md:px-10
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-1.5 cursor-pointer z-50 shrink-0">
              <div className="text-[#0066ff] w-7 h-7 md:w-9 md:h-9">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <h1 className="text-[#101418] text-lg md:text-2xl font-black tracking-tight">Acquisity</h1>
            </div>
            
            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  className="text-[15px] font-semibold text-gray-500 hover:text-[#0066ff] transition-colors" 
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4 shrink-0">
              <button className="hidden sm:block text-[14px] md:text-[15px] font-bold text-gray-700 hover:text-gray-900 px-2 md:px-4">
                Log In
              </button>
              <button className="bg-[#0066ff] text-white text-[11px] md:text-[15px] font-bold px-3 md:px-6 py-1.5 md:py-2.5 rounded-lg md:rounded-full hover:bg-[#0052cc] transition-all shadow-md shadow-blue-500/10 whitespace-nowrap">
                Try for free
              </button>
              
              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-1 text-[#101418] flex items-center justify-center shrink-0"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-x border-b border-gray-100 rounded-b-2xl ${
            isMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a key={item.label} href={item.href} className="text-lg font-bold text-[#101418] hover:text-[#0066ff] transition-colors">{item.label}</a>
              ))}
            </nav>
            <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
              <button className="w-full py-3.5 text-base font-bold text-[#101418] bg-gray-50 rounded-xl">Log In</button>
              <button className="w-full py-3.5 text-base font-bold text-white bg-[#0066ff] rounded-xl shadow-lg">Try for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
