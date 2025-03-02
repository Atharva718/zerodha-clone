import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({ email: "", password: "", username: "" });
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-right", icon: "✅" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post("https://stock-trading-platform020325-db.onrender.com", inputValue, {
        headers: { "Content-Type": "application/json" },
      });

      if (data.success) {
        handleSuccess(data.message);
        console.log("Navigating to /login...");
        setTimeout(() => navigate("/login"), 1000);
      } else {
        handleError(data.message);
      }
    } catch (error) {
      handleError("Signup failed! Please try again.");
    } finally {
      setLoading(false);
      setInputValue({ email: "", password: "", username: "" });
    }
  };

  // Function to handle Guest Login redirection
  const handleGuestLogin = () => {
    window.location.href = "https://stock-trading-platform020325-dashbaord.onrender.com";
  };

  return (
    <div className="container p-3 p-sm-5 text-center">
      <div className="row align-items-center">
        <div className="col-12 col-sm-7">
          <img src="/media/images/signupkite.png" alt="" style={{ width: "70%" }} />
        </div>
        <div className="col-12 col-sm-5 p-3 p-sm-5 shadow rounded" style={{ background: "#f8f9fa" }}>
          <p><em>— if you are a visitor and don’t want to signup —</em></p>
          <button className="btn btn-primary mb-3 w-100" onClick={handleGuestLogin}>Guest Login</button>
          <form onSubmit={handleSubmit}>
            <h2 className="text-center text-primary">Signup</h2>
            <input type="email" className="form-control mb-3" name="email" value={inputValue.email} placeholder="Email" onChange={handleOnChange} required />
            <input type="text" className="form-control mb-3" name="username" value={inputValue.username} placeholder="Username" onChange={handleOnChange} required />
            <input type="password" className="form-control mb-3" name="password" value={inputValue.password} placeholder="Password" onChange={handleOnChange} required />
            <button type="submit" className="btn btn-primary w-100 mb-3" disabled={loading}>
              {loading ? "Signing up..." : "Submit"}
            </button>
            <p>Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
