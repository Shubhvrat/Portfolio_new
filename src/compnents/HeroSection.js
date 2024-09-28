import React from 'react';
import TypingEffect from './TypingEffect';
function HeroSection() {
    return (
        <section id="home" className="flex flex-col justify-center items-center h-screen text-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }}>
            <div className="flex justify-center mb-6">
                <img
                    src="/Shubhvrat_Superset.jpg" // Replace with your image path or import
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-gray-500 shadow-lg object-cover"
                />
            </div>


            <h1 className="text-5xl  md:text-6xl font-extrabold mb-4">Hello, I'm Shubhvrat</h1>

            <TypingEffect/>
            
            <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-6 pt-6">A passionate software developer love to build websites and Applications.</p>
           

            <a href="#projects" className="bg-indigo-500  text-white px-4 py-2 rounded-full transition duration-300 transform hover:scale-105">View My Work</a>

        </section>
        
    );
}

export default HeroSection;
