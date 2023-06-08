import React from "react";
import {Container} from 'react-bootstrap';
import '../styles/Main.css'
import Carouselimg from './Carouselimg'



const Main = () => {
  return (
    <Container fluid="md" id="Main">
       <Carouselimg/>
    </Container>
  )
}

export default Main