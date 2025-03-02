import React from "react";
import { Card, CardContent } from "./ui/card"; // Adjust path as needed
import {
  FaChartLine,
  FaMobileAlt,
  FaShieldAlt,
  FaMoneyBillWave,
  FaClipboardList,
  FaRobot,
  FaLightbulb,
  FaChartBar,
} from "react-icons/fa";

// Apps data
const appsData = [
  { name: "Kite", description: "A sleek and powerful trading platform with advanced charting and analysis tools.", icon: <FaChartLine className="text-blue-500 text-5xl" />, bgColor: "bg-blue-200" },
  { name: "Coin", description: "Invest in direct mutual funds with zero commission.", icon: <FaMobileAlt className="text-green-500 text-5xl" />, bgColor: "bg-green-200" },
  { name: "Console", description: "The central dashboard for your Zerodha account, providing reports and insights.", icon: <FaShieldAlt className="text-yellow-500 text-5xl" />, bgColor: "bg-yellow-200" },
  { name: "Varsity", description: "A free and comprehensive stock market education platform by Zerodha.", icon: <FaClipboardList className="text-purple-500 text-5xl" />, bgColor: "bg-purple-200" },
  { name: "GoldenPi", description: "Invest in bonds and debentures directly from the Zerodha platform.", icon: <FaMoneyBillWave className="text-red-500 text-5xl" />, bgColor: "bg-red-200" },
  { name: "Streak", description: "Algo trading without coding. Backtest and deploy strategies easily.", icon: <FaRobot className="text-orange-500 text-5xl" />, bgColor: "bg-orange-200" },
  { name: "Sensibull", description: "Options trading strategies and analysis.", icon: <FaChartBar className="text-indigo-500 text-5xl" />, bgColor: "bg-indigo-200" },
  { name: "Smallcase", description: "Thematic investment portfolios to diversify investments.", icon: <FaLightbulb className="text-teal-500 text-5xl" />, bgColor: "bg-teal-200" },
];

const tradingTips = [
  "Always do your research before investing in a stock.",
  "Diversify your portfolio to reduce risk.",
  "Don't invest based on emotions; follow a strategy.",
  "Understand the basics of fundamental and technical analysis.",
  "Start with small investments and gradually increase as you gain confidence."
];

const stockMarketBasics = [
  "Stock Market: A marketplace where stocks are bought and sold.",
  "Stocks: Shares of a company that represent ownership.",
  "IPO (Initial Public Offering): The first sale of stock by a company to the public.",
  "Bull & Bear Market: A bull market means prices are rising, and a bear market means prices are falling.",
  "Fundamental Analysis: Evaluating a company based on its financial statements, management, and industry trends.",
  "Technical Analysis: Analyzing price charts and trading volumes to predict future stock movements.",
  "Liquidity: The ease with which a stock can be bought or sold in the market.",
  "Market Orders vs. Limit Orders: Market orders execute at the current price, while limit orders execute at a set price."
];

const additionalDetails = [
  { title: "Market Capitalization", description: "The total value of a company's shares of stock, calculated by multiplying the stock price by the total number of shares. A higher market cap generally indicates a more established company." },
  { title: "Dividends", description: "A portion of a company's earnings paid to shareholders, usually on a quarterly basis. Companies with a strong dividend policy are often seen as stable investments." },
  { title: "P/E Ratio (Price-to-Earnings Ratio)", description: "A valuation ratio of a company's current share price compared to its earnings per share (EPS). A higher P/E ratio can indicate that a stock is overvalued or that investors expect high growth rates in the future." },
  { title: "Volatility", description: "The measure of how much a stock's price fluctuates over time. Stocks with high volatility can offer high returns, but they also carry higher risk." },
  { title: "Liquidity", description: "The ability to buy or sell an asset quickly without affecting its price. Stocks of large companies typically have high liquidity, making them easier to trade." },
  { title: "Risk vs Reward", description: "A key concept in investing where the potential reward should be balanced against the amount of risk an investor is willing to take. Higher potential returns typically come with higher risk." },
  { title: "ETFs (Exchange-Traded Funds)", description: "Investment funds that are traded on stock exchanges, much like stocks. ETFs hold assets such as stocks, commodities, or bonds and are a cost-effective way to diversify investments." },
  { title: "Options Trading", description: "A financial derivative that allows investors to buy or sell an asset at a predetermined price within a certain timeframe. Options can be used for hedging or speculative purposes." }
];

