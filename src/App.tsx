/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Approach from './components/Approach';
import Contact from './components/Contact';
import { PortfolioProvider } from './PortfolioContext';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Approach />
          <Contact />
        </main>
      </div>
    </PortfolioProvider>
  );
}
