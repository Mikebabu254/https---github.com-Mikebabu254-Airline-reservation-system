import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFlight = () => {
    const navigate = useNavigate();

    // State for form fields
    const [flightNumber, setFlightNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:3000/flight-schedule", {
                flightNumber,
                origin,
                destination,
                time,
                date
            });
            console.log(response.data); // Log response for confirmation
            navigate("/Admin"); // Redirect to flight schedule page
        } catch (error) {
            console.error("Error adding flight:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add New Flight</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="flightNumber">Flight Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="flightNumber"
                        value={flightNumber}
                        onChange={(e) => setFlightNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="origin">Origin</label>
                    <input
                        type="text"
                        className="form-control"
                        id="origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination">Destination</label>
                    <input
                        type="text"
                        className="form-control"
                        id="destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="time">Time</label>
                    <input
                        type="time"
                        className="form-control"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Add Flight
                </button>
            </form>
        </div>
    );
};

export default AddFlight;
