
import { useState } from 'react';
import { MdCode, MdLanguage, MdDelete } from 'react-icons/md';
import { FaTrophy } from 'react-icons/fa';
import './RightSidebar.css';

interface Language {
  name: string;
  level: string;
}

const RightSidebar = () => {
  const [programmingLanguages, setProgrammingLanguages] = useState<Language[]>([
    { name: 'JavaScript', level: 'intermediario' },
    { name: 'Python', level: 'avancado' },
    { name: 'Java', level: 'iniciante' }
  ]);

  const [languages, setLanguages] = useState<Language[]>([
    { name: 'Inglês', level: 'intermediario' },
    { name: 'Espanhol', level: 'iniciante' }
  ]);

  const [selectedProgrammingLanguage, setSelectedProgrammingLanguage] = useState('');
  const [selectedProgrammingLevel, setSelectedProgrammingLevel] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLanguageLevel, setSelectedLanguageLevel] = useState('');

  const addProgrammingLanguage = () => {
    if (selectedProgrammingLanguage && selectedProgrammingLevel) {
      setProgrammingLanguages([...programmingLanguages, {
        name: selectedProgrammingLanguage,
        level: selectedProgrammingLevel
      }]);
      setSelectedProgrammingLanguage('');
      setSelectedProgrammingLevel('');
    }
  };

  const addLanguage = () => {
    if (selectedLanguage && selectedLanguageLevel) {
      setLanguages([...languages, {
        name: selectedLanguage,
        level: selectedLanguageLevel
      }]);
      setSelectedLanguage('');
      setSelectedLanguageLevel('');
    }
  };

  const removeProgrammingLanguage = (index: number) => {
    setProgrammingLanguages(programmingLanguages.filter((_, i) => i !== index));
  };

  const removeLanguage = (index: number) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  return (
    <div className="right-sidebar">
      <div className="section">
        <h2><MdCode /> Linguagens</h2>
        <div className="language-selector">
          <select 
            value={selectedProgrammingLanguage}
            onChange={(e) => setSelectedProgrammingLanguage(e.target.value)}
          >
            <option value="">Selecionar...</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
          <select 
            value={selectedProgrammingLevel}
            onChange={(e) => setSelectedProgrammingLevel(e.target.value)}
          >
            <option value="">Iniciante</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
        <button className="add-button" onClick={addProgrammingLanguage}>
          Adicionar
        </button>
        <div className="language-list">
          {programmingLanguages.map((lang, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className={`level-badge ${lang.level}`}>{lang.level}</span>
              <button 
                className="delete-button"
                onClick={() => removeProgrammingLanguage(index)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2><MdLanguage /> Idiomas</h2>
        <div className="language-selector">
          <select 
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="">Selecionar...</option>
            <option value="Inglês">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Francês">Francês</option>
          </select>
          <select 
            value={selectedLanguageLevel}
            onChange={(e) => setSelectedLanguageLevel(e.target.value)}
          >
            <option value="">Iniciante</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
        <button className="add-button" onClick={addLanguage}>
          Adicionar
        </button>
        <div className="language-list">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span className="language-name">{lang.name}</span>
              <span className={`level-badge ${lang.level}`}>{lang.level}</span>
              <button 
                className="delete-button"
                onClick={() => removeLanguage(index)}
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2><FaTrophy /> Progresso dos selos</h2>
        <div className="progress-item">
          <div className="progress-header">
            <span>Desenvolvedor Experiente</span>
            <span>75%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '75%' }}></div>
          </div>
          <span className="progress-subtitle">5 projetos finalizados</span>
        </div>

        <div className="progress-item">
          <div className="progress-header">
            <span>Mestre dos Hackathons</span>
            <span>40%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '40%' }}></div>
          </div>
          <span className="progress-subtitle">2 hackathons participados</span>
        </div>

        <div className="progress-item">
          <div className="progress-header">
            <span>Colaborador Elite</span>
            <span>0%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '0%' }}></div>
          </div>
          <span className="progress-subtitle">0 contribuições</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
