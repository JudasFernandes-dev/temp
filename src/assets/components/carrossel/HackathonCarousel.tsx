
import React from 'react';
import './carousel.css';

const HackathonCarousel = () => {
  const hackathons = [
    {
      id: 1,
      title: "Hack for Change",
      date: "15-17 Junho",
      status: "Upcoming",
      participants: 120
    },
    {
      id: 2,
      title: "Tech Innovation",
      date: "22-24 Junho",
      status: "Open",
      participants: 200
    },
    {
      id: 3,
      title: "Social Impact",
      date: "1-3 Julho",
      status: "Open",
      participants: 150
    }
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-items">
        {hackathons.map(hackathon => (
          <div key={hackathon.id} className="carousel-item hackathon-item">
            <div className="hackathon-header">
              <span className="category">Hackathon</span>
              <span className={`status ${hackathon.status.toLowerCase()}`}>
                {hackathon.status}
              </span>
            </div>
            <h3>{hackathon.title}</h3>
            <p className="date">{hackathon.date}</p>
            <p className="participants">{hackathon.participants} participantes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonCarousel;
