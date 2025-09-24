import { useState } from "react";
import "../Components/VehicleForm.css"; // Reuse the same CSS for consistent styling
import vehicleIcon from "../assets/logo.jpg";

export default function Form2() {
  const [formData, setFormData] = useState({
    vehicleNumber: "",
    imei: "",
    minVoltage: "",
    maxVoltage: "",
    startDate: "",
    endDate: "",
    powStatus: "",
  });
  const [apiResponse, setApiResponse] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const convertToCSV = (objArray) => {
    const array = Array.isArray(objArray) ? objArray : [objArray];
    const headers = Object.keys(array[0]);
    const csvRows = [];

    // header
    csvRows.push(headers.join(","));

    // rows
    for (const row of array) {
      const values = headers.map((header) => {
        let val = row[header];

        if (Array.isArray(val)) {
          val = val.join(" | ");
        }

        if (typeof val === "object" && val !== null) {
          val = JSON.stringify(val);
        }

        return `"${val}"`;
      });
      csvRows.push(values.join(","));
    }

    return csvRows.join("\n");
  };

  // Export CSV
  const handleExportCSV = (data) => {
    if (!data.length) {
      alert("No data to export!");
      return;
    }

    const cleanedData = data.map((item) => {
      let parsedResponse;
      try {
        parsedResponse = JSON.parse(item.response);
      } catch (e) {
        parsedResponse = {};
      }

      return {
        // imei: item.imei,
        // vehNum: item.vehNum,
        // timestamp: item.cts,
        // location: item.request.match(/location=\[(.*?)\]/)?.[1] || "",
        // status: parsedResponse.status == 200 ? 'success': "" || "",
        // errors: (parsedResponse.errors || []).join(", "),
        // // request: item.request || "",
        imei: item.imei,
        vehNum: item.vehNum,
        timestamp: item.cts,
        location: item.request.match(/location=\[(.*?)\]/)?.[1] || "",
        voltage: item.request.match(/voltage=([\d.]+)/)?.[1] || "",
        gps: item.request.match(/gps=([A-Z])/i)?.[1] || "",
        orgts: item.request.match(/orgts=(\d+)/)?.[1] || "",
        // request: item.request || "",
        cts: item.cts || "",
        errors: (parsedResponse.errors || []).join(", "),
      };
    });

    const csvString = convertToCSV(cleanedData);

    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "vehicles-data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      imei: formData.imei,
      vehnum: formData.vehicleNumber,
      powStatus: formData.powStatus || "",
      minLoad: Number(formData.minVoltage),
      maxLoad: Number(formData.maxVoltage),
      startDate: new Date(formData.startDate).toISOString(),
      endDate: new Date(formData.endDate).toISOString(),
    };

    try {
      const res = await fetch("http://103.20.214.173:8080/core/vehicle-info", {
        method: "POST",
        headers: { "Content-Type": "application/json", accept: "*/*" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data && data.data) {
        setApiResponse(data.data);
        handleExportCSV(data.data);
      } else {
        alert("No data found from API");
      }
    } catch (err) {
      setApiResponse([]);
      alert("Error submitting form: " + err.message);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-icon">
          <img src={vehicleIcon} alt="Vehicle Icon" className="icon-image" />
        </div>
        <h2 className="form-title">Form 2: Vehicle Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field-group">
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              placeholder="Vehicle Number"
            />
            <input
              type="text"
              name="imei"
              value={formData.imei}
              onChange={handleChange}
              placeholder="IMEI"
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
            <select
              name="powStatus"
              value={formData.powStatus || ""}
              onChange={handleChange}
              style={{
                width: "491px",
                padding: "10px 12px",
                height: "45px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
              }}
            >
              <option value="">Select Power Status</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>

            <div
              style={{
                display: "flex",
                gap: "50px",
                marginBottom: "20px",
                marginLeft: "0px",
              }}
            >
              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#333",
                  flex: 1,
                }}
              >
                Start Date:
                <input
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: "6px",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </label>

              <label
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#333",
                  flex: 1,
                }}
              >
                End Date:
                <input
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  style={{
                    marginTop: "6px",
                    padding: "8px 10px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                    fontSize: "14px",
                    outline: "none",
                  }}
                />
              </label>
            </div>
          </div>
          <button type="submit">Download</button>
        </form>
      </div>
    </div>
  );
}