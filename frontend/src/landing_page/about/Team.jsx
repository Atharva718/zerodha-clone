
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/myphoto.jpeg"
            style={{ 
                width: "300px",  
                height: "300px", 
                borderRadius: "50%", 
                objectFit: "cover", 
                objectPosition: "center", 
              }}           />
          <h4 className="mt-5">Atharva Kapgate</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
          Atharva Ravindra Kapgate is an aspiring web developer and data analytics enthusiast from Nagpur, India.
          </p>
          <p>
          He is currently pursuing a B.Tech in Information Technology at St. Vincent Pallotti College of Engineering and Technology. 
          </p>
          <p>Skilled in Python, JavaScript, SQL, and full-stack development, he has worked on projects like a hotel listing web app, and a weather app, and many more</p>
          <p>
  Connect on{" "}
  <a
    className="anchr fs-6 text-muted"
    href="https://github.com/Atharva718"
    style={{ textDecoration: "none" }}
  >
    <i className="fa-brands fa-github"></i> Github
  </a>{" "}
  /{" "}
  <a
    className="anchr fs-6 text-muted"
    href="https://www.instagram.com/accounts/login/?hl=en"
    style={{ textDecoration: "none" }}
  >
    <i className="fa-brands fa-instagram"></i> Instagram
  </a>{" "}
  /{" "}
  <a
    className="anchr fs-6 text-muted"
    href="https://www.linkedin.com/in/atharva-kapgate-8aa567228/"
    style={{ textDecoration: "none" }}
  >
    <i className="fa-brands fa-linkedin"></i> LinkedIn
  </a>
</p>

<style>
  {`
    .anchr:hover {
      color: #387ED1 !important;
    }
  `}
</style>

        </div>
      </div>
    </div>
  );
}

export default Team;