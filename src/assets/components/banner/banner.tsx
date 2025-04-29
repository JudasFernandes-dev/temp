import './assets/css/banner.css'; 
import { FaPhone, FaEnvelope } from 'react-icons/fa';

/**
 * Componente Banner
 * /**
 * Componente: Banner
 * Exibe um banner com título, subtítulo, citação, botão e detalhes de contato.
 * É estilizado através do arquivo CSS `banner.css` e utiliza ícones da biblioteca `react-icons`.
 * 
 * @returns {JSX.Element} Estrutura JSX do banner.
 */

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      {/* Conteúdo principal do banner */}
      <div className="banner-content">
        
        {/* Título e logo */}
        <div className="logo-title-wrapper">
          <h1 className="banner-title">Re9ção</h1>
        </div>
        
        {/* Subtítulo */}
        <div className="subtitle-section">
          <span className="subtitle-highlight">Soluções Integradas </span>
        </div>
        
        {/* Citação */}
        <p className="banner-quote">
          “Unir-se é um bom começo, manter a união é um progresso, <br /> e trabalhar em conjunto é a vitória.” (Henry Ford)
        </p>
        
        {/* Botão "Saiba +" */}
        <button className="button-learn-more">Saiba +</button>
        
        {/* Detalhes de contato */}
        <div className="contact-details">
          <div className="contact-detail-item">
            <FaPhone className="contact-icon" /> (81) 99999-7890
          </div>
          <div className="contact-detail-item">
            <FaEnvelope className="contact-icon" /> re9cao@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



