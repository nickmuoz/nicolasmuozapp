import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
      const data = await response.json();
      const exchangeRate = data.rates.COP;
      setExchangeRate(exchangeRate);
    } catch (error) {
      console.log("Error fetching exchange rate:", error);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-lg mb-2">
      <Container fluid>
        <Navbar.Brand href="#">Nicolas Muñoz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AboutMe" className="page-scroll">Quien Soy</Nav.Link>
            <NavDropdown title="Productos y servicios" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Productos</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Servicios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Login">
               Login
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action6">
              Contactenos
            </Nav.Link>
          </Nav>
          <div className="ms-auto d-flex align-items-center">
            <div className="me-2">
              {exchangeRate ? `USD to COP: ${exchangeRate}` : "Loading..."}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
