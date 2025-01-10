import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import Footer from "../Components/Footer";

function EditProfile() {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const user = JSON.parse(localStorage.getItem("user"));

        if (!isLoggedIn || !user || user.role !== "user") {
            navigate("/login");
        } else {
            setUserDetails(user);
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate new password match
        if (newPassword !== confirmNewPassword) {
            setMessage("New passwords do not match!");
            return;
        }
    
        try {
            const token = localStorage.getItem("user"); // Assume a token is stored after login
    
            const response = await fetch("http://localhost:3000/change-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`, // Include token for authentication
                },
                body: JSON.stringify({
                    email: userDetails.email,
                    currentPassword: oldPassword,
                    newPassword,
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setMessage("Password updated successfully!");
            } else {
                setMessage(data.message || "Failed to update password");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again later.");
        }
    
        // Clear form fields
        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
    };
    
    return (
        <div>
            <UserNavBar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card shadow-lg">
                            <div className="card-header text-center bg-primary text-white">
                                <h3 className="mb-0">Edit Profile</h3>
                            </div>
                            <div className="card-body">
                                {message && (
                                    <div
                                        className={`alert ${
                                            message.includes("successfully")
                                                ? "alert-success"
                                                : "alert-danger"
                                        }`}
                                        role="alert"
                                    >
                                        {message}
                                    </div>
                                )}
                                {userDetails && (
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="firstName" className="form-label">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="firstName"
                                                value={userDetails.firstName}
                                                disabled
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                value={userDetails.lastName}
                                                disabled
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="lastName" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lastName"
                                                value={userDetails.email}
                                                disabled
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="oldPassword" className="form-label">
                                                Old Password
                                            </label>
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
                                            <label htmlFor="newPassword" className="form-label">
                                                New Password
                                            </label>
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
                                            <label htmlFor="confirmNewPassword" className="form-label">
                                                Confirm New Password
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="confirmNewPassword"
                                                value={confirmNewPassword}
                                                onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="d-grid">
                                            <button type="submit" className="btn btn-primary">
                                                Save Changes
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                            <div className="card-footer text-center bg-light">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => navigate("/profile")}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default EditProfile;
