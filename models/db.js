const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // username provided by authentication plugin
  // password hash provided by authentication plugin
  name: String,
  email: String,
  phone: String,
  message: String,
});

//register our schema
const User = mongoose.model("User", UserSchema);

module.exports = User;
