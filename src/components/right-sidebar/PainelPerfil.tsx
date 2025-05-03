import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { MdCode, MdLanguage, MdSettings } from 'react-icons/md';
import Chat from '../../assets/components/chat/Chat';
import './PainelPerfil.css';

interface Item {
  nome: string;
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  icone: JSX.Element;
  corTag: string;
}

export default function PainelPerfil() {
  const [linguagens, setLinguagens] = useState<Item[]>([
    { nome: 'JavaScript', nivel: 'intermediario', icone: <span className="text-yellow-500">JS</span>, corTag: 'bg-blue-500' },
    { nome: 'Python', nivel: 'avancado', icone: <span className="text-blue-600">🐍</span>, corTag: 'bg-blue-700' },
    { nome: 'Java', nivel: 'iniciante', icone: <span className="text-red-400">☕</span>, corTag: 'bg-blue-300' },
    { nome: 'TypeScript', nivel: 'avancado', icone: <span className="text-blue-600">TS</span>, corTag: 'bg-purple-500' },
    { nome: 'C++', nivel: 'intermediario', icone: <span className="text-green-600">++</span>, corTag: 'bg-green-700' },
    { nome: 'Ruby', nivel: 'iniciante', icone: <span className="text-pink-400">💎</span>, corTag: 'bg-pink-300' },
    { nome: 'Go', nivel: 'intermediario', icone: <span className="text-teal-600">Gopher</span>, corTag: 'bg-teal-700' }
  ]);

  const [idiomas, setIdiomas] = useState<Item[]>([
    { nome: 'Inglês', nivel: 'intermediario', icone: <span>🇺🇸</span>, corTag: 'bg-purple-500' },
    { nome: 'Espanhol', nivel: 'iniciante', icone: <span>🇪🇸</span>, corTag: 'bg-blue-300' },
    { nome: 'Francês', nivel: 'avancado', icone: <span>🇫🇷</span>, corTag: 'bg-purple-700' },
    { nome: 'Alemão', nivel: 'intermediario', icone: <span>🇩🇪</span>, corTag: 'bg-green-500' },
    { nome: 'Italiano', nivel: 'iniciante', icone: <span>🇮🇹</span>, corTag: 'bg-yellow-300' },
    { nome: 'Português', nivel: 'avancado', icone: <span>🇵🇹</span>, corTag: 'bg-red-700' },
    { nome: 'Japonês', nivel: 'iniciante', icone: <span>🇯🇵</span>, corTag: 'bg-orange-300' }

  ]);

  const [novaLingua, setNovaLingua] = useState('');
  const [nivelLingua, setNivelLingua] = useState<'iniciante' | 'intermediario' | 'avancado'>('iniciante');
  const [novoIdioma, setNovoIdioma] = useState('');
  const [nivelIdioma, setNivelIdioma] = useState<'iniciante' | 'intermediario' | 'avancado'>('iniciante');
  return (
    <div className="painel-perfil">
      <Chat />


  const adicionarLinguagem = () => {
    if (novaLingua && !linguagens.find(l => l.nome === novaLingua)) {
      setLinguagens([...linguagens, {
        nome: novaLingua,
        nivel: nivelLingua,
        icone: <MdCode />,
        corTag: 'bg-blue-500'
      }]);
      setNovaLingua('');
    }
  };

  const adicionarIdioma = () => {
    if (novoIdioma && !idiomas.find(i => i.nome === novoIdioma)) {
      setIdiomas([...idiomas, {
        nome: novoIdioma,
        nivel: nivelIdioma,
        icone: <MdLanguage />,
        corTag: 'bg-purple-500'
      }]);
      setNovoIdioma('');
    }
  };

  const removerLinguagem = (index: number) => {
    setLinguagens(linguagens.filter((_, i) => i !== index));
  };

  const removerIdioma = (index: number) => {
    setIdiomas(idiomas.filter((_, i) => i !== index));
  };

  return (
    <div className="painel-perfil">
      <div className="section-header">
        <h2>Painel de Perfil</h2>
        <button className="config-button">
          <MdSettings size={20} />
        </button>
      </div>

      <section className="linguagens-section">
        <h2>Linguagens</h2>
        <div className="add-item">
          <select
            value={novaLingua}
            onChange={(e) => setNovaLingua(e.target.value)}
            className="select-field"
          >
            <option value="">Selecionar...</option>
            <option value="C++">C++</option>
            <option value="Ruby">Ruby</option>
            <option value="PHP">PHP</option>
            <option value="Go">Go</option>
            <option value="C#">C#</option>
            <option value="Swift">Swift</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Rust">Rust</option>
            <option value="Java">Java</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="TypeScript">TypeScript</option>


          </select>
          <select
            value={nivelLingua}
            onChange={(e) => setNivelLingua(e.target.value as any)}
            className="select-field"
          >
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
          <button onClick={adicionarLinguagem} className="add-button">
            Adicionar
          </button>
        </div>
        <div className="items-list">
          {linguagens.map((lang, index) => (
            <div key={index} className="item">
              <div className="item-content">
                {lang.icone}
                <span>{lang.nome}</span>
                <span className={`nivel-tag ${lang.nivel}`}>{lang.nivel}</span>
              </div>
              <button onClick={() => removerLinguagem(index)} className="remove-button">
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="idiomas-section">
        <h2>Idiomas</h2>
        <div className="add-item">
          <select
            value={novoIdioma}
            onChange={(e) => setNovoIdioma(e.target.value)}
            className="select-field"
          >
            <option value="">Selecionar...</option>
            <option value="Francês">Francês</option>
            <option value="Alemão">Alemão</option>
            <option value="Italiano">Italiano</option>
            <option value="Chinês">Chinês</option>
            <option value="Russo">Russo</option>
            <option value="Árabe">Árabe</option>
            <option value="Português">Português</option>
            <option value="Japonês">Japonês</option>
            <option value="Inglês">Inglês</option>
            <option value="Espanhol">Espanhol</option>

          </select>
          <select
            value={nivelIdioma}
            onChange={(e) => setNivelIdioma(e.target.value as any)}
            className="select-field"
          >
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
          <button onClick={adicionarIdioma} className="add-button">
            Adicionar
          </button>
        </div>
        <div className="items-list">
          {idiomas.map((idioma, index) => (
            <div key={index} className="item">
              <div className="item-content">
                {idioma.icone}
                <span>{idioma.nome}</span>
                <span className={`nivel-tag ${idioma.nivel}`}>{idioma.nivel}</span>
              </div>
              <button onClick={() => removerIdioma(index)} className="remove-button">
                <FaTrashAlt />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="chat-section">
        <button onClick={() => setShowChat(!showChat)}>Toggle Chat</button>
        {showChat && <Chat />}
      </section>

      <section className="progresso-section">
        <h2>Progresso dos selos</h2>
        <div className="progresso-item">
          <div className="progresso-header">
            <span>Desenvolvedor Experiente</span>
            <span>75%</span>
          </div>
          <div className="progresso-bar">
            <div className="progresso-fill" style={{ width: '75%' }} />
          </div>
          <span className="progresso-descricao">5 projetos finalizados</span>
        </div>

        <div className="progresso-item">
          <div className="progresso-header">
            <span>Mestre dos Hackathons</span>
            <span>40%</span>
          </div>
          <div className="progresso-bar">
            <div className="progresso-fill" style={{ width: '40%' }} />
          </div>
          <span className="progresso-descricao">2 hackathons participados</span>
        </div>

        <div className="progresso-item">
          <div className="progresso-header">
            <span>Colaborador Elite</span>
            <span>25%</span>
          </div>
          <div className="progresso-bar">
            <div className="progresso-fill" style={{ width: '25%' }} />
          </div>
          <span className="progresso-descricao">5 contribuições realizadas</span>
        </div>
      </section>
    </div>
  );
}