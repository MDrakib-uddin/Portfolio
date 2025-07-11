import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import MLDemo from './components/sections/MLDemo';
import CompetitiveProgramming from './components/sections/CompetitiveProgramming';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundGrid from './components/layout/BackgroundGrid';

function App() {
  return (
    <ThemeProvider>
      <BackgroundGrid />
      <div className="min-h-screen text-gray-900 dark:text-white relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <MLDemo />
          <CompetitiveProgramming />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;