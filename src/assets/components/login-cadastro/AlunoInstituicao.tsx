import "./AlunoInstituicao.css";
import logotipo from "../../img/logocompleta.png";
import { useNavigate } from "react-router-dom";
import React from "react";

// Definindo as tipagens para as props
interface AlunoInstituicaoProps {
  TipoEscolhido: React.Dispatch<React.SetStateAction<string | null>>; // Aceita Dispatch<SetStateAction>
  tela: string; // String que define a tela atual ("cadastro" ou "login")
}

function AlunoInstituicao({ TipoEscolhido, tela }: AlunoInstituicaoProps) {
  const navigate = useNavigate();

  // Função para lidar com o clique no botão "Empresa / Instituição"
  const handleEmpresaClick = () => {
    console.log("Botão clicado! Atualizando estado...");
    TipoEscolhido("empresa"); // Define o tipo como "empresa"
  };

  // Função para lidar com o clique no botão "Participante"
  const handleParticipanteClick = () => {
    TipoEscolhido("participante"); // Define o tipo como "participante"
   
  };

  return (
    <>
      <section className="aluno-instituicao-section">
        <img
          className="logotipo-aluno-instituicao"
          src={logotipo}
          alt="renove logo"
        />
        <h2 className="chamada-aluno-instituicao-seletor">
          Selecione abaixo que tipo de{" "}
          {tela === "cadastro" ? "cadastro" : "login"} deseja realizar
        </h2>

        <div className="container-botoes-seletor">
          <button
            onClick={handleEmpresaClick} // Usa a função handleEmpresaClick
            className="primary-button"
          >
            Empresa / Instituição
          </button>
          <button
            onClick={handleParticipanteClick} // Usa a função handleParticipanteClick
            className="primary-button"
          >
            Participante
          </button>
        </div>
        <div className="container-botoes-seletor1">
          <button onClick={() => navigate("/")} className="primary-button">
            Voltar
          </button>
        </div>
        <p className="texto-inscricao">
          Já tem uma conta? <a href="/login">Faça o login</a>
        </p>
      </section>
    </>
  );
}

export default AlunoInstituicao;
