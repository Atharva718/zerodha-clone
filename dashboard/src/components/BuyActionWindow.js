import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState("0"); // Stored as string for easy clearing
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice) || 0,
        mode: "BUY",
      });
      closeBuyWindow();
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div
      className="container"
      id="buy-window"
      draggable="true"
      onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              placeholder="0"
              onFocus={(e) => {
                if (e.target.value === "0") {
                  setStockPrice("");
                }
              }}
              onBlur={(e) => {
                if (e.target.value.trim() === "") {
                  setStockPrice("0");
                }
              }}
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {(Number(stockQuantity) * (Number(stockPrice) || 0)).toFixed(2)}
        </span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
