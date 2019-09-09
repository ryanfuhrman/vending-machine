import React from "react";
import { NavLink } from "react-router-dom";
import snickers from './img/snickers.png'
import './Snickers.css';

const Snickers = () => {
  return (
    <div className="Snickers">
      <img className="Snickers-img" src={snickers} alt="snickers bar" />
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default Snickers;
