const express = require("express");
const cors = require("cors");
// var bodyParser = require("body-parser");
var zod = require("zod");

const mainRouter = require("./routes/index");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
app.listen(3000, () => {
  console.log("App is running on port 3000");
});
