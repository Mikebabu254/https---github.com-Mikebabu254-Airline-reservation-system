const mongoose = require("mongoose")

const flightSchema = mongoose.Schema({
    flightNumber: String,
    origin: String,
    destination: String,
    time: String,
    date: String,
    noOfSeats: String,
    price: String
    
})

module.exports = mongoose.model("adding-flight", flightSchema)