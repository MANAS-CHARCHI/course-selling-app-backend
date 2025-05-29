const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const mongoDbURL = process.env.MONGO_URI;
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

const app = express();

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(mongoDbURL);
  console.log("db connected");

  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
}

main();
