
import React from 'react';
import './carousel.css';

const GroupCarousel = () => {
  const groups = [
    {
      id: 1,
      name: "Dev Frontend",
      members: 45,
      category: "Desenvolvimento"
    },
    {
      id: 2,
      name: "UX/UI Design",
      members: 32,
      category: "Design"
    },
    {
      id: 3,
      name: "Data Science",
      members: 28,
      category: "Dados"
    }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-items">
        {groups.map(group => (
          <div key={group.id} className="carousel-item group-item">
            <div className="group-header">
              <span className="category">{group.category}</span>
            </div>
            <h3>{group.name}</h3>
            <p className="members">{group.members} membros</p>
            <button className="join-button">Participar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupCarousel;
