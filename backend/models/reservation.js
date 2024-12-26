const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: "Flight", required: true },
    flightNumber: { type: String, required: true },
    numSeats: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const ReservationModel = mongoose.model("Reservation", reservationSchema);

module.exports = ReservationModel;
