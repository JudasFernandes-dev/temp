import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAttachFile } from 'react-icons/md';
import './cadprojeto.css';
import ApiIntegrationStep from "../../components/ApiIntegrationStep"; // ajuste o caminho se necessário


interface ProjetoInfo {
  nome: string;
  descricao: string;
  objetivo: string;
  responsavel: string;
  dataInicio: string;
  dataFim: string;
  participantes: string[];
  arquivo: File | null;
  premiacoes?: { posicao: number; premio: string }[];
  tamanhoProjeto?: string;
  estagio?: string;
  apiNecessaria?: string;
  categoriasApi?: string[]; // Adicionando categorias de API
  habilidades?: string[]; // Adicionando habilidades
}

const Cadprojeto: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Qual é o seu nível de experiência?',
    'Você já trabalhou em projetos semelhantes?',
    'Qual é a sua disponibilidade semanal?',
  ]);
  const [projetos, setProjetos] = useState<ProjetoInfo[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [customQuestion, setCustomQuestion] = useState<string>('');

  const [info, setInfo] = useState<ProjetoInfo>({
    nome: '',
    descricao: '',
    objetivo: '',
    responsavel: '',
    dataInicio: '',
    dataFim: '',
    participantes: [],
    arquivo: null,
    premiacoes: [],
    habilidades: [], // Adiciona o campo habilidades
  });

  const [finalizado, setFinalizado] = useState<boolean>(false);

  const fixedQuestions = [
    'Qual é o seu nível de experiência?',
    'Você já trabalhou em projetos semelhantes?',
    'Qual é a sua disponibilidade semanal?',
  ];

  const [customQuestions, setCustomQuestions] = useState<string[]>([]);

  // Limpa as perguntas adicionadas no step 5 ao carregar a página
  useEffect(() => {
    setSelectedItems([]);
  }, []);

  useEffect(() => {
    if (step === 5) {
      setSelectedItems([]); // Limpa as perguntas personalizadas ao entrar no step 5
    }
  }, [step]);

  const atualizarInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const maxSize = 25 * 1024 * 1024; // 25MB

      if (selectedFile.size > maxSize) {
        alert('Arquivo muito grande! Tamanho máximo permitido: 25MB');
        return;
      }

      setFile(selectedFile); // Atualiza o estado do arquivo
      setInfo((prev) => ({ ...prev, arquivo: selectedFile })); // Atualiza o campo `info.arquivo`
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelectedItems((prevItems) => {
      const updatedItems = checked
        ? [...prevItems, value] // Adiciona a pergunta se marcada
        : prevItems.filter((item) => item !== value); // Remove a pergunta se desmarcada

      return updatedItems;
    });
  };

  const handleAddQuestion = () => {
    if (customQuestion.trim() !== '' && customQuestions.length < 5) {
      setCustomQuestions((prevQuestions) => [...prevQuestions, customQuestion.trim()]);
      setCustomQuestion(''); // Limpa o campo de entrada
    }
  };

  const handleRemoveQuestion = (index: number) => {
    setCustomQuestions((prevQuestions) =>
      prevQuestions.filter((_, i) => i !== index)
    );
  };

  const handleAddHabilidade = () => {
    if (customQuestion.trim() !== '') {
      setInfo((prevInfo) => ({
        ...prevInfo,
        habilidades: [...(prevInfo.habilidades || []), customQuestion.trim()],
      }));
      setCustomQuestion(''); // Limpa o campo de entrada
    }
  };

  const handleRemoveHabilidade = (index: number) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      habilidades: prevInfo.habilidades?.filter((_, i) => i !== index),
    }));
  };

  useEffect(() => {
    console.log('Step:', step);
    console.log('File:', file);
    console.log('Finalizado:', finalizado);

    if (step === 1) {
      // Validação do Step 1
      setFinalizado(
        info.nome.trim() !== '' &&
        info.descricao.trim() !== '' &&
        info.objetivo.trim() !== '' &&
        info.responsavel.trim() !== ''
      );
    } else if (step === 2) {
      // Validação do Step 2
      setFinalizado(
        info.dataInicio.trim() !== '' &&
        info.dataFim.trim() !== '' // Remove a validação de participantes, se não for usada
      );
    } else if (step === 3) {
      // Validação do Step 3
      setFinalizado(
        Boolean(info.tamanhoProjeto) &&
        Boolean(info.estagio) &&
        Boolean(info.apiNecessaria)
      );
    } else if (step === 4) {
      // Validação do Step 4
      setFinalizado((info.premiacoes ?? []).length > 0);
    } else if (step === 5) {
      // Validação do Step 5
      setFinalizado(selectedItems.length > 0); // Verifica se pelo menos uma pergunta foi selecionada
    }
  }, [info, step, file, selectedItems]);

  useEffect(() => {
    if (step === 4 && (info.premiacoes?.length || 0) === 0) {
      const premiacoes = Array.from({ length: 1 }, (_, i) => ({
        posicao: i + 1,
        premio: "",
      }));
      setInfo((prev) => ({ ...prev, premiacoes }));
    }
  }, [step]);

  const nextStep = () => {
    if (finalizado) {
      if (step < 7) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
    } else {
      alert('Preencha todos os campos obrigatórios para prosseguir');
    }
  };

  const prevStep = () => {
    if (step === 1) {
      navigate('/');
    } else {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    const novosProjetos = [...projetos, info];
    setProjetos(novosProjetos);

    console.log('Projeto cadastrado:', {
      ...info,
      arquivo: file ? file.name : 'Nenhum arquivo',
    });

    alert('Projeto cadastrado com sucesso!');

    setInfo({
      nome: '',
      descricao: '',
      objetivo: '',
      responsavel: '',
      dataInicio: '',
      dataFim: '',
      participantes: [],
      arquivo: null,
      premiacoes: [], // Inicializado como um array vazio
      habilidades: [], // Adiciona o campo habilidades
    });
    setSelectedItems([]);
    setFile(null);
    setStep(1);
  };

  return (
    <section className="cadastro-projeto-section">
      <div className="container-titulo-subtitulo-cadastro">
        <h1 className="titulo-formulario-cadastro-projeto">Cadastrar Projeto</h1>
      </div>

      <form autoComplete="off" className="containeer-inputs-cadastro">
        {/* Conteúdo do formulário */}
        {step === 1 && (
          <>
            {/* Step 1 */}
            <div className="conatiner-input-icon">
              <div>
                <p>Título do projeto*</p>
                <input
                  name="nome"
                  value={info.nome}
                  onChange={atualizarInfo}
                  className="input-component"
                  placeholder="Digite o nome do projeto"
                  type="text"
                  required
                />
              </div>
             
            </div>

            <div className="conatiner-input-icon">
              <div>
                <p>Descreva como será o projeto.*</p>
                <textarea
                  name="descricao"
                  value={info.descricao}
                  onChange={atualizarInfo}
                  className="input-component textarea-component"
                  placeholder="Digite a descrição detalhada..."
                  rows={4}
                  required
                />
              </div>
             
            </div>

            <div className="conatiner-input-icon">
            <div>
                <p>Objetivo do projeto*</p>
                <input
                name="objetivo"
                value={info.objetivo}
                onChange={atualizarInfo}
                className="input-component nome-input"  // Adicionei uma classe específica
                placeholder="Ex: Portal de Eventos"
                type="text"
                required
                />
            </div>

            </div>

            <div className="conatiner-input-icon">
              <div>
                <p>Resposável Pelo Projeto*</p>
                <input
                  name="responsavel"
                  value={info.responsavel}
                  onChange={atualizarInfo}
                  className="input-component"
                  placeholder="Nome do responsável?"
                  type="text"
                  required
                />
              </div>
            
            </div>
          </>
        )}
        {step === 2 && (
          <>
            {/* Step 2 */}
            <div className="conatiner-input-icon datas-container">
              <div className="input-metade">
                <p>Início do projeto*</p>
                <input
                  name="dataInicio"
                  value={info.dataInicio}
                  onChange={atualizarInfo}
                  className="input-component"
                  type="date"
                  required
                  style={{ justifyItems: 'baseline' }}
                />
              </div>

              <div className="input-metade">
                <p>Fim do projeto*</p>
                <input
                  name="dataFim"
                  value={info.dataFim}
                  onChange={atualizarInfo}
                  className="input-component"
                  type="date"
                  required
                  style={{ justifyItems: 'baseline' }}
                />
              </div>
            </div>
            <div className="conatiner-input-icon">
              <div>
                <p>Quais funções o freelancer precisará realizar?*</p>
                <div className="container-agentespermitidos">
                  <ul style={{ marginLeft: '-3%' }}>
                    {['Desenvolvedor', 'Design', 'Outros'].map((funcao) => (
                      <li key={funcao}>
                        <label>
                          <input
                            type="checkbox"
                            value={funcao}
                            onChange={handleCheckboxChange}
                            checked={selectedItems.includes(funcao)}
                          />
                          {funcao}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="conatiner-input-icon">
              <div>
                <p style={{ marginTop: '5%' }}>Qual o nível de experiência do candidato?*</p>
                <div className="container-agentespermitidos">
                  <ul style={{ marginLeft: '-3%', gap: '8px', listStyleType: 'none', padding: 0 }}>
                    {[
                      'Iniciante',
                      'Intermediário',
                      'Avançado',
                      'Indiferente',
                      ].map((tipo) => (
                      <li
                        key={tipo}
                        style={{
                          marginBottom: '10px',
                          textAlign: ['Intermediário', 'Indiferente'].includes(tipo) ? 'right' : 'left',
                          marginLeft: tipo === 'Intermediário' ? '31px' : tipo === 'Indiferente' ? '22px' : '0', // Adiciona margin-left para "Intermediário" e "Indiferente"
                        }}
                      >
                        <label>
                          <input
                            type="checkbox"
                            value={tipo}
                            onChange={handleCheckboxChange}
                            checked={selectedItems.includes(tipo)}
                          />
                          {tipo}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            {/* Step 3 */}
            <div className="conatiner-input-icon">
              <p>Qual o tamanho do projeto?*</p>
              <select
                className="input-component"
                name="tamanhoProjeto"
                onChange={(e) =>
                  setInfo((prev) => ({
                    ...prev,
                    tamanhoProjeto: e.target.value,
                  }))
                }
                value={(info as any).tamanhoProjeto || ''}
                required
              >
                <option value="">Selecione</option>
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </select>
            </div>

            <div className="conatiner-input-icon">
              <p>Em que estágio está o projeto?*</p>
              <select
                className="input-component"
                name="estagio"
                onChange={(e) =>
                  setInfo((prev) => ({
                    ...prev,
                    estagio: e.target.value,
                  }))
                }
                value={(info as any).estagio || ''}
                required
              >
                <option value="">Selecione</option>
                <option value="Ideia">Ideia</option>
                <option value="Em desenvolvimento">Em desenvolvimento</option>
                <option value="Pronto para lançar">Pronto para lançar</option>
              </select>
            </div>

            <div className="conatiner-input-icon">
              <p>O projeto precisa integrar com alguma API?*</p>
              <select
                className="input-component"
                name="apiNecessaria"
                onChange={(e) =>
                  setInfo((prev) => ({
                    ...prev,
                    apiNecessaria: e.target.value,
                  }))
                }
                value={(info as any).apiNecessaria || ''}
                required
              >
                <option value="">Selecione</option>
                <option value="Não">Não</option>
                <option value="Sim - Outros">Sim</option>
              </select>
            </div>

            {/* Aqui você renderiza o ApiIntegrationStep */}
                {(info as any).apiNecessaria === "Sim - Outros" && (
              <ApiIntegrationStep
                selected={info.categoriasApi || []}
                onChange={(newCategories: string[]) => setInfo({ ...info, categoriasApi: newCategories })}
              />
            )}
          </>
        )}
        {step === 4 && (
          <>
            {/* Step 4 */}
            <div className="premiacao-container">
              <h2 style={{ marginTop: '2%' }}>🏆 Configurar Premiação</h2>

              <div className="premiacao-control">
                <label htmlFor="numPosicoes" className="form-label fw-bold">
                  Quantas posições terão prêmios? (1-5)
                </label>
                <select
                  className="premiacao-select"
                  id="numPosicoes"
                  value={info.premiacoes?.length || 1}
                  onChange={(e) => {
                    const num = parseInt(e.target.value, 10);
                    const premiacoes = Array.from({ length: num }, (_, i) => ({
                      posicao: i + 1,
                      premio: "",
                    }));
                    setInfo((prev) => ({ ...prev, premiacoes }));
                  }}
                >
                  <option value="1">1 posição</option>
                  <option value="2">2 posições</option>
                  <option value="3">3 posições</option>
                  <option value="4">4 posições</option>
                  <option value="5">5 posições</option>
                </select>
              </div>

              <div id="premiacao-Container" className="premiacao-control">
                <h5 className="mb-3" style={{ textAlign: 'center', marginBottom: '2%' }}>🏅 Definir Prêmios:</h5>
                <div id="camposPremiacao">
                  {(info.premiacoes ?? []).map((premiacao, index) => (
                    <div key={index} className="mb-3">
                      <label htmlFor={`premio-${index}`} className="form-label">
                        {premiacao.posicao}ª posição:
                      </label>
                      <input
                        type="text"
                        id={`premio-${index}`}
                        className="form-control"
                        value={premiacao.premio}
                        onChange={(e) => {
                          const novoPremios = [...(info.premiacoes ?? [])];
                          novoPremios[index].premio = e.target.value;
                          setInfo((prev) => ({ ...prev, premiacoes: novoPremios }));
                        }}
                        placeholder={`Prêmio para ${premiacao.posicao}ª posição`}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div id="visualizacao" className="mt-4 p-3 border rounded bg-light">
                <h5>📝 Resumo da Premiação:</h5>
                <ul id="listaPremios" className="list-group mt-2">
                  {info.premiacoes?.map((premiacao, index) => (
                    <li key={index} className="list-group-item">
                      {premiacao.posicao}ª posição: {premiacao.premio || "Sem prêmio definido"}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
        {step === 5 && (
          <>
            <div className="conatiner-input-iconn">
              <h2>Faça perguntas ao Participantes</h2>
              <div className="container-perguntas">
                <ul>
                  {/* Renderiza as perguntas fixas */}
                  {fixedQuestions.map((pergunta, index) => (
                    <li key={`fixed-${index}`}>
                      <label>
                        <input
                          type="checkbox"
                          value={pergunta}
                          checked={selectedItems.includes(pergunta)} // Verifica se a pergunta está selecionada
                          onChange={handleCheckboxChange} // Gerencia a seleção/desseleção
                        />
                        {pergunta}
                      </label>
                    </li>
                  ))}

                  {/* Renderiza as perguntas personalizadas */}
                  {customQuestions.map((pergunta, index) => (
                    <li key={`custom-${index}`}>
                      <label>
                        <input
                          type="checkbox"
                          value={pergunta}
                          checked={selectedItems.includes(pergunta)} // Verifica se a pergunta está selecionada
                          onChange={handleCheckboxChange} // Gerencia a seleção/desseleção
                        />
                        {pergunta}
                      </label>
                      <button
                        type="button"
                        className="remove-question-button"
                        onClick={() => handleRemoveQuestion(index)}
                      >
                        ✖
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <p>Adicione até 5 perguntas personalizadas</p>
              <div className="custom-question-container">
                <input
                  type="text"
                  className="input-component"
                  placeholder="Escrever uma pergunta"
                  maxLength={100}
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                />
                <button
                  type="button"
                  className="add-question-button"
                  onClick={handleAddQuestion}
                  disabled={customQuestion.trim() === '' || customQuestions.length >= 5}
                >
                  +
                </button>
              </div>
            </div>
          </>
        )}
        {step === 6 && (
          <>
            {/* Step 6 */}
            <div className="conatiner-input-habilidades">
              <h2 className="titulo-habilidades">
                habilidades necessárias
              </h2>
              <p className="descricao-habilidades">
                Adicione as habilidades que são consideradas necessárias para o seu projeto
              </p>
              <div className="habilidades-container">
                {info.habilidades?.map((habilidade, index) => (
                  <span key={index} className="habilidade-item">
                    {habilidade}
                    <button
                      type="button"
                      className="remove-habilidade"
                      onClick={() => handleRemoveHabilidade(index)}
                    >
                      ✖
                    </button>
                  </span>
                ))}
              </div>
              <div className="adicionar-habilidade-container">
                <input
                  type="text"
                  className="input-component"
                  placeholder="Adicionar habilidade"
                  value={customQuestion}
                  onChange={(e) => setCustomQuestion(e.target.value)}
                />
                <button
                  type="button"
                  className="add-habilidade-button"
                  onClick={handleAddHabilidade}
                  disabled={customQuestion.trim() === ''}
                >
                  +
                </button>
              </div>
            </div>
          </>
        )}
        {step === 7 && (
          <>
            {/* Step 7 */}
            <div className="conatiner-input-icon">
              <div>
                <p>Documentos para o projeto*</p>
                <p className="file-instructions">
                  Anexe qualquer arquivo necessário (PDF, DOC, jpeg, etc.)
                </p>
                <label className="file-upload-label">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="file-input"
                    required
                  />
                  <span className="file-upload-button">Selecionar arquivo</span>
                  {file && (
                    <span className="file-name">
                      {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </span>
                  )}
                </label>
              </div>
              <MdAttachFile />
            </div>

            {/* Termos e condições sem ícone */}
            <div className="input-container">
              <div>
                <p>Termos e condições</p>
                <div className="terms-container">
                  <label>
                    <input type="checkbox" required /> Li e aceito os termos de uso
                  </label>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Barra de progresso */}
        <div className="progress-separator"></div> {/* Linha acima da barra de progresso */}
        <div className="progress-container">
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(step / 7) * 100}%` }}></div>
          </div>
          <p className="progress-text">. {step} </p>
        </div>

        {/* Botões de navegação */}
        <div className="form-actions">
          <button
            type="button"
            onClick={prevStep}
            className="secundary-button botao-formulario-cadastro"
          >
            {step === 1 ? 'Voltar' : 'Voltar'}
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="secundary-button botao-formulario-cadastro"
            disabled={!finalizado} // Botão desabilitado se `finalizado` for `false`
          >
            {step < 7 ? 'Avançar' : 'Finalizar Cadastro'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Cadprojeto;