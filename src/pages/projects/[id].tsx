import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

const ProjectDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  // Specify the type: Project or null (initial state when data is loading)
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch('/projects.json');
      const data: Project[] = await response.json(); // Explicitly typing the response
      const projectData = data.find(
        (project) => project.id === parseInt(id as string)
      );
      setProject(projectData || null); // If not found, set null
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{project.description}</p>
      <h3 className="text-xl font-semibold">Technologies Used:</h3>
      <ul className="list-disc pl-6">
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="mt-4">
        <a href={project.github} className="mr-4 text-blue-500">
          GitHub
        </a>
        <a href={project.demo} className="text-blue-500">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
