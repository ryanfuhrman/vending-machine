import React from "react";
import { NavLink } from "react-router-dom";
import snickers from './img/snickers.png'

const Snickers = () => {
  return (
    <div>
      <img className="Snickers-img" src={snickers} alt="snickers bar" />
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Snickers;
