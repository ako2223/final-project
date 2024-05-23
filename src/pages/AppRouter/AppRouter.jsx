import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About_us/AboutUs";
import Login from "../../components/Login/Login";
import Registration from "../../components/Regisgration/Registration";
import RegistPage from "../RegistPage/RegistPage";
import UserPage from "../../components/UserPage/UserPage";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Contact from "../../components/Contact/Contact";
import News from "../../components/News/News";
import ErrorPage from "../ErrorPage/ErrorPage";
import DetailNew from "../../components/DetailNew/DetailNew";
import { useState, useEffect } from "react";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

function AppRouter() {
  const [token, setToken] = useState(null);
  const authUser = [
    {path: '/',
    element: <Home/>},
    {path: '/regisration',
    element: <RegistPage/>},
    {path: '/contacts',
    element: <Contact/>},

   useEffect(()=>{
    setToken(localStorage.getItem('accessToken'))
   },[localStorage.getItem('accessToken')])
  ]
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about_us" element={<PrivateRoute><About/></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/news" element={<News />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/news/:newsId/:title" element={<DetailNew />} />
    </Routes>
  );
}

export default AppRouter;
