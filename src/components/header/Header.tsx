
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-nav">
          <Link to="/">Logo</Link>
          <Link to="/about">Sobre</Link>
        </div>
        <ul className="menu-header">
          <li><Link to="/home">Início</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/hackathons">Hackathons</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
        <div className="right-nav">
          <button className="notifications">Notificações</button>
          <button className="user-profile">
            <img src="https://github.com/user.png" alt="Profile" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
