const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNo: String,
    gender: String,
    email: String,
    DOB: Date,
    password: String
});

const RegistrationModel = mongoose.model("User", RegistrationSchema);
module.exports = RegistrationModel;