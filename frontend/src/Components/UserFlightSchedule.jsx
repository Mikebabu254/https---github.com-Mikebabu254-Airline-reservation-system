import React, { useState, useEffect } from "react";
import axios from "axios";

const UserFlightSchedule = () => {
    const [flights, setFlights] = useState([]); // State to store flight data
    const [searchFilters, setSearchFilters] = useState({
        destination: "",
        origin: "",
        date: ""
    }); // State to store search filters

    // Fetch flights from the backend based on filters
    const fetchFlights = async () => {
        try {
            const response = await axios.get("http://localhost:3000/flight-schedule", {
                params: searchFilters, // Pass filters as query parameters
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

    // Trigger search when filters change
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
                            placeholder="Search by Date"
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
                                    <button>Reserve</button>
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
        </div>
    );
};

export default UserFlightSchedule;
