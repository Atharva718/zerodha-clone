import { FaUserPlus, FaUser, FaChartLine, FaMoneyBillWave, FaDesktop, FaCoins } from "react-icons/fa";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>

        <div className="col-3 p-5 mt-2 mb-2">
          <h4 style={{ fontSize: "1.2rem" }}>
            <FaUserPlus className="fs-5 me-2" /> Account Opening
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Getting started</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Online</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Offline</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Charges</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Company, Partnership and HUF</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Non Resident Indian (NRI)</a><br />
        </div>

        <div className="col-3 p-5 mt-2 mb-2">
          <h4 style={{ fontSize: "1.2rem" }}>
            <FaUser className="fs-5 me-2" /> Your Zerodha Account
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Your Profile</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Login credentials</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Account modification</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Nomination</a><br />
        </div>

        <div className="col-3 p-5 mt-2 mb-2">
          <h4 style={{ fontSize: "1.2rem" }}>
            <FaChartLine className="fs-5 me-2" /> Trading and Markets
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Trading FAQs</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Kite</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Margins</a><br />
        </div>

        <div className="col-3 p-5 mt-2 mb-2">
          <h4 style={{ fontSize: "1.2rem" }}>
            <FaMoneyBillWave className="fs-5 me-2" /> Funds
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Fund withdrawal</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Adding funds</a><br />
        </div>

        <div className="col-3 p-4 mt-2 mb-2">
          <h4 style={{ fontSize: "1.2rem" }}>
            <FaDesktop className="fs-5 me-2" /> Console
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Portfolio</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Reports</a><br />
        </div>

        <div className="col-3 p-4 mt-2 mb-2">
          <h4 style={{ fontSize: "1.2rem" }}>
            <FaCoins className="fs-5 me-2" /> Coin
          </h4>
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Understanding mutual funds</a><br />
          <a href="#" style={{ textDecoration: "none", lineHeight: "2.5" }}>Coin app</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
