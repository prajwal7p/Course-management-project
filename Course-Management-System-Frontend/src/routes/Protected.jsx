import React, { useContext } from "react";
import { AuthContext } from "./../context/Auth";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  let { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default Protected;
