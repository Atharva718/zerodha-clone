import React, { useState, useEffect, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { watchlist as initialWatchlist } from "../data/data"; // Import as initialWatchlist
import { DoughnutChart } from "./DoughnoutChart";

const labels = initialWatchlist.map((subArray) => subArray["name"]);

const WatchList = () => {
  const [watchlist, setWatchlist] = useState(initialWatchlist);
  const [marketOpen, setMarketOpen] = useState(false);

  // Check market status (9:15 AM - 3:30 PM IST, Monday to Friday)
  useEffect(() => {
    const checkMarketStatus = () => {
      const now = new Date();
      const currentHourIST = now.getUTCHours() + 5 + Math.floor((now.getUTCMinutes() + 30) / 60);
      const currentMinuteIST = (now.getUTCMinutes() + 30) % 60;

      // Check if current time is between 9:15 AM and 3:30 PM IST
      const isMarketOpen =
        (currentHourIST > 9 || (currentHourIST === 9 && currentMinuteIST >= 15)) &&
        (currentHourIST < 15 || (currentHourIST === 15 && currentMinuteIST <= 30));
      setMarketOpen(isMarketOpen);
    };

    checkMarketStatus();
    const statusIntervalId = setInterval(checkMarketStatus, 15000); // Check every 15 seconds

    return () => clearInterval(statusIntervalId);
  }, []);

  // Simulate price updates every 3 seconds when market is open
  useEffect(() => {
    const updatePrices = () => {
      if (marketOpen) {
        const updatedWatchlist = watchlist.map((stock) => {
          // Generate a random percentage change between -2% and +2%
          const maxChange = 0.02; // 2% limit
          const minChange = -0.02; // -2% limit
          const randomChange = Math.random() * (maxChange - minChange) + minChange;

          // Calculate new price (ensure it doesn’t go negative)
          const newPrice = Math.max(0.01, stock.price * (1 + randomChange)).toFixed(2);

          // Calculate percentage change
          const priceChange = (newPrice - stock.price) / stock.price * 100;
          const percentChange = priceChange.toFixed(2) + "%";

          // Determine if price is down
          const isDown = priceChange < 0;

          return {
            ...stock,
            price: parseFloat(newPrice),
            percent: percentChange,
            isDown,
          };
        });
        setWatchlist(updatedWatchlist);
      }
    };

    const intervalId = setInterval(updatePrices, 2000); // Update every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [watchlist, marketOpen]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>
      <p style={{ 
  textAlign: "center", 
  margin: "15px 0", 
  fontFamily: "Arial, sans-serif", 
  color: "#666", 
  fontSize: "14px", 
  fontStyle: "italic",
  background: "linear-gradient(to right, #f8f9fa, #e9ecef)",
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #dee2e6",
  transition: "background 0.3s ease, transform 0.3s ease, color 0.3s ease"
}}>
  <small>
    <em>
      Trading is active only during <strong style={{ color: "#00c292", fontWeight: 600 }}>9:15 AM - 3:30 PM</strong> IST, Monday to Friday. Stay updated!
    </em>
  </small>
</p>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};