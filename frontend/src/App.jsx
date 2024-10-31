import { useState } from "react";
import { BroserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BroserRouter>
        <Routes>
          <Route path="/" element={}></Route>
          <Route path="/Login" element={}></Route>
          <Route path="/Registration" element={}></Route>
          <Route path="/Booking" element={}></Route>
          <Route path="/Profile" element={}></Route>
          <Route path="/Confirmation" element={}></Route>
          <Route path="/Flight-details" element={}></Route>
        </Routes>
      </BroserRouter>
    </>
  );
}

export default App;
