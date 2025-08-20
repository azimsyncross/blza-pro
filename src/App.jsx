import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/terms-and-condition";
import RefundPolicy from "./pages/refund-policy";
import NotFound from "./pages/not-found";
import Footer from "./components/footer";
import Navbar from "./components/navbar";



// Wrapper to handle animated page transitions
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}