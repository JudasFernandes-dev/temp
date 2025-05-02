import React, { useState } from 'react';
import './usuario.css';
import { useTheme } from '../../../contexts/ThemeContext';
import building from './image/iconesUsuario/building.png';
import github from './image/iconesUsuario/github.png';
import linkedin from './image/iconesUsuario/linkedin.png';
import link from './image/iconesUsuario/link.png';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { FaSearch, FaPlus } from 'react-icons/fa';

const Usuario: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentHackathonIndex, setCurrentHackathonIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentSlide, setCurrentSlide] = useState(0); // Added state for carousel

  const projects = [
    { name: 'nome:', empresa: 'empresa' },
    { name: 'nome:', empresa: 'empresa' },
    { name: 'nome:', empresa: 'empresa' },
    { name: 'nome: adicional 1', empresa: 'empresa adicional' },
  ];

  const hackathons = [
    { name: 'Nome do hackathon', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Nome do hackathon', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Nome do hackathon', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Hackathon adicional', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const handleCarousel = (direction) => {
    if (direction === 'next') {
      setCurrentSlide(currentSlide >= projects.length -1 ? projects.length -1 : currentSlide + 1);
    } else {
      setCurrentSlide(currentSlide <= 0 ? 0 : currentSlide - 1);
    }
  };


  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <div className="content-wrapper">

      {/* Sidebar Esquerda */}
      <div className="sidebar-left">
        <div className="profile-section">
          <img src="https://github.com/user.png" alt="Avatar" className="avatar" />
          <div className="social-links">
            <div className="social-item">
              <img src={building} alt="Função" />
              <span>Função</span>
            </div>
            <div className="social-item">
              <img src={github} alt="Github" />
              <span>Github</span>
            </div>
            <div className="social-item">
              <img src={linkedin} alt="LinkedIn" />
              <span>LinkedIn</span>
            </div>
            <div className="social-item">
              <img src={link} alt="Link" />
              <span>Link</span>
            </div>
          </div>

          <button className="edit-profile-btn">Editar Perfil</button>

          <nav className="nav-menu">
            <a href="#" className="nav-item active">Página Inicial</a>
            <a href="#" className="nav-item">Notificações</a>
            <a href="#" className="nav-item">Mensagens</a>
            <a href="#" className="nav-item">Hackathons</a>
            <a href="#" className="nav-item">Projetos</a>
            <a href="#" className="nav-item">Equipes</a>
            <a href="#" className="nav-item">Perfil</a>
            <a href="#" className="nav-item">Configurações</a>
          </nav>

          <div className="achievements">
            <div className="achievement-badge yellow"></div>
            <div className="achievement-badge green"></div>
            <div className="achievement-badge red"></div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <div className="top-bar">
          <h2>Projetos</h2>
          <div className="search-section">
            <input type="text" placeholder="Procurar..." className="search-input" />
            <button className="search-button"><FaSearch /></button>
          </div>
          <div className="filters">
            {['Todos', 'Design', 'Dev', 'Marketing', 'Gestão'].map(filter => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="content-sections">
          <section className="projects-section">
            <h3>projetos</h3>
            <div className="cards-grid">
              <button className="carousel-button prev" onClick={() => handleCarousel('prev')}>&lt;</button>
              <button className="carousel-button next" onClick={() => handleCarousel('next')}>&gt;</button>
              <div className="carousel-content" style={{ transform: `translateX(-${currentSlide * 320}px)` }}>
                {projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <div className="card-icon">🏆</div>
                    <h4>{project.name}</h4>
                    <p>{project.empresa}</p>
                    <div className="card-actions">
                      <button>participar</button>
                      <button>saber</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="hackathons-section">
            <h3>hackatons</h3>
            <div className="cards-grid">
              {hackathons.map((hackathon, index) => (
                <div key={index} className="hackathon-card">
                  <div className="card-icon">🏆</div>
                  <h4>{hackathon.name}</h4>
                  <p>{hackathon.descricao}</p>
                  <div className="card-actions">
                    <button>participar</button>
                    <button>saber</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="groups-section">
            <h3>Grupos</h3>
            <div className="cards-grid">
              {Array(4).fill(null).map((_, index) => (
                <div key={index} className="group-card">
                  <div className="card-icon">👥</div>
                  <div className="card-actions">
                    <button>participar</button>
                    <button>saber</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Sidebar Direita */}
      <div className="sidebar-right">
        <div className="language-section">
          <div className="section-header">
            <h3>Linguagens</h3>
            <button className="add-button"><FaPlus /></button>
          </div>
          <div className="language-list">
            <div className="language-item">
              <span>JavaScript</span>
              <span className="level">intermediário</span>
            </div>
            <div className="language-item">
              <span>Python</span>
              <span className="level">avançado</span>
            </div>
            <div className="language-item">
              <span>Java</span>
              <span className="level">iniciante</span>
            </div>
          </div>

          <div className="section-header">
            <h3>Idiomas</h3>
            <button className="add-button"><FaPlus /></button>
          </div>
          <div className="language-list">
            <div className="language-item">
              <span>Inglês</span>
              <span className="level">intermediário</span>
            </div>
            <div className="language-item">
              <span>Espanhol</span>
              <span className="level">iniciante</span>
            </div>
          </div>

          <div className="progress-section">
            <h3>Progresso dos selos</h3>
            <div className="progress-item">
              <div className="progress-header">
                <span>Desenvolvedor Experiente</span>
                <span>75%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span>Mestre dos Hackathons</span>
                <span>40%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '40%'}}></div>
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-header">
                <span>Colaborador Elite</span>
                <span>27%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '27%'}}></div>
              </div>
            </div>
          </div>

          <div className="tasks-section">
            <div className="task-item">
              <input type="checkbox" id="task1" />
              <label htmlFor="task1">Completar 5 projetos de front-end</label>
              <span className="xp">+500 XP</span>
            </div>
            <div className="task-item">
              <input type="checkbox" id="task2" />
              <label htmlFor="task2">Participar de 2 hackathons</label>
              <span className="xp">+500 XP</span>
            </div>
            <div className="task-item">
              <input type="checkbox" id="task3" />
              <label htmlFor="task3">Colaborar com 3 novos membros</label>
              <span className="xp">+500 XP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botão Dark Mode */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      </div>
      <Footer />
    </div>
  );
};

export default Usuario;