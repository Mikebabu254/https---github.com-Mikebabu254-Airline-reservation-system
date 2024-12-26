import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserFlightSchedule = () => {
    const navigate = useNavigate();
    const [flights, setFlights] = useState([]); // State to store flight data
    const [selectedFlight, setSelectedFlight] = useState(null); // State to store the selected flight for deletion

    // Fetch flights from the backend
    const fetchFlights = async () => {
        try {
            const response = await axios.get("http://localhost:3000/flight-schedule");
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };

    // Show confirmation dialog for deletion
    const confirmDeleteFlight = (flight) => {
        setSelectedFlight(flight);
    };

    // Handle flight deletion
    const handleDeleteFlight = async () => {
        try {
            await axios.delete(`http://localhost:3000/flight-schedule/${selectedFlight._id}`);
            setFlights(flights.filter((flight) => flight._id !== selectedFlight._id)); // Update state to remove the deleted flight
            alert("Flight deleted successfully");
            setSelectedFlight(null); // Clear the selected flight after deletion
        } catch (error) {
            console.error("Error deleting flight:", error);
            alert("Failed to delete flight");
        }
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
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>No. of Seats</th>
                        <th>Reserve</th>
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
                                <td>{flight.noOfSeats}</td>
                                <td>
                                    <button>Reserve</button>
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

export default UserFlightSchedule;
