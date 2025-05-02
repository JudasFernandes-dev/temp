
import { useState } from 'react';
import { MdSearch, MdDarkMode, MdLightMode, MdNotifications, MdAdd, MdChat } from 'react-icons/md';
import { useTheme } from '../../../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import './usuario.css';

const Usuario = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showChat, setShowChat] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const categories = ['Todos', 'Design', 'Dev', 'Marketing', 'Gestão'];

  const languages = [
    { name: 'JavaScript', level: 'Intermediário' },
    { name: 'Python', level: 'Avançado' },
    { name: 'Java', level: 'Iniciante' }
  ];

  const achievements = [
    { title: 'Desenvolvedor Experiente', progress: 75 },
    { title: 'Mestre dos Hackathons', progress: 40 },
    { title: 'Colaborador Elite', progress: 27 }
  ];

  return (
    <div className={`app-container ${theme}`}>
      <aside className="left-sidebar">
        <div className="profile-section">
          <img src="/avatar.png" alt="Profile" className="profile-image" />
          <h3>Nome do Usuário</h3>
          <p>Função</p>
        </div>
        <nav className="nav-menu">
          <a href="/" className="nav-item">Página Inicial</a>
          <a href="/notifications" className="nav-item">Notificações</a>
          <a href="/messages" className="nav-item">Mensagens</a>
          <a href="/hackathons" className="nav-item">Hackathons</a>
          <a href="/projects" className="nav-item">Projetos</a>
          <a href="/teams" className="nav-item">Equipes</a>
          <a href="/profile" className="nav-item">Perfil</a>
          <a href="/settings" className="nav-item">Configurações</a>
        </nav>
        <button className="edit-profile-button" onClick={() => navigate('/edit-profile')}>
          Editar Perfil
        </button>
      </aside>

      <main className="main-content">
        <header className="search-header">
          <h2>Projetos</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Procurar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MdSearch className="search-icon" />
          </div>
          <div className="categories">
            {categories.map(category => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <section className="projects-section">
          <h3>Projetos</h3>
          <div className="projects-grid">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="project-card">
                <h4>nome: empresa</h4>
                <div className="card-actions">
                  <button>participar</button>
                  <button>saber</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="hackathons-section">
          <h3>Hackathons</h3>
          <div className="hackathons-grid">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="hackathon-card">
                <h4>Nome do hackathon</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="card-actions">
                  <button>participar</button>
                  <button>saber</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="groups-section">
          <h3>Grupos</h3>
          <div className="groups-grid">
            {Array(4).fill(0).map((_, i) => (
              <div key={i} className="group-card">
                <div className="card-actions">
                  <button>participar</button>
                  <button>saber</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <aside className="right-sidebar">
        <section className="languages-section">
          <h3>Linguagens</h3>
          <div className="language-selection">
            <select>
              <option>Selecionar...</option>
              <option>JavaScript</option>
              <option>Python</option>
              <option>Java</option>
            </select>
            <select>
              <option>iniciante</option>
              <option>intermediário</option>
              <option>avançado</option>
            </select>
            <button className="add-button">Adicionar</button>
          </div>
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span>{lang.name}</span>
              <span>{lang.level}</span>
            </div>
          ))}
        </section>

        <section className="achievements-section">
          <h3>Progresso dos selos</h3>
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-header">
                <span>{achievement.title}</span>
                <span>{achievement.progress}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${achievement.progress}%` }}
                />
              </div>
            </div>
          ))}
        </section>
      </aside>

      <button
        className="chat-button"
        onClick={() => setShowChat(!showChat)}
      >
        <MdChat size={24} />
      </button>

      {showChat && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Mensagens</h3>
            <button onClick={() => setShowChat(false)}>×</button>
          </div>
          <div className="chat-messages">
            {/* Chat messages will go here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Usuario;
