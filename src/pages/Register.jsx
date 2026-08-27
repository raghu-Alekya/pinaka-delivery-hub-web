import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export default function Register() {
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
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    try {
      const session = await register(name, email, password);
      setUser(session.user || { name, email });
      navigate("/");
    } catch (err) {
      setError(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
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
            {error ? (
              <p className="login-description" style={{ color: "#c0392b" }}>
                {error}
              </p>
            ) : null}
            <button className="login-continue" type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Continue"}
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
