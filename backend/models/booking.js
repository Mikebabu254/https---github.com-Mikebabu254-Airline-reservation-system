const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    fromLocation: { type: String, required: true },
    destination: { type: String, required: true },
    departureDate: { type: Date, required: true },
    returnDate: { type: Date },
    seats: { type: Number, required: true },
    tripType: { type: String, required: true }, // "Round Trip" or "One Way"
});

const Booking = mongoose.model("Booking", bookingSchema);