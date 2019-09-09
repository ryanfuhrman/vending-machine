import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Coke from "./Coke";
import Snickers from "./Snickers";
import Doritos from "./Doritos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/coke">Coke</NavLink>
        <NavLink to="/snickers">Snickers</NavLink>
        <NavLink to="/doritos">Doritos</NavLink>
      </navbar>

      <Switch>
        <Route exact path="/" component={VendingMachine} />
        <Route exact path="/coke" component={Coke} />
        <Route exact path="/snickers" component={Snickers} />
        <Route exact path="/doritos" component={Doritos} />
      </Switch>
    </div>
  );
}

export default App;
