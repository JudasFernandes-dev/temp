
import { Link } from 'react-router-dom';
import { MdHome, MdNotifications, MdMessage, MdGroup, MdWork, MdPerson, MdSettings } from 'react-icons/md';
import { FaHackerrank } from 'react-icons/fa';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="user-profile">
          <div className="profile-avatar">
            <MdPerson size={28} />
          </div>
          <p className="username">nome</p>
        </div>

        <div className="user-links">
          <p>Função</p>
          <p>Github</p>
          <p>Linkedin</p>
          <p>Link</p>
          <Link to="/edit-profile" className="edit-profile-btn">
            Editar Perfil
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/"><MdHome size={16} /> Página Inicial</Link>
          <Link to="/notifications"><MdNotifications size={16} /> Notificações</Link>
          <Link to="/messages"><MdMessage size={16} /> Mensagens</Link>
          <Link to="/hackathons"><FaHackerrank size={16} /> Hackathons</Link>
          <Link to="/projects"><MdWork size={16} /> Projetos</Link>
          <Link to="/teams"><MdGroup size={16} /> Equipes</Link>
          <Link to="/settings"><MdSettings size={16} /> Configurações</Link>
          <div className="achievements-section">
            <span className="achievements-title">Conquistas</span>
            <div className="badges">
              <div className="badge yellow"></div>
              <div className="badge red"></div>
              <div className="badge green"></div>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
