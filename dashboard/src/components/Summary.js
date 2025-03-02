import React from "react";
import "./Summary.css"; // Import the CSS file

const Summary = () => {
  return (
    <div className="summary-container">
      {/* Equity Container */}
      <div className="section equity-card large-card">
        <h3 className="section-title">Equity</h3>
        <div className="data">
          <div className="first">
            <h3 className="highlight">₹3.74k</h3>
            <p className="label">Margin Available</p>
          </div>
          <div className="second">
            <p className="metric">
              Margins Used <span className="value">₹0</span>
            </p>
            <p className="metric">
              Opening Balance <span className="value">₹3.74k</span>
            </p>
          </div>
        </div>
      </div>

      {/* Holdings Container */}
      <div className="section holdings-card large-card">
        <h3 className="section-title">Holdings (13)</h3>
        <div className="data">
          <div className="first">
            <h3 className="profit">
              ₹1.55k <small className="gain">+5.20%</small>
            </h3>
            <p className="label">P&L</p>
          </div>
          <div className="second">
            <p className="metric">
              Current Value <span className="value">₹31.43k</span>
            </p>
            <p className="metric">
              Investment <span className="value">₹29.88k</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;