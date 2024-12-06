import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const AddCity = () => {
    const navigate = useNavigate();

    // State for form fields
    const [cityCode, setCityCode] = useState("");
    const [cityName, setCityName] = useState("");
    const [timeZone, setTimeZone] = useState("");
    const [countryName, setCountryName] = useState("");

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!cityCode || !cityName || !timeZone) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/add-city", {
                cityCode,
                cityName,
                timeZone,
                countryName
            });
            console.log("City added successfully:", response.data);
            navigate("/Admin"); // Redirect to Admin page
        } catch (error) {
            console.error("Error adding city:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Add City</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="cityCode">City Code</label>
                    <input
                        type="number"
                        className="form-control"
                        id="cityCode"
                        value={cityCode}
                        onChange={(e) => setCityCode(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="countryName">Country Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="countryName"
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="cityName">City Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cityName"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="timeZone">Time Zone</label>
                    <select
                        className="form-control"
                        id="timeZone"
                        value={timeZone}
                        onChange={(e) => setTimeZone(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select Time Zone
                        </option>
                        <option value="GMT+3">GMT+3</option>
                        <option value="GMT+2">GMT+2</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add City
                </button>
            </form>
        </div>
    );
};

export default AddCity;
