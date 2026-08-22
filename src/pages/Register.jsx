import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-logo">Pinaka</div>
          <h1>Create account</h1>
          <p className="login-description">Start using Pinaka Delivery Hub.</p>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <input type="text" name="name" placeholder="Full name" required />
            </div>
            <div className="login-field">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="login-field" style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword((value) => !value)}
                aria-label="Toggle password visibility"
              >
                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"} />
              </button>
            </div>
            <button className="login-continue" type="submit">
              Continue
            </button>
          </form>

          <p className="signup-text">
            Already have an account?
            <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
