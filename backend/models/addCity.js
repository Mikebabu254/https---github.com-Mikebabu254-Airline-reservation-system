const mongoose = require("mongoose")

const citySchema = new mongoose.Schema({
    userName: { type: String, required: true },
    cityCode: {type: int, required: true},
    countryName: {type: String, required: true},
    cityName: {type: String, required: true},
    timeZone: {type: String, required: true}
}) 

const AddCity = mongoose.model("AddCity", citySchema);

module.exports = AddCity;