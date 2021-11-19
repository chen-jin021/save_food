import React, { Component } from "react";
import Customers from "./customers/customers";
import SignUp from "./signUp/signUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Express Starter</h1>
        </header>
        <Customers />
        <SignUp />
      </div>
    );
  }
}

export default App;
