import React from "react";
import BookingTicket from "../Components/BookingTicket";
import Footer from "../Components/Footer";
import UserNavBar from "../Components/UserNavBar";

function Home() {
  return (
    <>
        <UserNavBar/>
        <BookingTicket/>
        <Footer/>
    </>
  );
}

export default Home;
