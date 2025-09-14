import React from "react";
import Loading from "../../src/pages/Loading/Loading";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth;
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
