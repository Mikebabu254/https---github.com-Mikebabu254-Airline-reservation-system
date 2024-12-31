import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function AboutBody() {
  return (
    <div
      className="about-container"
      style={{
        backgroundImage: "url('./cockpit-4598188_1920.jpg')", // Set background image for the whole page
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        minHeight: "100vh", 
        display: "flex", 
        flexDirection: "column",
      }}
    >
      {/* Hero Section */}
      <section className="hero-section text-center text-light py-5" style={{ flex: 1 }}>
        <Container>
          <h1 className="display-4 font-weight-bold mb-4">About Us</h1>
          <p className="lead mb-5">
            We are a dedicated team of professionals helping you travel seamlessly and affordably.
          </p>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5" style={{ background: "rgba(255, 255, 255, 0.9)" }}>
        <Container>
          <Row>
            <Col md={6}>
              <h2>Who We Are</h2>
              <p>
                We are a group of passionate travel experts aiming to make your flight booking easy and stress-free. Our mission is to connect people with affordable flights and excellent customer service.
              </p>
            </Col>
            <Col md={6}>
              <h2>Our Mission</h2>
              <p>
                Our goal is to make travel accessible for everyone by offering the best prices and the most reliable service. We are committed to ensuring that every traveler gets the most comfortable and efficient journey possible.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team-section py-5" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
        <Container>
          <h2 className="text-center text-light mb-4">Meet Our Team</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4" style={{ borderRadius: "10px" }}>
                <Card.Img variant="top" src="./team-member1.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Jane Doe</Card.Title>
                  <Card.Text>CEO & Founder</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4" style={{ borderRadius: "10px" }}>
                <Card.Img variant="top" src="./team-member2.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>John Smith</Card.Title>
                  <Card.Text>Chief Operating Officer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4" style={{ borderRadius: "10px" }}>
                <Card.Img variant="top" src="./team-member3.jpg" />
                <Card.Body className="text-center">
                  <Card.Title>Emily Johnson</Card.Title>
                  <Card.Text>Head of Marketing</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center py-5" style={{ background: "#ff7f50" }}>
        <Container>
          <h2 className="text-light mb-4">Join Us in Making Travel Better</h2>
          <p className="text-light mb-4">
            We’re always looking for passionate individuals to help us provide the best flight experiences.
          </p>
          <Button variant="dark" size="lg">Contact Us</Button>
        </Container>
      </section>
    </div>
  );
}

export default AboutBody;
