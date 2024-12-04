import React from "react";
import NavBar from "../Components/NavBar";
import BookingTicket from "../Components/BookingTicket";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
        <NavBar/>
        <BookingTicket/>
        <h1>home</h1>
        <Footer/>
    </>
  );
}

export default Home;
