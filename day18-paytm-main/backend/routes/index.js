const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");

const userRouter = require("./user");
const { User } = require("../db");

router.use("/user", userRouter);

// router.use();

//test

module.exports = router;
