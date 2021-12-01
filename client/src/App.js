import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
//import components
import Customers from "./sponsorList/customers";
import Contact from "./contactForm/contact";
import Home from "./home/home";
import Comments from "./comments/comments";
import Supports from "./supports/supports";

import company_logo from "./white_logo_transparent_background.png";

//import styling css
import "./App.css";

import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

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
              <Nav.Link href="/comments">Comments</Nav.Link>
              <Nav.Link href="/supports">Request Supports</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div id="body">
          <Routes>
            <Route path="/" element={<Contact />} />
            <Route path="/sponsor" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/supports" element={<Supports />} />
          </Routes>
        </div>
        <footer>
          <p id="map">Location: </p>
          <div className="icons">
            {/* this is an embeded map from maps.google.com */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.6766015625294!2d121.5137393150515!3d31.22968798146674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b270c2e9d5690f%3A0x36018232ae44683!2sShinmay%20Union%20Square!5e0!3m2!1sen!2sus!4v1600763228172!5m2!1sen!2sus"
              width={400}
              height={200}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
          <div class="socialMedia">
            <a href="https://www.facebook.com" target="_blank">
              <FontAwesomeIcon icon={faPhoneSquare} size="6x"></FontAwesomeIcon>
              <span id="number">+86 137-952-3327</span>
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
