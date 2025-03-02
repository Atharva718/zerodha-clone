import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Hero";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import PageNotFound from "./landing_page/PageNotFound";
// import Login from "./components/Login";
import Login from "./landing_page/login/Login";
import TwoModesJoin from "./landing_page/signup/twomodesjoin";



function App() {
  // const [auth, setAuth] = useState(localStorage.getItem("token") ? true : false);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/login" element={<Login  />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/landing_page/signup/twomodesjoin" element={<TwoModesJoin />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
