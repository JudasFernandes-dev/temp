import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AlunoInstituicao from "../components/login-cadastro/AlunoInstituicao";
import CadastroParticipante from "../components/login-cadastro/CadastroParticipante";
import CadastroEmpresa from "../components/login-cadastro/CadastroEmpresa";
import Arvore from "../components/login-cadastro/Arvore";
import "../components/login-cadastro/pagcadastro.css";

function PagCadastro() {
  
  const [tipo, setTipo] = useState<string | null>(null);
  const location = useLocation(); // Hook para acessar a localização (rota atual)

  // Reinicia o estado quando a rota muda
  useEffect(() => {
    console.log("Reiniciando estado para a rota:", location.pathname);
    setTipo(null); // Reinicia o estado ao mudar de rota
  }, [location.pathname]); // Executa sempre que o caminho da rota mudar

  const retornaTipo = () => {
    if (tipo === "participante") {
      return <CadastroParticipante />;
    } else if (tipo === "empresa") {
      return <CadastroEmpresa />;
    } else if (tipo === null) {
      return <AlunoInstituicao tela="cadastro1" TipoEscolhido={setTipo} />;
    }
    return null; // Fallback para casos inesperados
  };

  
  return (
    <>
      <main className="main-pagcadastro">
        <section className="section-pagcadastro">
          <Arvore
           />
          {retornaTipo()}
        </section>
      </main>
    </>
  );
}

export default PagCadastro;
