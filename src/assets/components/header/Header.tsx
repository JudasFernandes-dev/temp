import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
        <div className="right-nav">
          <button className="notifications">+3</button>
          <button className="user-profile">
            <img src="https://github.com/user.png" alt="Profile" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;