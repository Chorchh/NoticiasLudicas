import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Noticias from "../pages/Noticias";
import Novedades from "../pages/Novedades";
import Favoritas from "../pages/Favoritas";

function Routes () {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/noticias" element={<Noticias/>}/>
      <Route path="/novedades" element={<Novedades/>}/>
      <Route path="/favoritos" element={<Favoritas/>}/>
    </ReactDomRoutes>
  );
};

export default Routes;