import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FlightSchedule = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]); // State to store flight data

    // Fetch flights from the backend
    const fetchFlights = async () => {
        try {
            const response = await axios.get("http://localhost:3000/flight-schedule"); // Update with your backend URL
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };

    // Fetch flights when the component mounts
    useEffect(() => {
        fetchFlights();
    }, []);

    const handleAddFlight = () => {
        navigate("/admin/add-flight");
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Flight Schedule</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.length > 0 ? (
                        flights.map((flight) => (
                            <tr key={flight._id}>
                                <td>{flight.flightNumber}</td>
                                <td>{flight.origin}</td>
                                <td>{flight.destination}</td>
                                <td>{flight.time}</td>
                                <td>{new Date(flight.date).toLocaleDateString()}</td>
                                <td>
                                    <button className="btn btn-primary btn-sm me-2">Edit</button>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No flights available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={handleAddFlight}>
                    Add New Flight
                </button>
            </div>
        </div>
    );
};

export default FlightSchedule;
