import React, { useState, useEffect } from "react";
import UserNavBar from "../Components/UserNavBar";
import Footer from "../Components/Footer";
// import "./UserBookings.css"; // Custom CSS for styling tickets

function UserBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            const email = user?.email;

            if (!email) {
                setError("User email not found. Please log in.");
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`http://localhost:3000/user-bookings?email=${email}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch bookings");
                }

                const data = await response.json();

                const expandedBookings = data.flatMap((booking) =>
                    booking.seatNo.map((seat) => ({
                        flightNumber: booking.flightNumber,
                        origin: booking.origin,
                        destination: booking.destination,
                        date: booking.date,
                        seatNo: seat,
                    }))
                );

                setBookings(expandedBookings);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <UserNavBar />
            <div className="container">
                <h2>User Bookings</h2>
                <div className="ticket-container">
                    {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <div key={index} className="ticket">
                                <div className="ticket-header">
                                    <h3>Flight Ticket</h3>
                                    <p>Flight No: {booking.flightNumber}</p>
                                </div>
                                <div className="ticket-body">
                                    <div className="ticket-row">
                                        <span>From:</span>
                                        <strong>{booking.origin}</strong>
                                    </div>
                                    <div className="ticket-row">
                                        <span>To:</span>
                                        <strong>{booking.destination}</strong>
                                    </div>
                                    <div className="ticket-row">
                                        <span>Date:</span>
                                        <strong>{new Date(booking.date).toLocaleDateString()}</strong>
                                    </div>
                                    <div className="ticket-row">
                                        <span>Seat:</span>
                                        <strong>{booking.seatNo}</strong>
                                    </div>
                                </div>
                                <div className="ticket-footer">
                                    <p>Thank you for booking with us!</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default UserBookings;
