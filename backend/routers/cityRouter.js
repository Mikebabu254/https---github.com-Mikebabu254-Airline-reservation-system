const express = require("express")
const router = express.Router()
const {addCity, viewCity, countCity} = require("../controls/cityControl")

router.post("/add-city", addCity)
router.get("/get-cities", viewCity)
router.get("/number-of-cities", countCity)

module.exports = router