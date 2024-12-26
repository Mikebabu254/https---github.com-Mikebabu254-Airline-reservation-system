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
import HomeUser from "./Pages/HomeUser";
import AddCity from "./admin/AddCity";
import EditFlight from "./admin/EditFlight";
import About from "./Pages/About";
//import About from "./Components/AboutBody";


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
          <Route path="/HomeUser" element={<HomeUser/>}/>
          <Route path="/admin/add-city" element={<AddCity/>}/>
          <Route path="/admin/edit-flight/:id" element={<EditFlight/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

