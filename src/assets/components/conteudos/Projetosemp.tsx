import { useState } from "react";
import "./Projetosemp.css";

const Projetos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const projetos = ["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4", "Projeto 5"];

  const nextSlide = () => {
    if (currentSlide === projetos.length - 1) {
      setCurrentSlide(0); // Retorna ao primeiro slide
    } else {
      setCurrentSlide(currentSlide + 1); // Avança para o próximo
    }
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(projetos.length - 1); // Retorna ao último slide
    } else {
      setCurrentSlide(currentSlide - 1); // Retrocede para o anterior
    }
  };

  return (
    <div className="projetos-container">
      <div className="projetos-header">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
        <button className="projetos-botao">Cadastrar novo projeto</button>
      </div>

      <div className="projetos-carrossel">
        <div className="carrossel-item-container">
          <div className="carrossel-item">
            {projetos[currentSlide]}
          </div>
        </div>

        <div className="carrossel-botoes">
          <button className="carrossel-botao" onClick={prevSlide}>
            &#60;
          </button>
          <button className="carrossel-botao" onClick={nextSlide}>
            &#62;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projetos;
