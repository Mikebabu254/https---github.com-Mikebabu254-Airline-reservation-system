import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditFlight = () => {
    const { id } = useParams(); // Get flight ID from URL
    const navigate = useNavigate();
    const [flight, setFlight] = useState({
        flightNumber: "",
        origin: "",
        destination: "",
        time: "",
        date: "",
    });

    // Fetch flight details
    const fetchFlightDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/view-flight/${id}`);
            setFlight(response.data);
        } catch (error) {
            console.error("Error fetching flight details:", error);
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFlight({ ...flight, [name]: value });
    };

    // Update flight
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/modifyFlight/${id}`, flight);
            alert("Flight updated successfully");
            navigate("/Admin");
        } catch (error) {
            console.error("Error updating flight:", error);
            alert("Failed to update flight");
        }
    };

    useEffect(() => {
        fetchFlightDetails();
    }, [id]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Edit Flight</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="flightNumber" className="form-label">
                        Flight Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="flightNumber"
                        name="flightNumber"
                        value={flight.flightNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="origin" className="form-label">
                        Origin
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="origin"
                        name="origin"
                        value={flight.origin}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="destination" className="form-label">
                        Destination
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="destination"
                        name="destination"
                        value={flight.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="time" className="form-label">
                        Time
                    </label>
                    <select
                        className="form-control"
                        id="time"
                        name="time"
                        value={flight.time}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a time</option>
                        <option value="6:30 AM">6:30 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                    </select>
            </div>

                <div className="mb-3">
                    <label htmlFor="date" className="form-label">
                        Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        name="date"
                        value={flight.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Update Flight
                </button>
                <button
                    type="button"
                    className="btn btn-secondary ms-2"
                    onClick={() => navigate("/Admin")}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default EditFlight;
