import React, { ErrorInfo, ReactNode, Component } from 'react';
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
// Fix: Explicitly use Component generic types and class properties to ensure 'state' and 'props' are correctly typed and accessible
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  // Fix: Explicitly declare state to resolve 'Property state does not exist' errors on lines 28 and 41
  public state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }
  
  static getDerivedStateFromError(_: Error): ErrorBoundaryState { 
    return { hasError: true }; 
  }
  
  componentDidCatch(error: Error, errorInfo: ErrorInfo) { 
    console.error("App Crash:", error, errorInfo); 
  }

  render(): React.ReactNode {
    // Accessing state from the typed Component base
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
    // Fix: Using the Component generic base ensures this.props is correctly typed and accessible on line 56
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