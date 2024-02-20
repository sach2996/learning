const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.CONNECTTION_STRING);
// Classic Solution
// const UserSchema = new mongoose.Schema({
//   username: String,
//   firstName: String,
//   lastName: String,
//   password: String,
// });

//Elegant Solution

const UserSchema = new mongoose.Schema({
  username: {
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

const AccountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});
const Account = mongoose.model("Account", accountSchema);
module.exports = {
  User,
  Account,
};
