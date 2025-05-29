const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: String,
  lastname: String,
  isAdmin: { type: Boolean, default: false },
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: String,
  createrId: {
    type: ObjectId,
    ref: "user",
    required: true,
    validate: {
      validator: async function (value) {
        const user = await mongoose.model("user").findById(value);
        return user && user.isAdmin;
      },
      message: "Only admin can create a course",
    },
  },
});

const purchaseSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: "user",
    required: true,
  },
  courseId: {
    type: ObjectId,
    ref: "course",
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);
module.exports = {
  userModel,
  courseModel,
  purchaseModel,
};
