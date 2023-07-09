import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features.js/task/taskSlice";
import { Container, Accordion, Button } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import ListProducts from "./ListProducts";
import AddProduct from "./AddProduct";
import ProductBrief from "./ProductBrief"
import { deleteUser } from "../app/userSlice";
import Cookies from 'universal-cookie';
import '../styles/UserSpace.css';

function UserSpace() {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedOption, setOption] = useState("listproducts");
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [elementClass, setClass] = useState('col-sm-8')

  const handleOptionChange = (option) => {
    setOption(option);
  };

  const handleLogout = (id) => {
    cookies.remove('token');
    dispatch(deleteUser());
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Container fluid id="spaceContainer" className={isMenuOpen ? "menu-open" : "menu-closed"}>
      <Container fluid className="user-container">
        <div className="row">
          {isMenuOpen && (
            <div className="col-sm-4" id="leftBar">
              <h2>{user.name}</h2>
              <h5>{user.email}</h5>
              <h5>{user.type}</h5>
              <Button variant="secondary" onClick={handleLogout}>Logout</Button>
              <h3 className="mt-4">Actividades</h3>
              <p>Cotizaciones, Servicios tecnicos, clientes.</p>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Productos</Accordion.Header>
                  <Accordion.Body>
                    <Button variant="outline-primary" onClick={() => handleOptionChange("listproducts")}>Listado</Button>{' '}
                    <Button variant="outline-primary" onClick={() => handleOptionChange("addproduct")}>Nuevo</Button>{' '}
                    <Button variant="outline-primary">Borrar</Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Servicios</Accordion.Header>
                  <Accordion.Body>
                    <Button variant="outline-secondary" onClick={() => handleOptionChange("listproducts")}>Listado</Button>{' '}
                    <Button variant="outline-secondary" onClick={() => handleOptionChange("addproduct")}>Nuevo</Button>{' '}
                    <Button variant="outline-secondary">Borrar</Button>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Link</Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Disabled</Accordion.Header>
                </Accordion.Item>
              </Accordion>
            </div>
          )}
                <div className="menu-toggle" onClick={handleMenuToggle}>
        <FaChevronLeft />
      </div>
          <div className={isMenuOpen ? 'col-sm-8' : 'container'}>
            <Container fluid className="workspace">
              {selectedOption === "listproducts" && <ListProducts/>}
              {selectedOption === "addproduct" && <AddProduct />}
              {selectedOption === "productbrief" && <ProductBrief />}
            </Container>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default UserSpace;
