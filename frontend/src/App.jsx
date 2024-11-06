// Import necessary modules
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Registration from "./Pages/Registration";
import Profile from "./Pages/Profile";
import BookingConfirmation from "./Pages/BookingConfirmation";
import Admin from "./Pages/Admin";
import AddFlight from "./admin/AddFlight";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Flight-confirmation" element = {<BookingConfirmation/>}/>
          <Route path="/Admin" element={<Admin/>}/>
          <Route path="/admin/add-flight" element={<AddFlight/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

