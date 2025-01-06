import { useEffect, useState } from "react";
import UserNavBar from "../Components/UserNavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function Profile() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const user = JSON.parse(localStorage.getItem("user"));

        if (!isLoggedIn || !user || user.role !== "user") {
            navigate("/login");
        } else {
            setUserDetails(user); // Set user details from localStorage
        }
    }, [navigate]);

    return (
        <div>
            <UserNavBar />
            <div className="container my-5">
                {userDetails ? (
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card shadow-lg">
                                <div className="card-header text-center bg-primary text-white">
                                    <h3 className="mb-0">Profile Details</h3>
                                </div>
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-end font-weight-bold">First Name:</div>
                                        <div className="col-sm-8">{userDetails.firstName}</div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-end font-weight-bold">Last Name:</div>
                                        <div className="col-sm-8">{userDetails.lastName}</div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-end font-weight-bold">Email:</div>
                                        <div className="col-sm-8">{userDetails.email}</div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-4 text-end font-weight-bold">Role:</div>
                                        <div className="col-sm-8">{userDetails.role}</div>
                                    </div>
                                </div>
                                <div className="card-footer text-center bg-light">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => navigate("/edit-profile")}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
