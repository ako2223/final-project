import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About_us/AboutUs";
import Login from "../../components/Login/Login";
import Registration from "../../components/Regisgration/Registration";
import RegistPage from "../RegistPage/RegistPage";
import UserPage from "../../components/UserPage/UserPage";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<PrivateRoute><About/></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistPage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
}

export default AppRouter;
