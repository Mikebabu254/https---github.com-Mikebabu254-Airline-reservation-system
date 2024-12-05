import React from "react";
import { useNavigate } from "react-router-dom";

const CityList = () => {
    const navigate = useNavigate(); // Use the useNavigate hook

    const handleAddCity = () => {
        navigate("/admin/add-city"); // Correctly navigate to the desired route
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">City List</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>City Code</th>
                        <th>City Name</th>
                        <th>Time Zone</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleAddCity}>
                Add new city
            </button>
        </div>
    );
};

export default CityList;
