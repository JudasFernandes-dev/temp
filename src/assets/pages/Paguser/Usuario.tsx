
import './usuario.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Usuario = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Design', 'Dev', 'Marketing', 'Gestão'];
  
  const projects = [
    {
      id: 1,
      name: 'Nome do projeto 1',
      company: 'Empresa A',
      status: 'Em andamento'
    },
    {
      id: 2, 
      name: 'Nome do projeto 2',
      company: 'Empresa B',
      status: 'Finalizado'
    },
    {
      id: 3,
      name: 'Nome do projeto 3', 
      company: 'Empresa C',
      status: 'Novo'
    }
  ];

  const handleSearch = () => {
    // Implementar lógica de busca
    console.log('Buscando por:', searchQuery);
  };

  const handleEditProfile = () => {
    window.open('/edit-profile', '_blank');
  };

  const handleParticipate = (projectId: number) => {
    console.log('Participando do projeto:', projectId);
    // Implementar lógica de participação
  };

  const handleMoreInfo = (projectId: number) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="main-users-container-principal">
      <aside className="perfil-lateral-container">
        <div className="profile-image">
          <img src="/user-avatar.png" alt="Profile" />
        </div>
        <h2>Nome do Usuário</h2>
        <p>@username</p>
        
        <nav className="profile-nav">
          <Link to="/funcao"><i className="fas fa-briefcase"></i> Função</Link>
          <Link to="/github"><i className="fab fa-github"></i> Github</Link>
          <Link to="/linkedin"><i className="fab fa-linkedin"></i> LinkedIn</Link>
          <Link to="/website"><i className="fas fa-link"></i> Link</Link>
        </nav>
        
        <button className="edit-profile-btn" onClick={handleEditProfile}>
          Editar Perfil
        </button>
      </aside>

      <main className="content-container">
        <div className="search-bar">
          <input 
            type="text"
            placeholder="Procurar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>

        <div className="categories">
          {categories.map(category => (
            <button 
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>Empresa: {project.company}</p>
              <div className="project-actions">
                <button 
                  className="participate-btn"
                  onClick={() => handleParticipate(project.id)}
                >
                  Participar
                </button>
                <button 
                  className="more-info-btn"
                  onClick={() => handleMoreInfo(project.id)}
                >
                  Saber +
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Usuario;
