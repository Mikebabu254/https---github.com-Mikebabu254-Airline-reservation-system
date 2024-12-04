import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Components/Footer';
import UserNavBar from '../Components/UserNavBar';

function Profile() {
    return (
        <>
            <UserNavBar/>
            <div className="container mt-5">
                <h1 className="text-center mb-5">Profile</h1>  

                <div className="d-flex flex-column align-items-center">
                    <div className="card shadow-lg p-4" style={{ maxWidth: '800px', width: '100%' }}>
                        <div className="d-flex flex-md-row flex-column align-items-center">
                            {/* Profile Image and Name */}
                            <div className="text-center mb-4 mb-md-0">
                                <img src="/logo.png" alt="Profile" className="rounded-circle mb-3" width="200" height="200" />
                                <h2 className="fw-bold">John Doe</h2>
                            </div>

                            {/* Profile Information */}
                            <div className="ms-md-5 w-100">
                                <div className="mb-3">
                                    <label className="fs-5 fw-bold">Username:</label>
                                    <p className="fs-5 text-muted">johndoe123</p>
                                </div>
                                <div className="mb-3">
                                    <label className="fs-5 fw-bold">Email:</label>
                                    <p className="fs-5 text-muted">john.doe@example.com</p>
                                </div>
                                <div className="mb-3">
                                    <label className="fs-5 fw-bold">Date of Birth:</label>
                                    <p className="fs-5 text-muted">January 1, 1990</p>
                                </div>
                                <div className="mb-3">
                                    <label className="fs-5 fw-bold">Gender:</label>
                                    <p className="fs-5 text-muted">Male</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <Footer/>
        </>
    );
}

export default Profile;
