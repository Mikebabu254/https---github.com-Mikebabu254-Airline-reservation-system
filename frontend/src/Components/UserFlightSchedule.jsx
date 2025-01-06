import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Modal, Button } from "react-bootstrap";

const UserFlightSchedule = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchFilters, setSearchFilters] = useState({
        destination: "",
        origin: "",
        date: "",
    });
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const flightsPerPage = 5;

    // Load logged-in user from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            try {
                const parsedUser = JSON.parse(storedUser);
                setLoggedInUser(parsedUser);
            } catch (err) {
                console.error("Error parsing logged-in user:", err);
            }
        }
    }, []);

    // Fetch flights
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
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFlights();
    }, [currentPage]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchFilters((prev) => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        setCurrentPage(1);
        fetchFlights();
    };

    const handleReserve = (flight) => {
        if (!flight || !flight.noOfSeats) {
            alert("Invalid flight data.");
            return;
        }
        setSelectedFlight(flight);
        setSelectedSeats([]);
    };

    const toggleSeatSelection = (seat) => {
        setSelectedSeats((prev) =>
            prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
        );
    };

    const confirmBooking = async () => {
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat.");
            return;
        }

        try {
            const reservation = {
                flightNumber: selectedFlight.flightNumber,
                origin: selectedFlight.origin,
                destination: selectedFlight.destination,
                time: selectedFlight.time,
                date: selectedFlight.date,
                selectedSeats,
                price: selectedFlight.price,
            };

            if (loggedInUser) {
                reservation.firstName = loggedInUser.firstName;
                reservation.email = loggedInUser.email;
            }

            const response = await axios.post("http://localhost:3000/booking-flight", reservation);
            alert("Reservation successful!");
            setSelectedFlight(null);
            fetchFlights();
        } catch (err) {
            if (err.response && err.response.status === 400) {
                const { message, bookedSeats } = err.response.data;
                alert(`${message} Booked seats: ${bookedSeats.join(", ")}`);
            } else {
                alert("Failed to make reservation. Please try again.");
            }
            console.error(err);
        }
    };

    const renderSeatGrid = (flight) => {
        const totalSeats = flight.noOfSeats || 0;
        const rows = Math.ceil(totalSeats / 6);
        const seatGrid = [];

        for (let i = 0; i < rows; i++) {
            const rowSeats = [];
            for (let j = 0; j < 6; j++) {
                const seatNumber = i * 6 + j + 1;
                if (seatNumber > totalSeats) break;

                const isBooked = flight.bookedSeats?.includes(seatNumber);
                rowSeats.push(
                    <div
                        key={seatNumber}
                        className={`seat ${isBooked ? "booked" : ""} ${
                            selectedSeats.includes(seatNumber) ? "selected" : ""
                        }`}
                        onClick={!isBooked ? () => toggleSeatSelection(seatNumber) : undefined}
                        style={{ backgroundColor: isBooked ? "gray" : undefined }}
                    >
                        {seatNumber}
                    </div>
                );
            }
            seatGrid.push(
                <div key={i} className="seat-row">
                    {rowSeats}
                </div>
            );
        }

        return <div className="seat-grid">{seatGrid}</div>;
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Flight Schedule</h1>

            <div className="mb-4">
                <div className="row">
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
                            type="date"
                            name="date"
                            value={searchFilters.date}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>
                </div>
                <button className="btn btn-primary mt-3" onClick={handleSearch}>
                    Search
                </button>
            </div>

            {loading && <Spinner animation="border" className="d-block mx-auto" />}
            {error && <p className="text-danger text-center">{error}</p>}

            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Time</th>
                        <th>Date</th>
                        <th>No. of Seats</th>
                        <th>Price</th>
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
                                <td>{"Ksh. " + flight.price + ".00"}</td>
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
                            <td colSpan="8" className="text-center">
                                No flights available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

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

            {selectedFlight && (
                <Modal show onHide={() => setSelectedFlight(null)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Select Seats</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {renderSeatGrid(selectedFlight)}
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
