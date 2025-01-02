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
    const { from, to, departureDate, returnDate, price, payed } = req.body;

    try {
        const newFlight = await bookingFlights.create({
          from,
          to,
          departureDate,
          returnDate,
          price,
          payed,
        });
    
        res.status(201).json(newFlight); 
    } catch (error) {
        console.error("Error adding flight:", error);
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
const viewAllFlights = async (req, res)=>{
  try{
    const flight = await flightModel.find()
    res.json(flight)
  }catch(Error){
    console.log("error", Error)
  }
}


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
    const { from, to, departureDate, returnDate, price, payed } = req.body;

    const updatedFlight = await flightModel.findByIdAndUpdate(
      id, 
      { from, to, departureDate, returnDate, price, payed }, 
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

module.exports = { addFlight, deleteFlight, viewFlight, modifyFlight, viewAllFlights};