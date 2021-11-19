const express = require("express");
const router = express.Router();
const User = require("../models/db");
//creating the home page
router.get("/api", (req, res) => {
  User.find({})
    .then((data) => {
      console.log("Data", data);
      //send the 'data' to the browser
      res.json(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

router.get("/api/name", (req, res) => {
  const data = {
    username: "peterson",
    age: 5,
  };
  res.json(data);
});

module.exports = router;
