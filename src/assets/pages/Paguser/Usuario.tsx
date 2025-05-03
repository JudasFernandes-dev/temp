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
        <div className="projects-section">
          <h1>Projetos</h1>
          
          <div className="search-bar">
            <input type="text" placeholder="Procurar..." />
            <button>Buscar</button>
          </div>

          <div className="filter-tabs">
            <button className="active">Todos</button>
            <button>Design</button>
            <button>Dev</button>
            <button>Marketing</button>
            <button>Gestão</button>
          </div>

          <div className="projects-title">PROJETOS</div>
          
          <div className="projects-carousel">
            <button className="nav-button prev">‹</button>
            <div className="project-cards">
              <div className="project-card">
                <div className="bulb-icon">💡</div>
                <div className="project-info">
                  <p className="project-name">nome: Projeto A</p>
                  <p className="company-name">empresa: Empresa X</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="bulb-icon">💡</div>
                <div className="project-info">
                  <p className="project-name">nome: Projeto B</p>
                  <p className="company-name">empresa: Empresa Y</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="bulb-icon">💡</div>
                <div className="project-info">
                  <p className="project-name">nome: Projeto C</p>
                  <p className="company-name">empresa: Empresa Z</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="bulb-icon">💡</div>
                <div className="project-info">
                  <p className="project-name">nome: Projeto D</p>
                  <p className="company-name">empresa: Empresa W</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
            </div>
            <button className="nav-button next">›</button>
          </div>

          <hr className="section-divider" />
          
          <div className="hackathons-section">
            <h2>HACKATHONS</h2>
            <div className="hackathons-carousel">
              <button className="nav-button prev">‹</button>
              <div className="hackathon-cards">
                <div className="hackathon-card">
                  <h3>Nome do hackathon</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat, tortor tempus ultricies sollicitudin, Nam viverra magna a metus.</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
                <div className="hackathon-card">
                  <h3>Nome do hackathon</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut feugiat, tortor tempus ultricies sollicitudin, Nam viverra magna a metus.</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
              <button className="nav-button next">›</button>
            </div>
          </div>

          <hr className="section-divider" />

          <div className="groups-section">
            <h2>GRUPOS</h2>
            <div className="groups-carousel">
              <button className="nav-button prev">‹</button>
              <div className="group-cards">
                <div className="group-card">
                  <h3>Grupo 1</h3>
                  <p>Grupo de desenvolvimento web focado em React e TypeScript</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
                <div className="group-card">
                  <h3>Grupo 2</h3>
                  <p>Grupo de UI/UX Design e prototipação</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
                <div className="group-card">
                  <h3>Grupo 3</h3>
                  <p>Grupo de estudos em DevOps e Cloud</p>
                  <div className="card-buttons">
                    <button className="participate">participar</button>
                    <button className="learn-more">saber+</button>
                  </div>
                </div>
              </div>
              <button className="nav-button next">›</button>
            </div>
          </div>
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