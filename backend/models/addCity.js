const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
    cityCode: { type: Number, required: true }, // Corrected type from `int` to `Number`
    countryName: { type: String, required: true },
    cityName: { type: String, required: true },
    timeZone: { type: String, required: true },
});

const AddCityModel = mongoose.model("AddCity", citySchema);

module.exports = AddCityModel;
