const mongoose = require("mongoose")

const seatBookingSchema = mongoose.Schema({
    flightNumber: String,
    origin: String,
    destination: String,
    time: String,
    date: String,
    seatNo: [String],
})

module.exports = mongoose.model("flight-seat", seatBookingSchema )
