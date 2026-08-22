import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";
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
        String(form.get("password") || "")
      );
      setUser(session.user);
      navigate("/");
    } catch (err) {
      setError(err.message || "Login failed.");
    } finally {
      setLoading(false);
    }
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
            New here?
            <Link to="/register">Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
