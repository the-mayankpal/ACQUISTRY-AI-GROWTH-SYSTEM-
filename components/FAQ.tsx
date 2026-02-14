
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-3xl mx-auto px-6 lg:px-20 py-24 border-t border-gray-200">
      <h2 className="text-3xl font-black text-center mb-16 text-[#101418]">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300">
              <h3>
                <button 
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
                >
                  <span className={`font-bold text-lg ${isOpen ? 'text-[#0066ff]' : 'text-[#101418]'}`}>{item.question}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${isOpen ? 'rotate-45 text-[#0066ff]' : 'text-gray-500'}`} aria-hidden="true">
                    add
                  </span>
                </button>
              </h3>
              <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="p-6 pt-0 text-gray-700 leading-relaxed bg-gray-50 text-lg">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
