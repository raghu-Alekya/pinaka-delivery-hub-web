import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-logo">Pinaka</div>
          <h1>Welcome back</h1>
          <p className="login-description">Log in to your delivery hub.</p>

          <form onSubmit={handleSubmit}>
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
            <a className="reset-password" href="#reset">
              Reset password
            </a>
            <button className="login-continue" type="submit">
              Continue
            </button>
          </form>

          <p className="signup-text">
            New here?
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
