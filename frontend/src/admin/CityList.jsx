import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CityList = () => {
    const navigate = useNavigate();

    // State to store city data
    const [cities, setCities] = useState([]);

    // Fetch city data when the component mounts
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get("http://localhost:3000/cities");
                setCities(response.data);
            } catch (error) {
                console.error("Error fetching cities:", error);
            }
        };

        fetchCities();
    }, []);

    // Navigate to the Add City page
    const handleAddCity = () => {
        navigate("/admin/add-city");
    };

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">City List</h1>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>City Code</th>
                        <th>City Name</th>
                        <th>Country Name</th>
                        <th>Time Zone</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.length > 0 ? (
                        cities.map((city) => (
                            <tr key={city._id}>
                                <td>{city.cityCode}</td>
                                <td>{city.cityName}</td>
                                <td>{city.countryName}</td>
                                <td>{city.timeZone}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="text-center">
                                No cities available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className="btn btn-primary" onClick={handleAddCity}>
                Add New City
            </button>
        </div>
    );
};

export default CityList;
