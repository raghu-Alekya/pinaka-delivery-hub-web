import { useLocation, useNavigate } from "react-router-dom";

export default function LoginSuccess() {
  const location = useLocation();

  const user = location.state?.user || {};

  function handleSubmit(event) {
    event.preventDefault();

    // Frontend-only for now
    navigate("/");
  }

  return (
    <div className="account-details-page">
      {/* Thin Header */}
      <div className="account-details-header">
        <div className="account-details-logo">
          <div className="account-logo-icon">
            <span>⚡</span>
          </div>

          <div className="account-logo-text">
            <strong>PINAKA</strong>
            <span>DELIVERY HUB</span>
          </div>
        </div>
      </div>

      {/* Background watermark */}
      <div className="account-details-pattern" aria-hidden="true">
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
        <span>Pinaka Delivery Hub</span>
      </div>

      {/* Background connecting network */}
      <div className="account-details-lines" aria-hidden="true">
        <svg viewBox="0 0 1000 700" preserveAspectRatio="none">
          <line x1="0" y1="80" x2="360" y2="280" />
          <line x1="0" y1="300" x2="360" y2="280" />

          <line x1="1000" y1="80" x2="640" y2="280" />
          <line x1="1000" y1="300" x2="640" y2="280" />

          <line x1="0" y1="600" x2="360" y2="400" />
          <line x1="1000" y1="600" x2="640" y2="400" />

          <line x1="150" y1="0" x2="360" y2="280" />
          <line x1="850" y1="0" x2="640" y2="280" />

          <line x1="150" y1="700" x2="360" y2="400" />
          <line x1="850" y1="700" x2="640" y2="400" />
        </svg>
      </div>

      {/* Centered form */}
      <div className="account-details-wrapper">
        <div className="account-details-card">
          <h1>Add your account details</h1>

          <form onSubmit={handleSubmit}>
            {/* Business Name */}
            <div className="account-field">
              <label>
                Business Name <span>*</span>
              </label>

              <input
                type="text"
                name="businessName"
                placeholder="Enter your business name"
                required
              />
            </div>

            {/* Business Address */}
            <fieldset className="address-fieldset">
              <legend>Business Address</legend>

              <div className="account-field">
                <label>
                  Address Line <span>*</span>
                </label>

                <input
                  type="text"
                  name="address"
                  placeholder="Enter your street address"
                  required
                />
              </div>

              <div className="account-row">
                <div className="account-field">
                  <label>
                    City <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    required
                  />
                </div>

                <div className="account-field">
                  <label>
                    State <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="state"
                    placeholder="Enter your state"
                    required
                  />
                </div>
              </div>

              <div className="account-row">
                <div className="account-field">
                  <label>
                    Zip Code <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="zipCode"
                    placeholder="Enter your zipcode"
                    required
                  />
                </div>

                <div className="account-field">
                  <label>
                    Country <span>*</span>
                  </label>

                  <select name="country" required defaultValue="">
                    <option value="" disabled>
                      Select your country
                    </option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                  </select>
                </div>
              </div>
            </fieldset>

            {/* Email */}
            <div className="account-field">
              <label>
                Email <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                value={user.email || ""}
                placeholder="Enter your email"
                readOnly={Boolean(user.email)}
                required
                onChange={() => {}}
              />
            </div>

            {/* Full Name */}
            <div className="account-field">
              <label>
                Full Name <span>*</span>
              </label>

              <input
                type="text"
                name="fullName"
                value={user.name || ""}
                placeholder="Enter your full name"
                readOnly={Boolean(user.name)}
                required
                onChange={() => {}}
              />
            </div>

            {/* Store Phone */}
            <div className="account-field">
              <label>
                Store Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                name="storePhone"
                placeholder="Enter Store phone number"
                required
              />
            </div>

            {/* Owner Phone */}
            <div className="account-field">
              <label>
                Owner Phone Number <span>*</span>
              </label>

              <input
                type="tel"
                name="ownerPhone"
                placeholder="Enter owner phone number"
                required
              />
            </div>

            {/* SMS consent */}
            <div className="sms-consent">
              <input type="checkbox" id="smsConsent" name="smsConsent" />

              <label htmlFor="smsConsent">
                By checking this box, I agree to receive recurring automated
                text messages from Pinaka Delivery Hub at the mobile number I
                provided. Messages may include order notifications, delivery
                status updates, account-related communications. Consent is not a
                condition of using Pinaka Delivery Hub. Message frequency
                varies. Message and data rates may apply.
              </label>
            </div>

            {/* Buttons */}
            <div className="account-actions">
              <button
                type="button"
                className="account-back"
                onClick={() => navigate("/login")}
              >
                Back
              </button>

              <button type="submit" className="account-next">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
