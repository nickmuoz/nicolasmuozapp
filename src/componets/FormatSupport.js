import React, { useState, useRef } from "react";
import axios from "axios";
import urlBackEnd from "../services/authServices";
import Cookies from "universal-cookie";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";
import SignatureCanvas from "react-signature-canvas";

var qs = require("qs");

const FormatSupport = () => {
  const [service, setService] = useState({
    cliente: "",
    date: "",
    phone: null,
    email: "",
    address: "",
    service: "",
    description: "",
    created: "",
    technician: "",
    signature: null,
  });

  const sigCanvasRef = useRef(null);

  const handleChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearSignature = () => {
    sigCanvasRef.current.clear();
    setService({
      ...service,
      signature: null,
    });
  };

  const handleSaveSignature = () => {
    const signatureDataURL = sigCanvasRef.current.toDataURL();
    setService({
      ...service,
      signature: signatureDataURL,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let config = {
      method: "POST",
      url: urlBackEnd.servUrl,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(service),
    };
    axios(config)
      .then(function (response) {
        return JSON.stringify(response.data);
      })
      .then((response) => {
        const serviceDo = JSON.parse(response);
        console.log(serviceDo);
        console.log(serviceDo.created);

        let asunto = serviceDo.service;
        let mensaje = serviceDo.description;

        let email = serviceDo.email ? "mensaje recibido" : "mensaje no recibido";

        alert(email);
      })
      .catch(function (error) {
        console.log(error);
        alert("Error de Conexión");
      });
  };

  const cookies = new Cookies(); // Create an instance of cookies
  const token = cookies.get("token");
  if (token === undefined) {
    window.location.href = "/";
  } else {
    return (
      <>
        <div className="col-md-8">
          <h2>Formato de Soporte</h2>
          <div className="card mb-3">
            <div className="card-body">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="cliente">Cliente</Label>
                      <Input
                        type="text"
                        id="cliente"
                        name="cliente"
                        value={service.cliente}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="date">Fecha</Label>
                      <Input
                        type="date"
                        id="date"
                        name="date"
                        value={service.date}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="phone">Teléfono</Label>
                      <Input
                        type="text"
                        id="phone"
                        name="phone"
                        value={service.phone || ""}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="address">Dirección</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        value={service.address}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={service.email}
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="service">Tipo de Servicio</Label>
                      <Input
                        type="select"
                        id="service"
                        name="service"
                        value={service.service}
                        onChange={handleChange}
                      >
                        <option value="">Seleccione un servicio</option>
                        <option value="Reparación">Reparación</option>
                        <option value="Reinstalación de OS">Reinstalación de OS</option>
                        <option value="Reconstrucción">Reconstrucción</option>
                        <option value="Reparaciones Electrónicas">Reparaciones Electrónicas</option>
                        <option value="Reparación de citofonía">Reparación de citofonía</option>
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label for="description">Descripción</Label>
                      <Input
                        type="textarea"
                        id="description"
                        name="description"
                        value={service.description}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label>Firma</Label>
                      <div>
                        <SignatureCanvas
                          ref={sigCanvasRef}
                          canvasProps={{
                            className: "signature-canvas",
                          }}
                          onEnd={handleSaveSignature}
                          backgroundColor="#f5f5f5"
                          penColor="#000"
                        />
                      </div>
                      <div>
                        <Button color="info" onClick={handleClearSignature}>
                          Limpiar Firma
                        </Button>{" "}
                        <Button color="info" onClick={handleSaveSignature}>
                          Guardar Firma
                        </Button>
                      </div>
                    </FormGroup>
                  </Col>
                </Row>
                <hr />
                <Button type="submit" color="info">
                  Registrar
                </Button>{" "}
                <Button
                  type="button"
                  color="info"
                  onClick={() => {
                    window.location.href = "/ServicesToSend";
                  }}
                >
                  Ver
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default FormatSupport;
