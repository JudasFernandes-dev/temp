
import { useState } from 'react';
import { FaTrashAlt, FaCog } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { MdCode, MdLanguage } from 'react-icons/md';
import './RightSidebar.css';

interface Item {
  nome: string;
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  icone: JSX.Element;
  corTag: string;
}

export default function RightSidebar() {
  const [linguagens, setLinguagens] = useState<Item[]>([
    { nome: 'JavaScript', nivel: 'intermediario', icone: <span className="text-yellow-500">JS</span>, corTag: 'bg-blue-500' },
    { nome: 'Python', nivel: 'avancado', icone: <span className="text-blue-600">🐍</span>, corTag: 'bg-blue-700' },
    { nome: 'Java', nivel: 'iniciante', icone: <span className="text-red-400">☕</span>, corTag: 'bg-blue-300' }
  ]);

  const [idiomas, setIdiomas] = useState<Item[]>([
    { nome: 'Inglês', nivel: 'intermediario', icone: <span>🇺🇸</span>, corTag: 'bg-purple-500' },
    { nome: 'Espanhol', nivel: 'iniciante', icone: <span>🇪🇸</span>, corTag: 'bg-blue-300' }
  ]);

  const [novaLingua, setNovaLingua] = useState('');
  const [nivelLingua, setNivelLingua] = useState<'iniciante' | 'intermediario' | 'avancado'>('iniciante');
  const [novoIdioma, setNovoIdioma] = useState('');
  const [nivelIdioma, setNivelIdioma] = useState<'iniciante' | 'intermediario' | 'avancado'>('iniciante');

  const adicionarLinguagem = () => {
    if (novaLingua && !linguagens.find(l => l.nome === novaLingua)) {
      setLinguagens([...linguagens, {
        nome: novaLingua,
        nivel: nivelLingua,
        icone: <span>💻</span>,
        corTag: 'bg-blue-400'
      }]);
      setNovaLingua('');
    }
  };

  const adicionarIdioma = () => {
    if (novoIdioma && !idiomas.find(i => i.nome === novoIdioma)) {
      setIdiomas([...idiomas, {
        nome: novoIdioma,
        nivel: nivelIdioma,
        icone: <span>🌍</span>,
        corTag: 'bg-blue-400'
      }]);
      setNovoIdioma('');
    }
  };

  const removerItem = (nome: string, tipo: 'linguagem' | 'idioma') => {
    if (tipo === 'linguagem') {
      setLinguagens(linguagens.filter(l => l.nome !== nome));
    } else {
      setIdiomas(idiomas.filter(i => i.nome !== nome));
    }
  };

  return (
    <div className="right-sidebar">
      <div className="section-header">
        <h2>Linguagens</h2>
        <FaCog className="settings-icon" />
      </div>

      <section className="section">
        <div className="section-title">
          <MdCode />
          <h3>Programação</h3>
        </div>
        
        <div className="input-group">
          <input
            type="text"
            value={novaLingua}
            onChange={(e) => setNovaLingua(e.target.value)}
            placeholder="Adicionar linguagem..."
            className="input-field"
          />
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
          {linguagens.map((item) => (
            <div key={item.nome} className="item">
              <div className="item-content">
                {item.icone}
                <span>{item.nome}</span>
                <span className={`tag ${item.corTag}`}>{item.nivel}</span>
              </div>
              <FaTrashAlt
                onClick={() => removerItem(item.nome, 'linguagem')}
                className="delete-icon"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <MdLanguage />
          <h3>Idiomas</h3>
        </div>
        
        <div className="input-group">
          <input
            type="text"
            value={novoIdioma}
            onChange={(e) => setNovoIdioma(e.target.value)}
            placeholder="Adicionar idioma..."
            className="input-field"
          />
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
          {idiomas.map((item) => (
            <div key={item.nome} className="item">
              <div className="item-content">
                {item.icone}
                <span>{item.nome}</span>
                <span className={`tag ${item.corTag}`}>{item.nivel}</span>
              </div>
              <FaTrashAlt
                onClick={() => removerItem(item.nome, 'idioma')}
                className="delete-icon"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <BsDot />
          <h3>Progresso dos Selos</h3>
        </div>
        
        <div className="progress-list">
          <div className="progress-item">
            <div className="progress-header">
              <span>Desenvolvedor Experiente</span>
              <span>75%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '75%' }}></div>
            </div>
            <p className="progress-subtitle">5 projetos finalizados</p>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Mestre dos Hackathons</span>
              <span>40%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '40%' }}></div>
            </div>
            <p className="progress-subtitle">2 hackathons participados</p>
          </div>

          <div className="progress-item">
            <div className="progress-header">
              <span>Colaborador Elite</span>
              <span>27%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '27%' }}></div>
            </div>
            <p className="progress-subtitle">8 contribuições</p>
          </div>
        </div>
      </section>
    </div>
  );
}
