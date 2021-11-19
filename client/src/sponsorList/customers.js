import React, { Component } from "react";
import axios from "axios";
import "./customers.css";

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  getCustomerName = () => {
    axios
      .get("/api/name")
      .then((res) => {
        const data = res.data;
        this.setState({ customers: data });
      })
      .catch(() => {
        alert("Error retrieving data");
      });
  };

  componentDidMount = () => {
    this.getCustomerName();
  };

  render() {
    return (
      <div>
        <h1> View Our Sponsor List</h1>
        <ul>
          {this.state.customers.map((customer) => (
            <li key={customer.id}>{customer.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
