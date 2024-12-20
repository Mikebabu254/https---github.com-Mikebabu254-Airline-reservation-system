import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FlightSchedule = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]);

    // Fetch flights from the backend
    const fetchFlights = async () => {
        try {
            const response = await axios.get("http://localhost:3000/flight-schedule");
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };

    // Navigate to the Edit Flight page
    const handleEditFlight = (id) => {
        navigate(`/admin/edit-flight/${id}`);
    };

    useEffect(() => {
        fetchFlights();
    }, []);

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
                                    <button
                                        className="btn btn-primary btn-sm me-2"
                                        onClick={() => handleEditFlight(flight._id)}
                                    >
                                        Edit
                                    </button>
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
        </div>
    );
};

export default FlightSchedule;
