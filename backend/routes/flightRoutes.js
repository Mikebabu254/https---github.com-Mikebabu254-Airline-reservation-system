const express = require("express");
const FlightModel = require("../models/flight");
const router = express.Router();

// Add Flight
router.post("/", (req, res) => {
  const { flightNumber, origin, destination, time, date, noOfSeats } = req.body;

  if (!flightNumber || !origin || !destination || !time || !date || noOfSeats === undefined) {
    return res.status(400).json({ message: "All fields are required." });
  }

  FlightModel.create({ flightNumber, origin, destination, time, date, noOfSeats })
    .then((flight) => res.json({ message: "Flight added successfully", flight }))
    .catch((err) => res.status(500).json({ message: "Failed to add flight", error: err.message }));
});

// Get All Flights
router.get("/", async (req, res) => {
  const { destination, origin, date } = req.query;
  const filters = {};
  if (destination) filters.destination = { $regex: destination, $options: "i" };
  if (origin) filters.origin = { $regex: origin, $options: "i" };
  if (date) filters.date = date;

  try {
    const flights = await FlightModel.find(filters);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: "Error fetching flights", error: err });
  }
});

// Delete Flight
router.delete("/:id", async (req, res) => {
  try {
    const flightId = req.params.id;
    const deletedFlight = await FlightModel.findByIdAndDelete(flightId);

    if (!deletedFlight) return res.status(404).json({ message: "Flight not found" });
    res.status(200).json({ message: "Flight deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting flight", error: err });
  }
});

module.exports = router;
