import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FlightSchedule = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]); // State to store flight data
    const [selectedFlight, setSelectedFlight] = useState(null); // State to store the selected flight for deletion
    const [loading, setLoading] = useState(false); // State to manage loading state

    // Fetch flights from the backend
    const fetchFlights = async () => {
        try {
            setLoading(true); // Start loading
            const response = await axios.get("http://localhost:3000/flight-schedule");
            setFlights(response.data);
            setLoading(false); // Stop loading
        } catch (error) {
            console.error("Error fetching flights:", error);
            setLoading(false);
        }
    };

    // Delete a flight by ID
    const handleDeleteFlight = async () => {
        try {
            setLoading(true); // Start loading
            await axios.delete(`http://localhost:3000/flight-schedule/${selectedFlight._id}`);
            setFlights(flights.filter((flight) => flight._id !== selectedFlight._id)); // Update state to remove the deleted flight
            alert("Flight deleted successfully");
            setSelectedFlight(null); // Clear the selected flight
            setLoading(false); // Stop loading
        } catch (error) {
            console.error("Error deleting flight:", error);
            alert("Failed to delete flight");
            setLoading(false); // Stop loading
        }
    };

    // Show confirmation dialog for deletion
    const confirmDeleteFlight = (flight) => {
        setSelectedFlight(flight);
    };

    // Cancel deletion
    const cancelDelete = () => {
        setSelectedFlight(null); // Clear the selected flight
    };

    // Navigate to the Add Flight page
    const handleAddFlight = () => {
        navigate("/admin/add-flight");
    };

    // Navigate to the Edit Flight page
    const handleEditFlight = (id) => {
        navigate(`/admin/edit-flight/${id}`);
    };

    // Fetch flights when the component mounts
    useEffect(() => {
        fetchFlights();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Flight Schedule</h1>
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <>
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
                                            <button
                                                className="btn btn-danger btn-sm"
                                                onClick={() => confirmDeleteFlight(flight)}
                                            >
                                                Delete
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
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary" onClick={handleAddFlight}>
                            Add New Flight
                        </button>
                    </div>
                </>
            )}

            {/* Confirmation Dialog */}
            {selectedFlight && (
                <div className="modal d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={cancelDelete}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this flight?</p>
                                <ul>
                                    <li>
                                        <strong>Flight Number:</strong> {selectedFlight.flightNumber}
                                    </li>
                                    <li>
                                        <strong>Origin:</strong> {selectedFlight.origin}
                                    </li>
                                    <li>
                                        <strong>Destination:</strong>{" "}
                                        {selectedFlight.destination}
                                    </li>
                                    <li>
                                        <strong>Time:</strong> {selectedFlight.time}
                                    </li>
                                    <li>
                                        <strong>Date:</strong>{" "}
                                        {new Date(selectedFlight.date).toLocaleDateString()}
                                    </li>
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleDeleteFlight}
                                >
                                    Yes, Delete
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={cancelDelete}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlightSchedule;
