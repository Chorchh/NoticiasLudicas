import React from "react";
import { BrowserRouter, Routes as ReactDomRoutes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Noticias from "../pages/Noticias";
import Favoritas from "../pages/Favoritas";
import Header from "../components/header/Header";

function Routes () {
  return (
    <BrowserRouter>
      <Header/>
    <ReactDomRoutes>
      <Route path="/" element={<Home/>}/>
      <Route path="/noticias" element={<Noticias/>}/>
      <Route path="/favoritos" element={<Favoritas/>}/>
    </ReactDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;