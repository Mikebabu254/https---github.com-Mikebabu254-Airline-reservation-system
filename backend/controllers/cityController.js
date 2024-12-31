// // controllers/cityController.js
// const AddCityModel = require("../models/addCity");

// const addCity = (req, res) => {
//   const { cityCode, countryName, cityName, timeZone } = req.body;

//   AddCityModel.create({ cityCode, countryName, cityName, timeZone })
//     .then((city) => res.status(201).json({ message: "City added successfully", city }))
//     .catch((err) => res.status(500).json({ message: "Error adding city", error: err }));
// };

// const getAllCities = (req, res) => {
//   AddCityModel.find()
//     .then((cities) => res.status(200).json(cities))
//     .catch((err) => res.status(500).json({ message: "Error fetching cities", error: err }));
// };

// module.exports = { addCity, getAllCities };
