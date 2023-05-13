import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Noticias from "../pages/Noticias";
import Favoritas from "../pages/Favoritas";

function Routes () {
  return (
    <ReactDomRoutes>
      <Route path="/" element={<Home/>}/>
      <Route path="/noticias" element={<Noticias/>}/>
      <Route path="/favoritos" element={<Favoritas/>}/>
    </ReactDomRoutes>
  );
};

export default Routes;