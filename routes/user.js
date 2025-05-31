const { Router } = require("express");
const userRouter = Router();
const { z } = require("zod");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel, purchaseModel } = require("../db");

userRouter.post("/signup", async function (req, res) {
  // Initilizing Zod verification
  const requireBody = z.object({
    email: z.string().min(10).max(50).email(),
    password: z.string().min(8).max(50),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    isAdmin: z.boolean().optional(),
  });
  const parseData = requireBody.safeParse(req.body);
  if (!parseData.success) {
    return res.status(400).json({ message: parseData.error.message });
  }
  //   Getting data from req.body
  const { email, password, firstname, lastname, isAdmin } = parseData.data;
  //   Hashing password
  const hashedPassword = await bcrypt.hash(password, 2);
  //   Creating user
  try {
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
      isAdmin: isAdmin,
    });
  } catch (err) {
    res.json({ message: err.message });
  }

  res.json({ message: "signed up success" });
});

userRouter.post("/login", async function (req, res) {
  const requireBody = z.object({
    email: z.string().min(10).max(50).email(),
    password: z.string().min(8).max(50),
  });
  const parseData = requireBody.safeParse(req.body);
  const { email: email, password: password } = parseData.data;
  const user = await userModel.findOne({ email: email });
  if (!user) {
    res.json({ message: "user not found" });
  }
  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    res.json({ message: "password not matched" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  if (user.isAdmin) {
    return res.json({
      message: "logged in success as admin",
      token: token,
      isAdmin: true,
    });
  }
  res.json({ message: "logged in success", token: token });
});

userRouter.get("/purcheases", function (req, res) {
  res.json({ message: "purcheased courses" });
});
userRouter.post("/purchease", function (req, res) {
  res.json({ message: "purchease a course" });
});

module.exports = {
  userRouter: userRouter,
};
