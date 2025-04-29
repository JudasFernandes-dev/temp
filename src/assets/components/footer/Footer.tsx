import './footer.css';
import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='footer'>
            <div className='top-footer'>
                <p>Conecte-se conosco nas redes sociais:</p>
                <ul>
                    <li><a className='icon-rede-footer' href="https://www.instagram.com/re9.acao" target='_blank' rel='external'><FaInstagram /></a></li>
                    <li><a className='icon-rede-footer' href="https://www.facebook.com/Re9Acao.Solucoes/" target='_blank' rel='external'><FaFacebook /></a></li>
                    <li><a className='icon-rede-footer' href="https://mail.google.com/mail/u/0/?fs=1&to=contato@re9acao.com.br&su=Assunto+do+Email&body=Mensagem+inicial+aqui.&tf=cm" target='_blank' rel='external'><FaGoogle /></a></li>
                    <li><a className='icon-rede-footer' href="https://www.linkedin.com/in/gustavo-boudoux" target='_blank' rel='external'><FaLinkedin /></a></li>
                </ul>
            </div>
            <div className='middle-footer'>
                <div className="footer-column">
                    <h3>SOBRE NÓS</h3>
                    <ul>
                        <li><a href="#">Quem somos?</a></li>
                        <li><a href="#">Como funciona?</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>LINKS ÚTEIS</h3>
                    <ul>
                        <li><a href="#">Especialidades</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Termos de uso</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>INFORMAÇÕES</h3>
                    <ul>
                        <li><a href="#">@gmail.com</a></li>
                        <li><a href="#">+01 234 567 88</a></li>
                        <li><a href="#">Google Safe Browsing - Site 100% seguro</a></li>
                    </ul>
                </div>
            </div>
            <div className='bottom-footer'>
                <p>&copy; 2024, todos os direitos reservados</p>
            </div>
        </footer>
    );
}

export default Footer;
