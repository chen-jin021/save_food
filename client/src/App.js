import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
//import components
import Customers from "./sponsorList/customers";

import Contact from "./contactForm/contact";
import Home from "./home/home";

import company_logo from "./white_logo_transparent_background.png";

//import styling css
import "./App.css";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="nav">
          <Navbar bg="dark" variant="dark" fixed="top">
            <img
              id="logo"
              src={company_logo}
              height="55px"
              alt="company logo"
            />
            <Nav>
              <Nav.Link href="/">About</Nav.Link>
              <Nav.Link href="/sponsor">Sponsor List</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              <Nav.Link href="#pricing">Log in/Sign up</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div id="body">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sponsor" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
            {/* TODO: Log in and sign up */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
