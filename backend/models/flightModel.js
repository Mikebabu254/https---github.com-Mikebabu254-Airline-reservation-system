const mongoose = require("mongoose")

const flightSchema = mongoose.Schema({
    from :String,
    to: String,
    Depature: String,
    Return: String,
    type: String,
    price: String,
    payed: String
})

module.exports = mongoose.model("booking-flight", flightSchema)