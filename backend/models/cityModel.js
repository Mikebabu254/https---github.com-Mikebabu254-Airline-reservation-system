const mongoose  = require("mongoose");

const citySchema = mongoose.Schema({
    cityCode: String,
    countryName: String,
    cityName: String,
    timeZone: String
})

module.exports = mongoose.model("addcities", citySchema)