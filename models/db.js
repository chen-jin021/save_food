const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const CommentSchema = new mongoose.Schema({
  message: String,
});

//register our schema
const User = mongoose.model("User", UserSchema);
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = {
  User,
  Comment,
};
