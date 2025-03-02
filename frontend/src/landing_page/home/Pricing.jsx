import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className="fs-2 mb-2">Unbeatable pricing</h1>
                    <p className="mb-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    
                    {/* Fixed Font Awesome icon */}
                    <a href="" style={{ textDecoration: "none" }}>
                        See pricing <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
                
                <div className="col-2"></div>

                <div className="col-6 mb-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-4 col-12 border p-4 mt-4 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free account opening</p>
                        </div>
                        <div className="col-md-4 col-12 border p-4 mt-4 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="mb-3">₹0</h1>
                            <p>Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        <div className="col-md-4 col-12 border p-4 mt-4 d-flex flex-column align-items-center justify-content-center">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
