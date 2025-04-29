import "./cadastros.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface InfoState {
  nome: string;
  cep: string;
  cnpj: string;
  email: string;
  senha: string;
  cargo: string;
}

function CadastroEmpresa() {
 
  const location = useLocation();

  const [info, setInfo] = useState<InfoState>({
    nome: "",
    cep: "",
    cnpj: "",
    email: "",
    senha: "",
    cargo: "",
  });

  const [aceitaTermos, setAceitaTermos] = useState(false);

  useEffect(() => {
    setInfo({
      nome: "",
      cep: "",
      cnpj: "",
      email: "",
      senha: "",
      cargo: "",
    });
  }, [location.pathname]);

  

  const buscarEndereco = async (cep: string) => {
    try {
      const response = await axios.get(
        `https://cep.awesomeapi.com.br/json/${cep}`
      );
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o endereço:", error);
      return null;
    }
  };

  const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((previnfo) => ({
      ...previnfo,
      [name]: value,
    }));
  };

  const handleTipoEmpresaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((previnfo) => ({
      ...previnfo,
      cargo: e.target.value,
    }));
  };

  const handleTermosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAceitaTermos(e.target.checked);
  };

  const isComplet =
    Object.values(info).every((val) => val.trim() !== "") && aceitaTermos;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isComplet) {
      alert(
        "Preencha todos os campos e aceite os termos de uso para prosseguir."
      );
      return;
    }

    try {
      const endereco = await buscarEndereco(info.cep);

      if (!endereco) {
        alert("CEP inválido ou não encontrado.");
        return;
      }

      const dadosCadastro = {
        ...info,
        endereco: {
          rua: endereco.address_name,
          numero: "",
          cidade: endereco.city,
          estado: endereco.state,
          pais: "Brasil",
          latitude: endereco.lat,
          longitude: endereco.lng,
        },
      };

      const response = await axios.post(
        "http://localhost:3000/empresas",
        dadosCadastro
      );
      alert("Empresa cadastrada com sucesso!");
      console.log("Resposta do servidor:", response.data);
      setInfo({
        nome: "",
        cep: "",
        cnpj: "",
        email: "",
        senha: "",
        cargo: "",
      });
      setAceitaTermos(false);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao cadastrar a empresa. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <section className="cadastro-aluno-section">
        <div className="container-titulo-subtitulo-cadastro">
          <h1 className="titulo-formulario-cadastro">Cadastro</h1>
        </div>

        <div className="container-tipo-empresa">
          <label
            className={info.cargo === "Empresa" ? "label-selecionada" : ""}
          >
            <input
              type="radio"
              name="cargo"
              value="Empresa"
              checked={info.cargo === "Empresa"}
              onChange={handleTipoEmpresaChange}
            />
            Empresa
          </label>
          <label
            className={info.cargo === "Instituição" ? "label-selecionada" : ""}
          >
            <input
              type="radio"
              name="tipoinstituicao"
              value="Instituição"
              checked={info.cargo === "Instituição"}
              onChange={handleTipoEmpresaChange}
            />
            Instituição
          </label>
        </div>

        <form onSubmit={handleSubmit} className="container-inputs-cadastro">
          <div className="conatiner-input-icon">
            <div>
              <p>Nome</p>
              <input
                autoComplete="no"
                name="nome"
                value={info.nome}
                onChange={atualizarinfo}
                className="input-component"
                type="text"
              />
            </div>
          </div>

          <div className="conatiner-input-icon">
            <div>
              <p>E-mail</p>
              <input
                name="email"
                value={info.email}
                onChange={atualizarinfo}
                className="input-component"
                type="email"
              />
            </div>
          </div>

          <div className="conatiner-input-icon">
            <div>
              <p>Senha</p>
              <input
                name="senha"
                value={info.senha}
                onChange={atualizarinfo}
                className="input-component"
                type="password"
              />
            </div>
          </div>

          <div className="conatiner-input-icon">
            <div>
              <p>
                CNPJ{" "}
                <span style={{ fontSize: "12px", color: "gray" }}>
                  (apenas números)
                </span>
              </p>
              <input
                autoComplete="no"
                pattern="[0-9]{14}"
                maxLength={14}
                name="cnpj"
                value={info.cnpj}
                onChange={atualizarinfo}
                className="input-component"
                type="text"
              />
            </div>
          </div>

          <div className="conatiner-input-icon">
            <div>
              <p>Cargo</p>
              <input
                autoComplete="no"
                name="cargo"
                className="input-component"
                type="text"
              />
            </div>
          </div>

          <div className="conatiner-input-icon">
            <div>
              <p>
                CEP{" "}
                <span style={{ fontSize: "12px", color: "gray" }}>
                  (apenas números)
                </span>
              </p>
              <input
                autoComplete="no"
                name="cep"
                value={info.cep}
                onChange={atualizarinfo}
                pattern="[0-9]{8}"
                maxLength={8}
                className="input-component"
                type="text"
              />
            </div>
          </div>

          <div className="container-termos-uso">
            <label>
              <input
                type="checkbox"
                checked={aceitaTermos}
                onChange={handleTermosChange}
                required
              />
              Ao se registrar você concorda com os{" "}
              <a
                href="/termos-de-uso"
                target="_blank"
                rel="noopener noreferrer"
              >
                Termos de uso
              </a>
            </label>
          </div>

          <button className="secundary-button botao-formulario-cadastro">
            Cadastre-se
          </button>

          <button 
            type="button" 
            className="secundary-button botao-formulario-cadastro"
            onClick={() => window.location.href = '/pre-cadastro'}
            >
            Voltar
          </button>
        </form>
      </section>
    </>
  );
}

export default CadastroEmpresa;
