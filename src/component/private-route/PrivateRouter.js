import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const dataLogin = JSON.parse(localStorage.getItem("users"));

  if (dataLogin) {
    return children;
  }
  return <Navigate to={"/login"} />;
}
