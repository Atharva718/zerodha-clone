
function Education() {
  return (
    <div className='container mt-5 mb-4'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/images/education.svg' alt="Education Image" style={{widows:"70%"}} /> {/* Added alt attribute for accessibility */}
        </div>
        <div className='col-6'>
          <h1 className='mb-3 fs-2'>Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href='' style={{ textDecoration: "none" }}>
            Versity <i className="fa fa-long-arrow-right" aria-hidden="true"></i> {/* Added aria-hidden for accessibility */}
          </a>

          <p className='mt-5'>
            TradingQ&A, the most active trading and investment community in
          </p>
          <a href='' style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i> {/* Added aria-hidden for accessibility */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;