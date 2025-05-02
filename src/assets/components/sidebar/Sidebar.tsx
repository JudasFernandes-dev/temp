
import { Link } from 'wouter';
import { useState, useEffect } from 'react';
import './Sidebar.css';
import { MdHome, MdNotifications, MdMessage, MdGroup, MdPerson, MdSettings } from 'react-icons/md';
import { FaHackerrank, FaProjectDiagram } from 'react-icons/fa';

const Sidebar = () => {
  const [userData, setUserData] = useState({
    name: 'João Silva',
    title: 'Desenvolvedor Front-end',
    avatar: '/default-avatar.png',
    github: 'github.com/joaosilva',
    linkedin: 'linkedin.com/in/joaosilva',
    website: 'joaosilva.dev'
  });

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src={userData.avatar} alt="Avatar" className="avatar" />
        <h3>{userData.name}</h3>
        <p>{userData.title}</p>
        
        <div className="social-links">
          <a href={`https://${userData.github}`} target="_blank" rel="noopener noreferrer">Github</a>
          <a href={`https://${userData.linkedin}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`https://${userData.website}`} target="_blank" rel="noopener noreferrer">Website</a>
        </div>

        <button className="edit-profile-btn">Editar Perfil</button>
      </div>

      <nav className="navigation">
        <Link href="/"><MdHome /> Página Inicial</Link>
        <Link href="/notifications"><MdNotifications /> Notificações</Link>
        <Link href="/messages"><MdMessage /> Mensagens</Link>
        <Link href="/hackathons"><FaHackerrank /> Hackathons</Link>
        <Link href="/projects"><FaProjectDiagram /> Projetos</Link>
        <Link href="/teams"><MdGroup /> Equipes</Link>
        <Link href="/profile"><MdPerson /> Perfil</Link>
        <Link href="/settings"><MdSettings /> Configurações</Link>
      </nav>

      <div className="achievements">
        <h4>Conquistas</h4>
        <div className="badges">
          <div className="badge yellow"></div>
          <div className="badge green"></div>
          <div className="badge red"></div>
        </div>
      </div>

      <div className="version">v1.0.0</div>
    </div>
  );
};

export default Sidebar;
