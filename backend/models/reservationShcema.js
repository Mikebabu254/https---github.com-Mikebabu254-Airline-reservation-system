const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: "Flight", required: true }, // Reference to the Flight model
    flightNumber: { type: String, required: true },
    numSeats: { type: Number, required: true, min: 1 }, // Seats booked for this reservation
    reservedAt: { type: Date, default: Date.now }, // Timestamp of the reservation
});

const ReservationModel = mongoose.model("Reservation", reservationSchema);

module.exports = ReservationModel;
