
import { useState } from 'react';
import { MdSearch, MdSunny, MdNotifications, MdAdd, MdChat } from 'react-icons/md';
import './usuario.css';

const Usuario = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [showChat, setShowChat] = useState(false);

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
      company: 'empresa:',
      description: 'Lorem ipsum dolor sit amet',
      status: 'Em andamento'
    },
  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Header */}
      <header className="fixed top-0 w-full h-10 bg-blue-100 dark:bg-gray-800 flex items-center justify-between px-4">
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/contato">Contato</a>
          <a href="/sobre">Sobre</a>
        </nav>
        <div className="flex items-center gap-4">
          <MdAdd />
          <MdNotifications />
          <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full" />
          <MdSunny className="cursor-pointer" />
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
          
          <nav className="flex-1">
            <a href="/page" className="flex items-center py-2">Página Inicial</a>
            <a href="/notifications" className="flex items-center py-2">Notificações</a>
            <a href="/messages" className="flex items-center py-2">Mensagens</a>
            <a href="/hackathons" className="flex items-center py-2">Hackathons</a>
            <a href="/projects" className="flex items-center py-2">Projetos</a>
            <a href="/teams" className="flex items-center py-2">Equipes</a>
            <a href="/profile" className="flex items-center py-2">Perfil</a>
            <a href="/settings" className="flex items-center py-2">Configurações</a>
          </nav>

          <div className="mt-4 flex justify-center gap-2">
            <span className="w-8 h-8 bg-yellow-400 rounded-full"></span>
            <span className="w-8 h-8 bg-green-400 rounded-full"></span>
            <span className="w-8 h-8 bg-red-400 rounded-full"></span>
          </div>

          <div className="text-center text-sm text-gray-500 mt-4">
            v1.0.0
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
                  placeholder="Pesquisar projetos..."
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

          {/* Projects Carousel */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Projetos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map(project => (
                <div key={project.id} className="bg-blue-100 rounded-lg p-4">
                  <h3 className="font-semibold">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.company}</p>
                  <p className="mt-2">{project.description}</p>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-1 bg-white rounded">participar</button>
                    <button className="px-3 py-1 bg-white rounded">saber</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Hackathons Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Hackathons</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Similar structure as projects but with dark background */}
            </div>
          </section>

          {/* Groups Section */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Grupos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Similar structure as projects but with green background */}
            </div>
          </section>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="fixed right-0 w-64 h-full bg-white dark:bg-gray-800 border-l p-4">
        <section className="mb-8">
          <h3 className="font-semibold mb-4">Linguagens</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>JavaScript</span>
              <span>intermediário</span>
            </div>
            <div className="flex justify-between">
              <span>Python</span>
              <span>avançado</span>
            </div>
            <div className="flex justify-between">
              <span>Java</span>
              <span>iniciante</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="font-semibold mb-4">Progresso dos selos</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Desenvolvedor Experiente</span>
                <span>75%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded">
                <div className="h-full w-3/4 bg-blue-500 rounded"></div>
              </div>
            </div>
            {/* Add more progress bars */}
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
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-xl">
          {/* Chat interface */}
        </div>
      )}
    </div>
  );
};

export default Usuario;
