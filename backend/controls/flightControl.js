const express = require("express");
const flightModel = require("../models/flightModel");
const bookingFlights = require("../models/reservationModel")

// adding flight
const addFlight = async (req, res) => {
  const {flightNumber, origin, destination, time, date, noOfSeats } = req.body;

  try {
    const newFlight = await flightModel.create({
      flightNumber,
      origin,
      destination,
      time,
      date,
      noOfSeats
    });
    res.status(201).json(newFlight); 
  } catch (error) {
    console.error("Error adding flight:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const bookFlight = async (req, res)=>{
  const {flightNumber, origin, destination, time,date,selectedSeats,price,firstName,email,} = req.body;
  try {
    const newFlight = await bookingFlights.create({
        flightNumber,
        origin,
        destination,
        time,
        date,
        seatNo: selectedSeats,
        price,
        firstName,
        email,
    });

    res.status(201).json(newFlight);
} catch (error) {
    console.error("Error booking flight:", error);
    res.status(500).json({ message: "Internal server error" });
}
}

// deleting flight
const deleteFlight = async (req, res) => {
  try {
    const { id } = req.params; 
    const deletedFlight = await flightModel.findByIdAndDelete(id); 

    if (!deletedFlight) {
      return res.status(404).json({ message: 'Flight not found' }); 
    }

    res.status(200).json({ message: 'Flight deleted successfully' }); 
  } catch (error) {
    console.error("Error deleting flight:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// view all flights
const viewAllFlights = async (req, res) => {
    try {
        const { destination, origin, date } = req.query; // Get filters from query parameters

        let filter = {};
        if (destination) filter.destination = { $regex: destination, $options: 'i' }; // Case-insensitive
        if (origin) filter.origin = { $regex: origin, $options: 'i' };
        if (date) filter.date = date;

        const flights = await flightModel.find(filter); // Apply the filters
        res.json(flights);
    } catch (error) {
        console.error("Error viewing flights:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// viewing a single flight
const viewFlight = async (req, res) => {
  try {
    const { id } = req.params; // Get flight ID from URL parameters
    const flight = await flightModel.findById(id); 

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' }); 
    }

    res.status(200).json(flight); 
  } catch (error) {
    console.error("Error viewing flight:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// editing flight
const modifyFlight = async (req, res) => {
  try {
    const { id } = req.params; 
    const { flightNumber, origin, destination, time, date, noOfSeats  } = req.body;
    const updatedFlight = await flightModel.findByIdAndUpdate(
      id, 
      {flightNumber, origin, destination, time, date, noOfSeats  }, 
      { new: true } // Return the updated document
    );

    if (!updatedFlight) {
      return res.status(404).json({ message: 'Flight not found' }); 
    }

    res.status(200).json(updatedFlight); 
  } catch (error) {
    console.error("Error modifying flight:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addFlight, deleteFlight, viewFlight, modifyFlight, viewAllFlights, bookFlight};