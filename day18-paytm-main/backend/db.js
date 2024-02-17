const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://2996sach:Sachin@12@cluster0.3av4b8k.mongodb.net/paytm"
);
// Classic Solution
// const UserSchema = new mongoose.Schema({
//   username: String,
//   firstName: String,
//   lastName: String,
//   password: String,
// });

//Elegant Solution

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    maxLength: 30,
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = {
  User,
};
