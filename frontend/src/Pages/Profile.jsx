import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import UserNavBar from '../Components/UserNavBar';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend (e.g., API or session)
    fetch("/api/getUserData")  // Assuming you have an API endpoint for fetching logged-in user data
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setUserData(data.user);  // Store user data in state
        } else {
          console.log('User not found or error occurred');
        }
      })
      .catch((error) => {
        console.log('Error fetching user data:', error);
      });
  }, []);

  // Loading state
  if (!userData) {
    return (
      <div className="container mt-5 text-center">
        <h1>Loading profile...</h1>
      </div>
    );
  }

  return (
    <>
      <UserNavBar />
      <div className="container mt-5">
        <h1 className="text-center mb-5">Profile</h1>

        <div className="d-flex flex-column align-items-center">
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
                <h2 className="fw-bold">{userData.firstName} {userData.lastName}</h2>
              </div>

              {/* Profile Information */}
              <div className="ms-md-5 w-100">
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Username:</label>
                  <p className="fs-5 text-muted">{userData.firstName.toLowerCase()}123</p>
                </div>
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Email:</label>
                  <p className="fs-5 text-muted">{userData.email}</p>
                </div>
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Date of Birth:</label>
                  <p className="fs-5 text-muted">{userData.DOB}</p>
                </div>
                <div className="mb-3">
                  <label className="fs-5 fw-bold">Gender:</label>
                  <p className="fs-5 text-muted">{userData.gender}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
