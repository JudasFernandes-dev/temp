import "./cadastros-participante.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface InfoState {
  nome: string;
  telefone: string;
  cpf: string;
  email: string;
  senha: string;
  tipoUsuario: string;
  detalheUsuario: string;
  legal?: string;
}

function CadastroParticipante() {

  const location = useLocation();

  const [info, setInfo] = useState<InfoState>({
    nome: "",
    telefone: "",
    cpf: "",
    email: "",
    senha: "",
    tipoUsuario: "",
    detalheUsuario: "",
  });

  const [aceitaTermos, setAceitaTermos] = useState(false);

  // Opções para os dropdowns
  const Instituição = [
    "Ensino Fundamental",
    "Ensino Médio",
    "Graduação",
    "Pós-Graduação",
    "Mestrado",
    "Doutoradoteste"
  ];

  const Perfil = [
    "Mentor",
    "Cordenador",
    "Consultor",
    "Freelancer",
  ];


  useEffect(() => {
    setInfo({
      nome: "",
      telefone: "",
      cpf: "",
      email: "",
      senha: "",
      tipoUsuario: "",
      detalheUsuario: "",
    });
  }, [location.pathname]);

  // Formatação do telefone (DDD) X XXXX-XXXX
  const formatarTelefone = (value: string) => {
    const apenasNumeros = value.replace(/\D/g, '');
    
    if (apenasNumeros.length <= 2) {
      return `(${apenasNumeros}`;
    } else if (apenasNumeros.length <= 3) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    } else if (apenasNumeros.length <= 7) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 3)} ${apenasNumeros.slice(3, 7)}`;
    } else {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 3)} ${apenasNumeros.slice(3, 7)}-${apenasNumeros.slice(7, 11)}`;
    }
  };

  // Formatação do CPF 000.000.000-00
  const formatarCPF = (value: string) => {
    const apenasNumeros = value.replace(/\D/g, '');
    
    if (apenasNumeros.length <= 3) {
      return apenasNumeros;
    } else if (apenasNumeros.length <= 6) {
      return `${apenasNumeros.slice(0, 3)}.${apenasNumeros.slice(3)}`;
    } else if (apenasNumeros.length <= 9) {
      return `${apenasNumeros.slice(0, 3)}.${apenasNumeros.slice(3, 6)}.${apenasNumeros.slice(6)}`;
    } else {
      return `${apenasNumeros.slice(0, 3)}.${apenasNumeros.slice(3, 6)}.${apenasNumeros.slice(6, 9)}-${apenasNumeros.slice(9, 11)}`;
    }
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatarTelefone(e.target.value);
    setInfo(prev => ({
      ...prev,
      telefone: formattedValue
    }));
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatarCPF(e.target.value);
    setInfo(prev => ({
      ...prev,
      cpf: formattedValue
    }));
  };

  const handleTipoUsuarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo(prev => ({
      ...prev,
      tipoUsuario: e.target.value,
      detalheUsuario: "" // Limpa a seleção anterior quando muda o tipo
    }));
  };

  const handleDetalheUsuarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInfo(prev => ({
      ...prev,
      detalheUsuario: e.target.value
    }));
  };

  const limparFormatacao = (valor: string) => {
    return valor.replace(/\D/g, '');
  };

 

  const atualizarinfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((previnfo) => ({
      ...previnfo,
      [name]: value,
    }));
  };

  const isComplet = Object.values(info).every((val) => val.trim() !== "") && 
                   info.tipoUsuario !== "" && 
                   (info.tipoUsuario !== "Outros" || info.legal?.trim() !== "") &&
                   aceitaTermos;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isComplet) {
      alert("Preencha todos os campos e aceite os termos de uso para prosseguir.");
      return;
    }

    try {
      const dadosCadastro = {
        ...info,
        telefone: limparFormatacao(info.telefone),
        cpf: limparFormatacao(info.cpf),
        // Se for "Outros", usa o campo legal como detalhe
        detalheUsuario: info.tipoUsuario === "Outros" ? info.legal : info.detalheUsuario
      };

      const response = await axios.post(
        "http://localhost:3000/empresas",
        dadosCadastro
      );
      alert("Cadastro realizado com sucesso!");
      console.log("Resposta do servidor:", response.data);
      setInfo({
        nome: "",
        telefone: "",
        cpf: "",
        email: "",
        senha: "",
        tipoUsuario: "",
        detalheUsuario: "",
      });
      setAceitaTermos(false);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao cadastrar. Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <section className="cadastro-aluno-section">
        <div className="container-titulo-subtitulo-cadastro">
          <h1 className="titulo-formulario-cadastro">Cadastro</h1>
        </div>
        <form onSubmit={handleSubmit} className="container-inputs-cadastro">
          <div className="container-input-nome">
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

          <div className="container-input-e-mail">
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

          <div className="container-input-senha">
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

          <div className="container-input-cpf">
            <div>
              <p>CPF {" "}
                <span style={{ fontSize: "12px", color: "gray" }}>
                  (apenas números)
                </span></p>
              <input
                autoComplete="no"
                name="cpf"
                value={info.cpf}
                onChange={handleCPFChange}
                maxLength={14}
                className="input-component"
                type="text"
              />
            </div>
          </div>
          <div className="container-input-telefone">
            <div>
              <p>Telefone{" "}
                <span style={{ fontSize: "12px", color: "gray" }}>
                  (apenas números)
                </span>
              </p>
              <input
                autoComplete="no"
                name="telefone"
                value={info.telefone}
                onChange={handleTelefoneChange}
                maxLength={16}
                className="input-component"
                type="tel"
              />
            </div>
          </div>

          {/* Novo: Seleção de Tipo de Usuário */}
          <div className="container-tipo-usuario" >
            <h3>Você é:</h3>
            <label className={info.tipoUsuario === "Aluno" ? "label-selecionada" : ""}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative', // Necessário para posicionar o "check"
                marginRight: '14px', // Mantido do seu código original
              }}
            >
              <input
                type="radio"
                name="tipoUsuario"
                value="Aluno"
                checked={info.tipoUsuario === "Aluno"}
                onChange={handleTipoUsuarioChange}
                style={{
                  appearance: 'none',
                  marginRight: '4px',
                  width: '12px',
                  height: '12px',
                  border: '1px solid #1f1f1f',
                  borderRadius: '3px',
                  backgroundColor: '#fff', // Fundo branco quando não selecionado
                  // Estilo quando selecionado:
                  ...(info.tipoUsuario === "Aluno" && {
                    backgroundColor: '#007bff',
                    width: '12px', // Menor quando selecionado
                    height: '12px',
                    border: '1px solid #1f1f1f', // Borda azul para combinar
                  }),
                }}
              />
              {/* Checkmark (opcional) */}
              {info.tipoUsuario === "Aluno" && (
                <span 
                  style={{
                    position: 'absolute',
                    left: '3px', // Ajuste conforme o novo tamanho
                    top: '1px',
                    color: 'white',
                    fontSize: '10px', // Tamanho menor para combinar
                  }}
                >
                </span>
              )}
              Aluno
            </label>
            <label 
                className={info.tipoUsuario === "Professor" ? "label-selecionada" : ""}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  position: 'relative', // Necessário para posicionar o "check"
                  marginRight: '10px', // Mantido do seu código original
                }}
              >
                <input
                  type="radio"
                  name="tipoUsuario"
                  value="Professor"
                  checked={info.tipoUsuario === "Professor"}
                  onChange={handleTipoUsuarioChange}
                  style={{
                    appearance: 'none',
                    marginRight: '4px',
                    width: '12px',
                    height: '12px',
                    border: '1px solid #1f1f1f',
                    borderRadius: '3px',
                    backgroundColor: '#fff', // Fundo branco quando não selecionado
                    // Estilo quando selecionado:
                    ...(info.tipoUsuario === "Professor" && {
                      backgroundColor: '#007bff',
                      width: '12px', // Menor quando selecionado
                      height: '12px',
                      border: '1px solid #1f1f1f', // Borda azul para combinar
                    }),
                  }}
                />
                {/* Checkmark (opcional) */}
                {info.tipoUsuario === "Professor" && (
                  <span 
                    style={{
                      position: 'absolute',
                      left: '3px', // Ajuste conforme o novo tamanho
                      top: '1px',
                      color: 'white',
                      fontSize: '10px', // Tamanho menor para combinar
                    }}
                  >

                  </span>
                )}
                Professor
            </label>
            <label 
              className={info.tipoUsuario === "Outros" ? "label-selecionada" : ""}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative', // Necessário para posicionar o "check"
              }}
            >
              <input
                type="radio"
                name="tipoUsuario"
                value="Outros"
                checked={info.tipoUsuario === "Outros"}
                onChange={handleTipoUsuarioChange}
                style={{
                  appearance: 'none',
                  marginRight: '4px',
                  width: '12px',
                  height: '12px',
                  border: '1px solid #1f1f1f',
                  borderRadius: '3px',
                  backgroundColor: '#fff', // Fundo branco quando não selecionado

                  // Estilo quando selecionado:
                  ...(info.tipoUsuario === "Outros" && {
                    backgroundColor: '#007bff',
                    width: '12px', // Menor quando selecionado
                    height: '12px',
                    border: '1px solid #1f1f1f', // Borda azul para combinar
                  }),
                }}
              />
              {/* Checkmark (opcional) */}
              {info.tipoUsuario === "Outros" && (
                <span 
                  style={{
                    position: 'absolute',
                    left: '3px', // Ajuste conforme o novo tamanho
                    top: '1px',
                    color: 'white',
                    fontSize: '10px', // Tamanho menor para combinar
                  }}
                >
                </span>
              )}
              Outros
            </label>
          </div>

          {/* Campo condicional baseado na seleção */}
          {info.tipoUsuario === "Aluno" && (
            <div className="conatiner-input-icon">
              <div>
                <p>Instituição de Ensino</p>
                <select
                  name="detalheUsuario"
                  value={info.detalheUsuario}
                  onChange={handleDetalheUsuarioChange}
                  className="input-component"
                  required
                >
                  <option value="">Selecione...</option>
                  {Instituição.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
          {info.tipoUsuario === "Professor" && (
            <div className="conatiner-input-icon">
              <div>
                <p>Instituição de Ensino</p>
                <select
                  name="detalheUsuario"
                  value={info.detalheUsuario}
                  onChange={handleDetalheUsuarioChange}
                  className="input-component"
                  required
                >
                  <option value="">Selecione...</option>
                  {Instituição.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

            {info.tipoUsuario === "Outros" && (
            <div className="conatiner-input-icon">
              <div>
                <p>Selecione seu Perfil:</p>
                <select
                  name="detalheUsuario"
                  value={info.detalheUsuario}
                  onChange={handleDetalheUsuarioChange}
                  className="input-component"
                  required
                >
                  <option value="">Selecione...</option>
                  {Perfil.map((opcao) => (
                    <option key={opcao} value={opcao}>{opcao}</option>
                  ))}
                </select>
              </div>
            </div>
          )}



          <button className="secundary-button botao-formulario-cadastro">
            Cadastre-se
          </button>

          <a href="/pre-cadastro">
           <button type="button" className="secundary-button botao-formulario-cadastro">
           Voltar
          </button>
          </a>
        </form>
      </section>
    </>
  );
}

export default CadastroParticipante;