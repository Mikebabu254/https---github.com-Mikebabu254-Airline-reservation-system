import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Admin from "./Pages/Admin";
import HomeUser from './Pages/HomeUser';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home/>} /> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/home-user" element={<HomeUser/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;