const mongoose = require("mongoose")

const bookingFlights = mongoose.Schema({
    flightNumber: String,
    origin: String,
    destination: String,
    time: String,
    date: String,
    seatNo: String,
    price: String
})

module.exports = mongoose.model("booking-flight", bookingFlights)