import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import vendingMachine from './img/vendingMachine.png'

export default class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <h1>Vending Machine</h1>
        <img className="VendingMachine-img" src={vendingMachine} alt="vending machine"/>
        <div>
          <NavLink activeClassName="active-link" to="/">Home</NavLink>
          <NavLink activeClassName="active-link" to="/coke">Coke</NavLink>
          <NavLink activeClassName="active-link" to="/snickers">Snickers</NavLink>
          <NavLink activeClassName="active-link" to="/doritos">Doritos</NavLink>
        </div>
      </div>
    );
  }
}
