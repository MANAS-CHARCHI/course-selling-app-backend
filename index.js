const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoDbURL = process.env.MONGO_URI;
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);

async function main() {
  await mongoose.connect(mongoDbURL);
  console.log("db connected");

  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
}

main();
