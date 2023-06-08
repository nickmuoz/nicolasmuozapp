import React, { useState } from "react";
import { Container } from "react-bootstrap";
import '../styles/login.css'
import { useDispatch } from "react-redux";
import urlBackEnd from "../services/authServices";
import axios from 'axios'
import { addUser, changeStatus } from "../app/userSlice";
import {useNavigate} from 'react-router-dom'

var qs = require("qs");

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleValidation = (e) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,})\S$/)) {
      formIsValid = false;
      setpasswordError(
        "minimo un mayuscula 8 caracteres se puede usar mayusculas y carateres especiales"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

const handleSubmit = async (e) =>{
  const dataValid = handleValidation()
  let userData = {}
  handleValidation();
  if( dataValid !== true ){
    alert("Datos imcompletos revise user y password")
  }else{
 const UserSend = {
    email:email,
    password: password
  }
  let config = {
    method: "POST",
    url: urlBackEnd.authUrl,
    header: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(UserSend),
  };
    axios(config)
    .then((response) => (JSON.stringify(response.data)
    ))
    .then(response => {
      userData = JSON.parse(response);
      console.log(userData)
      dispatch(addUser(userData))
      dispatch(changeStatus(true))
      navigate("/UserSpace")
    })     
    .catch(function(error){
      console.log(error)
    })
  }
}

  return (
    <Container  className="card" id="mainContainer">
          <div className="form-floating" id="loginform" >
            <h3><b>Nicolas Muñoz Salcedo</b></h3>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
              </small>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label">Check me out</label>
            </div>
            <input value="Enviar" type="submit" className="btn btn-primary" onClick={()=>{handleSubmit()}}/>
          </div>
    </Container>
    );
}

export default Login;
