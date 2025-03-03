import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LemonadeStand from "./LemonadeStand";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LemonadeStand />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;