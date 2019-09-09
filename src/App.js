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
      <navbar className="App-navbar">
        <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
        <NavLink exact activeClassName="active-link" to="/coke">Coke</NavLink>
        <NavLink exact activeClassName="active-link" to="/snickers">Snickers</NavLink>
        <NavLink exact activeClassName="active-link" to="/doritos">Doritos</NavLink>
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
