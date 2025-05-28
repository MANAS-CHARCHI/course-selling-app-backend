const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();

app.use("/users", userRouter);
app.use("/courses", courseRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
