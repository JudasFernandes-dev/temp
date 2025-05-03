import './footer.css';
import { FaInstagram, FaFacebook, FaGoogle, FaLinkedin} from 'react-icons/fa';

function Footer () {
    return (
        <>
            <footer className='footer'>
                <div className='top-footer'>
                    <ul>
                        <li><a className='icon-rede-footer' href="https://www.instagram.com/re9.acao" target='_blank' rel='external'><FaInstagram /></a></li>
                        <li><a className='icon-rede-footer' href="https://www.facebook.com/Re9Acao.Solucoes/" target='_blank' rel='external'><FaFacebook /></a></li>
                        <li><a className='icon-rede-footer' href="https://mail.google.com/mail/u/0/?fs=1&to=contato@re9acao.com.br&su=Assunto+do+Email&body=Mensagem+inicial+aqui.&tf=cm" target='_blank' rel='external'><FaGoogle /></a></li>
                        <li><a className='icon-rede-footer' href="https://www.linkedin.com/in/gustavo-boudoux" target='_blank' rel='external'><FaLinkedin /></a></li>
                    </ul>
                </div>
                <div className='bottom-footer'>
                    <p>&copy;2024, todos os direitos reservados</p>
                </div>
            </footer>
    
        </>  
        
    );
};

export default Footer;