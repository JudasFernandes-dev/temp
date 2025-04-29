import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './assets/css/Carousel.css'; 
import logo1 from './assets/img/logo1.svg';
import logo2 from './assets/img/logo2.svg';
import logo3 from './assets/img/logo3.svg';
import logo4 from './assets/img/logo4.svg';
import logo5 from './assets/img/logo5.svg';

const Carousel = () => {
  const settings = {
    dots: false, // Remove os indicadores embaixo
    infinite: true, // Faz com que o carrossel seja infinito
    speed: 500, // Velocidade de transição entre slides
    slidesToShow: 5, // Quantidade de imagens visíveis por vez
    slidesToScroll: 1, // Quantidade de imagens que deslizam por vez
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 2000, // Tempo entre os slides (em milissegundos)
    pauseOnHover: true, // Pausa o carrossel quando o mouse estiver em cima
  };

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img src={logo} alt={`Logo ${index + 1}`} className="carousel-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;