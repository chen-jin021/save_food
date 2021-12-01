const Strategy = require("passport-local").Strategy;
const User = require("../models/db");

const LoginStrategy = new Strategy(function (username, password, done) {
  //once user sign in
});

module.exports = LoginStrategy;
