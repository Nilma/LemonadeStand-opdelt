import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#f4f4f4" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/stats" style={{ marginRight: "15px" }}>Statistics</Link>
      <Link to="/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;