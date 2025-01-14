const mongoose = require("mongoose")

const supportSchema = new mongoose.Schema({
    userId: String,
    complaint: String
})

module.exports = mongoose.model("complains", supportSchema)