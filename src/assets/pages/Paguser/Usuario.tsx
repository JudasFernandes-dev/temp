
import React, { useState } from 'react';
import './usuario.css';
import building from './image/iconesUsuario/building.png';
import email from './image/iconesUsuario/email.png';
import github from './image/iconesUsuario/github.png';
import linkedin from './image/iconesUsuario/linkedin.png';
import link from './image/iconesUsuario/link.png';
import placeholder from './image/iconesUsuario/placeholder.png';

const Usuario: React.FC = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentHackathonIndex, setCurrentHackathonIndex] = useState(0);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    { name: 'Projeto 1', empresa: 'Empresa 1' },
    { name: 'Projeto 2', empresa: 'Empresa 2' },
    { name: 'Projeto 3', empresa: 'Empresa 3' },
  ];

  const hackathons = [
    { name: 'Hackathon 1', data: '2024' },
    { name: 'Hackathon 2', data: '2024' },
    { name: 'Hackathon 3', data: '2024' },
  ];

  const groups = [
    { name: 'Grupo 1', members: 5 },
    { name: 'Grupo 2', members: 8 },
    { name: 'Grupo 3', members: 6 },
  ];

  return (
    <div className="user-container">
      {/* Sidebar Esquerda */}
      <div className="sidebar-left">
        <div className="profile-section">
          <img src="https://github.com/user.png" alt="Avatar" className="avatar" />
          <h2>Nome do Usuário</h2>
          <p className="role">Desenvolvedor Full Stack</p>
          
          <div className="social-links">
            <div className="social-item">
              <img src={building} alt="Empresa" />
              <span>Empresa Atual</span>
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
              <img src={link} alt="Website" />
              <span>Website</span>
            </div>
          </div>

          <button className="edit-profile-btn">Editar Perfil</button>

          <nav className="sidebar-nav">
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
            <img src="/medal-yellow.png" alt="Conquista 1" className="achievement-badge" />
            <img src="/medal-green.png" alt="Conquista 2" className="achievement-badge" />
            <img src="/medal-red.png" alt="Conquista 3" className="achievement-badge" />
          </div>

          <div className="version">v1.0.0</div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="main-content">
        <div className="search-section">
          <input type="text" placeholder="Buscar projetos..." className="search-input" />
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

        {/* Carrossel de Projetos */}
        <section className="carousel-section projects">
          <h2>Projetos</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentProjectIndex(prev => prev > 0 ? prev - 1 : projects.length - 1)}>←</button>
            <div className="carousel-content blue">
              <h3>{projects[currentProjectIndex].name}</h3>
              <p>{projects[currentProjectIndex].empresa}</p>
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentProjectIndex(prev => (prev + 1) % projects.length)}>→</button>
          </div>
        </section>

        {/* Carrossel de Hackathons */}
        <section className="carousel-section hackathons">
          <h2>Hackathons</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentHackathonIndex(prev => prev > 0 ? prev - 1 : hackathons.length - 1)}>←</button>
            <div className="carousel-content black">
              <h3>{hackathons[currentHackathonIndex].name}</h3>
              <p>{hackathons[currentHackathonIndex].data}</p>
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentHackathonIndex(prev => (prev + 1) % hackathons.length)}>→</button>
          </div>
        </section>

        {/* Carrossel de Grupos */}
        <section className="carousel-section groups">
          <h2>Grupos</h2>
          <div className="carousel">
            <button className="carousel-btn prev" onClick={() => setCurrentGroupIndex(prev => prev > 0 ? prev - 1 : groups.length - 1)}>←</button>
            <div className="carousel-content green">
              <h3>{groups[currentGroupIndex].name}</h3>
              <p>{groups[currentGroupIndex].members} membros</p>
            </div>
            <button className="carousel-btn next" onClick={() => setCurrentGroupIndex(prev => (prev + 1) % groups.length)}>→</button>
          </div>
        </section>
      </main>

      {/* Sidebar Direita */}
      <div className="sidebar-right">
        <section className="languages">
          <h3>Idiomas</h3>
          <div className="language-item">
            <span>Inglês</span>
            <span>Intermediário</span>
          </div>
          <div className="language-item">
            <span>Espanhol</span>
            <span>Básico</span>
          </div>
        </section>

        <section className="progress">
          <h3>Progresso</h3>
          <div className="progress-item">
            <span>Desenvolvedor Frontend</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
          </div>
        </section>

        <section className="tasks">
          <h3>Tarefas</h3>
          <div className="task-item">
            <input type="checkbox" id="task1" />
            <label htmlFor="task1">Completar projeto frontend</label>
          </div>
          <div className="task-item">
            <input type="checkbox" id="task2" />
            <label htmlFor="task2">Participar do hackathon</label>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Usuario;
