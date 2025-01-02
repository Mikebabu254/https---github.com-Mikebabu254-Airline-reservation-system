import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Admin from "./Pages/Admin";
import HomeUser from './Pages/HomeUser';
import About from './Pages/About';
import AddFlight from './admin/AddFlight';
import AddCity from './admin/AddCity';
import EditFlight from './admin/EditFlight';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/home-user" element={<HomeUser/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/admin/add-flight" element={<AddFlight/>}/>
        <Route path="/admin/add-city" element={<AddCity/>}/>
        <Route path="/admin/edit-flight/:id" element={<EditFlight/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;