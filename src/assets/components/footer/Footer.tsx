
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-message">
          <p>Conectando pessoas do mesmo cosmo</p>
        </div>
        
        <div className="footer-sections">
          <div className="footer-column">
            <h3>SOBRE NÓS</h3>
            <ul>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Como funciona</a></li>
              <li><a href="#">Trabalhe conosco</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>LINKS ÚTEIS</h3>
            <ul>
              <li><a href="#">Documentação</a></li>
              <li><a href="#">Política de privacidade</a></li>
              <li><a href="#">Termos de uso</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>INFORMAÇÕES</h3>
            <ul>
              <li>Juncal 475</li>
              <li>+11 11 42 742 01 08</li>
              <li>Digital • AI Strategy 3D</li>
              <li>HELLO Digital</li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link">f</a>
          <a href="#" className="social-link">t</a>
          <a href="#" className="social-link">i</a>
          <a href="#" className="social-link">g</a>
        </div>

        <div className="footer-copyright">
          <p>© 2025 DevCollaborative. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
