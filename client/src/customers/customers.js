import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentDidMount = () => {
    axios.get("/api/customers").then((res) => {
      this.setState({ customers: res.data });
    });
  };

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>{customer.firstName}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
