import { useEffect } from "react";
import UserNavBar from "../Components/UserNavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function Profile(){
    const navigate = useNavigate()
    useEffect (()=>{
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        const user = JSON.parse(localStorage.getItem("user"))

        if(!isLoggedIn || !user || user.role !=="user"){
            navigate("/login")
        }
    })

    return(
        <div>
            <UserNavBar/>
            <Footer/>
        </div>
    )
}

export default Profile;