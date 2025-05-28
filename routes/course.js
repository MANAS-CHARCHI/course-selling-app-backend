const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/create", function (req, res) {
  res.json({ message: "course created" });
});
courseRouter.post("/update", function (req, res) {
  res.json({ message: "course updated" });
});
courseRouter.post("/delete", function (req, res) {
  res.json({ message: "course deleted" });
});

module.exports = courseRouter;
