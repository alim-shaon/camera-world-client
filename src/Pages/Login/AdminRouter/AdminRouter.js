import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../Hookis/useAuth";

const AdminRouter = ({ children }) => {
  const { admin, isLoading } = useAuth();
  const location = useLocation();
  // console.log(admin);

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }

  if (!admin) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
};

export default AdminRouter;
