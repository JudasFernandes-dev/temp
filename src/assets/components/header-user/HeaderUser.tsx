import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdNotifications, MdPerson, MdLightMode, MdDarkMode } from 'react-icons/md';
import { useTheme } from '../../../contexts/ThemeContext';
import './header-user.css';

const HeaderUser = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="header-user">
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <div className="right-icons">
        <button className="icon-button" title="Adicionar">
          <MdAdd size={24} />
        </button>

        <button className="icon-button" title="Notificações">
          <MdNotifications size={24} />
          <span className="notification-badge">3</span>
        </button>

        <div className="user-dropdown">
          <button className="icon-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <MdPerson size={24} />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/edit-profile">Editar Perfil</Link>
              <Link to="/settings">Configurações</Link>
              <Link to="/logout">Sair</Link>
            </div>
          )}
        </div>

        <button className="theme-toggle" onClick={toggleTheme} title="Alternar tema">
          {theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
        </button>
      </div>
    </header>
  );
};

export default HeaderUser;