import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
    return ( 
        <div className="container border-bottom mb-5">
            <div className="row text-center mt-5 p-3">
            <h1>Zerodha Products</h1>
            <h3 className="text-muted  fs-4 mt-3 ">Sleek, modern, and intuitive trading platforms</h3>
            <a href="" style={{ textDecoration: "none" }} className="mt-3 mb-5">Check out our investment offerings  <FontAwesomeIcon icon={faArrowRight} /></a>
            
        </div>
        </div>
     );
}

export default Hero;