
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="https://github.com/user.png" alt="Profile" className="profile-image" />
        <span className="profile-name">nome</span>
        
        <div className="social-links">
          <Link to="#" className="social-link">
            <img src="/icons/building.png" alt="Função" />
            <span>Função</span>
          </Link>
          <Link to="#" className="social-link">
            <img src="/icons/github.png" alt="Github" />
            <span>Github</span>
          </Link>
          <Link to="#" className="social-link">
            <img src="/icons/linkedin.png" alt="LinkedIn" />
            <span>LinkedIn</span>
          </Link>
          <Link to="#" className="social-link">
            <img src="/icons/link.png" alt="Link" />
            <span>Link</span>
          </Link>
        </div>
        
        <button className="edit-profile">Editar Perfil</button>
        
        <nav className="sidebar-nav">
          <Link to="/home" className="nav-link">Página Inicial</Link>
          <Link to="/notifications" className="nav-link">Notificações</Link>
          <Link to="/messages" className="nav-link">Mensagens</Link>
          <Link to="/hackathons" className="nav-link">Hackathons</Link>
          <Link to="/projects" className="nav-link">Projetos</Link>
          <Link to="/teams" className="nav-link">Equipes</Link>
          <Link to="/profile" className="nav-link">Perfil</Link>
          <Link to="/settings" className="nav-link">Configurações</Link>
        </nav>
        
        <div className="achievement-badges">
          <div className="badge yellow"></div>
          <div className="badge green"></div>
          <div className="badge red"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
