import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Form1 from '../src/Components/Form1';
import Form2 from '../src/Components/Form2';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/form1">Form 1</Link>
          </li>
          <li>
            <Link to="/form2">Form 2</Link>
          </li>
        </ul>
      </nav>
      {/* Add a new div with a class for styling */}
      <div className="content-wrapper">
        <Routes>
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/" element={<Form1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;