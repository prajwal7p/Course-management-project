import React, { Children, useContext } from "react";
import { AuthContext } from "../context/Auth";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  let { user } = useContext(AuthContext);
  if (user?.role == "admin") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
