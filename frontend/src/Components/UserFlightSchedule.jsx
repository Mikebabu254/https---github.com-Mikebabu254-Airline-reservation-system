import React, { useState, useEffect } from "react";
import axios from "axios";

const UserFlightSchedule = () => {
    const [flights, setFlights] = useState([]); // State to store flight data
    const [searchFilters, setSearchFilters] = useState({
        destination: "",
        origin: "",
        date: ""
    }); // State to store search filters
    const [selectedFlight, setSelectedFlight] = useState(null); // Selected flight for booking
    const [numSeats, setNumSeats] = useState(0); // Number of seats for booking

    // Fetch flights from the backend based on filters
    const fetchFlights = async () => {
        try {
            const response = await axios.get("http://localhost:3000/flight-schedule", {
                params: searchFilters,
            });
            setFlights(response.data.slice(0, 5)); // Limit to 5 flights
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };

    // Handle input change for search fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    };

    // Handle seat reservation
    const handleReserve = (flight) => {
        setSelectedFlight(flight); // Set the flight for reservation
    };

    // Confirm booking
    const confirmBooking = async () => {
        if (!numSeats || numSeats <= 0) {
            alert("Please enter a valid number of seats.");
            return;
        }

        if (numSeats > selectedFlight.noOfSeats) {
            alert("Not enough seats available for this flight.");
            return;
        }

        try {
            const reservation = {
                flightId: selectedFlight._id,
                flightNumber: selectedFlight.flightNumber,
                numSeats,
            };

            await axios.post("http://localhost:3000/reservations", reservation);
            alert("Reservation successful!");
            setSelectedFlight(null); // Clear selection after booking
            setNumSeats(0); // Reset number of seats
            fetchFlights(); // Refresh flight data
        } catch (error) {
            console.error("Error making reservation:", error);
            alert("Failed to make reservation.");
        }
    };

    // Fetch flights when the component mounts
    useEffect(() => {
        fetchFlights();
    }, [searchFilters]);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Flight Schedule</h1>

            {/* Search Inputs */}
            <div className="mb-4">
                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="destination"
                            value={searchFilters.destination}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Search by Destination"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="origin"
                            value={searchFilters.origin}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Search by Origin"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="date"
                            name="date"
                            value={searchFilters.date}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
            </div>

            {/* Flight Table */}
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
                                    <button
                                        className="btn btn-primary btn-sm"
                                        onClick={() => handleReserve(flight)}
                                    >
                                        Reserve
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">
                                No flights available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Booking Modal */}
            {selectedFlight && (
                <div className="modal d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Reserve Seats</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => setSelectedFlight(null)}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Flight Number: {selectedFlight.flightNumber}</p>
                                <p>Available Seats: {selectedFlight.noOfSeats}</p>
                                <div className="form-group">
                                    <label>Number of Seats</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={numSeats}
                                        onChange={(e) => setNumSeats(parseInt(e.target.value, 10))}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={confirmBooking}
                                >
                                    Confirm Booking
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setSelectedFlight(null)}
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

export default UserFlightSchedule;
