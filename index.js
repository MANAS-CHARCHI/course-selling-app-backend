const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");

const app = express();

app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://mmcharchi2002:Manas1%40charchi@cluster0.ezl2brj.mongodb.net/course-selling-app"
  );
  console.log("db connected");

  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
}

main();
