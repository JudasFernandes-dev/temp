import './usuario.css';
import { useState } from 'react';
import PerfilParticipante from '../../components/perfil/perfiluser';
import { FaSearch } from 'react-icons/fa';

const Usuario = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todos', 'Em andamento', 'Concluídos', 'Favoritos'];

  const projects = [
    {
      id: 1,
      name: 'Desenvolvimento Web Full Stack',
      company: 'Tech Solutions',
      description: 'Projeto de desenvolvimento web utilizando React e Node.js',
      status: 'Em andamento'
    },
    {
      id: 2,
      name: 'UX/UI Design System',
      company: 'Design Co',
      description: 'Criação de sistema de design para aplicativo móvel',
      status: 'Novo'
    },
    {
      id: 3,
      name: 'Marketing Digital',
      company: 'Marketing Plus',
      description: 'Campanha de marketing para produto inovador',
      status: 'Finalizado'
    }
  ];

  return (
    <div className="main-users-container-principal">
      <aside className="perfil-lateral-container">
        <PerfilParticipante />
      </aside>

      <main className="content-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar projetos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>

        <div className="categories">
          {categories.map(category => (
            <button key={category} className="category-btn">
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p className="company-name">{project.company}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-status">{project.status}</div>
              <div className="project-actions">
                <button className="participate-btn">
                  Participar
                </button>
                <button className="more-info-btn">
                  Saber mais
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Usuario;