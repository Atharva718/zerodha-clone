import React, { useState } from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default Link behavior
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="funds-container">
      {/* Header Section */}
      <div className="funds-header">
        <h2 className="funds-title">Manage Your Funds</h2>
        <p className="funds-subtitle">Instant, zero-cost transfers with UPI</p>
        <div className="funds-actions">
          <Link
            to="#"
            className="btn btn-green btn-shadow"
            onClick={handleButtonClick}
          >
            Add Funds
          </Link>
          <Link
            to="#"
            className="btn btn-blue btn-shadow"
            onClick={handleButtonClick}
          >
            Withdraw
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="funds-row">
        {/* Equity Section */}
        <div className="funds-col equity-card">
          <h3 className="section-title">Equity</h3>
          <div className="table elegant-table">
            <div className="data-row highlight">
              <p>Available Margin</p>
              <p className="imp colored">₹4,043.10</p>
            </div>
            <div className="data-row">
              <p>Used Margin</p>
              <p className="imp">₹3,757.30</p>
            </div>
            <div className="data-row">
              <p>Available Cash</p>
              <p className="imp">₹4,043.10</p>
            </div>
            <hr className="divider" />
            <div className="data-row">
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>
            <div className="data-row">
              <p>Previous Balance</p>
              <p>₹3,736.40</p>
            </div>
            <div className="data-row">
              <p>Payin</p>
              <p>₹4,064.00</p>
            </div>
            <div className="data-row">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div className="data-row">
              <p>Delivery Margin</p>
              <p>₹0.00</p>
            </div>
            <div className="data-row">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div className="data-row">
              <p>Options Premium</p>
              <p>₹0.00</p>
            </div>
            <hr className="divider" />
            <div className="data-row">
              <p>Collateral (Liquid Funds)</p>
              <p>₹0.00</p>
            </div>
            <div className="data-row">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div className="data-row total">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="funds-col commodity-card">
          <div className="commodity-content">
            <h3 className="section-title">Commodity</h3>
            <p className="commodity-text">You don’t have a commodity account yet.</p>
            <Link
              to="#"
              className="btn btn-blue btn-shadow btn-large"
              
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Work in Progress</h3>
            <p>This feature is under development. Please come back later!</p>
            <button className="btn btn-blue btn-shadow" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;