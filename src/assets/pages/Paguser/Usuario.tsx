import { useState } from 'react';
import { MdSearch, MdDarkMode, MdLightMode, MdNotifications, MdAdd, MdChat, MdChevronLeft, MdChevronRight } from 'react-icons/md';
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
      name: 'nome:',
      company: 'empresa:',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Em andamento'
    },
    {
      id: 2,
      name: 'nome:',
      company: 'empresa:',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Em andamento'
    },
    {
      id: 3,
      name: 'nome:',
      company: 'empresa adicional 1',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Em andamento'
    },
  ];

  const hackathons = [
    {
      id: 1,
      name: 'Nome do hackathon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'Nome do hackathon',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 3,
      name: 'Hackathon adicional 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const groups = [
    { id: 1, name: 'Grupo 1' },
    { id: 2, name: 'Grupo 2' },
    { id: 3, name: 'Grupo 3' }
  ];

  const languages = [
    { name: 'JavaScript', level: 'intermediário' },
    { name: 'Python', level: 'avançado' },
    { name: 'Java', level: 'iniciante' }
  ];

  const achievements = [
    { title: 'Desenvolvedor Experiente', progress: 75 },
    { title: 'Mestre dos Hackathons', progress: 40 },
    { title: 'Colaborador Elite', progress: 27 }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Header */}
      <header className="fixed top-0 w-full h-10 bg-blue-100 dark:bg-gray-800 flex items-center justify-between px-4 z-50">
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/contato">Contato</a>
          <a href="/sobre">Sobre</a>
        </nav>
        <div className="flex items-center gap-4">
          <MdAdd className="cursor-pointer" />
          <MdNotifications className="cursor-pointer" />
          <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full cursor-pointer" />
          <button onClick={toggleTheme}>
            {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
      </header>

      {/* Left Sidebar */}
      <aside className="fixed left-0 w-[180px] h-full bg-white dark:bg-gray-800 border-r">
        <div className="flex flex-col h-full p-4">
          <div className="flex flex-col items-center mb-4">
            <img src="/avatar.png" alt="Profile" className="w-20 h-20 rounded-full mb-2" />
            <h3 className="font-semibold">nome</h3>
            <p className="text-sm text-gray-500">Função</p>
          </div>

          <nav className="flex-1 flex flex-col gap-2">
            <a href="/" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Página Inicial</span>
            </a>
            <a href="/notifications" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Notificações</span>
            </a>
            <a href="/messages" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Mensagens</span>
            </a>
            <a href="/hackathons" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Hackathons</span>
            </a>
            <a href="/projects" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Projetos</span>
            </a>
            <a href="/teams" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Equipes</span>
            </a>
            <a href="/profile" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Perfil</span>
            </a>
            <a href="/settings" className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <span>Configurações</span>
            </a>
          </nav>

          <div className="mt-auto">
            <button className="w-full bg-blue-500 text-white rounded-lg py-2 mb-4">
              Editar Perfil
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-[180px] mt-10 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-96">
                <input
                  type="text"
                  placeholder="Procurar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border"
                />
                <MdSearch className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {categories.map(category => (
                <button 
                  key={category}
                  className={`px-4 py-2 rounded-lg ${
                    selectedCategory === category 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map(project => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{project.company}</p>
                  <p className="mt-2">{project.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 bg-blue-500 text-white rounded">Participar</button>
                    <button className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded">Saber mais</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hackathons Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Hackathons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {hackathons.map(hackathon => (
                <div key={hackathon.id} className="bg-gray-900 text-white rounded-lg p-4 shadow">
                  <h3 className="font-semibold">{hackathon.name}</h3>
                  <p className="mt-2">{hackathon.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 bg-white text-gray-900 rounded">Participar</button>
                    <button className="px-3 py-1 bg-gray-700 text-white rounded">Saber mais</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Groups Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Grupos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {groups.map(group => (
                <div key={group.id} className="bg-green-100 rounded-lg p-4 min-w-[300px]">
                  <h3 className="font-semibold">{group.name}</h3>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 bg-white rounded">Participar</button>
                    <button className="px-3 py-1 bg-white rounded">Saber mais</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="fixed right-0 w-64 h-full bg-white dark:bg-gray-800 border-l p-4">
        <section className="mb-8">
          <h3 className="font-semibold mb-4">Linguagens</h3>
          <div className="space-y-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex justify-between">
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold mb-4">Progresso dos selos</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span>{achievement.title}</span>
                  <span>{achievement.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded">
                  <div 
                    className="h-full bg-blue-500 rounded"
                    style={{ width: `${achievement.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </aside>

      {/* Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-4 right-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg"
      >
        <MdChat size={24} />
      </button>

      {showChat && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
          {/* Chat interface */}
        </div>
      )}
    </div>
  );
};

export default Usuario;