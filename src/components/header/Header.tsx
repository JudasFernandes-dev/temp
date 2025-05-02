
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="left-nav">
          <Link to="/">Home</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
        <div className="right-nav">
          <ul className="menu-header">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cadastro">Cadastre-se</Link></li>
            <li><Link to="/cadprojeto">Cadastrar Projeto</Link></li>
            <li><Link to="/paguser">Minha Página</Link></li>
          </ul>
          <button className="notifications">+3</button>
          <button className="user-profile">
            <img src="https://github.com/user.png" alt="Profile" />
          </button>
        </div>
      </nav>
    </header>
  );
}
