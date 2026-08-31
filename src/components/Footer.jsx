import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-column">
            <div className="footer-logo">
              <div className="logo-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </div>
              <div>
                <strong>Pinaka</strong>
                <span>Delivery Hub</span>
              </div>
            </div>
            <p className="footer-description">
              Empowering restaurants to manage orders, streamline operations and
              deliver happiness to more customers.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-column">
            <h6 className="footer-title">Platform</h6>
            <ul className="footer-links">
              <li>
                <Link to="/register">For Merchants</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>
                <Link to="/integrations">Integrations</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-column">
            <h6 className="footer-title">Resources</h6>
            <ul className="footer-links">
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <Link to="/help-center">Help Center</Link>
              </li>
              <li>
                <a href="#guides">Guides</a>
              </li>
              <li>
                <a href="#stories">Success Stories</a>
              </li>
              <li>
                <a href="#api">API Documentation</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-column">
            <h6 className="footer-title">Company</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-column">
            <h6 className="footer-title">Contact Us</h6>
            <div className="contact-item">
              <i className="bi bi-telephone"></i>
              <span>+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <i className="bi bi-envelope"></i>
              <span>info@alekyatechsolutions.com</span>
            </div>
            <div className="contact-item">
              <i className="bi bi-geo-alt"></i>
              <span>Hyderabad, India</span>
            </div>
          </div>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Pinaka Delivery Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
