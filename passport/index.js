const passport = require("passport");

//import strategies
const SignupStrategy = require("./SignupStrategy");
const SigninStrategy = require("./SigninStrategy");

passport.use("local-signin", SigninStrategy);
passport.use("local-signup", SignupStrategy);

module.exports = passport;
