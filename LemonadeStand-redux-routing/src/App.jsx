import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LemonadeStand from "./LemonadeStand";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LemonadeStand />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;