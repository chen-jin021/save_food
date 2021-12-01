import React, { Component } from "react";
import axios from "axios";
import "./comments.css";

class Comments extends Component {
  state = {
    comments: [],
  };

  getCustomerMessage = () => {
    axios
      .get("/api/comment")
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
      message: this.state.message,
    };

    //to send the data
    axios({
      url: "/api/savecomment",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data has been sent to the server");
        alert(
          "Your comment has been documented, refresh the page to see updates."
        );
        // to clear the previous inputs
        this.setState({ message: "" });
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
          <h1>Comment List:</h1>
        </div>
        <div id="mainArea" className="contact">
          <p>
            If you would like to contact Zanyo, you are welcome to send me
            messages through the form below:
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
        <div id="view-comments">
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
export default Comments;