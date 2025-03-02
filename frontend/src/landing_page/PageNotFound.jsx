function PageNotFound() {
    return ( 
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "40vh",
        flexDirection: "column",
        textAlign: "center"
      }}>
        <h1>404 : Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    );
  }
  
  export default PageNotFound;
  