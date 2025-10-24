import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import WhatsAppButton from "./components/WhatsAppButton"; 
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import CostEstimation from "./pages/CostEstimation";
import MaterialTakeoff from "./pages/MaterialTakeoff";
import EstimatingFee from "./pages/EstimatingFee";
import FAQs from "./pages/FAQs";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Review from "./pages/Review";


function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main style={{ padding: "0px", textAlign: "center" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/estimating-fee" element={<EstimatingFee />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/services/cost-estimation" element={<CostEstimation />} />
            <Route path="/services/material-takeoff" element={<MaterialTakeoff />} />
            <Route path="/faqs/refund-policy" element={<RefundPolicy />} />
            <Route path="/faqs/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faqs/terms-conditions" element={<TermsConditions />} />
          <Route path="/Review" element={<Review />} />
            <Route path="*" element={<h2>404 Page Not Found</h2>} />
          </Routes>
        </main>
        <Footer />   
        <WhatsAppButton /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
