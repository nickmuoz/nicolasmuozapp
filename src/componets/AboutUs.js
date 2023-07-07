import React from "react";
import { Container, Image } from "react-bootstrap";
import "../styles/about.css";
import Img1 from "../img/foto_pefil.jpg";

const AboutUs = () => {
  return (
    <Container>
      <div className="row" id="containerabout">
        <div className="col-lg-6 col-md-12">
          <img className="img1" src={Img1} />
        </div>
        <div className="col-lg-6 col-md-12">
          <div
            className="w3-content w3-justify w3-text-grey w3-padding-64"
            id="about"
          >
            <h2 className="w3-text-light-grey">Nicolas Muñoz</h2>
            <hr className="w3-opacity" />
            <p>
              Técnico graduado de la Universidad Autónoma del Caribe con más de
              15 años de experiencia en el área de IT, poseo varias
              certificaciones en networking, Iot, análisis de datos y desarrollo
              web. Actualmente desempeñando como (freelance) contratista IT
              ofreciendo soluciones a empresas que no cuentan con departamento
              de sistemas, prestando servicios que van desde administración y
              soporte hasta el desarrollo e instalación de infraestructuras IT.
              He ejecutado y participado en varios proyectos de automatización
              residencial y comercial, así como montaje de redes de voz y datos,
              así como sistemas de seguridad electrónica. Recientemente, culminé
              mi pensum académico en la Universidad del Atlántico, donde
              actualmente estoy trabajando en mi proyecto de grado para recibir
              el título de administrador de empresas. Me siento muy orgulloso de
              todo lo que he logrado hasta ahora y estoy emocionado de seguir
              creciendo y aprendiendo en mi carrera. Mi experiencia en la
              tecnología y mi educación en administración de empresas me han
              brindado habilidades valiosas en liderazgo, gestión y toma de
              decisiones. Me apasiona mi trabajo y estoy comprometido a seguir
              aprendiendo y creciendo en mi carrera.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
