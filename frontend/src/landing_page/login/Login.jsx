import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const toDashboard = () => {
    window.location.href = "https://stock-trading-platform020325-dashbaord.onrender.com"; // Redirecting to holdings page
  };

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, { position: "bottom-left" });

  const handleSuccess = (msg) =>
    toast.success(msg, { position: "bottom-right" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stock-trading-platform020325-db.onrender.com",
        { ...inputValue },
        { withCredentials: true }
      );
  
      console.log("✅ Response from Backend:", data); // Debugging Line
  
      const { success, message, token } = data;
      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", token);
        setTimeout(() => {
          toDashboard();
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.error("❌ Login Error:", error.response ? error.response.data : error);
      handleError(error.response?.data?.message || "Something went wrong TRY GUEST LOGIN ");
    }
  };
  
  return (
    <div className="container p-3 p-sm-5 text-center">
      <form onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="col-12 col-sm-7">
            <img src="media/images/pricingEquity.svg" alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-12 col-sm-5 p-3 p-sm-5 shadow rounded" style={{ background: "#f8f9fa" }}>
            <h2 className="text-center text-primary">Login</h2>
            <div className="d-flex justify-content-center">
              <div className="mt-4 text-center">
                <input
                  className="mb-4 p-2 form-control"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
                <br />
                <input
                  className="mb-4 p-2 form-control"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
                <br />
                <button type="submit" className="mx-auto btn btn-primary mb-4 w-100">
                  Submit
                </button>
                <p>
                  Don’t have an account? <Link to={"/signup"} className="text-primary">Signup</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

// original