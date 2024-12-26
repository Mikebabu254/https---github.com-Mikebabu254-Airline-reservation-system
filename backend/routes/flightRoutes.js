const express = require("express");
const router = express.Router();
const { addFlight, getFlights, deleteFlight, getFlightById, updateFlight } = require("../controllers/flightController");

router.post("/schedule", addFlight);
router.get("/schedule", getFlights);
router.delete("/schedule/:id", deleteFlight);
router.get("/schedule/:id", getFlightById);
router.put("/schedule/:id", updateFlight);

module.exports = router;
