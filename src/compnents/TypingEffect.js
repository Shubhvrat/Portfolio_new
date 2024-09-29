import React from 'react';
import { ReactTyped as Typed } from 'react-typed'; 
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
                typeSpeed={100} 
                backSpeed={50}
                loop 
            />
        </div>
    );
}

export default TypingEffect;
