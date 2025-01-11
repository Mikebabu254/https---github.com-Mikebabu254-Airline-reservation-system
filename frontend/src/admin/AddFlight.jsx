import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddFlight = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const user = JSON.parse(localStorage.getItem("user"));

        if (!isLoggedIn || !user || user.role !== "admin") {
            navigate("/login");
        }
    }, []);

    // State for form fields
    const [flightNumber, setFlightNumber] = useState("");
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [noOfSeats, setNoOfSeats] = useState("");
    const [price, setPrice] = useState("");
    const [cities, setCities] = useState([]);
    const [error, setError] = useState("");

    // Function to generate a random 4-digit flight number
    const generateFlightNumber = () => {
        return Math.floor(1000 + Math.random() * 9000).toString(); // Generates a number between 1000 and 9999
    };

    useEffect(() => {
        // Generate initial flight number
        setFlightNumber(generateFlightNumber());
    }, []);

    // Fetch cities from the backend
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get("http://localhost:3000/get-cities");
                setCities(response.data); // Populate cities state with data from API
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate origin and destination
        if (origin === destination) {
            setError("Origin and destination cannot be the same.");
            return;
        }

        // Clear error and proceed with submission
        setError("");

        try {
            const response = await axios.post("http://localhost:3000/flight-schedule", {
                flightNumber,
                origin,
                destination,
                time,
                date,
                noOfSeats,
                price,
            });
            console.log(response.data); // Log response for confirmation

            // Reset the form fields and generate a new flight number
            setFlightNumber(generateFlightNumber());
            setOrigin("");
            setDestination("");
            setTime("");
            setDate("");
            setNoOfSeats("");
            setPrice("");
        } catch (error) {
            console.error("Error adding flight:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add New Flight</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="flightNumber">Flight Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="flightNumber"
                        value={flightNumber}
                        disabled // Make the field read-only
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="noOfSeats">No of Seats</label>
                    <select
                        className="form-control"
                        id="noOfSeats"
                        value={noOfSeats}
                        onChange={(e) => setNoOfSeats(e.target.value)}
                        required
                    >
                        <option value="">Select Number of Seats</option>
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="78">78</option>
                        <option value="84">84</option>
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="origin">Origin</label>
                    <select
                        className="form-control"
                        id="origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                        required
                    >
                        <option value="">Select Origin City</option>
                        {cities.map((city) => (
                            <option key={city._id.$oid} value={city.cityName}>
                                {city.cityName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination">Destination</label>
                    <select
                        className="form-control"
                        id="destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        required
                    >
                        <option value="">Select Destination City</option>
                        {cities.map((city) => (
                            <option key={city._id.$oid} value={city.cityName}>
                                {city.cityName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-4">
                    <label htmlFor="time">Time</label>
                    <select
                        className="form-control"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select a time
                        </option>
                        <option value="6:30 AM">6:30 AM</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="3:30 PM">3:30 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                    </select>
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
                <div className="form-group mb-4">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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
