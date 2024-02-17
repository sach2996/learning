const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");

const userRouter = require("./user");
const { User } = require("../db");

router.post("/signup", async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  if (!userName || !password) {
    return res.status(411).json({
      msg: "Please provide username/password",
    });
  }
  const userExists = await User.findOne({
    userName: userName,
  });
  if (!userExists) {
    User.create({ userName: userName, password: password });
    return res.json({ msg: "User created successfully" });
  } else {
    return res.status(411).json({
      msg: "This username is taken",
    });
  }
});

router.post("/signin", (req, res) => {});

module.exports = router;
