const express = require("express");
const router = express.Router();
const passport = require("../passport");

passport.authenticate("local-signup", () => {});

router.post("/signup", function (req, res, next) {
  res.send("respond with a resource");
});

router.post(
  "/signin",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/home",
    session: false,
  })
);

module.exports = router;
