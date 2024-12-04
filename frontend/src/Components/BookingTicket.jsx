import React, { useState } from "react";

const BookingTicket = () => {
    const [isRoundTrip, setIsRoundTrip] = useState(false);

    const handleTripType = (tripType) => {
        setIsRoundTrip(tripType === "round");
    };

    return (
        <form className="mt-4 bg-gradient p-4 rounded text-white shadow" style={{ maxWidth: "600px", margin: "0 auto" }}>
            {/* Trip Type Buttons */}
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
            
            {/* Input Fields */}
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="fromLocation" className="form-label">Where from</label>
                    <input
                        type="text"
                        id="fromLocation"
                        className="form-control"
                        placeholder="Enter your location"
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
                        required
                    />
                </div>
                <div className="col-md-6">
                
                    <label htmlFor="departure" className="form-label">Departure Date (Today)</label>
                    <input
                        type="date"
                        id="departure"
                        className="form-control"
                        required
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="return" className="form-label">Return Date (Come Back)</label>
                    <input
                        type="date"
                        id="return"
                        className="form-control"
                        required={isRoundTrip}
                        disabled={!isRoundTrip}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="seats" className="form-label">Seats</label>
                    <input
                        type="number"
                        id="seats"
                        className="form-control"
                        min="1"
                        placeholder="Enter number of seats"
                        required
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="d-flex justify-content-center mt-4">
                <button type="submit" className="btn btn-dark px-4 py-2">
                    Search
                </button>
            </div>
        </form>
    );
};

export default BookingTicket;
