function Hero() {
    return (
      <section className="container-fluid" id="supportHero">
        {/* Top Section */}
        <div className="p-4 supportWrapper">
          <h4>Support Portal</h4>
          <a href="#">Track Tickets</a>
        </div>
  
        {/* Search Section */}
        <div className="row p-5 mx-3">
          <div className="col-md-6 p-3">
            <h1 className="fs-4">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="search-container">
              <input type="text" placeholder="Eg. how do I activate F&O" />
            </div>
            <div className="quick-links mt-3">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>
  
          {/* Featured Section */}
          <div className="col-md-6 p-3">
            <h1 className="fs-4">Featured</h1>
            <ol className="featured-list">
              <li>
                <a href="#">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="#">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  