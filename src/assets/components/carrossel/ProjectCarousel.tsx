
import React from 'react';
import './carousel.css';

const ProjectCarousel = () => {
  const projects = [
    {
      id: 1,
      title: "App de Gestão",
      status: "Em andamento",
      tech: "React Native",
      progress: 75
    },
    {
      id: 2,
      title: "Sistema ERP",
      status: "Concluído",
      tech: "React, Node.js",
      progress: 100
    },
    {
      id: 3,
      title: "E-commerce",
      status: "Em andamento",
      tech: "Next.js",
      progress: 45
    }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-items">
        {projects.map(project => (
          <div key={project.id} className="carousel-item project-item">
            <div className="project-header">
              <span className="category">Projeto</span>
              <span className={`status ${project.status === "Concluído" ? "completed" : "active"}`}>
                {project.status}
              </span>
            </div>
            <h3>{project.title}</h3>
            <p className="tech">{project.tech}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${project.progress}%`}}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
