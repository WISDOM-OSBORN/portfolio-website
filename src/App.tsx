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

export default function App() {
  return (
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
  );
}
