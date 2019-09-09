import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import vendingMachine from './img/vendingMachine.png'
import './VendingMachine.css'

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <img className="VendingMachine-img" src={vendingMachine} alt="vending machine"/>
        <div className="VendingMachine-navbar">
          <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
          <NavLink exact activeClassName="active-link" to="/coke">Coke</NavLink>
          <NavLink exact activeClassName="active-link" to="/snickers">Snickers</NavLink>
          <NavLink exact activeClassName="active-link" to="/doritos">Doritos</NavLink>
        </div>
      </div>
    );
  }
}
