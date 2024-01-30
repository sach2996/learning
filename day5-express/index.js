const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());

const schema = zod.array(zod.number());

function validationMiddleware(req, res, next) {
  const userName = req.headers.username;
  const password = req.headers.password;
  if (userName != "John" || password != "password12") {
    res.status(403).json({ msg: "Username/password entered is incorrect" });
  } else {
    next();
  }
}
function kedneyMiddleware(req, res, next) {
  const kedneyId = req.query.kedneyId;
  if (kedneyId != 1 && kedneyId != 2) {
    res.status(403).json({ msg: "Kedney input is wrong" });
  } else {
    next();
  }
}

app.use(validationMiddleware);
app.get("/health-checkup", kedneyMiddleware, (req, res) => {
  res.send("Your kedney is fine");
});

app.post("/health-checkup", (req, res) => {
  const kedneys = req.body.kedneys;
  console.log(kedneys);
  const response = schema.safeParse(kedneys);
  if (!response.success) {
    res.status(411).json({ message: response.error.issues });
  }

  const kedneysLength = kedneys.length;
  res.send(`you have ${kedneysLength} kedneys`);
});

app.post("/login", (req, res) => {
  const schemaObj = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });
  const response = schemaObj.safeParse(req.body);
  if (!response.success) {
    res.status(411).json({ message: response.error.issues });
  }
  res.json({ message: "user logged in" });
});
app.use((err, req, res, next) => {
  res.status(500).send("something is wrong");
});
app.listen(3000, (req, res) => {
  console.log(`Application is running on port: 3000 `);
});
