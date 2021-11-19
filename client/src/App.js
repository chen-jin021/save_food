import React, { Component } from "react";
import Customers from "./sponsorList/customers";
import Sponsor from "./joinSponsor/sponsor";
import Contact from "./contactForm/contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Sponsor />
        <Customers />
        <Contact />
      </div>
    );
  }
}

export default App;
