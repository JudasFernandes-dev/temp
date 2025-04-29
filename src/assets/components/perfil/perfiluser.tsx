import { useEffect, useState } from 'react';
import { MdPhone, MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

import selo1 from './img/image.png';
import selo2 from './img/image (1).png';
import selo3 from './img/image (2).png';

interface Participante {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  // Add other properties if needed
}

const PerfilParticipante: React.FC = () => {
    const [participante, setParticipante] = useState<Participante | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const participanteLogado = localStorage.getItem('participanteLogado');
        if (participanteLogado) {
            try {
                const dados = JSON.parse(participanteLogado) as Participante;
                setParticipante(dados);
            } catch (error) {
                console.error('Erro ao parsear dados do participante:', error);
                localStorage.removeItem('participanteLogado');
            }
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('participanteLogado');
        navigate('/');
    };

    if (!participante) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="perfil-lateral-container">
            <div className="perfil-info">
                <div className="perfil-header">
                    <h2>{participante.nome}</h2>
                    <p>CPF: {participante.cpf}</p>
                </div>

                <div className="perfil-contato">
                    <MdPhone />
                    <p>{participante.telefone}</p>
                </div>

                <div className="perfil-email">
                    <MdEmail />
                    <p>{participante.email}</p>
                </div>
            </div>

            <div className="profile-actions">
                <button className="profile-btn primary" onClick={() => navigate('/edit-profile')}>
                    Editar Perfil
                </button>
                <button className="profile-btn secondary" onClick={handleLogout}>
                    Sair
                </button>
            </div>
        </div>
    );
};

export default PerfilParticipante;