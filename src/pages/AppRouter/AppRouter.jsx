import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Home from "../Home/Home";
import About from "../About_us/AboutUs"

function AppRouter() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about_us" element={<About/>} />
      </Routes>
    </Router>
 );
}

export default AppRouter;

