const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
const dbUrl = process.env.CONN_STRING;

mongoose.connect(dbUrl);

const User = mongoose.model("User", {
  username: String,
  password: String,
});

// const user = new User({ username: "sachin", password: "12345" });
// user.save();
const USERS = [
  { username: "sachin", password: "12345" },
  { username: "tim", password: "12345" },
  { username: "john", password: "12345" },
];
const jwtPassword = "012345";

function isUserExist(username, password) {
  return USERS.some(
    (value) => value.username === username && value.password === password
  );
}

app.post("/signup", async (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  const existingUser = await User.findOne({ username: userName });
  if (existingUser) {
    return res.status(403).json({
      message: "this username is taken",
    });
  }
  const user = new User({ username: userName, password: password });
  await user.save();

  res.json({
    message: "user created successfully",
  });
});
app.post("/signin", (req, res) => {
  const userName = req.body.username;
  const password = req.body.password;
  if (!isUserExist(userName, password)) {
    return res.status(403).json({
      message: "User does not exist",
    });
  }
  const token = jwt.sign({ userName }, jwtPassword);

  res.json({
    token: token,
  });
});

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const userName = decoded.userName;
    const users = USERS.filter((value) => value.username != userName);
    return res.send(users);
  } catch (error) {
    return res.status(403).json({ message: "invalid token" });
  }
});
app.listen(3000, (req, res) => {
  console.log("Application is running on port 3000");
});
