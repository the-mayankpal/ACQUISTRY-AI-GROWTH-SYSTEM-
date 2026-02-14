
import React from 'react';

export const DarkSystemSection: React.FC = () => {
  return (
    <section className="bg-[#0f1723] text-white py-16 md:py-24 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 md:mb-8">
              The System Behind Your <span className="text-[#0066ff]">New Growth Machine</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-12">
              Automate every stage of the funnel with proprietary AI models designed specifically for high-ticket B2B sales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 text-left">
              <div className="space-y-2 md:space-y-3">
                <span className="material-symbols-outlined text-[#0066ff] text-3xl">hub</span>
                <h4 className="font-bold">Growth System</h4>
                <p className="text-xs md:text-sm text-gray-400">End-to-end automation of your acquisition funnel.</p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <span className="material-symbols-outlined text-[#0066ff] text-3xl">psychology</span>
                <h4 className="font-bold">Market Research</h4>
                <p className="text-xs md:text-sm text-gray-400">Deeper insights into niche profitability and pain points.</p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <span className="material-symbols-outlined text-[#0066ff] text-3xl">rocket_launch</span>
                <h4 className="font-bold">Outbound & Replies</h4>
                <p className="text-xs md:text-sm text-gray-400">Scale without losing the personal touch in conversations.</p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <span className="material-symbols-outlined text-[#0066ff] text-3xl">query_stats</span>
                <h4 className="font-bold">Calls & Optimization</h4>
                <p className="text-xs md:text-sm text-gray-400">Analyze every meeting to improve your close rate.</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-10 bg-[#0066ff]/10 blur-[120px] rounded-full"></div>
            <div className="relative bg-[#1a2432] p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-3 md:gap-4 bg-white/5 p-4 md:p-5 rounded-xl border border-white/5 group hover:border-[#0066ff]/50 transition-all">
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                  <div className="text-xs md:text-sm font-mono text-gray-300">Searching leads in Fintech sector...</div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-white/5 p-4 md:p-5 rounded-xl border border-white/5 group hover:border-[#0066ff]/50 transition-all">
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-[#0066ff] animate-pulse shadow-[0_0_10px_rgba(0,102,255,0.5)]"></div>
                  <div className="text-xs md:text-sm font-mono text-gray-300">Drafting 142 hyper-personalized emails...</div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 bg-white/10 p-4 md:p-5 rounded-xl border-[#0066ff]/30 border-2 shadow-lg scale-[1.02] transition-transform">
                  <div className="shrink-0 w-2.5 h-2.5 rounded-full bg-[#0066ff] shadow-[0_0_10px_rgba(0,102,255,0.7)]"></div>
                  <div className="text-xs md:text-sm font-mono text-white font-bold">4 New discovery calls booked today.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
