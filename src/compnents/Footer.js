import React from 'react';

function Footer() {
    return (
        <footer className="py-6 text-center bg-gray-800 mt-auto">
            <p>&copy; 2024 Shubhvrat. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
                <a href="https://github.com/Shubhvrat" className="hover:text-indigo-400">GitHub</a>
                <a href="https://www.linkedin.com/in/shubhvratkulkarni/" className="hover:text-indigo-400">LinkedIn</a>
                
            </div>
        </footer>
    );
}

export default Footer;
