
import React, { ErrorInfo, ReactNode } from 'react';
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

// Define explicit interfaces for props and state to ensure generic types are correctly inferred
interface ErrorBoundaryProps {
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

// Simple Error Boundary to prevent white screen
// Fix: Use React.Component and class properties to ensure state and props are correctly typed and recognized by TS
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Fix: Use class property for state initialization to resolve property existence issues
  state: ErrorBoundaryState = { hasError: false };
  
  static getDerivedStateFromError(_: Error): ErrorBoundaryState { 
    return { hasError: true }; 
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { 
    console.error("App Crash:", error, errorInfo); 
  }

  render() {
    // Fix: Accessing state and props from the typed React.Component base
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f7f8] p-6 text-center">
          <div>
            <h1 className="text-2xl font-black mb-4">Something went wrong.</h1>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-[#0066ff] text-white px-6 py-2 rounded-xl font-bold"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = () => {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
