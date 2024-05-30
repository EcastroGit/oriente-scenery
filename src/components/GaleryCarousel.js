import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "./TitleH2";
import Cta from "./Cta";

const GaleryCarousel = ({imagesArray}) => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  
  return (
    <Carousel className="carousel">
      <Title
        title="Fotografías"
        description="Aquí te presentamos algunos de 
      los lugares más hermosos del Oriente Antioqueño."
      />
      <Slider {...settings}>
        {imagesArray.map((card) => (
          <div key={card.id} className="card">
            <img
              src={card.content}
              alt={card.alt}
              /*  onClick={() => handleModal(image, title, description)} */
            ></img>
          </div>
        ))}
      </Slider>
      <Cta id="home-galery-cta" text="Ver todas" link="/places" />
    </Carousel>
  );
};

export default GaleryCarousel;

const Carousel = styled.div`
  margin: auto;
  width: 80%;
  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: black; /* Cambia este valor al color que desees */
    font-size: 30px; /* Ajusta el tamaño del icono si es necesario */
  }
  img {
    width: 400px;
    object-fit: cover;
    height: 250px;
    margin: auto;
    transition: transform 0.7s ease;

    @media screen and (max-width: 768px) {
      max-width: 300px;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
  #home-galery-cta {
    margin-top: 3rem;
  }
`;
