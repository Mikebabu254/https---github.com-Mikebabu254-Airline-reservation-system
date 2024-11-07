const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
});

const FlightModel = mongoose.model("FlightSchedule", flightSchema);

module.exports = FlightModel;
