
import { useState } from 'react';
import { MdSettings, MdDelete } from 'react-icons/md';
import { BiCodeAlt } from 'react-icons/bi';
import { IoLanguage } from 'react-icons/io5';
import { FaJs, FaPython, FaJava, FaTrophy } from 'react-icons/fa';
import './RightSidebar.css';

const RightSidebar = () => {
  const [programmingLanguages, setProgrammingLanguages] = useState([
    { name: 'JavaScript', level: 'intermediario', icon: FaJs },
    { name: 'Python', level: 'avancado', icon: FaPython },
    { name: 'Java', level: 'iniciante', icon: FaJava }
  ]);

  const [languages, setLanguages] = useState([
    { name: 'Inglês', level: 'intermediario' },
    { name: 'Espanhol', level: 'iniciante' }
  ]);

  const [selectedProgramming, setSelectedProgramming] = useState('');
  const [selectedProgrammingLevel, setSelectedProgrammingLevel] = useState('iniciante');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedLanguageLevel, setSelectedLanguageLevel] = useState('iniciante');

  const handleAddProgramming = () => {
    if (selectedProgramming) {
      setProgrammingLanguages([...programmingLanguages, 
        { name: selectedProgramming, level: selectedProgrammingLevel, icon: FaJs }]);
      setSelectedProgramming('');
    }
  };

  const handleAddLanguage = () => {
    if (selectedLanguage) {
      setLanguages([...languages, { name: selectedLanguage, level: selectedLanguageLevel }]);
      setSelectedLanguage('');
    }
  };

  const handleRemoveProgramming = (index: number) => {
    setProgrammingLanguages(programmingLanguages.filter((_, i) => i !== index));
  };

  const handleRemoveLanguage = (index: number) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  return (
    <div className="right-sidebar">
      <div className="sidebar-header">
        <h2>Linguagens</h2>
        <MdSettings className="settings-icon" />
      </div>

      <div className="section">
        <div className="section-header">
          <BiCodeAlt className="icon-purple" />
          <span>programação</span>
        </div>
        
        <div className="selectors">
          <select value={selectedProgramming} onChange={(e) => setSelectedProgramming(e.target.value)}>
            <option value="">Selecionar...</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
          
          <select value={selectedProgrammingLevel} onChange={(e) => setSelectedProgrammingLevel(e.target.value)}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>

        <button className="add-button" onClick={handleAddProgramming}>
          Adicionar
        </button>

        <div className="language-list">
          {programmingLanguages.map((lang, index) => (
            <div key={index} className="language-item">
              <div className="language-info">
                <lang.icon className="language-icon" />
                <span>{lang.name}</span>
              </div>
              <div className="item-right">
                <span className={`level-badge ${lang.level}`}>{lang.level}</span>
                <button onClick={() => handleRemoveProgramming(index)} className="delete-btn">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <IoLanguage className="icon-blue" />
          <span>Idiomas</span>
        </div>
        
        <div className="selectors">
          <select value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="">Selecionar...</option>
            <option value="Inglês">Inglês</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Francês">Francês</option>
          </select>
          
          <select value={selectedLanguageLevel} onChange={(e) => setSelectedLanguageLevel(e.target.value)}>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>

        <button className="add-button" onClick={handleAddLanguage}>
          Adicionar
        </button>

        <div className="language-list">
          {languages.map((lang, index) => (
            <div key={index} className="language-item">
              <span>{lang.name}</span>
              <div className="item-right">
                <span className={`level-badge ${lang.level}`}>{lang.level}</span>
                <button onClick={() => handleRemoveLanguage(index)} className="delete-btn">
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <FaTrophy className="icon-trophy" />
          <span>Progresso dos selos</span>
        </div>
        
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
            <div className="progress-fill purple" style={{ width: '40%' }}></div>
          </div>
          <span className="progress-subtitle">2 hackathons participados</span>
        </div>

        <div className="progress-item">
          <div className="progress-header">
            <span>Colaborador Elite</span>
            <span>0%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill blue" style={{ width: '0%' }}></div>
          </div>
          <span className="progress-subtitle">0 contribuições</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
