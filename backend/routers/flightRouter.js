const express = require("express")
const router = express.Router()
const {addFlight, deleteFlight, viewFlight, modifyFlight, viewAllFlights} = require("../controls/flightControl")

router.post("/flight-schedule",addFlight)
router.delete("/delete-flight/:id", deleteFlight)
router.get("/view-flight/:id", viewFlight)
router.put("/modifyFlight/:id", modifyFlight)
router.get("/view-all-flight", viewAllFlights)


module.exports = router