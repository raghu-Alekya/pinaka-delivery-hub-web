import React from "react";
import { Link } from "react-router-dom";
const steps = [
  {
    number: "1",
    icon: "🏪",
    title: "Create Your Account",
    description:
      "Sign up in just a few minutes and set up your restaurant on Pinaka Delivery Hub.",
    points: [
      "Add restaurant details",
      "Set basic preferences",
      "Invite your team",
    ],
  },
  {
    number: "2",
    icon: "🔗",
    title: "Connect Platforms",
    description:
      "Connect with Zomato, Swiggy, DoorDash and other delivery platforms in one place.",
    points: [
      "Secure integrations",
      "Automatic order sync",
      "Real-time connection",
    ],
  },
  {
    number: "3",
    icon: "📋",
    title: "Receive Orders",
    description:
      "Orders from your connected platforms come directly into your Pinaka dashboard.",
    points: ["Unified order inbox", "Order notifications", "No missed orders"],
  },
  {
    number: "4",
    icon: "⚙️",
    title: "Manage Operations",
    description:
      "Manage menus, inventory, preparation time, store settings and order status easily.",
    points: ["Update menu & items", "Track inventory", "Update order status"],
  },
  {
    number: "5",
    icon: "📈",
    title: "Grow Your Business",
    description:
      "Use reports and analytics to understand performance and make smarter decisions.",
    points: [
      "Sales & order reports",
      "Customer insights",
      "Business performance",
    ],
  },
];

const benefits = [
  {
    icon: "⚡",
    title: "All in One Place",
    description:
      "No more switching between multiple tablets or apps. Everything you need is in one dashboard.",
  },
  {
    icon: "🔄",
    title: "Real-time Updates",
    description:
      "Orders, menus and inventory are updated instantly across connected platforms.",
  },
  {
    icon: "✓",
    title: "Easy to Use",
    description:
      "A simple, clean interface designed for restaurant owners and teams.",
  },
  {
    icon: "🛡️",
    title: "Better Accuracy",
    description:
      "Reduce manual mistakes and manage operations with better accuracy.",
  },
  {
    icon: "📊",
    title: "Data-driven Decisions",
    description:
      "Powerful reports and analytics help you make smarter business decisions.",
  },
  {
    icon: "🚀",
    title: "Scalable for Growth",
    description:
      "Whether you have one outlet or multiple locations, PDH grows with your business.",
  },
];

