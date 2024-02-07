// Middleware for handling auth
const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.token.split(" ");

  try {
    const decodedValue = jwt.decode(token[1], process.env.JWT_SECRET);
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      return res.status(403).json({
        msg: "User not authenticated",
      });
    }
  } catch (error) {
    return res.status(411).json({
      msg: "Wrong input",
    });
  }
}

module.exports = adminMiddleware;
