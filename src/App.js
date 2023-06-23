import "./App.css";
import React from "react";
import Header from "./componets/Header";
import Main from "./componets/Main";
import UserSpace from "./componets/UserSpace";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./componets/Login";
import AboutMe from "./componets/AboutUs";
import ProtectedRoutes from "./services/ProtectedRoutes";
import NoFound from "./componets/NoFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<Main />} path="/" exact />
        <Route element={<AboutMe />} path="/AboutMe" exact />
        <Route element={<NoFound />} path="/*" exact />
        <Route element={<ProtectedRoutes />}>
          <Route element={<UserSpace />} path="/UserSpace" />
        <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
