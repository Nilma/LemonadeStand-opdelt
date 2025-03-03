import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Statistics() {
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated ?? false); // Ensure isAuthenticated is always defined

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Profit Statistics</h1>
      <p>Only logged-in users can see this.</p>
    </div>
  );
}

export default Statistics;