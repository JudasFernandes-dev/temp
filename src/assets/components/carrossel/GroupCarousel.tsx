
import { useState } from 'react';
import './carousel.css';

interface Group {
  id: number;
  name: string;
  members: number;
  category: string;
}

const GroupCarousel = () => {
  const [groups] = useState<Group[]>([
    {
      id: 1,
      name: "Grupo 1",
      members: 15,
      category: "Dev"
    },
    {
      id: 2,
      name: "Grupo 2",
      members: 20,
      category: "Design"
    },
    {
      id: 3,
      name: "Grupo 3",
      members: 10,
      category: "Gestão"
    }
  ]);

  return (
    <div className="carousel-container groups">
      <h2>Grupos</h2>
      <div className="carousel-items">
        {groups.map(group => (
          <div key={group.id} className="carousel-item">
            <h3>{group.name}</h3>
            <p>Membros: {group.members}</p>
            <span className="category">{group.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCarousel;
