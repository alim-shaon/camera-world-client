import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hookis/useAuth";

const PrivateRouter = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRouter;
