import react from "react";
import NavBar from "../Components/NavBar";
import BookingTicket from "../Components/BookingTicket";
import UserNavBar from "../Components/UserNavBar";
import Footer from "../Components/Footer";

function HomeUser(){
    return(
        <div>
            <UserNavBar/>
            <BookingTicket/>
            <Footer/>
        </div>
    )
}

export default HomeUser;