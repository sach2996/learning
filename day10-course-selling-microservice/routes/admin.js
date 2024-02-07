const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  if (!username || !password) {
    return res.status(411).json({
      msg: "Please provide username/password",
    });
  }
  const userExists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (!userExists) {
    Admin.create({ username: username, password: password });
    return res.json({
      msg: "Admin Created Successfully.",
    });
  } else {
    return res.status(411).json({
      msg: "This admin already exists.",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  if (!username || !password) {
    return res.status(411).json({
      msg: "Please provide username/password",
    });
  }
  const userExists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (userExists) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET);
    return res.json({
      token: token,
    });
  } else {
    return res.status(411).json({
      msg: "This admin doesn't exist.",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const courseCreated = await Course.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
  });

  if (courseCreated) {
    return res.json({
      message: "Course created successfully",
      courseId: courseCreated._id,
    });
  } else {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  if (courses) {
    return res.json({
      courses: courses,
    });
  } else {
    res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = router;
