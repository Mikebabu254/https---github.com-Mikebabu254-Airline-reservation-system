import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure you're using this if navigation is needed
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import UserNavBar from '../Components/UserNavBar';

function Profile() {
  const [userData, setUserData] = useState({});
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.firstName) {
      setUserData(user);
    } else {
      // Redirect to login if no user data is found
      navigate("/login");
    }
  }, [navigate]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match!");
      return;
    }

    try {
      const response = await fetch("/changePassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          oldPassword,
          newPassword,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        setMessage("Password changed successfully!");
      } else {
        setMessage(result.message || "An error occurred!");
      }
    } catch (error) {
      setMessage("Failed to change password. Please try again.");
    }
  };

  return (
    <>
      <UserNavBar />
      <div className="container mt-5 mb-4">
        <h1 className="text-center mb-5">Profile</h1>

        <div className="d-flex flex-column align-items-center">
          {/* Profile Card */}
          <div className="card shadow-lg p-4" style={{ maxWidth: '800px', width: '100%' }}>
            <div className="d-flex flex-md-row flex-column align-items-center">
              {/* Profile Image and Name */}
              <div className="text-center mb-4 mb-md-0">
                <img
                  src="/logo.png" // Placeholder image, update if you have user images
                  alt="Profile"
                  className="rounded-circle mb-3"
                  width="200"
                  height="200"
                />
                <h2 className="fw-bold">{userData.firstName || "User"}</h2>
              </div>

              {/* Profile Information */}
              <div className="ms-md-5 w-100">
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Username:</label>
                  <p className="fs-5 text-muted">{userData.firstName || "N/A"}</p>
                </div>
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Email:</label>
                  <p className="fs-5 text-muted">{userData.email || "N/A"}</p>
                </div>
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Date of Birth:</label>
                  <p className="fs-5 text-muted">{userData.DOB || "N/A"}</p>
                </div>
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Gender:</label>
                  <p className="fs-5 text-muted">{userData.gender || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Change Password Form */}
          <div className="card shadow-lg p-4 mt-4" style={{ maxWidth: '800px', width: '100%' }}>
            <h3 className="text-center mb-4">Change Password</h3>
            <form onSubmit={handlePasswordChange}>
              <div className="mb-3">
                <label htmlFor="oldPassword" className="form-label fw-bold">Old Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label fw-bold">New Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label fw-bold">Confirm New Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Change Password</button>
            </form>
            {message && <p className="text-center mt-3 text-danger">{message}</p>}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
