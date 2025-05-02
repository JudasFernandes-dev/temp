
import { useState } from 'react';
import './usuario.css';
import PerfilParticipante from '../../components/perfil/perfiluser';
import Sidebar from '../../components/sidebar/Sidebar';
import { FaSearch } from 'react-icons/fa';
import { MdLanguage, MdChat } from 'react-icons/md';

const Usuario = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showChat, setShowChat] = useState(false);

  const categories = ['Todos', 'Design', 'Dev', 'Marketing', 'Gestão'];

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

  const languages = [
    { name: 'JavaScript', level: 'Intermediário' },
    { name: 'Python', level: 'Avançado' },
    { name: 'Java', level: 'Iniciante' }
  ];

  const progress = [
    { name: 'Desenvolvedor Experiente', percentage: 75 },
    { name: 'Mestre dos Hackathons', percentage: 40 },
    { name: 'Colaborador Elite', percentage: 27 }
  ];

  return (
    <div className="main-container">
      <aside className="sidebar-left">
        <PerfilParticipante />
        <Sidebar />
      </aside>
      
      <main className="content-area">
        <div className="search-section">
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

        <section className="carousels">
          <div className="carousel-section projects">
            <h2>Projetos</h2>
            <div className="carousel-items">
              {projects.map(project => (
                <div key={project.id} className="carousel-card project-card">
                  <h3>{project.name}</h3>
                  <p className="company">{project.company}</p>
                  <p className="description">{project.description}</p>
                  <span className="status">{project.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-section hackathons">
            <h2>Hackathons</h2>
            <div className="carousel-items">
              {/* Similar structure for hackathons */}
            </div>
          </div>

          <div className="carousel-section groups">
            <h2>Grupos</h2>
            <div className="carousel-items">
              {/* Similar structure for groups */}
            </div>
          </div>
        </section>
      </main>

      <aside className="sidebar-right">
        <section className="languages-section">
          <h3>Linguagens</h3>
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span>{lang.name}</span>
              <span className="level">{lang.level}</span>
            </div>
          ))}
        </section>

        <section className="progress-section">
          <h3>Progresso</h3>
          {progress.map((item, index) => (
            <div key={index} className="progress-item">
              <div className="progress-info">
                <span>{item.name}</span>
                <span>{item.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${item.percentage}%` }}></div>
              </div>
            </div>
          ))}
        </section>
      </aside>

      {showChat && (
        <div className="chat-modal">
          {/* Chat implementation */}
        </div>
      )}
      
      <button className="chat-button" onClick={() => setShowChat(!showChat)}>
        <MdChat />
      </button>
    </div>
  );
};

export default Usuario;
