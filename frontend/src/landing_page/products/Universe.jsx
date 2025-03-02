function Universe() {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <h1 className="mt-5 ">The Zerodha Universe</h1>
          <p className="mt-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
  
          <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" alt="Smallcase Logo" className="partner-logo" />
            <p className="text-small text-muted">Thematic investment platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/streakLogo.png" alt="Streak Logo" className="partner-logo" />
            <p className="text-small text-muted">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" alt="Sensibull Logo" className="partner-logo" />
            <p className="text-small text-muted">Options trading platform</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House Logo" className="partner-logo" />
            <p className="text-small text-muted">Investment in mutual funds</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/goldenpiLogo.png" alt="GoldenPi Logo" className="partner-logo" />
            <p className="text-small text-muted">Bonds and debentures investment</p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/dittoLogo.png" alt="Ditto Logo" className="partner-logo" />
            <p className="text-small text-muted">Insurance advisory platform</p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup Now
          </button>
        </div>
      </div>
    );
  }
  
  export default Universe;
  