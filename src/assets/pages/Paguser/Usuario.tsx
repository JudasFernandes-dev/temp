import { useState } from 'react';
import { MdSearch, MdDarkMode, MdLightMode, MdNotifications, MdAdd, MdChat } from 'react-icons/md';
import { useTheme } from '../../../contexts/ThemeContext';
import './usuario.css';

const Usuario = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showChat, setShowChat] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const categories = ['Todos', 'Design', 'Dev', 'Marketing', 'Gestão'];

  const projects = [
    {
      id: 1,
      name: 'Projeto 1',
      company: 'Empresa A',
      description: 'Descrição do projeto 1',
      status: 'Em andamento'
    },
    {
      id: 2,
      name: 'Projeto 2',
      company: 'Empresa B',
      description: 'Descrição do projeto 2',
      status: 'Em andamento'
    },
    {
      id: 3,
      name: 'Projeto 3',
      company: 'Empresa C',
      description: 'Descrição do projeto 3',
      status: 'Em andamento'
    },
  ];

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
    <div className={`page-container ${theme}`}>
      <header className="header">
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/contato">Contato</a>
          <a href="/sobre">Sobre</a>
        </nav>
        <div className="header-actions">
          <MdAdd className="cursor-pointer" />
          <MdNotifications className="cursor-pointer" />
          <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </header>

      <div className="main-content">
        <aside className="left-sidebar">
          <div className="profile-section">
            <img src="/avatar.png" alt="Profile" className="profile-image" />
            <h3 className="font-semibold">Nome do Usuário</h3>
            <p className="text-sm text-gray-500">Função</p>
          </div>

          <nav className="nav-menu">
            <a href="/">Página Inicial</a>
            <a href="/notifications">Notificações</a>
            <a href="/messages">Mensagens</a>
            <a href="/hackathons">Hackathons</a>
            <a href="/projects">Projetos</a>
            <a href="/teams">Equipes</a>
            <a href="/profile">Perfil</a>
            <a href="/settings">Configurações</a>
          </nav>

          <button className="edit-profile-button">
            Editar Perfil
          </button>
        </aside>

        <main className="content">
          <div className="search-section">
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Procurar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <MdSearch className="absolute right-3 top-2.5 text-gray-400" />
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
          </div>

          <section className="cards-grid">
            {projects.map(project => (
              <div key={project.id} className="card">
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-gray-600">{project.company}</p>
                <p className="mt-2">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">Participar</button>
                  <button className="px-3 py-1 bg-gray-100 rounded">Saber mais</button>
                </div>
              </div>
            ))}
          </section>
        </main>

        <aside className="right-sidebar">
          <section className="languages-section">
            <h3 className="font-semibold mb-4">Linguagens</h3>
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </section>

          <section className="achievements-section">
            <h3 className="font-semibold mb-4">Progresso dos selos</h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
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
      </div>

      <button
        onClick={() => setShowChat(!showChat)}
        className="chat-button"
      >
        <MdChat size={24} />
      </button>

      {showChat && (
        <div className="chat-window">
          {/* Interface do chat */}
        </div>
      )}
    </div>
  );
};

export default Usuario;