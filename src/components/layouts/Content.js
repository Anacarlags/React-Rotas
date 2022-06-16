import "./content.css";
import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../../src/components/layouts/views/Pages/home";
import About from "../../components/layouts/views/Pages/about";
 
const Content = props => (
  <main className="Content">
    <Routes>
      <Route path="/sobre" element={<About />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  </main>
);
 
export default Content;