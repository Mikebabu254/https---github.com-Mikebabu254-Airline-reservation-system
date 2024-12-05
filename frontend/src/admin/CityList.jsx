import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CityList =()=>{
    return(
        <div className="container mt-4">
            <h1 className="mb-4 text-center">City List</h1>
            <table className="table table-bordered table-striped">
            <thead className="thead-dark">
                    <tr>
                        <th>City Code</th>
                        <th>City Name</th>
                        <th>Time zone</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                </tbody>
            </table>
            <button className="btn btn-primary">
                Add new city
            </button>
        </div>
    )
}

export default CityList;