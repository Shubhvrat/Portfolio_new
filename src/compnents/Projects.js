import React from 'react';

const projects = [
    { name: 'Project One', description: 'Description of the first project.', link: '#', image: 'Project1.jpg' },
    { name: 'Project Two', description: 'Description of the second project.', link: '#', image: 'project2.jpg' },
    // Add more projects here
];

function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-gray-900">
            <h2 className="text-4xl text-center font-bold mb-10">Projects</h2>
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                        <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <a href={project.link} className="text-indigo-500 hover:underline">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
