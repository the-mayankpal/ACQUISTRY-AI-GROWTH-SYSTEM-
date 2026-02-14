
import React from 'react';

export const BuiltForTeams: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-black mb-4 text-[#101418]">Built For Real B2B Teams</h2>
        <p className="text-gray-600">Enterprise-grade security and transparency for high-growth organizations.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
          <span className="material-symbols-outlined text-[#0066ff] text-4xl mb-6">integration_instructions</span>
          <h3 className="text-xl font-bold mb-3 text-[#101418]">Stack Integration</h3>
          <p className="text-gray-500">Sync seamlessly with Salesforce, Hubspot, and Slack.</p>
        </div>
        <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
          <span className="material-symbols-outlined text-[#0066ff] text-4xl mb-6">security</span>
          <h3 className="text-xl font-bold mb-3 text-[#101418]">Enterprise Security</h3>
          <p className="text-gray-500">SOC2 Type II compliant with end-to-end data encryption.</p>
        </div>
        <div className="bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all text-center">
          <span className="material-symbols-outlined text-[#0066ff] text-4xl mb-6">visibility</span>
          <h3 className="text-xl font-bold mb-3 text-[#101418]">Full Visibility</h3>
          <p className="text-gray-500">Total control over every message and AI decision made.</p>
        </div>
      </div>
    </section>
  );
};
