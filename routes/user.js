const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({ message: "signed up done" });
});
userRouter.post("/login", function (req, res) {
  res.json({ message: "logged in done" });
});
userRouter.get("/purcheases", function (req, res) {
  res.json({ message: "purcheased courses" });
});
userRouter.post("/purchease", function (req, res) {
  res.json({ message: "purchease a course" });
});

module.exports = userRouter;
