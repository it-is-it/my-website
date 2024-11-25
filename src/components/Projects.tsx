import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Use Image from next/image

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
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
              <div className="w-full h-48 relative mb-4">
                {/* Using next/image for optimized images */}
                <Image
                  src={project.image} // Image URL should be correct
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-gray-700">{project.description}</p>
              {/* Correct Link usage without extra <a> */}
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
