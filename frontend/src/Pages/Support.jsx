import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import Footer from "../Components/Footer";

function Support() {

    const navigate = useNavigate();

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))

        if(!user || user.role !=="user"){
            navigate("/login")
        }
    },[navigate])
    return(
        <>
            <UserNavBar/>
            <div>
                <h1>Customer Support</h1>
                <p>If you have any issues, please write your complaint below.</p>
                <form>
                    <div>
                    <label htmlFor="complaint" style={{ display: "block", marginBottom: "5px" }}>
                        Your Complaint
                    </label>
                    </div>
                    <textarea
                        id="complaint"
                        rows="5"
                        value=""
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
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >Submit</button>
                </form>
            </div>
            <Footer/>
        </>
    )
    
}

export default Support;