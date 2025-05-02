
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdNotifications, MdWbSunny, MdNightlight } from 'react-icons/md';
import './header-user.css';
import { useTheme } from '../../contexts/ThemeContext';

function HeaderUser() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={`header-user ${theme}`}>
      <nav className="header-nav">
        <div className="nav-left">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
        </div>

        <div className="nav-right">
          <button className="icon-button">
            <MdAdd />
          </button>
          <button className="icon-button">
            <MdNotifications />
          </button>
          
          <div className="user-menu">
            <img 
              src="/default-avatar.png" 
              alt="User" 
              className="user-avatar"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
            />
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/edit-profile">Editar Perfil</Link>
                <Link to="/settings">Configurações</Link>
                <button onClick={() => {/* Implement logout */}}>Sair</button>
              </div>
            )}
          </div>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <MdWbSunny /> : <MdNightlight />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default HeaderUser;
