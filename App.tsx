
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureTabs } from './components/FeatureTabs';
import { TrustedBy } from './components/TrustedBy';
import { HowItWorks } from './components/HowItWorks';
import { DarkSystemSection } from './components/DarkSystemSection';
import { BuiltForTeams } from './components/BuiltForTeams';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f8] font-display selection:bg-[#0066ff] selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <FeatureTabs />
        <TrustedBy />
        <HowItWorks />
        <DarkSystemSection />
        <BuiltForTeams />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
