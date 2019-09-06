import React from "react";
import { Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Coke from "./Coke";
import Snickers from "./Snickers";
import Doritos from "./Doritos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={VendingMachine} />
      <Route exact path="/coke" component={Coke} />
      <Route exact path="/snickers" component={Snickers} />
      <Route exact path="/doritos" component={Doritos} />
    </div>
  );
}

export default App;
