
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
    // Added Cloudinary optimization flags: f_auto (auto format like WebP/Avif), q_auto (optimized compression)
    const base = 'https://res.cloudinary.com/dkxe8h4cs/image/upload/f_auto,q_auto';
    const imageMap: Record<string, string> = {
      'employees': `${base}/v1771057298/ai_employou_dashbarod_nkrfxr.png`,
      'email': `${base}/v1771056424/cold_email_uwnk2r.png`,
      'sdr': `${base}/v1771056425/ai_sdk_wpnp7e.png`,
      'proposal': `${base}/v1771056422/ai_propsal_maker_mbyeta.png`,
      'analyzer': `${base}/v1771056422/ai_sales_b0ob4i.png`,
    };

    const imageUrl = imageMap[id];

    return (
      <div className="relative w-full aspect-[16/10] bg-gray-200/40 overflow-hidden rounded-xl md:rounded-[2.5rem]">
        <div className={`w-full h-full transition-opacity duration-300 ease-in-out`} style={{ opacity: contentOpacity }}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={`${id} interface showing B2B growth tools`}
              className="w-full h-full object-contain md:object-cover"
              loading="lazy"
              decoding="async"
              width="1600"
              height="1000"
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-20 py-4 md:py-12 overflow-hidden">
      <nav className="relative mb-6 md:mb-12 border-b border-gray-200" aria-label="Feature selection">
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
                  aria-pressed={isActive}
                  className={`relative flex items-center gap-2 pb-4 md:pb-5 transition-all whitespace-nowrap group shrink-0`}
                >
                  <span className={`material-symbols-outlined text-[1.2rem] md:text-[1.5rem] transition-colors duration-200 ${
                    isActive ? 'text-[#0066ff]' : 'text-gray-500 group-hover:text-gray-700'
                  }`} aria-hidden="true">
                    {tab.icon}
                  </span>
                  <span className={`text-[0.9rem] md:text-[1.05rem] font-bold tracking-tight transition-colors duration-200 ${
                    isActive ? 'text-[#0066ff]' : 'text-gray-500 group-hover:text-gray-700'
                  }`}>
                    {tab.label}
                  </span>
                  <div className={`absolute bottom-0 left-0 h-[3px] bg-[#0066ff] transition-all duration-300 ease-out ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}></div>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      
      <div className="relative px-4 sm:px-0">
        <div className="w-full relative z-10 animate-in">
          {renderDashboardMockup(displayTab)}
        </div>
      </div>
    </section>
  );
};
