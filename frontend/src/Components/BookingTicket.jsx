import React, { useState } from "react";
import axios from "axios";

const BookingTicket = () => {
    const [isRoundTrip, setIsRoundTrip] = useState(false);
    const [formData, setFormData] = useState({
        userName: "",
        fromLocation: "",
        destination: "",
        departureDate: "",
        returnDate: "",
        seats: "",
        tripType: "One Way",
    });

    const handleTripType = (tripType) => {
        setIsRoundTrip(tripType === "round");
        setFormData({ ...formData, tripType: tripType === "round" ? "Round Trip" : "One Way" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/bookings", formData);
            alert(response.data.message);
        } catch (error) {
            console.error("Error uploading data:", error);
            alert("Failed to upload booking.");
        }
    };

    return (
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
                    <input
                        type="text"
                        id="fromLocation"
                        className="form-control"
                        placeholder="Enter your location"
                        value={formData.fromLocation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input
                        type="text"
                        id="destination"
                        className="form-control"
                        placeholder="Enter your destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="departureDate" className="form-label">Departure Date (Today)</label>
                    <input
                        type="date"
                        id="departureDate"
                        className="form-control"
                        value={formData.departureDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="returnDate" className="form-label">Return Date (Come Back)</label>
                    <input
                        type="date"
                        id="returnDate"
                        className="form-control"
                        value={formData.returnDate}
                        onChange={handleChange}
                        disabled={!isRoundTrip}
                        required={isRoundTrip}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="seats" className="form-label">Seats</label>
                    <input
                        type="number"
                        id="seats"
                        className="form-control"
                        min="1"
                        value={formData.seats}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-dark px-4 py-2">
                    Submit Booking
                </button>
            </div>
        </form>
    );
};

export default BookingTicket;
