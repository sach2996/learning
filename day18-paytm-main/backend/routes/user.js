const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const zod = require("zod");
const userRouter = require("./user");
const { User } = require("../db");

const signupBody = zod.object({
  username: zod.string().email(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const signinBody = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
  const userExists = await User.findOne({
    username: req.body.username,
  });
  if (!userExists) {
    const user = await User.create({
      username: req.body.username,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    const userId = user._id;
    const jwtToken = jwt.sign({ userId }, JWT_SECRET);

    return res.json({
      message: "User created successfully",
      token: jwtToken,
    });
  } else {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
  const userExists = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (userExists) {
    const userId = userExists._id;
    const jwtToken = jwt.sign({ userId }, JWT_SECRET);

    return res.json({
      token: jwtToken,
    });
  } else {
    return res.status(411).json({
      message: "Error while logging in",
    });
  }
});

module.exports = router;
