import React from 'react';
import { FaPython } from 'react-icons/fa'; 
import { SiStreamlit, SiVisualstudiocode } from 'react-icons/si'; 
import computerImage from './computer.jpg'; 


function ProjectCard({ title, techStack }) {
  return (
    <div className="project-card bg-gray-800 text-white rounded-lg shadow-lg p-6 transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
      <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>


      <div className="project-image h-64 w-full mb-4 flex justify-center">
        <img src={computerImage} alt="3D Computer" className="rounded-lg h-48" />
      </div>


      <div className="tech-stack text-center mt-4">
        <h4 className="text-xl font-semibold mb-2">Tech Stack</h4>
        <ul className="flex justify-center space-x-6">
          {techStack.map((tech, index) => (
            <li key={index} className="text-4xl text-blue-500 flex items-center">
              {tech === 'Python' && <FaPython />}
              {tech === 'Streamlit' && <SiStreamlit />}
              {tech === 'VSCode' && <SiVisualstudiocode />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div className="projects-container bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <ProjectCard
          title="Amazon Product System"
          techStack={['Python', 'Streamlit', 'VSCode']}
        />
        <ProjectCard
          title="Conference Management System"
          techStack={['Python', 'Streamlit', 'VSCode']}
        />
        <ProjectCard
          title="TrackCrypto"
          techStack={['Python', 'Streamlit', 'VSCode']}
        />
    
      </div>
    </div>
  );
}

export default ProjectSection;
