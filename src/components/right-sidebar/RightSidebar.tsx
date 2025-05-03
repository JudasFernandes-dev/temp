
import { useState } from 'react';
import { FaTrashAlt, FaCog } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';
import { MdCode, MdLanguage } from 'react-icons/md';

interface Item {
  nome: string;
  nivel: 'iniciante' | 'intermediario' | 'avancado';
  icone: JSX.Element;
  corTag: string;
}

export default function RightSidebar() {
  const [linguagens, setLinguagens] = useState<Item[]>([
    { nome: 'JavaScript', nivel: 'intermediario', icone: <span className="text-yellow-500 font-bold">JS</span>, corTag: 'bg-blue-500' },
    { nome: 'Python', nivel: 'avancado', icone: <span className="text-blue-600 font-bold">🐍</span>, corTag: 'bg-blue-700' },
    { nome: 'Java', nivel: 'iniciante', icone: <span className="text-red-400 font-bold">☕</span>, corTag: 'bg-blue-300' }
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
        icone: <span className="font-bold">💻</span>,
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
        icone: <span className="font-bold">🌍</span>,
        corTag: 'bg-blue-400'
      }]);
      setNovoIdioma('');
    }
  };

  const removerItem = (nome: string, tipo: 'linguagem' | 'idioma') => {
    if (tipo === 'linguagem') setLinguagens(linguagens.filter(l => l.nome !== nome));
    else setIdiomas(idiomas.filter(i => i.nome !== nome));
  };

  return (
    <div className="w-80 p-4 bg-white shadow-md h-screen overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Linguagens</h2>
        <FaCog className="text-gray-500" />
      </div>

      <section className="mb-6">
        <div className="flex items-center text-purple-600 mb-2">
          <MdCode className="mr-2" />
          <h3 className="font-medium">programação</h3>
        </div>
        <div className="flex gap-2 mb-2">
          <input
            value={novaLingua}
            onChange={(e) => setNovaLingua(e.target.value)}
            placeholder="Selecionar..."
            className="flex-1 border px-2 py-1 rounded"
          />
          <select
            value={nivelLingua}
            onChange={(e) => setNivelLingua(e.target.value as any)}
            className="border px-2 py-1 rounded"
          >
            <option>iniciante</option>
            <option>intermediario</option>
            <option>avancado</option>
          </select>
        </div>
        <button onClick={adicionarLinguagem} className="w-full bg-blue-600 text-white py-2 rounded">Adicionar</button>
        <div className="mt-3 space-y-2">
          {linguagens.map(({ nome, nivel, icone, corTag }) => (
            <div key={nome} className="flex items-center justify-between bg-gray-100 rounded px-2 py-1">
              <div className="flex items-center gap-2">
                {icone}<span>{nome}</span>
                <span className={`text-white text-xs px-2 rounded ${corTag}`}>{nivel}</span>
              </div>
              <FaTrashAlt onClick={() => removerItem(nome, 'linguagem')} className="text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <div className="flex items-center text-blue-500 mb-2">
          <MdLanguage className="mr-2" />
          <h3 className="font-medium">Idiomas</h3>
        </div>
        <div className="flex gap-2 mb-2">
          <input
            value={novoIdioma}
            onChange={(e) => setNovoIdioma(e.target.value)}
            placeholder="Selecionar..."
            className="flex-1 border px-2 py-1 rounded"
          />
          <select
            value={nivelIdioma}
            onChange={(e) => setNivelIdioma(e.target.value as any)}
            className="border px-2 py-1 rounded"
          >
            <option>iniciante</option>
            <option>intermediario</option>
            <option>avancado</option>
          </select>
        </div>
        <button onClick={adicionarIdioma} className="w-full bg-blue-600 text-white py-2 rounded">Adicionar</button>
        <div className="mt-3 space-y-2">
          {idiomas.map(({ nome, nivel, icone, corTag }) => (
            <div key={nome} className="flex items-center justify-between bg-gray-100 rounded px-2 py-1">
              <div className="flex items-center gap-2">
                {icone}<span>{nome}</span>
                <span className={`text-white text-xs px-2 rounded ${corTag}`}>{nivel}</span>
              </div>
              <FaTrashAlt onClick={() => removerItem(nome, 'idioma')} className="text-red-500 cursor-pointer" />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center text-gray-700 font-medium mb-3">
          <BsDot className="text-2xl" /> Progresso dos selos
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between">
              <span className="text-green-600 font-medium">Desenvolvedor Experiente</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-500">5 projetos finalizados</p>
          </div>
          <div>
            <div className="flex justify-between">
              <span className="text-purple-500 font-medium">Mestre dos Hackathons</span>
              <span>40%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p className="text-sm text-gray-500">2 hackathons participados</p>
          </div>
          <div>
            <span className="text-blue-600 font-medium">Colaborador Elite</span>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '27%' }}></div>
            </div>
            <p className="text-sm text-gray-500">8 contribuições</p>
          </div>
        </div>
      </section>
    </div>
  );
}
