import React, { Component } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
  render() {
    return (
      <div id="wrap">
        <div id="banner"></div>
        <div id="mainArea" className="contact">
          <h1>Welcome to Zanyo</h1>
          <p id="intro">
            {`
            Welcome to our website
             `}
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
