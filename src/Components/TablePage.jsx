import React from 'react';
import './TablePage.css'; // Keep the dedicated CSS file import

function Form3() {
  // Sample data updated with 7 fields and more rows
  const data = [
    { 
      id: 1, 
      name: 'Tire Pressure FL', 
      status: 'OK', 
      value: '32 PSI', 
      location: 'Front Left Wheel', 
      lastUpdated: '2025-09-28 14:00' 
    },
    { 
      id: 2, 
      name: 'Engine Coolant Temp', 
      status: 'Warning', 
      value: '105°C', 
      location: 'Engine Block', 
      lastUpdated: '2025-09-28 14:02' 
    },
    { 
      id: 3, 
      name: 'Battery Voltage', 
      status: 'OK', 
      value: '12.6 V', 
      location: 'Engine Bay', 
      lastUpdated: '2025-09-28 13:58' 
    },
    { 
      id: 4, 
      name: 'Brake Fluid Level', 
      status: 'Critical', // Added a new Critical status
      value: 'Low', 
      location: 'Brake Reservoir', 
      lastUpdated: '2025-09-28 14:01' 
    },
    { 
      id: 5, 
      name: 'Oil Life Percentage', 
      status: 'OK', 
      value: '75%', 
      location: 'Oil Pan Sensor', 
      lastUpdated: '2025-09-28 13:55' 
    },
    { 
      id: 6, 
      name: 'Fuel Level Sensor', 
      status: 'OK', 
      value: 'Half Tank', 
      location: 'Fuel Tank', 
      lastUpdated: '2025-09-28 13:45' 
    },
    { 
      id: 7, 
      name: 'Airbag Sensor Pass', 
      status: 'Error', // Added an Error status
      value: 'Fault Code 4B', 
      location: 'Passenger Dash', 
      lastUpdated: '2025-09-28 13:30' 
    },
  ];

  return (
    <div className="table-page">
      <h1>Advanced Vehicle Diagnostics Data</h1>

      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Component</th>
            <th>Status</th>
            <th>Current Value</th>
            <th>Location</th> 
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              {/* Apply a class based on status for color-coding */}
              <td className={item.status.toLowerCase()}>
                <strong>{item.status}</strong>
              </td>
              <td>{item.value}</td>
              <td>{item.location}</td>
              <td>{item.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form3;