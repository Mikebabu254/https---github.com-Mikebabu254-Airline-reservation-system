import { useState } from "react";
import { BroserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login"
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Profile from "./Pages/Profile";
import Booking from "./Pages/Booking";
import FlightDetials from "./Pages/FlightDetails";


function App() {
  return (
    <>
      <BroserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Registration" element={<Registration/>}></Route>
          <Route path="/Booking" element={<Booking/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/Confirmation" element={<Confirmation/>}></Route>
          <Route path="/Flight-details" element={<FlightDetials/>}></Route>
        </Routes>
      </BroserRouter>
    </>
  );
}

export default App;
