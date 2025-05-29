const { Router } = require("express");
const adminRouter = Router();
const { userModel, purchaseModel } = require("../db");

adminRouter.post("/signup", function (req, res) {
  res.json({ message: "signed up done" });
});
adminRouter.post("/login", function (req, res) {
  res.json({ message: "logged in done" });
});
adminRouter.get("/purcheases", function (req, res) {
  res.json({ message: "purcheased courses" });
});
adminRouter.post("/purchease", function (req, res) {
  res.json({ message: "purchease a course" });
});

module.exports = {
  adminRouter: adminRouter,
};
