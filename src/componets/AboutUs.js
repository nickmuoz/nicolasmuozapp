import React from "react";
import { Container } from "react-bootstrap";
import "../styles/about.css";

const AboutUs = () => {
  return (
    <Container className="card" id="containerabout">
      <div
        classname="w3-content w3-justify w3-text-grey w3-padding-64"
        id="about"
      >
        <h2 classname="w3-text-light-grey">Nicolas Muñoz</h2>
        <hr classname="w3-opacity" />
        <p>
          técnico graduado de la Universidad Autónoma del
          Caribe con mas de 15 años de experiencia en el area de IT, poseo
          varias certificaciones en networking, Iot, análisis de datos y
          desarrollo web. Actualmente desempeñando como (freelance) contratista
          IT ofreciendo soluciones a empresas que no cuentan con departamento de
          sistemas, prestandole servicios que van desde administracion y soporte
          hasta el desarrollo e instalacion de infraestructuras IT. He ejecutado
          y participados en varios proyectos de automatización residencial y
          comercial, asi com montajede redes de voz y datos, asi como sistemas
          de seguridad electrónica. Recientemente, culminé mi pensum académico
          en la Universidad del Atlántico, donde actualmente estoy trabajando en
          mi proyecto de grado para recibir el título de administrador de
          empresas. Me siento muy orgulloso de todo lo que he logrado hasta
          ahora y estoy emocionado de seguir creciendo y aprendiendo en mi
          carrera. Mi experiencia en la tecnología y mi educación en
          administración de empresas me han brindado habilidades valiosas en
          liderazgo, gestión y toma de decisiones. Me apasiona mi trabajo y
          estoy comprometido a seguir aprendiendo y creciendo en mi carrera.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
