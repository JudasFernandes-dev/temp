import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/paguser">Minha Página</Link>
        </li>
        <li>
          <Link to="/edit-profile">Editar Perfil</Link>
        </li>
        <li>
          <Link to="/projects">Projetos</Link>
        </li>
        <li>
          <Link to="/logout">Sair</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;