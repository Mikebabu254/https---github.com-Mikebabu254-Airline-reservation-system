import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Body() {
  return (
    <div
      className="body-container"
      style={{
        backgroundImage: "url('./airplane-3702676_1920.jpg')", // Background image applied to the whole body
        backgroundSize: "cover", // Ensure the image covers the whole screen
        backgroundPosition: "center", // Center the background image
        height: "100vh", // Make sure the body covers the full viewport height
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <section className="hero text-white text-center py-5" style={{ flex: 1 }}>
        <Container className="text-light">
          <h1>Find Your Perfect Flight</h1>
          <p>Book your next flight with us for the best deals and a smooth experience.</p>
        </Container>
      </section>

      {/* Featured Flights Section */}
      <section className="featured-flights py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Flights</h2>
          <Row>
            <Col md={4}>
              <div className="flight-card p-3" style={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}>
                <h4>Flight to New York</h4>
                <p>Starting at $299</p>
                <Button variant="secondary">Book Now</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="flight-card p-3" style={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}>
                <h4>Flight to London</h4>
                <p>Starting at $399</p>
                <Button variant="secondary">Book Now</Button>
              </div>
            </Col>
            <Col md={4}>
              <div className="flight-card p-3" style={{ background: "rgba(255, 255, 255, 0.8)", borderRadius: "8px" }}>
                <h4>Flight to Tokyo</h4>
                <p>Starting at $499</p>
                <Button variant="secondary">Book Now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Body;