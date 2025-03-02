import React, { useState, useEffect } from "react";
import Menu from "./Menu";

const TopBar = () => {
  const [niftyValue, setNiftyValue] = useState(22124.70); // Initial NIFTY 50 value
  const [sensexValue, setSensexValue] = useState(73198.10); // Initial SENSEX value

  // Simulate index updates every 3 seconds
  useEffect(() => {
    const updateIndices = () => {
      // Generate random changes for NIFTY 50 (±0.5%)
      const niftyMaxChange = 0.005; // 0.5% limit
      const niftyMinChange = -0.005; // -0.5% limit
      const niftyRandomChange = Math.random() * (niftyMaxChange - niftyMinChange) + niftyMinChange;
      const newNiftyValue = Math.max(0.01, niftyValue * (1 + niftyRandomChange)).toFixed(2);

      // Generate random changes for SENSEX (±0.5%)
      const sensexMaxChange = 0.005; // 0.5% limit
      const sensexMinChange = -0.005; // -0.5% limit
      const sensexRandomChange = Math.random() * (sensexMaxChange - sensexMinChange) + sensexMinChange;
      const newSensexValue = Math.max(0.01, sensexValue * (1 + sensexRandomChange)).toFixed(2);

      setNiftyValue(parseFloat(newNiftyValue));
      setSensexValue(parseFloat(newSensexValue));
    };

    const intervalId = setInterval(updateIndices, 3000); // Update every 3 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [niftyValue, sensexValue]); // Re-run effect when values change for continuous updates

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{niftyValue.toLocaleString()}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{sensexValue.toLocaleString()}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default TopBar;