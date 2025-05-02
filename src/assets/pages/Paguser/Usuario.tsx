
import React, { useState } from 'react';
import './usuario.css';
import { useTheme } from '../../../contexts/ThemeContext';
import building from './image/iconesUsuario/building.png';
import email from './image/iconesUsuario/email.png';
import github from './image/iconesUsuario/github.png';
import linkedin from './image/iconesUsuario/linkedin.png';
import link from './image/iconesUsuario/link.png';

const Usuario: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentHackathonIndex, setCurrentHackathonIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    { name: 'Projeto 1', empresa: 'Empresa 1' },
    { name: 'Projeto 2', empresa: 'Empresa 2' },
    { name: 'Projeto 3', empresa: 'Empresa 3' },
    { name: 'Projeto 4', empresa: 'Empresa 4' },
  ];

  const hackathons = [
    { name: 'Hackathon 1', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Hackathon 2', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Hackathon 3', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Hackathon 4', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const groups = [
    { name: 'Grupo 1', members: 5 },
    { name: 'Grupo 2', members: 8 },
    { name: 'Grupo 3', members: 6 },
    { name: 'Grupo 4', members: 4 },
  ];

  return (
    <div className={`app-container ${theme}`}>
      {/* Sidebar Esquerda */}
      <div className="sidebar-left">
        <div className="profile-section">
          <img src="https://github.com/user.png" alt="Avatar" className="avatar" />
          <h2>Nome do Usuário</h2>
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

          <div className="version">v1.0.0</div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <div className="top-bar">
          <div className="search-section">
            <input type="text" placeholder="Buscar..." className="search-input" />
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

        <section className="projects-section">
          <h2>Projetos</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentProjectIndex(prev => prev > 0 ? prev - 1 : projects.length - 1)}>←</button>
            <div className="carousel-content blue">
              {projects.map((project, index) => (
                <div key={index} className={`carousel-item ${index === currentProjectIndex ? 'active' : ''}`}>
                  <h3>{project.name}</h3>
                  <p>{project.empresa}</p>
                  <div className="card-actions">
                    <button>Participar</button>
                    <button>Saber +</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentProjectIndex(prev => (prev + 1) % projects.length)}>→</button>
          </div>
        </section>

        <section className="hackathons-section">
          <h2>Hackathons</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentHackathonIndex(prev => prev > 0 ? prev - 1 : hackathons.length - 1)}>←</button>
            <div className="carousel-content black">
              {hackathons.map((hackathon, index) => (
                <div key={index} className={`carousel-item ${index === currentHackathonIndex ? 'active' : ''}`}>
                  <h3>{hackathon.name}</h3>
                  <p>{hackathon.descricao}</p>
                  <div className="card-actions">
                    <button>Participar</button>
                    <button>Saber +</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentHackathonIndex(prev => (prev + 1) % hackathons.length)}>→</button>
          </div>
        </section>

        <section className="groups-section">
          <h2>Grupos</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentGroupIndex(prev => prev > 0 ? prev - 1 : groups.length - 1)}>←</button>
            <div className="carousel-content green">
              {groups.map((group, index) => (
                <div key={index} className={`carousel-item ${index === currentGroupIndex ? 'active' : ''}`}>
                  <h3>{group.name}</h3>
                  <p>{group.members} membros</p>
                  <div className="card-actions">
                    <button>Participar</button>
                    <button>Saber +</button>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentGroupIndex(prev => (prev + 1) % groups.length)}>→</button>
          </div>
        </section>
      </main>

      {/* Sidebar Direita */}
      <div className="sidebar-right">
        <div className="language-section">
          <h3>Linguagens</h3>
          <div className="language-item">
            <span>JavaScript</span>
            <span>Intermediário</span>
          </div>
          <div className="language-item">
            <span>Python</span>
            <span>Avançado</span>
          </div>
          <div className="language-item">
            <span>Java</span>
            <span>Iniciante</span>
          </div>
        </div>

        <div className="progress-section">
          <h3>Progresso dos selos</h3>
          <div className="progress-item">
            <span>Desenvolvedor Front-end</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
          </div>
        </div>

        <div className="tasks-section">
          <h3>Tarefas Pendentes</h3>
          <div className="task-item">
            <input type="checkbox" id="task1" />
            <label htmlFor="task1">Completar 5 projetos de front-end</label>
          </div>
          <div className="task-item">
            <input type="checkbox" id="task2" />
            <label htmlFor="task2">Participar de 2 hackathons</label>
          </div>
        </div>
      </div>

      {/* Botão Dark Mode */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};

export default Usuario;
