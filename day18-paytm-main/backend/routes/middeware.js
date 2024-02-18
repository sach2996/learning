const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.Authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({
      message: "Authorization header is missing/invalid",
    });
  }
  try {
    const decodedToken = jwt.verify(authHeader.split(" ")[1], JWT_SECRET);
    req.userId = decodedToken.userId;

    next();
  } catch (error) {
    res.status(403).json({
      message: "Authorization header is missing/invalid",
    });
  }
};

module.exports = { authMiddleware };
