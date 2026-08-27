import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HelpCenter from "./pages/HelpCenter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Pricing from "./pages/Pricing";
import Integrations from "./pages/Integrations";
import HowitWorks from "./pages/HowitWorks";
import LoginSuccess from "./pages/LoginSuccess";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* ================================
              Pages WITH NAVBAR / LAYOUT
          ================================= */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/features" element={<Features />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/help-center" element={<HelpCenter />} />

            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/terms" element={<TermsConditions />} />

            <Route path="/pricing" element={<Pricing />} />

            <Route path="/integrations" element={<Integrations />} />

            <Route path="/how-it-works" element={<HowitWorks />} />
          </Route>

          {/* ================================
              AUTH PAGES
          ================================= */}
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          {/* ================================
              ACCOUNT DETAILS PAGE
              NO NAVBAR / NO LAYOUT
          ================================= */}
          <Route path="/login-success" element={<LoginSuccess />} />

          {/* ================================
              FALLBACK
          ================================= */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
