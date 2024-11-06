import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFlight = () => {
    const navigate = useNavigate();

    // State for form fields
    const [flightNumber, setFlightNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [time, setTime] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder logic for adding flight data
        console.log("New Flight:", { flightNumber, origin, destination, time });

        // Redirect back to the flight schedule page
        navigate("/flight-schedule");
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
                <button type="submit" className="btn btn-primary">
                    Add Flight
                </button>
            </form>
        </div>
    );
};

export default AddFlight;
