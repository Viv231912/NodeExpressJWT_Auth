const mongoose = require("mongoose");
const { isEmail } = require('validator'); 
//create schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']//third party validator
  },
  password: {
    type: String,
    required: [true,"Please enter an email"],
    minlength: [6, "Minimum password length is 6 characters"] ,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
