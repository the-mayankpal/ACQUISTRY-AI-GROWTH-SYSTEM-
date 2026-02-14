
import React, { useState, useEffect, useRef } from 'react';
import { FEATURE_TABS } from '../constants';

export const FeatureTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(FEATURE_TABS[0].id);
  const [contentOpacity, setContentOpacity] = useState(1);
  const [displayTab, setDisplayTab] = useState(activeTab);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab !== displayTab) {
      setContentOpacity(0);
      const timer = setTimeout(() => {
        setDisplayTab(activeTab);
        setContentOpacity(1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [activeTab, displayTab]);

  // Center the active tab in scroll on mobile
  const handleTabClick = (id: string, e: React.MouseEvent) => {
    setActiveTab(id);
    const target = e.currentTarget as HTMLElement;
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const scrollLeft = target.offsetLeft - (scrollContainer.offsetWidth / 2) + (target.offsetWidth / 2);
      scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    }
  };

  const renderDashboardMockup = (id: string) => {
    const imageMap: Record<string, string> = {
      'employees': 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1771057298/ai_employou_dashbarod_nkrfxr.png',
      'email': 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1771056424/cold_email_uwnk2r.png',
      'sdr': 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1771056425/ai_sdk_wpnp7e.png',
      'proposal': 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1771056422/ai_propsal_maker_mbyeta.png',
      'analyzer': 'https://res.cloudinary.com/dkxe8h4cs/image/upload/v1771056422/ai_sales_b0ob4i.png',
    };

    const imageUrl = imageMap[id];

    return (
      <div className="relative w-full aspect-[1600/1280] overflow-hidden rounded-xl md:rounded-[2.5rem]">
        <div className={`w-full h-full transition-opacity duration-300 ease-in-out`} style={{ opacity: contentOpacity }}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={`${id} Dashboard`}
              className="w-full h-full object-contain md:object-cover"
              loading="lazy"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-20 py-4 md:py-12 overflow-hidden">
      {/* Tab Navigation with Fade Masks for Mobile */}
      <div className="relative mb-6 md:mb-12 border-b border-gray-100 group">
        {/* Mobile Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#f5f7f8] to-transparent z-10 pointer-events-none md:hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#f5f7f8] to-transparent z-10 pointer-events-none md:hidden"></div>
        
        <div 
          ref={scrollRef}
          className="flex md:justify-center overflow-x-auto no-scrollbar scroll-smooth px-6 md:px-0"
        >
          <div className="flex flex-nowrap gap-6 md:gap-12">
            {FEATURE_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={(e) => handleTabClick(tab.id, e)}
                  className={`relative flex items-center gap-2 pb-4 md:pb-5 transition-all whitespace-nowrap group shrink-0`}
                >
                  <span className={`material-symbols-outlined text-[1.2rem] md:text-[1.5rem] transition-colors duration-200 ${
                    isActive ? 'text-[#0066ff]' : 'text-gray-400 group-hover:text-gray-600'
                  }`}>
                    {tab.icon}
                  </span>
                  <span className={`text-[0.9rem] md:text-[1.05rem] font-bold tracking-tight transition-colors duration-200 ${
                    isActive ? 'text-[#0066ff]' : 'text-gray-400 group-hover:text-gray-600'
                  }`}>
                    {tab.label}
                  </span>
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-[#0066ff] transition-all duration-300 ease-out ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}></div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Dashboard container - Minimal and Clean */}
      <div className="relative px-4 sm:px-0">
        <div className="w-full relative z-10 animate-in">
          {renderDashboardMockup(displayTab)}
        </div>
        
        {/* Subtle background effects that don't crowd the content */}
        <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none md:w-60 md:h-60"></div>
        <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none md:w-60 md:h-60"></div>
      </div>
    </section>
  );
};
