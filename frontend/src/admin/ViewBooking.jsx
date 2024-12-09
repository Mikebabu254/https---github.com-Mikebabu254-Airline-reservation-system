import React from "react";
import { Table, Button, Dropdown, Modal, Form } from "react-bootstrap";

const ViewBooking = () => {
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [selectedBooking, setSelectedBooking] = React.useState(null);

  const bookings = [
    { id: 1, name: "John Doe", flight: "AB123", status: "Confirmed", date: "2024-12-15" },
    { id: 2, name: "Jane Smith", flight: "CD456", status: "Pending", date: "2024-12-18" },
    { id: 3, name: "Bob Johnson", flight: "EF789", status: "Canceled", date: "2024-12-20" },
  ];

  const handleEdit = (booking) => {
    setSelectedBooking(booking);
    setShowEditModal(true);
  };

  const handleUpdate = () => {
    // Handle update logic here
    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      // Handle delete logic here
      console.log(`Deleted booking with ID: ${id}`);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Manage Bookings</h2>

      <Table striped bordered hover className="shadow-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th>#</th>
            <th>Passenger Name</th>
            <th>Flight</th>
            <th>Status</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={booking.id}>
              <td>{index + 1}</td>
              <td>{booking.name}</td>
              <td>{booking.flight}</td>
              <td>
                <span
                  className={`badge ${
                    booking.status === "Confirmed"
                      ? "bg-success"
                      : booking.status === "Pending"
                      ? "bg-warning text-dark"
                      : "bg-danger"
                  }`}
                >
                  {booking.status}
                </span>
              </td>
              <td>{booking.date}</td>
              <td>
                <Button
                  variant="info"
                  size="sm"
                  className="me-2"
                  onClick={() => handleEdit(booking)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(booking.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBooking && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Passenger Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedBooking.name}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Flight</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={selectedBooking.flight}
                  disabled
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Select defaultValue={selectedBooking.status}>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Canceled">Canceled</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate}>
                Save Changes
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ViewBooking;