function HowItWorks() {
  return (
    <div className="how-page">
      {/* ================= NAVBAR ================= */}
      <header className="how-navbar">
        <div className="how-logo">
          <div className="how-logo-icon">⚡</div>

          <div>
            <div className="how-logo-title">PINAKA</div>
            <div className="how-logo-subtitle">DELIVERY HUB</div>
          </div>
        </div>

        <nav className="how-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/features">Features</a>
          <a href="/integrations">Integrations</a>
          <a href="/how-it-works" className="active">
            How It Works
          </a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </nav>

        <div className="how-nav-actions">
          <button className="login-btn">Login</button>

          <button className="get-started-btn">Get Started</button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="how-hero">
        <div className="how-hero-left">
          <span className="section-tag">HOW IT WORKS</span>

          <h1>
            One Hub.
            <br />
            All Orders.
            <br />
            <span>Zero Hassle.</span>
          </h1>

          <p className="hero-description">
            Pinaka Delivery Hub brings together orders, menus, inventory and
            analytics from your delivery platforms into one powerful dashboard.
          </p>

          <div className="hero-highlights">
            <div className="hero-highlight">
              <div className="highlight-icon orange">⚡</div>

              <div>
                <h4>Connect</h4>
                <p>Connect your restaurant with multiple delivery platforms.</p>
              </div>
            </div>

            <div className="hero-highlight">
              <div className="highlight-icon green">🔗</div>

              <div>
                <h4>Sync</h4>
                <p>Menus, inventory and orders are synced in real-time.</p>
              </div>
            </div>

            <div className="hero-highlight">
              <div className="highlight-icon purple">📊</div>

              <div>
                <h4>Simplify</h4>
                <p>Manage everything from one dashboard and save time.</p>
              </div>
            </div>
          </div>
        </div>

        {/* DASHBOARD MOCKUP */}
        <div className="how-hero-right">
          <div className="dashboard-window">
            <div className="dashboard-sidebar">
              <div className="mini-logo">⚡</div>

              <div className="side-item active">◉ Dashboard</div>

              <div className="side-item">🛍 Orders</div>

              <div className="side-item">📋 Menu</div>

              <div className="side-item">📦 Inventory</div>

              <div className="side-item">👥 Customers</div>

              <div className="side-item">📊 Reports</div>

              <div className="side-item">⚙ Settings</div>
            </div>

            <div className="dashboard-content">
              <div className="dashboard-header">
                <h3>Dashboard</h3>

                <select>
                  <option>Today</option>
                </select>
              </div>

              <div className="dashboard-stats">
                <div className="stat-card">
                  <span>Total Orders</span>
                  <strong>128</strong>
                  <small>↑ 18% yesterday</small>
                </div>

                <div className="stat-card">
                  <span>Total Revenue</span>
                  <strong>₹24,680</strong>
                  <small>↑ 24% yesterday</small>
                </div>

                <div className="stat-card">
                  <span>Active Orders</span>
                  <strong>36</strong>
                  <small className="live">● Live</small>
                </div>
              </div>

              <div className="dashboard-chart">
                <div className="chart-heading">
                  <span>Orders Overview</span>
                  <span>Today</span>
                </div>

                <div className="fake-chart">
                  <div className="chart-line"></div>
                </div>
              </div>

              <div className="platform-orders">
                <div className="platform-order">
                  <span className="zomato-dot">Z</span>
                  <span>Zomato</span>
                  <strong>62</strong>
                </div>

                <div className="platform-order">
                  <span className="swiggy-dot">S</span>
                  <span>Swiggy</span>
                  <strong>54</strong>
                </div>

                <div className="platform-order">
                  <span className="door-dot">D</span>
                  <span>DoorDash</span>
                  <strong>12</strong>
                </div>
              </div>
            </div>
          </div>

          {/* PHONE */}
          <div className="order-phone">
            <div className="phone-top">
              <span>9:41</span>
              <span>● ●</span>
            </div>

            <h4>Incoming Order</h4>

            <div className="phone-platform">
              <span>Z</span>
              Zomato
            </div>

            <p>Order #1256</p>

            <div className="phone-item">
              <span>2 × Veg Burger</span>
              <strong>₹240</strong>
            </div>

            <div className="phone-item">
              <span>1 × Cold Coffee</span>
              <strong>₹120</strong>
            </div>

            <div className="phone-total">
              <span>Total</span>
              <strong>₹360</strong>
            </div>

            <div className="phone-buttons">
              <button>Accept</button>
              <button>Reject</button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 STEPS ================= */}
      <section className="steps-section">
        <div className="section-heading">
          <span>THE COMPLETE PROCESS</span>

          <h2>Get Started in 5 Simple Steps</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step-card">
                <div className="step-number">{step.number}</div>

                <div className="step-icon">{step.icon}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <ul>
                  {step.points.map((point) => (
                    <li key={point}>
                      <span>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ================= HOW IT HAPPENS ================= */}
      <section className="how-happens">
        <div className="section-heading">
          <span>HOW IT HAPPENS</span>

          <h2>Everything Comes Together in One Place</h2>

          <p>
            Pinaka Delivery Hub connects your delivery platforms with your
            restaurant operations.
          </p>
        </div>

        <div className="connection-flow">
          {/* PLATFORMS */}
          <div className="flow-box">
            <h3>Multiple Platforms</h3>

            <div className="platform-logo zomato">zomato</div>

            <div className="platform-logo swiggy">🟠 SWIGGY</div>

            <div className="platform-logo doordash">➤ DOORDASH</div>

            <div className="more-platforms">+ More Platforms</div>
          </div>

          <div className="flow-arrow">→</div>

          {/* PDH */}
          <div className="pdh-flow-box">
            <div className="pdh-flow-header">PINAKA DELIVERY HUB</div>

            <div className="pdh-dashboard">
              <div className="pdh-mini-sidebar">
                <span>⚡</span>
                <span>◉</span>
                <span>▣</span>
                <span>▤</span>
                <span>⚙</span>
              </div>

              <div className="pdh-mini-content">
                <div className="mini-stat-row">
                  <div>
                    <small>Orders</small>
                    <strong>128</strong>
                  </div>

                  <div>
                    <small>Revenue</small>
                    <strong>₹24,680</strong>
                  </div>
                </div>

                <div className="mini-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="sync-features">
              <span>⚡ Real-time Sync</span>
              <span>🔄 Unified Dashboard</span>
              <span>🛡 Data Security</span>
            </div>
          </div>

          <div className="flow-arrow">→</div>

          {/* RESTAURANT OPERATIONS */}
          <div className="flow-box operations">
            <h3>Your Restaurant Operations</h3>

            <div>
              <span>🧾</span>
              Orders
            </div>

            <div>
              <span>📋</span>
              Menu Management
            </div>

            <div>
              <span>📦</span>
              Inventory
            </div>

            <div>
              <span>⚙</span>
              Store Settings
            </div>

            <div>
              <span>📊</span>
              Reports & Analytics
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY RESTAURANTS LOVE PDH ================= */}
      <section className="love-pdh">
        <div className="section-heading">
          <span>WHY RESTAURANTS LOVE PINAKA DELIVERY HUB</span>

          <h2>Built Around Restaurant Operations</h2>

          <p>
            Everything restaurant teams need to manage their daily operations
            more efficiently.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div className="benefit-card" key={benefit.title}>
              <div className="benefit-icon">{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="how-cta">
        <div className="restaurant-illustration">🏪</div>

        <div className="cta-content">
          <h2>Ready to Simplify Your Restaurant Operations?</h2>

          <p>
            Manage orders, menus, inventory and more from one place with Pinaka
            Delivery Hub.
          </p>
        </div>

        <div className="cta-buttons">
          <button className="cta-primary">
            Create Your Account
            <span>→</span>
          </button>

          <button className="cta-secondary">
            Book a Demo
            <span>◫</span>
          </button>

          <div className="cta-points">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="how-footer">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-icon">⚡</div>

            <div>
              <strong>PINAKA</strong>
              <small>DELIVERY HUB</small>
            </div>
          </div>

          <p>
            All orders. One hub. More growth. Pinaka Delivery Hub helps
            restaurants manage orders, streamline operations and grow their
            business.
          </p>

          <div className="social-icons">
            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
            <span>▶</span>
            <span>in</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>

          <a href="#">For Merchants</a>
          <a href="/features">Features</a>
          <a href="/integrations">Integrations</a>
          <a href="/pricing">Pricing</a>
          <a href="/how-it-works">How It Works</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>

          <a href="#">Blog</a>
          <a href="#">Help Center</a>
          <a href="#">Guides</a>
          <a href="#">Success Stories</a>
          <a href="#">API Documentation</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>

          <a href="/about">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-column contact">
          <h4>Contact Us</h4>

          <p>📞 +91 98765 43210</p>
          <p>✉ info@alekyatechsolutions.com</p>
          <p>📍 Hyderabad, India</p>
        </div>

        <div className="footer-bottom">
          © 2024 Pinaka Delivery Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default HowItWorks;
