import React, { useEffect } from "react"; 
import "./card.css"; 

// Componente funcional Card, usando TypeScript com React
const Card: React.FC = () => {
  
  // O hook useEffect é usado para manipular o comportamento da animação com IntersectionObserver
  useEffect(() => {
    // Cria uma instância do IntersectionObserver para adicionar ou remover a classe 'animate' 
    // quando os cards entram ou saem da área visível da tela.
    const observer = new IntersectionObserver(
      (entries) => {
        // A função callback será chamada quando um dos cards entrar ou sair da tela
        entries.forEach((entry) => {
          // Verifica se o card está visível na tela
          if (entry.isIntersecting) {
            // Adiciona a classe 'animate' quando o card entra na área visível
            entry.target.classList.add("animate");
          } else {
            // Remove a classe 'animate' quando o card sai da área visível
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 } // O card é considerado visível quando 50% dele entra na tela
    );

    // Seleciona todos os elementos com a classe 'card-iniciais' para monitorar
    const cards = document.querySelectorAll(".card-iniciais");

    // Inicia o monitoramento de cada card
    cards.forEach((card) => observer.observe(card));

    // Limpeza do efeito ao desmontar o componente, desconectando o observer
    return () => observer.disconnect();
  }, []); // O useEffect é executado apenas uma vez após o primeiro render

  return (
    <div className="cards-section">
      {/* Título da seção de cards */}
      <h1>Conexões que transformam</h1>
      {/* Container para os cards individuais */}
      <div className="container-inicial" style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', gap: '20px', padding: '20px 0' }}>
        {/* Card 1 */}
        <article className="card-iniciais" style={{ minWidth: '300px', flex: '0 0 auto' }}>
          <h2>Vantagens da parceria</h2>
          <p>Facilita o match entre empresas, instituições, alunos e tutores, promovendo parcerias que aceleram a inovação e o aprendizado.</p>
        </article>
        {/* Card 2 */}
        <article className="card-iniciais">
          <h2>Dados das parcerias</h2>
          <p>+ de 100 Empresas cadastradas</p>
          <p>+ de 50 Instituições cadastradas</p>
        </article>
        {/* Card 3 */}
        <article className="card-iniciais">
          <h2>Desenvovimento de Talentos</h2>
          <p>As empresas têm acesso a futuros talentos, enquanto os alunos vivenciam experiências práticas em projetos reais.</p>
        </article>
        {/* Card 4 */}
        <article className="card-iniciais">
          <h2>Impacto Positivo</h2>
          <p>Gera valor para todos os envolvidos e contribui para o desenvolvimento do ecossistema de tecnologia e educação.</p>
        </article>
      </div>
    </div>
  );
};

export default Card;



