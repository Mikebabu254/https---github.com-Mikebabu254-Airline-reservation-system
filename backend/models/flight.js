const mongoose = require("mongoose")

const flightSchema = new mongoose.Schema({
    flightNumber: String,
    origin: String,
    destination: String,
    time: time,
    date: Date
});

const flightModel= mongoose.model("flight schedule", flightSchema);

module.exports = flightModel;