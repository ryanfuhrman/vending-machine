import React from "react";
import { NavLink } from "react-router-dom";
import doritos from './img/doritos.png'

const Doritos = () => (
  <div>
    <img className="Doritos-img" src={doritos} alt="doritos bag" />
    <NavLink to="/">Home</NavLink>
  </div>
);

export default Doritos;
