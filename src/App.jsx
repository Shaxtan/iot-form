import { useState } from "react";
import "./VehicleForm.css";
import vehicleIcon from "./assets/logo.jpg"; 

export default function VehicleForm() {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    imei: "",
    minVoltage: "",
    maxVoltage: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-icon">
          {/* Use the imported image within an img tag */}
          <img src={vehicleIcon} alt="Vehicle Icon" className="icon-image" />
        </div>
        <h2 className="form-title">Register Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field-group">
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              placeholder="Vehicle Number"
              required
            />
            <input
              type="text"
              name="imei"
              value={formData.imei}
              onChange={handleChange}
              placeholder="IMEI"
              required
            />
            <input
              type="number"
              name="minVoltage"
              value={formData.minVoltage}
              onChange={handleChange}
              placeholder="Min Voltage"
              required
            />
            <input
              type="number"
              name="maxVoltage"
              value={formData.maxVoltage}
              onChange={handleChange}
              placeholder="Max Voltage"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}