import { useState, useEffect, useRef } from 'react';
import { MdSearch, MdMessage } from 'react-icons/md';
import PainelPerfil from '../../../components/right-sidebar/PainelPerfil';
import Header from '../../components/header-user/HeaderUser';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import './usuario.css';

const Usuario = () => {
  const [currentFilter, setCurrentFilter] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projectsRef = useRef(null);
  const hackathonsRef = useRef(null);
  const groupsRef = useRef(null);

  const projects = [
    { nome: 'Projeto A', empresa: 'Empresa X', tipo: 'Design' },
    { nome: 'Projeto B', empresa: 'Empresa Y', tipo: 'Dev' },
    { nome: 'Projeto C', empresa: 'Empresa Z', tipo: 'Marketing' },
    { nome: 'Projeto D', empresa: 'Empresa W', tipo: 'Gestão' },
    { nome: 'Projeto E', empresa: 'Empresa V', tipo: 'Design' },
    { nome: 'Projeto F', empresa: 'Empresa U', tipo: 'Dev' },
    { nome: 'Projeto G', empresa: 'Empresa T', tipo: 'Marketing' },
    { nome: 'Projeto H', empresa: 'Empresa S', tipo: 'Gestão' }
  ];

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.nome.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.empresa.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = currentFilter === 'Todos' || project.tipo === currentFilter;
      return matchesSearch && matchesFilter;
    });
    setFilteredProjects(filtered);
  }, [searchQuery, currentFilter]);

  const scroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="user-page">
      <Header />
      <PainelPerfil />
      <Sidebar />

      <main className="main-content">
        <div className="projects-section">
          <h1>Projetos</h1>

          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Procurar..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => setSearchQuery(searchQuery)}>Buscar</button>
          </div>

          <div className="filter-tabs">
            <button 
              className={currentFilter === 'Todos' ? 'active' : ''} 
              onClick={() => setCurrentFilter('Todos')}
            >
              Todos
            </button>
            <button 
              className={currentFilter === 'Design' ? 'active' : ''} 
              onClick={() => setCurrentFilter('Design')}
            >
              Design
            </button>
            <button 
              className={currentFilter === 'Dev' ? 'active' : ''} 
              onClick={() => setCurrentFilter('Dev')}
            >
              Dev
            </button>
            <button 
              className={currentFilter === 'Marketing' ? 'active' : ''} 
              onClick={() => setCurrentFilter('Marketing')}
            >
              Marketing
            </button>
            <button 
              className={currentFilter === 'Gestão' ? 'active' : ''} 
              onClick={() => setCurrentFilter('Gestão')}
            >
              Gestão
            </button>
          </div>

          <div className="projects-title">PROJETOS</div>

          <div className="projects-carousel">
            <button className="nav-button prev" onClick={() => scroll('left', projectsRef)}>‹</button>
            <div className="project-cards" ref={projectsRef}>
              {filteredProjects.map((project, index) => (
                <div className="project-card" key={index}>
                  <div className="bulb-icon">💡</div>
                  <div className="project-info">
                    <p className="project-name">nome: {project.nome}</p>
                    <p className="company-name">empresa: {project.empresa}</p>
                    <div className="card-buttons">
                      <button className="participate">participar</button>
                      <button className="learn-more">saber+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="nav-button next" onClick={() => scroll('right', projectsRef)}>›</button>
          </div>

          <hr className="section-divider" />

          <div className="hackathons-section">
            <h2>HACKATHONS</h2>
            <div className="hackathons-carousel">
              <button className="nav-button prev" onClick={() => scroll('left', hackathonsRef)}>‹</button>
              <div className="hackathon-cards" ref={hackathonsRef}>
                {[...Array(8)].map((_, index) => (
                  <div className="hackathon-card" key={index}>
                    <h3>Hackathon {index + 1}</h3>
                    <p>Descrição do hackathon {index + 1}</p>
                    <div className="card-buttons">
                      <button className="participate">participar</button>
                      <button className="learn-more">saber+</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="nav-button next" onClick={() => scroll('right', hackathonsRef)}>›</button>
            </div>
          </div>

          <hr className="section-divider" />

          <div className="groups-section">
            <h2>GRUPOS</h2>
            <div className="groups-carousel">
              <button className="nav-button prev" onClick={() => scroll('left', groupsRef)}>‹</button>
              <div className="group-cards" ref={groupsRef}>
                {[...Array(8)].map((_, index) => (
                  <div className="group-card" key={index}>
                    <h3>Grupo {index + 1}</h3>
                    <p>Descrição do grupo {index + 1}</p>
                    <div className="card-buttons">
                      <button className="participate">participar</button>
                      <button className="learn-more">saber+</button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="nav-button next" onClick={() => scroll('right', groupsRef)}>›</button>
            </div>
          </div>
        </div>
      </main>

      <button className="chat-button">
        <MdMessage size={24} />
      </button>
    </div>
  );
};

export default Usuario;