import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import Footer from "../Components/Footer";
import axios from "axios";

function Support() {
    const navigate = useNavigate();
    const [complain, setComplain] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!complain.trim()) {
            setMessage("You cannot submit an empty message.");
            return;
        }

        axios
            .post("http://localhost:3000/support", { complain })
            .then((result) => {
                setMessage("The message has been successfully sent. We will check it.");
            })
            .catch((err) => {
                setMessage("An error occurred.");
                console.error(err);
            });
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user || user.role !== "user") {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <>
            <UserNavBar />
            <div style={{ padding: "20px" }}>
                <h1>Customer Support</h1>
                <p>If you have any issues, please write your complaint below.</p>
                {message && <p style={{ color: "red" }}>{message}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="complaint" style={{ display: "block", marginBottom: "5px" }}>
                            Your Complaint
                        </label>
                    </div>
                    <textarea
                        id="complaint"
                        rows="5"
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                        required
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                    ></textarea>
                    <button
                        type="submit"
                        style={{
                            marginTop: "10px",
                            padding: "10px 20px",
                            backgroundColor: "#007bff",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Support;
