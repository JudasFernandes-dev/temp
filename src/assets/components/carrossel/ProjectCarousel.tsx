
import { useState } from 'react';
import './carousel.css';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
}

const ProjectCarousel = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do projeto 1",
      category: "Dev"
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Descrição do projeto 2",
      category: "Design"
    },
    {
      id: 3,
      title: "Projeto 3",
      description: "Descrição do projeto 3",
      category: "Marketing"
    }
  ]);

  return (
    <div className="carousel-container projects">
      <h2>Projetos</h2>
      <div className="carousel-items">
        {projects.map(project => (
          <div key={project.id} className="carousel-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="category">{project.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
