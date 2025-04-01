/*
This is a simple React application that allows users to upload a CSV file.
The application uses the PapaParse library to parse the CSV file and display its contents in a user-friendly format.
The application consists of the following components:
- A file input for users to select a CSV file.
- A state to store the headers and rows of the CSV file.
- A function to handle the file upload and parse the CSV data.
- A function to handle the parsed data and update the state with headers and rows.
The application uses inline styles for basic styling and layout.
The application is designed to be simple and easy to use, with a focus on functionality.
The application is built using React and uses the PapaParse library for CSV parsing.
The application is structured as follows:
*/
import React, { useState } from "react";
import P from "papaparse";
import "./App.css";
function App() {
  const [headers, setHeaders] = useState([]); // State to store CSV headers
  const [rows, setRows] = useState([]); // State to store CSV rows

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Selected File:", file); // Debugging: Log the selected file
    if (file) {
      P.parse(file, {
        complete: handleData,
        header: false, // Ensure the first row is treated as headers
      });
    }
  };

  const handleData = (results) => {
    console.log("Parsed Data:", results.data); // Debugging: Log parsed data
    const data = results.data;
    if (data.length > 0) {
      setHeaders(data[0]); // First row as headers
      setRows(data.slice(1)); // Remaining rows as data
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>CSV File Uploader</h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: "20px" }}
      />
      {rows.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                width: "250px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              {row.map((cell, cellIndex) => (
                <p key={cellIndex} style={{ margin: "5px 0" }}>
                  <strong>{headers[cellIndex]}:</strong> {cell}
                </p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;