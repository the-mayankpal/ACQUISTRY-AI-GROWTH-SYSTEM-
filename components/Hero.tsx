
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

export const Hero: React.FC = () => {
  const [insight, setInsight] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fallbacks = [
    "Focus on niche-specific pain points to increase cold email response rates by 40%.",
    "Automate lead scoring to ensure your sales team only spends time on high-intent prospects.",
    "Hyper-personalization at scale is the only way to beat the noise in 2024.",
    "Use AI to analyze sales call transcripts and identify common objections before they happen."
  ];

  const getAIInsight = async () => {
    setIsLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: 'Give me one short, punchy B2B growth hack or tip for 2024. Maximum 15 words.',
      });
      
      const text = response.text;
      if (text) {
        setInsight(text);
      } else {
        throw new Error("Empty response");
      }
    } catch (error) {
      setInsight(fallbacks[Math.floor(Math.random() * fallbacks.length)]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 lg:py-24 text-center">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
        {/* Fixed height container to prevent layout shift */}
        <div className="flex justify-center mb-8 hero-insight-container">
          <div className="inline-flex flex-col items-center bg-white/40 backdrop-blur-md border border-white/60 p-1.5 rounded-2xl shadow-sm max-w-sm transition-all overflow-hidden h-full">
            {insight ? (
              <div className="px-4 py-2 animate-in text-sm font-medium text-gray-800 leading-snug flex items-center gap-2">
                <span className="text-[#0066ff] font-bold">AI Tip:</span> 
                <span>{insight}</span>
                <button 
                  onClick={getAIInsight} 
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors flex items-center justify-center"
                  disabled={isLoading}
                  aria-label="Refresh tip"
                >
                  <span className={`material-symbols-outlined text-[14px] ${isLoading ? 'animate-spin' : ''}`}>refresh</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={getAIInsight}
                disabled={isLoading}
                className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#0066ff] hover:bg-white/50 rounded-xl transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                {isLoading ? 'Thinking...' : 'Get AI Growth Insight'}
              </button>
            )}
          </div>
        </div>

        <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight text-[#101418] max-w-3xl mx-auto">
          Your AI Growth System That Gets You <br className="hidden md:block" />
          <span className="text-[#0066ff]">B2B Clients</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
          Find profitable niches, automate cold outreach, <br className="hidden md:block" />
          analyze sales calls, and create growth <br className="hidden md:block" />
          strategies – all powered by AI.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 pt-4">
          <button className="w-full sm:w-auto bg-[#0066ff] text-white font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-xl text-base md:text-lg hover:shadow-xl transition-all">
            Watch a demo
          </button>
          <button className="w-full sm:w-auto bg-white border border-gray-200 shadow-sm font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-xl text-base md:text-lg hover:bg-gray-50 transition-all text-[#101418]">
            Book a call
          </button>
        </div>
      </div>
    </section>
  );
};
