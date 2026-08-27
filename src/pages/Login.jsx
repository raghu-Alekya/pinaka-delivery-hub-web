import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);

    try {
      const session = await login(
        String(form.get("email") || "").trim(),
        String(form.get("password") || ""),
      );
      setUser(session.user);
      navigate("/login-success", {
        state: {
          user: {
            email: String(form.get("email") || "").trim(),
            name: "Revathi Priya Redrouthu",
          },
        },
      });
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
  }

  function handleGoogleSuccess(credentialResponse) {
    console.log("Google login successful:", credentialResponse);

    setUser({
      first_name: "Google",
      last_name: "User",
      email: "Google authenticated user",
    });

    navigate("/login-success");
  }

  function handleGoogleError() {
    setError("Google login failed. Please try again.");
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
            {error ? (
              <p className="login-description" style={{ color: "#c0392b" }}>
                {error}
              </p>
            ) : null}
            <a className="reset-password" href="#reset">
              Reset password
            </a>
            <button className="login-continue" type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Continue"}
            </button>
          </form>

          <p className="signup-text">
            Don't have an account?
            <Link to="/register">Sign up</Link>
          </p>

          <div className="login-divider">
            <span />
            <em>OR</em>
            <span />
          </div>

          <div className="google-login-wrapper">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
