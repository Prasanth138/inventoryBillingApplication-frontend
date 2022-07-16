import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/signup";
import AddStock from "./pages/addStock/addStock";
import Bill from "./pages/bill/Bill";
import Invoice from "./pages/Invoice/invoice"


function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/bill" element={<Bill/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/addStock" element={<AddStock/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
