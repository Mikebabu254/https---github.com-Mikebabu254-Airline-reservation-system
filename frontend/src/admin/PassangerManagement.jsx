import React from "react";

const PassangerManagement =()=>{
    return(
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Passanger Management</h1>
            <table className="table table-bordered table-striped">
                <thead><tr>
                        <th>City Code</th>
                        <th>City Name</th>
                        <th>Country Name</th>
                        <th>Time Zone</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default PassangerManagement;