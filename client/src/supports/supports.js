import React, { Component } from "react";
import axios from "axios";
import "./supports.css";

class Supports extends Component {
  state = {
    texts: [],
  };

  getCustomerMessage = () => {
    axios
      .get("/api/support")
      .then((res) => {
        const data = res.data;
        this.setState({ texts: data });
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
      support: this.state.support,
    };

    //to send the data
    axios({
      url: "/api/savesupport",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data has been sent to the server");
        alert(
          "Your comment has been documented, refresh the page to see updates."
        );
        // to clear the previous inputs
        this.setState({ texts: "" });
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
          <h1>To Request Supports:</h1>
        </div>
        <div id="mainArea" className="contact">
          <p>
            If you would like to request support from us, you are welcome to
            send me messages through the form below:
          </p>
          <form onSubmit={this.submit}>
            {/* use a table here to layout a form */}
            <table>
              {/* This table row is for text messages: */}
              <tr>
                <td>To Leave a Comment about Us:</td>
                <td>
                  <textarea
                    placeholder="Enter comment"
                    name="support"
                    cols="60"
                    rows="10"
                    value={this.state.support}
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
      </div>
    );
  }
}

export default Supports;
