const express = require("express");

const app = express();

app.post("/user/signup", (req, res) => {
  res.json({ message: "signed up" });
});

app.post("/user/login", (req, res) => {
  res.json({ message: "logged in" });
});

app.post("/user/purchease", (req, res) => {
  res.json({ message: "purcheased" });
});

app.post("/courses", (req, res) => {
  res.json({ message: "course created" });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
