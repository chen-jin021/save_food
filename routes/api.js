const express = require("express");
const router = express.Router();
const User = require("../models/db");

//have a prefix of '/api'
router.get("/", (req, res) => {
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

//to receive data from the front end
router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  //create a new instance
  const newUser = new User(data);

  newUser.save((err) => {
    if (err) {
      res.status(500).json("Sorry, Internal Server Errors");
      return;
    }
    res.json({
      msg: "your data has been saved",
    });
  });
});

router.get("/name", (req, res) => {
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

module.exports = router;
