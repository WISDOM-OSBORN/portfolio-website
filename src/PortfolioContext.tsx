import { createContext, useContext, ReactNode } from 'react';
import { usePortfolioData, PersonalInfo, Project } from './usePortfolioData';

interface PortfolioContextType {
  personalInfo: PersonalInfo | null;
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const data = usePortfolioData();

  if (data.loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-foreground">Loading...</div>;
  }

  if (data.error) {
    return <div className="min-h-screen flex items-center justify-center bg-background text-red-500">Error: {data.error}</div>;
  }

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
