import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Modal, Button } from "react-bootstrap";

const UserFlightSchedule = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setLoggedInUser(parsedUser);
                console.log("Logged in user:", parsedUser); // Debugging
            } catch (err) {
                console.error("Error parsing logged in user:", err);
            }
        }
    }, []);
    

    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(null); // Error state
    const [searchFilters, setSearchFilters] = useState({
        destination: "",
        origin: "",
        date: "",
    });
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [seatNo, setseatNo] = useState(0);
    const [currentPage, setCurrentPage] = useState(1); // Pagination

    const flightsPerPage = 5;

    // Fetch flights from the backend
    const fetchFlights = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get("http://localhost:3000/view-all-flight", {
                params: { ...searchFilters, page: currentPage, limit: flightsPerPage },
            });
            setFlights(response.data);
        } catch (err) {
            setError("Failed to fetch flights. Please try again.");
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFlights();
    }, [searchFilters, currentPage]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleReserve = (flight) => {
        setSelectedFlight(flight);
    };

    const confirmBooking = async () => {
        if (!seatNo || seatNo <= 0) {
            alert("Please enter a valid number of seats.");
            return;
        }

        if (seatNo > selectedFlight.noOfSeats) {
            alert("Not enough seats available for this flight.");
            return;
        }

        try {
            // Construct the reservation object explicitly
            const reservation = {
                flightId: selectedFlight._id,
                flightNumber: selectedFlight.flightNumber,
                origin: selectedFlight.origin,
                destination: selectedFlight.destination,
                time: selectedFlight.time,
                date: selectedFlight.date,
                seatNo,
            };

            // Add loggedInUser details if available
            if (loggedInUser) {
                reservation.firstName = loggedInUser.firstName;
                reservation.email = loggedInUser.email;
            }

            await axios.post("http://localhost:3000/booking-flight", reservation);
            alert("Reservation successful!");
            setSelectedFlight(null);
            setseatNo(0);
            fetchFlights();
        } catch (err) {
            alert("Failed to make reservation. Please try again.");
        }
    };

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

            {/* Loading Spinner */}
            {loading && <Spinner animation="border" className="d-block mx-auto" />}

            {/* Error Message */}
            {error && <p className="text-danger text-center">{error}</p>}

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

            {/* Pagination */}
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-outline-secondary mx-2"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-outline-secondary mx-2"
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>

            {/* Booking Modal */}
            {selectedFlight && (
                <Modal show onHide={() => setSelectedFlight(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reserve Seats</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Flight Number: {selectedFlight.flightNumber}</p>
                        <p>Available Seats: {selectedFlight.noOfSeats}</p>
                        <input
                            type="number"
                            className="form-control"
                            value={seatNo}
                            onChange={(e) => setseatNo(parseInt(e.target.value, 10))}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={confirmBooking}>
                            Confirm
                        </Button>
                        <Button variant="secondary" onClick={() => setSelectedFlight(null)}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </div>
    );
};

export default UserFlightSchedule;
