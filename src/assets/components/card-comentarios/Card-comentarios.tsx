import './card-comentarios.css';

interface CardData {
  feedbackText: string;
  rating: number; // de 1 a 5
}

const CardComentarios: React.FC = () => {
  const cards: CardData[] = [
    { feedbackText: '"Ótimo serviço!"', rating: 5 },
    { feedbackText: '"Satisfeito com a qualidade"', rating: 4 },
    { feedbackText: '"Atendimento rápido e eficiente"', rating: 5 },
    { feedbackText: '"Pode melhorar em alguns pontos"', rating: 3 },
  ];

  return (
    <div>
      <div className="container-comentarios">
        <h1>Alguns depoimentos</h1>
      </div>
      <div className="wrapper-comentarios">
        {cards.map((card, index) => (
          <div className="card-coments" key={index}>
            <p>{card.feedbackText}</p>
            <div className="stars-coments">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={i < card.rating ? 'star filled' : 'star-coments'}>
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComentarios;
