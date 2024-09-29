import React from 'react';

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-gray-800 shadow-lg w-full">
            <div className="text-2xl font-bold">Shubhvrat</div>
            <ul className="flex space-x-6">
                <li className="hover:text-indigo-400"><a href="#home">Home</a></li>
                <li className="hover:text-indigo-400"><a href="#projects">Projects</a></li>
                <li className="hover:text-indigo-400"><a href="https://www.linkedin.com/in/shubhvratkulkarni/">LinkedIn</a></li>
                <li className="hover:text-indigo-400"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
