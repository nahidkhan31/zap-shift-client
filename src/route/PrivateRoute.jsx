import React from "react";
import Loading from "../../src/pages/Loading/Loading";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router"; // make sure this import is from react-router-dom

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PrivateRoute;
