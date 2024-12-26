const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    time: { type: String, required: true },
    date: { 
        type: String, 
        required: true, 
        validate: {
            validator: function (value) {
                // Check if the value matches YYYY-MM-DD format
                return /^\d{4}-\d{2}-\d{2}$/.test(value);
            },
            message: (props) => `${props.value} is not a valid date format (YYYY-MM-DD).`
        }
    },
    noOfSeats: { 
        type: Number, 
        required: true, 
        min: [1, "The number of seats must be at least 1."], 
        validate: {
            validator: Number.isInteger,
            message: (props) => `${props.value} is not a valid number of seats. It must be an integer.`
        }
    }
});

const FlightModel = mongoose.model("FlightSchedule", flightSchema);

module.exports = FlightModel;
