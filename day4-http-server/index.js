const express = require("express");

const users = [
  {
    name: "John Doe",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: true,
      },
    ],
  },
  {
    name: "Johny",
    kidneys: [
      {
        healthy: false,
      },
      {
        healthy: false,
      },
    ],
  },
];
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/", (req, res) => {
  const johnsKidney = users[0].kidneys;
  const noOfKidneys = johnsKidney.length;
  const healthyKidneys = johnsKidney.filter(
    (kidney) => kidney.healthy === true
  ).length;
  const unhealthyKidneys = johnsKidney.filter(
    (kidney) => kidney.healthy === false
  ).length;
  res.json({
    noOfKidneys,
    healthyKidneys,
    unhealthyKidneys,
  });
});
app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({ message: "done", kidney: users[0] });
});
app.put("/", (req, res) => {
  users[0].kidneys.map((kidney) => {
    if (kidney.healthy === false) {
      kidney.healthy = true;
    }
  });
  res.json({ result: users[0] });
});
app.delete("/", (req, res) => {
  if (
    users[0].kidneys.filter((kidney) => kidney.healthy === true).length === 0 ||
    users[0].kidneys.filter((kidney) => kidney.healthy === false).length === 0
  ) {
    res.sendStatus(411);
  }
  users[0].kidneys = users[0].kidneys.filter(
    (kidney) => kidney.healthy === true
  );
  console.log(users[0].kidneys);
  res.json({ result: users[0] });
});

app.listen(PORT, () => {
  console.log(`App is running on port: ${PORT}`);
});
