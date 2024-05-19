import React from "react";
import { Navigate } from "react-router";

function PrivateRoute({ children }) {
  const isLogged = Boolean(localStorage.getItem("accessToken"));
  
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
