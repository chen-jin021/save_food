import React, { Component } from "react";
import { Routes, Switch, Route } from "react-router-dom";
//import components
import Customers from "./sponsorList/customers";
import Sponsor from "./joinSponsor/sponsor";
import Contact from "./contactForm/contact";
//import styling css
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Routes>
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    );
  }
}

export default App;
