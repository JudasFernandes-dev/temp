import "./cadastros.css";
import { MdPerson, MdLock } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Usando useNavigate para redirecionamento
import axios from "axios";
import logotipo from "../../img/logocompletaa.png";

function LoginEmpresa() {
  const [info, setInfo] = useState({
    email: "",
    senha: "",
  });
  const [finalizado, setFinalizado] = useState(false);
  const [erro, setErro] = useState("");
  const navigate = useNavigate(); // Usando o hook useNavigate

  const atualizarInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((previnfo) => ({
      ...previnfo,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isComplet = Object.values(info).every((val) => val.trim() !== "");
    setFinalizado(isComplet);
  }, [info]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!finalizado) {
      alert("Preencha todos os campos para prosseguir");
      return;
    }

    try {
      // Requisição ao json-server para buscar as empresas com o mesmo e-mail e senha
      const response = await axios.get("http://localhost:3000/empresas", {
        params: {
          email: info.email,
          senha: info.senha,
        },
      });

      // Verificando se a empresa foi encontrada
      if (response.data.length > 0) {
        // Armazenando os dados da empresa no localStorage
        localStorage.setItem("empresaLogada", JSON.stringify(response.data[0]));
        // Login bem-sucedido, redirecionar para a página de perfil
        navigate("/pagempresa"); // Usando navigate para redirecionar
      } else {
        setErro("Email ou senha incorretos");
      }
    } catch (error) {
      setErro("Erro ao tentar realizar o login: " + (error instanceof Error ? error.message : 'Erro desconhecido'));
    }
  };

  // Função para voltar à página anterior
  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (

    <section className="cadastro-aluno-section">
    <img
          className="logotipo"
          src={logotipo}
          alt="renove logo"
        />
      {/* Adicionando a div left-side com os triângulos */}
      <div className="container-titulo-subtitulo-cadastro">
        <h1 className="titulo-formulario-cadastro">Login</h1>
      </div>

      <form
        autoComplete="email"
        onSubmit={handleSubmit}
        className="container-inputs-cadastro"
      >
        <div className="conatiner-input-icon">
          <div>
            <p>E-mail</p>
            <input
              name="email"
              onChange={atualizarInfo}
              className="input-component"
              type="email"
            />
          </div>
          <MdPerson size={24} style={{ transform: "scale(1.2)" }} />
        </div>

        <div className="conatiner-input-icon">
          <div>
            <p>Senha</p>
            <input
              name="senha"
              onChange={atualizarInfo}
              className="input-component"
              type="password"
            />
          </div>
          <MdLock size={24} style={{ transform: "scale(1.2)" }} />
        </div>

        <div className="button-container">
          <button
            className="botao-formulario-cadastro"
            type="button" // Mude para type="button"
            onClick={handleVoltar} // Adicionando a função handleVoltar
          >
            Voltar
          </button>
          <button className="botao-formulario-cadastro" type="submit">
            Entrar
          </button>
        </div>
      </form>

      <p className="texto-inscricao">
        Não tem uma conta? <a href="/pre-cadastro">Inscreva-se</a>
      </p>

      {erro && <p className="erro-login">{erro}</p>}
    </section>
  );
}

export default LoginEmpresa;
