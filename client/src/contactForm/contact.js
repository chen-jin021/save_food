import React, { Component } from "react";
import axios from "axios";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";

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
        <div id="banner">
          <h1>To Contact Us:</h1>
        </div>
        <div id="mainArea" className="contact">
          <p>
            If you would like to contact Zanyo, you are welcome to send me
            messages through the form below:
          </p>
          <form onSubmit={this.submit}>
            {/* use a table here to layout a form */}
            <table>
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
                    cols="60"
                    rows="10"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <input type="submit" name="Submit Form" />
                </td>
              </tr>
            </table>
          </form>
        </div>
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
