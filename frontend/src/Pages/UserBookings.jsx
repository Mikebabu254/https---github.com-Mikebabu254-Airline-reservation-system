import React, { useState, useEffect } from "react";
import UserNavBar from "../Components/UserNavBar";
import Footer from "../Components/Footer";

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

                // Expand each booking into individual rows based on the number of seats
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
                {bookings.length > 0 ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Flight ID</th>
                                <th>Origin</th>
                                <th>Destination</th>
                                <th>Date</th>
                                <th>Seat No</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={index}>
                                    <td>{booking.flightNumber}</td>
                                    <td>{booking.origin}</td>
                                    <td>{booking.destination}</td>
                                    <td>{new Date(booking.date).toLocaleDateString()}</td>
                                    <td>{booking.seatNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No bookings found.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default UserBookings;
