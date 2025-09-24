import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form1 from "./Components/VehicleInfoPage";
import Form2 from "./Components/PowerStatus";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/vehicleinfo">Vehicle Info</Link>
          </li>
          <li>
            <Link to="/powerstatus">Power Status</Link>
          </li>
        </ul>
      </nav>
      {/* Add a new div with a class for styling */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/vehicleinfo" element={<Form1 />} />
          <Route path="/powerstatus" element={<Form2 />} />
          <Route path="/" element={<Form1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
