const express = require("express");
const router = express.Router();
const { addCity, getAllCities } = require("../controllers/cityController");

router.post("/add", addCity);
router.get("/", getAllCities);

module.exports = router;
