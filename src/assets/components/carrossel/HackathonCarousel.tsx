
import { useState } from 'react';
import './carousel.css';

interface Hackathon {
  id: number;
  title: string;
  date: string;
  participants: number;
}

const HackathonCarousel = () => {
  const [hackathons] = useState<Hackathon[]>([
    {
      id: 1,
      title: "Hackathon 1",
      date: "10/06/2024",
      participants: 50
    },
    {
      id: 2,
      title: "Hackathon 2",
      date: "15/07/2024",
      participants: 75
    },
    {
      id: 3,
      title: "Hackathon 3",
      date: "20/08/2024",
      participants: 100
    }
  ]);

  return (
    <div className="carousel-container hackathons">
      <h2>Hackathons</h2>
      <div className="carousel-items">
        {hackathons.map(hackathon => (
          <div key={hackathon.id} className="carousel-item">
            <h3>{hackathon.title}</h3>
            <p>Data: {hackathon.date}</p>
            <p>Participantes: {hackathon.participants}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonCarousel;
