import React, { Component } from "react";
import axios from "axios";
import "./signUp.css";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
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
    };

    //to send the data
    axios({
      url: "/api/save",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data has been sent to the server");
        // to clear the previous inputs
        this.setState({ name: "", phone: "", email: "" });
      })
      .catch(() => {
        console.log("internal server error");
      });
  };
  render() {
    console.log("State:", this.state);
    return (
      <div>
        <form onSubmit={this.submit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="text"
              name="email"
              placeholder="email address"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              placeholder="contact phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
