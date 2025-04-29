import './usuario.css';
import { useState } from 'react';
import PerfilParticipante from '../../components/perfil/perfiluser';
import Sidebar from '../../components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';

const Usuario = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Em andamento', 'Concluídos', 'Favoritos'];

  const projects = [
    {
      id: 1,
      name: 'Desenvolvimento de App Mobile',
      company: 'Tech Co',
      description: 'Criação de aplicativo móvel para iOS e Android',
      status: 'Em andamento'
    },
    {
      id: 2,
      name: 'UX/UI Design System',
      company: 'Design Co',
      description: 'Criação de sistema de design para aplicativo móvel',
      status: 'Em andamento'
    },
    {
      id: 3,
      name: 'Marketing Digital',
      company: 'Marketing Plus',
      description: 'Campanha de marketing para produto inovador',
      status: 'Finalizado'
    },
  ];

  return (
    <div className="main-users-container-principal">
      <aside className="perfil-lateral-container">
        <PerfilParticipante />
        <Sidebar />
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
            <button 
              key={category}
              className={selectedCategory === category ? 'category-btn active' : 'category-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.company}</p>
              <p>{project.description}</p>
              <span>{project.status}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Usuario;