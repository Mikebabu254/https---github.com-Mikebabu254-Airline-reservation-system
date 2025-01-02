const mongoose = require("mongoose")

const flightSchema = mongoose.Schema({
    from :String,
    to: String,
    depatureDate: String,
    returnDate: String,
    type: String,
    price: String,
    payed: String
})

module.exports = mongoose.model("adding-flight", flightSchema)