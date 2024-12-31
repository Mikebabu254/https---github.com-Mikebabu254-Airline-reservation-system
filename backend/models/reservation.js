// const mongoose = require("mongoose");

// // Define the reservation schema
// const reservationSchema = new mongoose.Schema({
//     flightId: { 
//         type: String, 
        
//         required: true 
//     },
//     flightNumber: { 
//         type: String, 
//         required: true 
//     },
//     numSeats: { 
//         type: Number, 
//         required: true,
//         min: [1, "Number of seats must be at least 1"] // Minimum validation
//     },
//     createdAt: { 
//         type: Date, 
//         default: Date.now 
//     }
// });

// // Create the Reservation model
// const ReservationModel = mongoose.model("Reservation", reservationSchema);

// module.exports = ReservationModel;
