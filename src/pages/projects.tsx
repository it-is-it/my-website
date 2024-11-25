import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  // Fetch the projects data (from a JSON file or an API)
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json'); // Assuming your projects data is in a JSON file
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 px-6">
      <h3 className="text-3xl font-bold text-center mb-8">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <p>No projects available.</p>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-700">{project.description}</p>
              {/* Link to project details page */}
              <Link
                href={`/projects/${project.id}`}
                className="text-blue-500 mt-4 inline-block"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
