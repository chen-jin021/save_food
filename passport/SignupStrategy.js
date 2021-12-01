const Strategy = require("passport-local").Strategy;
const User = require("../models/db");

const SignupStrategy = new Strategy(function (username, password, done) {
  const user = username;
  //first param - error
  done("authentication error occured", { username: "", age: 5 });
});

module.exports = SignupStrategy;
