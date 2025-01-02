const express = require("express")
const router = express.Router()
const {addCity, viewCity} = require("../controls/cityControl")

router.post("/add-city", addCity)
router.get("/get-cities", viewCity)

module.exports = router