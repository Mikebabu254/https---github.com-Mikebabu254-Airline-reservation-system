import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const Settings = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Settings</h2>
      <div className="row g-4">
        {/* Account Settings */}
        <div className="col-md-6">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-3">Account Settings</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter a new password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Update Account
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>

        {/* Application Settings */}
        <div className="col-md-6">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-3">Application Settings</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Theme</Form.Label>
                  <Form.Select>
                    <option>Light</option>
                    <option>Dark</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Language</Form.Label>
                  <Form.Select>
                    <option>English</option>
                    <option>French</option>
                    <option>Spanish</option>
                  </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Save Settings
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>

        {/* Notification Settings */}
        <div className="col-12">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="mb-3">Notification Settings</Card.Title>
              <Form>
                <Form.Check 
                  type="switch" 
                  label="Email Notifications" 
                  className="mb-3" 
                  defaultChecked 
                />
                <Form.Check 
                  type="switch" 
                  label="SMS Notifications" 
                  className="mb-3" 
                />
                <Form.Check 
                  type="switch" 
                  label="Push Notifications" 
                  className="mb-3" 
                  defaultChecked 
                />
                <Button variant="primary" type="submit" className="w-100">
                  Update Notifications
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
