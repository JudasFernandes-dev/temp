
import { useState, useEffect, useRef } from 'react';
import { MdSearch, MdMessage } from 'react-icons/md';
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
    { nome: 'Projeto D', empresa: 'Empresa W', tipo: 'Gestão' }
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
                <div className="hackathon-card">
                  <h3>Nome do hackathon</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
                <div className="hackathon-card">
                  <h3>Nome do hackathon</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
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
                <div className="group-card">
                  <h3>Grupo 1</h3>
                  <p>Grupo de desenvolvimento web focado em React e TypeScript</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
                <div className="group-card">
                  <h3>Grupo 2</h3>
                  <p>Grupo de UI/UX Design e prototipação</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
                <div className="group-card">
                  <h3>Grupo 3</h3>
                  <p>Grupo de estudos em DevOps e Cloud</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
              <button className="nav-button next" onClick={() => scroll('right', groupsRef)}>›</button>
            </div>
          </div>
        </div>
      </main>

      <aside className="right-sidebar">
        <section className="languages">
          <h3>Idiomas</h3>
          <div className="language-selection">
            <select>
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </section>

        <section className="progress">
          <h3>Progresso</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '75%'}}></div>
          </div>
          <p>75% completo</p>
        </section>

        <section className="tasks">
          <h3>Tarefas</h3>
          <ul>
            <li>Completar perfil básico</li>
            <li>Vincular GitHub</li>
            <li>Participar de um projeto</li>
          </ul>
        </section>
      </aside>

      <button className="chat-button">
        <MdMessage size={24} />
      </button>

      <Footer />
    </div>
  );
};

export default Usuario;
