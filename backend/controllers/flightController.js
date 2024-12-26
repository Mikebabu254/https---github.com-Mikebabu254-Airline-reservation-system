const FlightModel = require("../models/flight");

const addFlight = (req, res) => {
  const { flightNumber, origin, destination, time, date, noOfSeats } = req.body;
  FlightModel.create({ flightNumber, origin, destination, time, date, noOfSeats })
    .then((flight) => res.json({ message: "Flight added successfully", flight }))
    .catch((err) => res.status(500).json({ message: "Failed to add flight", error: err }));
};

const getFlights = (req, res) => {
  const { destination, origin, date } = req.query;
  const filters = {};
  if (destination) filters.destination = { $regex: destination, $options: "i" };
  if (origin) filters.origin = { $regex: origin, $options: "i" };
  if (date) filters.date = date;

  FlightModel.find(filters)
    .then((flights) => res.json(flights))
    .catch((err) => res.status(500).json({ message: "Error fetching flights", error: err }));
};

const deleteFlight = (req, res) => {
  const flightId = req.params.id;
  FlightModel.findByIdAndDelete(flightId)
    .then((deletedFlight) => {
      if (!deletedFlight) return res.status(404).json({ message: "Flight not found" });
      res.json({ message: "Flight deleted successfully" });
    })
    .catch((err) => res.status(500).json({ message: "Error deleting flight", error: err }));
};

const getFlightById = (req, res) => {
  FlightModel.findById(req.params.id)
    .then((flight) => {
      if (!flight) return res.status(404).json({ message: "Flight not found" });
      res.json(flight);
    })
    .catch((err) => res.status(500).json({ message: "Error fetching flight", error: err }));
};

const updateFlight = (req, res) => {
  FlightModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedFlight) => res.json({ message: "Flight updated successfully", updatedFlight }))
    .catch((err) => res.status(500).json({ message: "Error updating flight", error: err }));
};

module.exports = { addFlight, getFlights, deleteFlight, getFlightById, updateFlight };
