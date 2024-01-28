const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;
app.post("/", function (req, res) {
  const a = req.body;
  console.log(a);
  res.send("hello world");
});

app.post("/example", (req, res) => {
  // Accessing the parsed JSON data from the request body
  const requestData = req.body;

  // Your logic here using requestData
  console.log(requestData);

  res.send("POST request received");
});
app.listen(port, function () {
  console.log(`app is running on port:${port}`);
});
