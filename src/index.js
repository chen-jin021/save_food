import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App"; //using the App function that we exported from App.js
import reportWebVitals from "./reportWebVitals";

/**
 * Read a new list to avoid redundantly write each tasks
 * @type {[{name: string, id: string, completed: boolean}, {name: string, id: string, completed: boolean}, {name: string, id: string, completed: boolean}]}
 */
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

/**
 * ReactDOM.render() has 2 parameters:
 * 1. <App /> is a component that we are rendering
 * 2. 'root' element - public/index.html has root element of which we want to render
 * Note: all react components and HTML elements must have closing slashes '/>'
 */
ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
