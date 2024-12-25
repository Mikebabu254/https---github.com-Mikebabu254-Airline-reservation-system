import React, { useState, useEffect } from "react";
import axios from "axios";

const BookingTicket = () => {
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        userName: "",
        fromLocation: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        seats: "",
        tripType: "One Way",
    });
    const [flights, setFlights] = useState([]); // To store the search results
    const [isLoading, setIsLoading] = useState(false); // To indicate loading state

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get("http://localhost:3000/get-cities");
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, []);

    const handleTripType = (tripType) => {
        setIsRoundTrip(tripType === "round");
        setFormData({ ...formData, tripType: tripType === "round" ? "Round Trip" : "One Way" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setFlights([]);
    
        try {
            // Make API request to search flights
            const response = await axios.get("http://localhost:3000/search-flights", {
                params: {
                    fromLocation: formData.fromLocation,
                    destination: formData.destination,
                    departureDate: formData.departureDate,
                },
            });
            setFlights(response.data); // Set search results
        } catch (error) {
            console.error("Error searching flights:", error);
            alert("Error fetching flights. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    

    return (
        <div>
            <form
                className="mt-4 bg-gradient p-4 rounded text-white shadow"
                style={{ maxWidth: "600px", margin: "0 auto" }}
                onSubmit={handleSubmit}
            >
                <div className="d-flex justify-content-center mb-4">
                    <button
                        type="button"
                        onClick={() => handleTripType("round")}
                        className={`btn me-2 ${isRoundTrip ? "btn-dark" : "btn-secondary"}`}
                    >
                        Round Trip
                    </button>
                    <button
                        type="button"
                        onClick={() => handleTripType("oneWay")}
                        className={`btn ${!isRoundTrip ? "btn-dark" : "btn-secondary"}`}
                    >
                        One Way Trip
                    </button>
                </div>

                {/* Form fields for user input */}
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Name</label>
                    <input
                        type="text"
                        id="userName"
                        className="form-control"
                        placeholder="Enter your name"
                        value={formData.userName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="fromLocation" className="form-label">Where from</label>
                        <select
                            id="fromLocation"
                            className="form-control"
                            value={formData.fromLocation}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select location</option>
                            {cities.map((city) => (
                                <option key={city.cityCode} value={city.cityName}>
                                    {city.cityName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="destination" className="form-label">Destination</label>
                        <select
                            id="destination"
                            className="form-control"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select destination</option>
                            {cities.map((city) => (
                                <option key={city.cityCode} value={city.cityName}>
                                    {city.cityName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="departureDate" className="form-label">Departure Date</label>
                        <input
                            type="date"
                            id="departureDate"
                            className="form-control"
                            value={formData.departureDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {isRoundTrip && (
                        <div className="col-md-6">
                            <label htmlFor="returnDate" className="form-label">Return Date</label>
                            <input
                                type="date"
                                id="returnDate"
                                className="form-control"
                                value={formData.returnDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="btn btn-dark px-4 py-2">
                        Search Flights
                    </button>
                </div>
            </form>

            {isLoading && <p className="text-center mt-4">Searching for flights...</p>}

            {!isLoading && flights.length > 0 && (
    <div className="mt-4">
        <h4 className="text-center">Available Flights</h4>
        <ul className="list-group">
            {flights.map((flight) => (
                <li key={flight._id} className="list-group-item">
                    <strong>Flight Number:</strong> {flight.flightNumber} <br />
                    <strong>Origin:</strong> {flight.origin} <br />
                    <strong>Destination:</strong> {flight.destination} <br />
                    <strong>Time:</strong> {flight.time} <br />
                    <strong>Date:</strong> {flight.date}
                </li>
            ))}
        </ul>
    </div>
)}


            {!isLoading && flights.length === 0 && (
                <p className="text-center mt-4">No flights found for the selected criteria.</p>
            )}
        </div>
    );
};

export default BookingTicket;
