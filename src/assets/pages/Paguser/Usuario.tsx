import { useState, useEffect } from 'react';
import { MdSearch, MdMessage } from 'react-icons/md';
import Header from '../../components/header-user/HeaderUser';
import Sidebar from '../../components/sidebar/Sidebar';
import Footer from '../../components/footer/Footer';
import './usuario.css';

const Usuario = () => {
  const [currentFilter, setCurrentFilter] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

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
      <Sidebar />

      <main className="main-content">
        <div className="search-bar">
          <MdSearch size={24} />
          <input 
            type="text"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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

        <div className="card-grid">
          <div className="card">
            <h3>Projetos Ativos</h3>
            <p>3 projetos em andamento</p>
          </div>
          <div className="card">
            <h3>Conquistas</h3>
            <p>12 badges conquistadas</p>
          </div>
          <div className="card">
            <h3>Habilidades</h3>
            <p>React, TypeScript, Node.js</p>
          </div>
          <div className="card">
            <h3>Certificações</h3>
            <p>4 certificados obtidos</p>
          </div>
        </div>

        <div className="carousels">
          <section className="carousel-section projects">
            <h2>Projetos</h2>
            {/* Carrossel de projetos será implementado aqui */}
          </section>

          <section className="carousel-section hackathons">
            <h2>Hackathons</h2>
            {/* Carrossel de hackathons será implementado aqui */}
          </section>

          <section className="carousel-section groups">
            <h2>Grupos</h2>
            {/* Carrossel de grupos será implementado aqui */}
          </section>
        </div>
      </main>

      <aside className="right-sidebar">
        <section className="languages">
          <h3>Idiomas</h3>
          <div className="language-selection">
            <select>
              <option value="pt">Português</option>
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </section>

        <section className="progress">
          <h3>Progresso</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: '75%'}}></div>
          </div>
          <p>75% completo</p>
        </section>

        <section className="tasks">
          <h3>Tarefas</h3>
          <ul>
            <li>Completar perfil básico</li>
            <li>Vincular GitHub</li>
            <li>Participar de um projeto</li>
          </ul>
        </section>
      </aside>

      <button className="chat-button">
        <MdMessage size={24} />
      </button>

      <Footer />
    </div>
  );
};

export default Usuario;