import React, { useEffect, useState } from "react";
import { Card, Row, Col, ProgressBar, Table, Spinner } from "react-bootstrap";
import { FaUsers, FaPlane, FaCity, FaClipboardList } from "react-icons/fa";
import axios from "axios";

const Dashboard = () => {
  const [userCount, setUserCount] = useState(null);
  const [flightCount, setFlightCount] = useState(null);
  const [cityCount, setCityCount] = useState(null);
  const [bookingCount, setBookingCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch user count
        const usersRes = await axios.get("http://localhost:3000/users-total");
        setUserCount(usersRes.data.userCount);

        const flightsRes = await axios.get("http://localhost:3000/count-flight");
        setFlightCount(flightsRes.data.flightCount);

        const citiesRes = await axios.get("http://localhost:3000/number-of-cities");
        setCityCount(citiesRes.data.numberOfCities);
        //   // Replace with actual API call
        const bookingsRes = { data: { count: 50 } }; // Replace with actual API call

        // setFlightCount(flightsRes.data.count);
        
        setBookingCount(bookingsRes.data.count);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Unable to fetch dashboard data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="container-fluid py-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Stats Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body>
              <FaUsers size={40} className="text-primary mb-2" />
              <h5>Total Users</h5>
              <h3>
                {loading ? <Spinner animation="border" size="sm" /> : userCount}
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body>
              <FaPlane size={40} className="text-success mb-2" />
              <h5>Flights Scheduled</h5>
              <h3>
                {loading ? <Spinner animation="border" size="sm" /> : flightCount}
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body>
              <FaCity size={40} className="text-warning mb-2" />
              <h5>Cities</h5>
              <h3>
                {loading ? <Spinner animation="border" size="sm" /> : cityCount}
              </h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center shadow-sm border-0">
            <Card.Body>
              <FaClipboardList size={40} className="text-danger mb-2" />
              <h5>Bookings Today</h5>
              <h3>
                {loading ? <Spinner animation="border" size="sm" /> : bookingCount}
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Progress Section */}
      <Row className="mb-4">
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5>Booking Progress</h5>
              <p className="text-muted">Daily booking target completion</p>
              <ProgressBar now={75} label="75%" variant="primary" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5>Revenue Progress</h5>
              <p className="text-muted">Monthly revenue target</p>
              <ProgressBar now={50} label="50%" variant="success" />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activities */}
      <Row>
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5>Recent Bookings</h5>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User</th>
                    <th>Flight</th>
                    <th>Booking Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Jane Doe</td>
                    <td>New York to London</td>
                    <td>2024-12-01</td>
                    <td>Confirmed</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>John Smith</td>
                    <td>Nairobi to Dubai</td>
                    <td>2024-12-05</td>
                    <td>Pending</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Mary Johnson</td>
                    <td>Paris to Rome</td>
                    <td>2024-12-06</td>
                    <td>Cancelled</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h5>System Alerts</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-success">✔</span> 320 flights scheduled today
                </li>
                <li className="mb-2">
                  <span className="text-warning">⚠</span> Revenue target at 50%
                </li>
                <li className="mb-2">
                  <span className="text-danger">✖</span> 3 flights canceled
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
