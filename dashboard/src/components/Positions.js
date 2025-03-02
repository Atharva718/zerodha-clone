import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("https://stock-trading-platform020325-db.onrender.com/allPositions")
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      })
      .catch((error) => {
        console.error("Error fetching positions data:", error);
      });
  }, []);

  // Prepare chart data based on the positions data
  const labels = allPositions.map((stock) => stock.name);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allPositions.map((stock) => stock.price),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="positions-container">
      <h3 className="title">Positions ({allPositions.length})</h3>
      
      {/* Table Section */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profitLoss = curValue - stock.avg * stock.qty;
              const isProfit = profitLoss >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{profitLoss.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Stats Section */}
      <div className="row">
        <div className="col">
          <h5>15,200.<span>50</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>16,850.<span>75</span></h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,650.25 (+10.85%)</h5>
          <p>P&L</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="chart-container">
        <VerticalGraph data={chartData} />
      </div>
    </div>
  );
};

export default Positions;
