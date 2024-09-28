import React from 'react';
import { ReactTyped as Typed } from 'react-typed'; // Use ReactTyped with alias

function TypingEffect() {
    return (
        <div className="typing-effect text-3xl text-center text-green-700">
            <Typed 
                strings={[
                    'JavaScript',
                    'React.js',
                    'Node.js',
                    'Python',
                    'Java',
                    'C++',
                    'HTML & CSS',
                    'SQL',
                ]}
                typeSpeed={100} // Speed of typing
                backSpeed={50} // Speed of deleting
                loop // Loop indefinitely
            />
        </div>
    );
}

export default TypingEffect;
