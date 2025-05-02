
import { Link } from 'react-router-dom';
import { MdHome, MdNotifications, MdMessage, MdGroup, MdWork, MdPerson, MdSettings } from 'react-icons/md';
import { FaHackerrank } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="user-profile">
        <img src="/default-avatar.png" alt="Avatar" className="profile-avatar" />
        <div className="user-info">
          <h3>Nome do Usuário</h3>
          <p className="user-role">Desenvolvedor Full Stack</p>
          <div className="social-links">
            <a href="#" target="_blank">Github</a>
            <a href="#" target="_blank">LinkedIn</a>
            <a href="#" target="_blank">Portfolio</a>
          </div>
          <Link to="/edit-profile" className="edit-profile-btn">
            Editar Perfil
          </Link>
        </div>
      </div>

      <nav className="sidebar-nav">
        <Link to="/"><MdHome /> Página Inicial</Link>
        <Link to="/notifications"><MdNotifications /> Notificações</Link>
        <Link to="/messages"><MdMessage /> Mensagens</Link>
        <Link to="/hackathons"><FaHackerrank /> Hackathons</Link>
        <Link to="/projects"><MdWork /> Projetos</Link>
        <Link to="/teams"><MdGroup /> Equipes</Link>
        <Link to="/profile"><MdPerson /> Perfil</Link>
        <Link to="/settings"><MdSettings /> Configurações</Link>
      </nav>

      <div className="achievements">
        <h4>Conquistas</h4>
        <div className="badges">
          <div className="badge yellow" title="Conquista Ouro"></div>
          <div className="badge green" title="Conquista Verde"></div>
          <div className="badge red" title="Conquista Vermelha"></div>
        </div>
      </div>

      <div className="version">v1.0.0</div>
    </aside>
  );
}

export default Sidebar;
