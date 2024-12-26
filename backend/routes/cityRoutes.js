const express = require("express");
const AddCityModel = require("../models/addCity");
const router = express.Router();

// Add City
router.post("/", async (req, res) => {
  const { cityCode, countryName, cityName, timeZone } = req.body;

  if (!cityCode || !countryName || !cityName || !timeZone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingCity = await AddCityModel.findOne({ cityCode });
    if (existingCity) return res.status(409).json({ message: "City already exists." });

    const city = await AddCityModel.create({ cityCode, countryName, cityName, timeZone });
    res.status(201).json({ message: "City added successfully", city });
  } catch (err) {
    res.status(500).json({ message: "Failed to add city", error: err });
  }
});

// Get All Cities
router.get("/", async (req, res) => {
  try {
    const cities = await AddCityModel.find();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cities", error: err });
  }
});

module.exports = router;
