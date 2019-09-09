import React from "react";
import { NavLink } from "react-router-dom";
import coke from './img/coke.png'

const Coke = () => {
  return (
    <div>
      <img className="Coke-img" src={coke} alt="coke bottle" />
      <NavLink to="/">Home</NavLink>
    </div>
  );
};
export default Coke;
