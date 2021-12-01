const express = require("express");
const router = express.Router();
const { User } = require("../models/db");
const { Comment } = require("../models/db");
const { Support } = require("../models/db");

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
      res.json(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

//*** Comment Schema */
//have a prefix of '/api'
router.get("/comment", (req, res) => {
  Comment.find({})
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
router.post("/savecomment", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  //create a new instance
  const newComment = new Comment(data);

  newComment.save((err) => {
    if (err) {
      res.status(500).json("Sorry, Internal Server Errors");
      return;
    }
    res.json({
      msg: "your data has been saved",
    });
  });
});

//*** Support Schema */
//have a prefix of '/api'
router.get("/support", (req, res) => {
  Support.find({})
    .then((data) => {
      console.log("Support", data);
      //send the 'data' to the browser
      res.json(data);
    })
    .catch((err) => {
      console.log("error", err);
    });
});

router.post("/savesupport", (req, res) => {
  const data = req.body;
  console.log("Body: ", data);

  //create a new instance
  const newSupport = new Support(data);

  newSupport.save((err) => {
    if (err) {
      res.status(500).json("Sorry, Internal Server Errors");
      return;
    }
    res.json({
      msg: "your data has been saved",
    });
  });
});

module.exports = router;
