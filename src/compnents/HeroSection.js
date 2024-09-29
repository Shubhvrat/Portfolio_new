import React from 'react';
import TypingEffect from './TypingEffect';

function HeroSection() {
  return (
    <section className="hero-section py-12 sm:py-16 md:py-20 px-4 bg-gray-900 text-white text-center">
      
      <div className="flex justify-center mb-6">
        <img
          src="/Shubhvrat_Superset.jpg" 
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-gray-500 shadow-lg object-cover"
        />
      </div>
      
  
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hello! My name is Shubhvrat</h1>

      <TypingEffect />
   
      <p className="mt-4 text-sm sm:text-base md:text-lg">
        I am a Software Engineer passionate about building amazing applications.
      </p>
    </section>
  );
}

export default HeroSection;
