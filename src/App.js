import React from 'react';
import Navbar from './compnents/Navbar';
import HeroSection from './compnents/HeroSection';
import Projects from './compnents/Projects';
import Footer from './compnents/Footer';
import GitHub from './compnents/Github';
function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <Projects />
      <GitHub />
      <Footer />
    </div>
  );
}

export default App;
