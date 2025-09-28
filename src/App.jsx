import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Form1 from "./Components/VehicleInfoPage";
import Form2 from "./Components/PowerStatus";
// 1. Import the new component (assuming it's named TablePage.js and the component inside is Form3)
import Form3 from "./Components/TablePage"; 
import Form4 from "./Components/VehicleDataPush"; 
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
          {/* 2. Add a new navigation link for the Table page */}
          <li>
            <Link to="/vehicledatapush">Vehicle Data Push</Link>
          </li>
        </ul>
      </nav>
      {/* Add a new div with a class for styling */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/vehicleinfo" element={<Form1 />} />
          <Route path="/powerstatus" element={<Form2 />} />
          {/* 3. Add a new Route for the Table page */}
          <Route path="/tablepage" element={<Form3 />} />
          <Route path="/vehicledatapush" element={<Form4 />} />
          {/* This route serves as the default/home page */}
          <Route path="/" element={<Form1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;