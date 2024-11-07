import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FlightSchedule = () => {
    const navigate = useNavigate();
    const [flightss, setFlights] = useState([]);

    const fetchFlights = async () => {
        try {
            const response = await axios.get("/flights");
            setFlights(response.data);
        } catch (error) {
            console.error("Error fetching flights:", error);
        }
    };

    // Fetch flights on component mount
    // useEffect(() => {
    //     fetchFlights();
    // }, []);


    const flights = [
        { id: 1, flightNumber: "AA123", origin: "New York", destination: "Los Angeles", time: "10:00 AM" },
        { id: 2, flightNumber: "BA456", origin: "London", destination: "Paris", time: "12:00 PM" },
        { id: 3, flightNumber: "CA789", origin: "Tokyo", destination: "Seoul", time: "02:00 PM" },
    ];

    const handleAddFlight = () => {
        navigate("/admin/add-flight");
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Flight Schedule</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Flight Number</th>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {flights.map((flight) => (
                        <tr key={flight._id}>
                            <td>{flight.flightNumber}</td>
                            <td>{flight.origin}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.time}</td>
                            <td>{new Date(flight.date).toLocaleDateString()}</td>
                            <td><button className="btn btn-primary">Edit</button></td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" onClick={handleAddFlight}>
                    Add New Flight
                </button>
            </div>
        </div>
    );
};

export default FlightSchedule;
