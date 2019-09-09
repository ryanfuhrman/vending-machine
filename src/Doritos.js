import React from "react";
import { NavLink } from "react-router-dom";
import doritos from './img/doritos.png'
import './Doritos.css';

const Doritos = () => (
  <div className="Doritos">
    <img className="Doritos-img" src={doritos} alt="doritos bag" />
    <Link to="/">Go Back</Link>
  </div>
);

export default Doritos;
