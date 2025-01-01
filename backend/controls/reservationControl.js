const bookingFlights = require("../models/reservationModel")

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

module.exports = {bookFlight, cancelFlight, viewFlight, modifyFlight}