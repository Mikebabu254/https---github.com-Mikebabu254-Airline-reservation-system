const mongoose = require("mongoose")

const bookingFlights = mongoose.Schema({
    from :String,
    to: String,
    depatureDate: String,
    returnDate: String,
    type: String,
    price: String,
    payed: String
})

module.exports = mongoose.model("booking-flight", bookingFlights)