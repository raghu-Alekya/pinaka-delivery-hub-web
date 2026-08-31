import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import registrationImage from "../assets/create_account.png";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "../App.css";

export default function Register() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [step, setStep] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [accountData, setAccountData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [businessData, setBusinessData] = useState({
    businessName: "",
    businessType: "",
    businessPhone: "",
    address: "",
    city: "",
    pinCode: "",
  });

  const handleAccountChange = (e) => {
    const { name, value, type, checked } = e.target;

    setAccountData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBusinessChange = (e) => {
    const { name, value } = e.target;

    setBusinessData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAccountContinue = (e) => {
    e.preventDefault();
    setError("");

    if (
      !accountData.name ||
      !accountData.email ||
      !accountData.phone ||
      !accountData.password ||
      !accountData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (accountData.password !== accountData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!accountData.terms) {
      setError("Please accept the Terms & Conditions and Privacy Policy.");
      return;
    }

    setStep(2);
  };

  const handleBusinessContinue = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !businessData.businessName ||
      !businessData.businessType ||
      !businessData.businessPhone ||
      !businessData.address ||
      !businessData.city ||
      !businessData.pinCode
    ) {
      setError("Please fill in all business details.");
      return;
    }

    setLoading(true);

    try {
      const session = await register(
        accountData.name,
        accountData.email,
        accountData.password,
      );

      setUser(
        session.user || {
          name: accountData.name,
          email: accountData.email,
        },
      );

      setStep(3);
    } catch (err) {
      setError(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    setError("");
    setStep(1);
  };

  return (
    <>
      <Header hideActions />

      <div className="register-page">
        <div className="register-container">
          {/* ================= TOP STEPS ================= */}
          <div className="register-top-steps"></div>

          {/* ================= CARD ================= */}
          <div className="register-card">
            {/* LOGO */}
            <div className="register-logo">
              <div className="logo-arc"></div>
              <div className="logo-text">PINAKA</div>
              <div className="logo-subtext">DELIVERY HUB 🛵</div>
            </div>

            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <>
                <div className="register-heading">
                  <h1>Create your account</h1>
                  <p>Start using Pinaka Delivery Hub.</p>
                </div>

                <StepIndicator currentStep={1} />

                <form onSubmit={handleAccountContinue}>
                  {/* NAME */}
                  <div className="register-field">
                    <label>
                      <i className="bi bi-person"></i>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      value={accountData.name}
                      onChange={handleAccountChange}
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="register-field">
                    <label>
                      <i className="bi bi-envelope"></i>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      value={accountData.email}
                      onChange={handleAccountChange}
                    />
                  </div>

                  {/* PHONE */}
                  <div className="phone-row">
                    <div className="country-code">
                      <i className="bi bi-telephone"></i>
                      <span>+91</span>
                      <i className="bi bi-chevron-down"></i>
                    </div>

                    <div className="register-field phone-input">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Mobile number"
                        value={accountData.phone}
                        onChange={handleAccountChange}
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div className="register-field">
                    <label>
                      <i className="bi bi-lock"></i>
                    </label>

                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={accountData.password}
                      onChange={handleAccountChange}
                    />
                  </div>

                  {/* CONFIRM PASSWORD */}
                  <div className="register-field">
                    <label>
                      <i className="bi bi-lock"></i>
                    </label>

                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={accountData.confirmPassword}
                      onChange={handleAccountChange}
                    />
                  </div>

                  {/* TERMS */}
                  <div className="terms-row">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={accountData.terms}
                      onChange={handleAccountChange}
                    />

                    <span>
                      I agree to <Link to="/terms">Terms & Conditions</Link> and{" "}
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </span>
                  </div>

                  {error && <p className="register-error">{error}</p>}

                  <button type="submit" className="register-button">
                    Continue
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>

                <p className="login-link-text">
                  Already have an account? <Link to="/login">Log in</Link>
                </p>

                <div className="register-illustration">
                  <img src={registrationImage} alt="Food delivery" />
                </div>
              </>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <>
                <div className="register-heading">
                  <h1>Tell us about your business</h1>
                  <p>Add your restaurant details to get started.</p>
                </div>

                <StepIndicator currentStep={2} />

                <form onSubmit={handleBusinessContinue}>
                  {/* BUSINESS NAME */}
                  <div className="input-group">
                    <label>Restaurant / Business Name</label>

                    <div className="register-field">
                      <label>
                        <i className="bi bi-building"></i>
                      </label>

                      <input
                        type="text"
                        name="businessName"
                        placeholder="Enter restaurant or business name"
                        value={businessData.businessName}
                        onChange={handleBusinessChange}
                      />
                    </div>
                  </div>

                  {/* BUSINESS TYPE */}
                  <div className="input-group">
                    <label>Business Type</label>

                    <div className="register-field select-field">
                      <select
                        name="businessType"
                        value={businessData.businessType}
                        onChange={handleBusinessChange}
                      >
                        <option value="">Select business type</option>
                        <option value="restaurant">Restaurant</option>
                        <option value="cafe">Cafe</option>
                        <option value="bakery">Bakery</option>
                        <option value="cloud-kitchen">Cloud Kitchen</option>
                        <option value="other">Other</option>
                      </select>

                      <i className="bi bi-chevron-down select-icon"></i>
                    </div>
                  </div>

                  {/* BUSINESS PHONE */}
                  <div className="input-group">
                    <label>Business Phone Number</label>

                    <div className="register-field">
                      <label>
                        <i className="bi bi-telephone"></i>
                      </label>

                      <input
                        type="tel"
                        name="businessPhone"
                        placeholder="Enter business phone number"
                        value={businessData.businessPhone}
                        onChange={handleBusinessChange}
                      />
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="input-group">
                    <label>Business Address</label>

                    <div className="register-field">
                      <label>
                        <i className="bi bi-geo-alt"></i>
                      </label>

                      <input
                        type="text"
                        name="address"
                        placeholder="Enter complete address"
                        value={businessData.address}
                        onChange={handleBusinessChange}
                      />
                    </div>
                  </div>

                  {/* CITY + PIN */}
                  <div className="city-pin-row">
                    <div className="input-group">
                      <label>City</label>

                      <div className="register-field select-field">
                        <select
                          name="city"
                          value={businessData.city}
                          onChange={handleBusinessChange}
                        >
                          <option value="">Select city</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="chennai">Chennai</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="delhi">Delhi</option>
                        </select>

                        <i className="bi bi-chevron-down select-icon"></i>
                      </div>
                    </div>

                    <div className="input-group">
                      <label>PIN Code</label>

                      <div className="register-field">
                        <label>
                          <i className="bi bi-mailbox"></i>
                        </label>

                        <input
                          type="text"
                          name="pinCode"
                          placeholder="Enter PIN code"
                          value={businessData.pinCode}
                          onChange={handleBusinessChange}
                          maxLength="6"
                        />
                      </div>
                    </div>
                  </div>

                  {error && <p className="register-error">{error}</p>}

                  {/* BUTTONS */}
                  <div className="business-buttons">
                    <button
                      type="button"
                      className="back-button"
                      onClick={goBack}
                    >
                      <i className="bi bi-arrow-left"></i>
                      Back
                    </button>

                    <button
                      type="submit"
                      className="register-button"
                      disabled={loading}
                    >
                      {loading ? "Creating..." : "Continue"}

                      {!loading && <i className="bi bi-arrow-right"></i>}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <>
                <div className="complete-content">
                  {/* CONFETTI */}
                  <div className="confetti confetti-1">◆</div>
                  <div className="confetti confetti-2">◆</div>
                  <div className="confetti confetti-3">◆</div>
                  <div className="confetti confetti-4">◆</div>
                  <div className="confetti confetti-5">◆</div>
                  <div className="confetti confetti-6">◆</div>

                  {/* SUCCESS ICON */}
                  <div className="success-circle">
                    <i className="bi bi-check-lg"></i>
                  </div>

                  <h1>You’re all set!</h1>

                  <p className="complete-description">
                    Your Pinaka Delivery Hub account
                    <br />
                    is ready to use.
                  </p>

                  <p className="complete-description second">
                    Manage orders, deliveries, and your
                    <br />
                    restaurant operations from one place.
                  </p>

                  {/* BENEFITS */}
                  <div className="benefits-card">
                    <div className="benefit">
                      <div className="benefit-icon">
                        <i className="bi bi-envelope-check"></i>
                      </div>

                      <div>
                        <h3>Receive and manage orders</h3>
                        <p>All orders from multiple platforms in one place.</p>
                      </div>
                    </div>

                    <div className="benefit">
                      <div className="benefit-icon">
                        <i className="bi bi-link-45deg"></i>
                      </div>

                      <div>
                        <h3>Streamline your operations</h3>
                        <p>Smart menu, inventory and order sync.</p>
                      </div>
                    </div>

                    <div className="benefit">
                      <div className="benefit-icon">
                        <i className="bi bi-people"></i>
                      </div>

                      <div>
                        <h3>Grow your business</h3>
                        <p>Powerful insights to help you grow.</p>
                      </div>
                    </div>
                  </div>

                  <button
                    className="register-button dashboard-button"
                    onClick={() => navigate("/")}
                  >
                    Go to Dashboard
                    <i className="bi bi-arrow-right"></i>
                  </button>

                  <p className="welcome-text">Welcome to PDH! 🚀</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ================= STEP INDICATOR ================= */

function StepIndicator({ currentStep }) {
  return (
    <div className="register-stepper">
      {/* Connecting line */}
      <div className="register-stepper-line">
        <div
          className="register-stepper-progress"
          style={{
            width:
              currentStep === 1 ? "0%" : currentStep === 2 ? "50%" : "100%",
          }}
        />
      </div>

      {/* STEP 1 */}
      <div className="register-step">
        <div
          className={`register-step-circle ${currentStep >= 1 ? "active" : ""}`}
        >
          {currentStep > 1 ? <i className="bi bi-check-lg"></i> : "1"}
        </div>

        <span
          className={`register-step-label ${currentStep === 1 ? "active" : ""}`}
        >
          Account
        </span>
      </div>

      {/* STEP 2 */}
      <div className="register-step">
        <div
          className={`register-step-circle ${currentStep >= 2 ? "active" : ""}`}
        >
          {currentStep > 2 ? <i className="bi bi-check-lg"></i> : "2"}
        </div>

        <span
          className={`register-step-label ${currentStep === 2 ? "active" : ""}`}
        >
          Business
        </span>
      </div>

      {/* STEP 3 */}
      <div className="register-step">
        <div
          className={`register-step-circle ${currentStep >= 3 ? "active" : ""}`}
        >
          3
        </div>

        <span
          className={`register-step-label ${currentStep === 3 ? "active" : ""}`}
        >
          Done
        </span>
      </div>
    </div>
  );
}
