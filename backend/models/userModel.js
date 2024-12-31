const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phoneNo: String,
    gender: String,
    email: String,
    DOB: String,
    password: String,
    role: String
})

module.exports = mongoose.model("user", registrationSchema)