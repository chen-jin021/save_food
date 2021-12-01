import React, { Component } from "react";
import axios from "axios";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import company_logo from "./images/logo.png";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    comments: [],
  };

  getCustomerMessage = () => {
    axios
      .get("/api/name")
      .then((res) => {
        const data = res.data;
        this.setState({ comments: data });
        console.log("data has been received");
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  };

  componentDidMount = () => {
    this.getCustomerMessage();
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  submit = (e) => {
    e.preventDefault();
    const payload = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message,
    };

    //to send the data
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data has been sent to the server");
        alert(
          "Your comment has been documented, refresh the page to see updates."
        );
        // to clear the previous inputs
        this.setState({ name: "", phone: "", email: "", message: "" });
        this.getCustomerMessage();
      })
      .catch(() => {
        console.log("internal server error");
      });
  };

  render() {
    console.log("Comment List:", this.state);
    return (
      <div id="wrap">
        <div>
          <img src={company_logo} height="150px" alt="company logo" />
        </div>
        <div id="banner">
          <h1>To Contact Us:</h1>
        </div>
        <div id="mainArea" className="contact">
          <p>
            If you would like to contact Zanyo, you are welcome to send me
            messages through the form below:
          </p>
          {/* form has two methods: 1) post 2)get */}
          {/* here action="contact.html" will allow data captured through this form to send to the contact page (contact.html) */}
          {/* Since the get method reveals all info captured, we don't use get for bank account info, etc. */}
          <form onSubmit={this.submit}>
            {/* use a table here to layout a form */}
            <table border={1}>
              <tbody>
                <tr>
                  <td>Your Name:</td>
                  <td>
                    <input
                      type="text"
                      name="name"
                      placeholder="enter name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Your Email:</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      placeholder="email address"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>

                <tr>
                  <td>Your Phone:</td>
                  <td>
                    <input
                      type="text"
                      name="phone"
                      placeholder="contact phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>We'll be in touch soon</p>
                    <p>
                      We aim to respond within 24 hours, however, during busy
                      periods like holidays, sales and special campaigns we may
                      take a little longer getting back to you. Want to get in
                      touch with our teams? Scroll down for more details.
                    </p>
                  </td>
                  <td>
                    <p>Call us</p>
                    <p>
                      We're available Monday to Friday 08:00 - 21:00 EST and
                      Saturday to Sunday 09:00 - 20:00 EST.
                    </p>
                  </td>
                </tr>

                {/* This table row is for text messages: */}
                <tr>
                  <td>To Leave a Comment about Us:</td>
                  <td>
                    <textarea
                      placeholder="Enter comment"
                      name="message"
                      cols="30"
                      rows="10"
                      value={this.state.message}
                      onChange={this.handleChange}
                    ></textarea>
                  </td>
                </tr>
                {/* now, we want to add some buttons */}
                <tr>
                  <td colSpan={2}>
                    <input type="submit" name="Submit Form" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
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
        <div>
          <h1> View Our Comments:</h1>
          <ul>
            {this.state.comments.map((comment) => (
              <li>{comment.message}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Contact;
