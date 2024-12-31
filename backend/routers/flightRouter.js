const express = require("express")
const router = express.Router()
const {addFlight, deleteFlight, viewFlight, modifyFlight} = require("../controls/flightControl")

router.post("/add-flight",addFlight)
router.delete("/delete-flight/:id", deleteFlight)
router.get("/view-flight", viewFlight)
router.patch("modifyFlight/:id", modifyFlight)

module.exports = router