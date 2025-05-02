
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-message">
        <h2>Conectando pessoas do mesmo cosmo</h2>
      </div>
      
      <div className="footer-content">
        <div className="footer-section">
          <h3>SOBRE NÓS</h3>
          <ul>
            <li><Link to="/quem-somos">Quem somos</Link></li>
            <li><Link to="/como-funciona">Como funciona</Link></li>
            <li><Link to="/trabalhe-conosco">Trabalhe conosco</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>LINKS ÚTEIS</h3>
          <ul>
            <li><Link to="/documentacao">Documentação</Link></li>
            <li><Link to="/privacidade">Política de privacidade</Link></li>
            <li><Link to="/termos">Termos de uso</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>INFORMAÇÕES</h3>
          <ul>
            <li>Recife, PE - Brasil</li>
            <li>(81) 99999-9999</li>
            <li>contato@empresa.com</li>
          </ul>
        </div>
      </div>

      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default Footer;
