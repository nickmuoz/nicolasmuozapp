import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import IMG1 from '../assets/img/img3.jpg';
import IMG2 from '../assets/img/img4.jpg';
import IMG3 from '../assets/img/img2.webp';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../styles/Carousel.css';

function UncontrolledExample() {
  return (
    <Carousel
      prevIcon={<FaChevronLeft className="carousel-arrow" />}
      nextIcon={<FaChevronRight className="carousel-arrow" />}
      controls={true}
      interval={3000}
    >
      <Carousel.Item>
        <div className="carousel-image-container">
          <Image
            fluid
            rounded
            className="carousel-image"
            src={IMG3}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <p>Integración de las Principales marcas de Domótica</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Image
            fluid
            rounded
            className="carousel-image"
            src={IMG1}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <p>Soluciones en video vigilancia sistemas CCTV e IP.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <Image
            fluid
            rounded
            className="carousel-image"
            src={IMG2}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
