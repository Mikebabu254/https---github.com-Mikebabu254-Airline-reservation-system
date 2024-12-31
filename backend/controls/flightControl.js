const express = require("express");
const flightModel = require("../models/flightModel");

const addFlight = async (req, res) => {
  const { from, to, departureDate, returnDate, price, payed } = req.body;

  try {
    const newFlight = await flightModel.create({
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
};

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

module.exports = { addFlight, deleteFlight, viewFlight, modifyFlight };