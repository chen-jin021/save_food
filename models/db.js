const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const CommentSchema = new mongoose.Schema({
  message: String,
});

const SupportSchema = new mongoose.Schema({
  support: String,
});

//register our schema
const User = mongoose.model("User", UserSchema);
const Comment = mongoose.model("Comment", CommentSchema);
const Support = mongoose.model("Support", SupportSchema);

module.exports = {
  User: User,
  Comment: Comment,
  Support: Support,
};
