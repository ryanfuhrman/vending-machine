import React from "react";
import { NavLink } from "react-router-dom";
import coke from './img/coke.png'
import './Coke.css';

const Coke = () => {
  return (
    <div className="Coke">
      <img className="Coke-img" src={coke} alt="coke bottle" />
      <NavLink to="/">Home</NavLink>
    </div>
  );
};
export default Coke;
