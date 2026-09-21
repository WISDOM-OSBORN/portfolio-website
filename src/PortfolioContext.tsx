import { createContext, useContext, ReactNode } from 'react';
import { personalInfo, projects, PersonalInfo, Project } from './data';

interface PortfolioContextType {
  personalInfo: PersonalInfo;
  projects: Project[];
}

const PortfolioContext = createContext<PortfolioContextType>({ personalInfo, projects });

export function PortfolioProvider({ children }: { children: ReactNode }) {
  return (
    <PortfolioContext.Provider value={{ personalInfo, projects }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