const additional2Details = [
  { title: "Stocks", description: "Stocks are simply an investment method to build wealth. Owning a stock means having a share in a company." },
  { title: "Share Market", description: "A share market is where shares are issued and traded, while a stock market allows trading of multiple securities." },
  { title: "Stock Index", description: "A stock index measures financial market fluctuations and acts as a performance indicator." },
  { title: "Bull Market", description: "A bull market indicates economic growth, where stock prices rise, and consumer confidence increases." },
  { title: "Bear Market", description: "A bear market refers to an economic slowdown, with falling stock prices and reduced consumer spending." },
  { title: "IPO", description: "Initial Public Offer (IPO) is the process where a company sells its securities to the public in the primary market." },
  { title: "Equity", description: "Equity represents the value received by shareholders if all company assets are liquidated and debts are paid off." },
  { title: "Dividend", description: "A dividend is a reward, often in cash or stock, given to shareholders from a company’s profits." },
  { title: "Nifty 50", description: "Nifty 50 is a collection of the top 50 companies listed on the National Stock Exchange (NSE)." },
  { title: "Sensex", description: "Sensex consists of the top 30 stocks listed on the Bombay Stock Exchange (BSE) by market capitalization." }
];

const Apps = () => {
  return (
    <div className="app-container p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">Zerodha Apps & Tools</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        Explore various apps and platforms offered by Zerodha to enhance your trading and investment experience.
      </p>

      {/* Apps Section */}
      <div className="apps-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {appsData.map((app, index) => (
          <Card key={index} className={`app-card rounded-lg shadow-lg ${app.bgColor} transition transform hover:scale-105`}>
            <CardContent className="app-content p-6 text-center">
              <div className="icon-container mb-4">{app.icon}</div>
              <h2 className="app-name text-2xl font-semibold text-gray-800 mb-2">{app.name}</h2>
              <p className="app-description text-sm text-gray-600">{app.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trading Tips Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Trading Tips for Beginners</h2>
      <ul className="tips-list space-y-4 text-lg text-gray-600 max-w-2xl mx-auto">
        {tradingTips.map((tip, index) => (
          <li key={index} className="tip-item flex items-center space-x-3">
            <span className="text-xl text-green-500"></span>
            <span>{tip}</span>
          </li>
        ))}
      </ul>
      {/* Additional2  Details Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-12">Explore Key Concepts</h2>
      <ul className="tips-list space-y-4 text-lg text-gray-600 max-w-2xl mx-auto">
        {additional2Details.map((detail, index) => (
          <li key={index} className="tip-item flex items-center space-x-3">
            <span className="text-xl text-blue-500"></span>
            <span><strong>{detail.title}:</strong> {detail.description}</span>
          </li>
        ))}
      </ul>

      {/* Stock Market Basics Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-12">Stock Market Basics</h2>
      <ul className="tips-list space-y-4 text-lg text-gray-600 max-w-2xl mx-auto">
        {stockMarketBasics.map((basic, index) => (
          <li key={index} className="tip-item flex items-center space-x-3">
            <span className="text-xl text-blue-500"></span>
            <span>{basic}</span>
          </li>
        ))}
      </ul>

      {/* Additional Details Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 mt-12">Explore Key Concepts</h2>
      <ul className="tips-list space-y-4 text-lg text-gray-600 max-w-2xl mx-auto">
        {additionalDetails.map((detail, index) => (
          <li key={index} className="tip-item flex items-center space-x-3">
            <span className="text-xl text-blue-500"></span>
            <span><strong>{detail.title}:</strong> {detail.description}</span>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Apps;
