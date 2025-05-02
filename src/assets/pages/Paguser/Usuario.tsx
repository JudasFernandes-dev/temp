
import { useState, useEffect } from 'react';
import Header from '../../components/header-user/HeaderUser';
import Footer from '../../components/footer/Footer';
import './usuario.css';
import { MdSearch, MdNotifications, MdMessage } from 'react-icons/md';

const Usuario = () => {
  const [currentFilter, setCurrentFilter] = useState('Todos');
  
  // Safe storage access
  useEffect(() => {
    try {
      const participanteLogado = localStorage.getItem('participanteLogado');
      if (participanteLogado) {
        const dados = JSON.parse(participanteLogado);
        // Handle user data here
        console.log('User data loaded:', dados);
      }
    } catch (error) {
      console.error('Storage access error:', error);
    }
  }, []);

  return (
    <div className="user-page">
      <Header />
      
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div className="profile-info">
          <img src="/avatar.png" alt="Profile" className="avatar" />
          <h3>João Silva</h3>
          <p>Desenvolvedor Front-end</p>
          <div className="social-links">
            <a href="https://github.com">Github</a>
            <a href="https://linkedin.com">LinkedIn</a>
          </div>
          <button className="edit-profile-btn">Editar Perfil</button>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="active">Página Inicial</a>
          <a href="#">Notificações</a>
          <a href="#">Mensagens</a>
          <a href="#">Hackathons</a>
          <a href="#">Projetos</a>
          <a href="#">Equipes</a>
          <a href="#">Perfil</a>
          <a href="#">Configurações</a>
        </nav>

        <div className="achievements">
          <h4>Conquistas</h4>
          <div className="badges">
            <span className="badge yellow"></span>
            <span className="badge green"></span>
            <span className="badge red"></span>
          </div>
        </div>

        <div className="version">v1.0.0</div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="search-bar">
          <MdSearch />
          <input type="text" placeholder="Buscar projetos, hackathons ou grupos..." />
        </div>

        <div className="filters">
          <button 
            className={currentFilter === 'Todos' ? 'active' : ''} 
            onClick={() => setCurrentFilter('Todos')}
          >
            Todos
          </button>
          <button 
            className={currentFilter === 'Design' ? 'active' : ''} 
            onClick={() => setCurrentFilter('Design')}
          >
            Design
          </button>
          <button 
            className={currentFilter === 'Dev' ? 'active' : ''} 
            onClick={() => setCurrentFilter('Dev')}
          >
            Dev
          </button>
          <button 
            className={currentFilter === 'Marketing' ? 'active' : ''} 
            onClick={() => setCurrentFilter('Marketing')}
          >
            Marketing
          </button>
          <button 
            className={currentFilter === 'Gestão' ? 'active' : ''} 
            onClick={() => setCurrentFilter('Gestão')}
          >
            Gestão
          </button>
        </div>

        {/* Projects, Hackathons, and Groups sections will be added here */}
      </main>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="languages">
          <h4>Idiomas</h4>
          {/* Language selection will be added */}
        </div>

        <div className="progress">
          <h4>Progresso</h4>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '75%'}}></div>
          </div>
        </div>

        <div className="tasks">
          <h4>Tarefas</h4>
          <ul>
            <li>Completar perfil básico</li>
            <li>Vincular GitHub</li>
            <li>Participar de um projeto</li>
          </ul>
        </div>
      </div>

      {/* Chat Button */}
      <button className="chat-button">
        <MdMessage />
      </button>

      <Footer />
    </div>
  );
};

export default Usuario;
