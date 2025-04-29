import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import './assets/css/Roteiro.css';

/**
 * Componente Roteiro
 * 
 * Este componente exibe uma sequência de cards que detalham o processo do usuário
 * em um fluxo de cadastro e acompanhamento de projetos. Cada card é animado 
 * quando entra na tela, utilizando o `framer-motion` e o `IntersectionObserver`.
 * 
 * **Funcionalidades principais**:
 * - Exibição de uma lista de cards com animações baseadas na visibilidade.
 * - Uso do `IntersectionObserver` para detectar quando um card entra ou sai da tela.
 * - Animações de transição para os cards com `motion.div`.
 * - Dados dos cards são definidos em um array e renderizados dinamicamente.
 * 
 * **Dependências**:
 * - `framer-motion`: Para animações de transição.
 * - `IntersectionObserver`: Para detectar quando os cards entram na área visível da tela.
 * 
 * **Estrutura de Dados**:
 * - `cardData`: Um array de objetos que contém os dados para cada card, incluindo:
 *   - `number`: Número do card.
 *   - `title`: Título do card.
 *   - `text`: Descrição do card.
 * 
 * **Estado**:
 * - `visibleCards`: Array de booleanos que determina se um card está visível na tela.
 * 
 * **Referências**:
 * - `cardRefs`: Referências aos elementos dos cards para observação de interseção.
 * 
 * @returns {JSX.Element} O componente Roteiro.
 */
const cardData = [
  { 
    number: 1, 
    title: "Faça seu cadastro", 
    text: "Preencha o formulário com suas informações pessoais e escolha sua área de interesse." 
  },
  { 
    number: 2, 
    title: "Escolha um projeto e aguarde o retorno", 
    text: "Analise as opções disponíveis, selecione seu projeto e aguarde a aprovação." 
  },
  { 
    number: 3, 
    title: "Parabéns!", 
    text: "Agora é só dar o seu melhor e aproveitar esta grande oportunidade!" 
  },
];

 const Roteiro: React.FC = () => {
  // Estado para armazenar quais cards estão visíveis
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  // Referências dos elementos de cada card
  const cardRefs = useRef<HTMLDivElement[]>([]);

  /**
   * Função chamada quando um card entra ou sai da área visível da tela.
   * 
   * @param {IntersectionObserverEntry[]} entries - Entradas observadas pelo IntersectionObserver.
   */
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      // Identifica o índice do card sendo observado
      const cardIndex = cardRefs.current.indexOf(entry.target as HTMLDivElement);

      // Atualiza o estado de visibilidade do card
      if (entry.isIntersecting) {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[cardIndex] = true;
          return updated;
        });
      } else {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[cardIndex] = false;
          return updated;
        });
      }
    });
  };

  useEffect(() => {
    // Cria o observer para detectar a interseção dos cards
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5, // O card precisa estar 50% visível para ser considerado visível
    });

    // Observa todos os cards na tela
    cardRefs.current.forEach((card) => observer.observe(card));

    // Limpeza do observer ao desmontar o componente
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="roadmap-container">
    <h1 className="roadmap-title">O Match para o Sucesso</h1>
    <div className="roadmap-cards">
      {cardData.map(({ number, title, text }, index) => (
        <motion.div
          className="roadmap-card"
          ref={(el) => {
            if (el) cardRefs.current[index] = el;
          }}
          key={number}
          initial={{ opacity: 0, y: 50 }} // Inicializa com opacidade 0 e deslocamento vertical
          animate={{
            opacity: visibleCards[index] ? 1 : 0, // Aparece com animação quando visível
            y: visibleCards[index] ? 0 : 50, // Desloca o card para a posição inicial
          }}
          transition={{ duration: 0.6, delay: index * 0.2 }} // Animação com delay progressivo
        >
          <div className="roadmap-card-content">
            <div className="roadmap-card-number">{number}</div>
            <div className="roadmap-card-texts">
              <h2 className="roadmap-card-title">{title}</h2>
              <p className="roadmap-card-description">{text}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
  
  );
};

export default Roteiro;


