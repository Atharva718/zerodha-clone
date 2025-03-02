import React, { useState, useEffect } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";
import "./Holding.css"; // Optional: Your CSS for styling

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    axios
      .get("https://stock-trading-platform020325-db.onrender.com/allHoldings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((error) => {
        console.error("Error fetching holdings data:", error);
      });
  }, []);

  // Prepare chart data based on the holdings data
  const labels = allHoldings.map((stock) => stock.name);
  const chartData = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="holdings-container">
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      
      {/* Table Section */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
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
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profitLoss = curValue - stock.avg * stock.qty;
              const isProfit = profitLoss >= 0;

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  
                  {/* P&L Column */}
                  <td className={`pl-class ${isProfit ? "profit" : "loss"}`}>
                    {profitLoss.toFixed(2)}
                  </td>

                  {/* Net Change Column */}
                  <td className={`net-class ${stock.net >= 0 ? "profit" : "loss"}`}>
                    {stock.net}
                  </td>

                  {/* Day Change Column */}
                  <td className={`day-class ${stock.day >= 0 ? "profit" : "loss"}`}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Stats Section */}
      <div className="row">
        <div className="col">
          <h5>29,875.<span>55</span></h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>31,428.<span>95</span></h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
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

export default Holdings;
