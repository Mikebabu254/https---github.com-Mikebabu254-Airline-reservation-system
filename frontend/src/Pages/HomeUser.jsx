import react from "react";
import NavBar from "../Components/NavBar";
import BookingTicket from "../Components/BookingTicket";
import UserNavBar from "../Components/UserNavBar";

function HomeUser(){
    return(
        <div>
            <UserNavBar/>
            <BookingTicket/>
        </div>
    )
}

export default HomeUser;