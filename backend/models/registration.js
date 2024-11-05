// models/registration.js
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNo: String,
  gender: String,
  email: { type: String, unique: true },
  DOB: Date,
  password: String,
  role: { type: String, default: "user" }  // Default role is "user"
});

const RegistrationModel = mongoose.model("user", registrationSchema);

module.exports = RegistrationModel;
