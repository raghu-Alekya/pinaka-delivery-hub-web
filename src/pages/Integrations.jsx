import React, { useState } from "react";
import { Link } from "react-router-dom";

const integrations = [
  {
    name: "Delivery Platforms",
    description:
      "Connect your delivery channels and manage incoming orders from one central place.",
    icon: "bi-bicycle",
    category: "Delivery",
  },
  {
    name: "POS Systems",
    description:
      "Connect your point-of-sale system to keep your restaurant operations connected.",
    icon: "bi-display",
    category: "POS",
  },
  {
    name: "Payment Platforms",
    description:
      "Connect payment services to support smoother order and transaction workflows.",
    icon: "bi-credit-card",
    category: "Payments",
  },
  {
    name: "Accounting",
    description:
      "Connect your accounting tools to simplify financial reporting and reconciliation.",
    icon: "bi-calculator",
    category: "Business",
  },
  {
    name: "Inventory",
    description:
      "Connect inventory systems to keep stock and operational information synchronized.",
    icon: "bi-box-seam",
    category: "Operations",
  },
  {
    name: "Other Services",
    description:
      "Connect additional business tools that support your restaurant operations.",
    icon: "bi-grid",
    category: "Business",
  },
];

const categories = [
  "All",
  "Delivery",
  "POS",
  "Payments",
  "Business",
  "Operations",
];

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredIntegrations =
    activeCategory === "All"
      ? integrations
      : integrations.filter(
          (integration) => integration.category === activeCategory,
        );

  return (
    <main className="integrations-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="integrations-hero">
        <div className="container">
          <div className="integrations-hero-content">
            <span className="integrations-eyebrow">CONNECT YOUR BUSINESS</span>

            <h1>
              Everything connected.
              <span> One place.</span>
            </h1>

            <p>
              Bring your restaurant platforms and business tools together with
              Pinaka Delivery Hub and manage your operations from one central
              place.
            </p>

            <div className="integrations-hero-buttons">
              <Link to="/contact" className="integrations-primary-button">
                Talk to Our Team
                <i className="bi bi-arrow-right"></i>
              </Link>

              <a
                href="#integration-list"
                className="integrations-secondary-button"
              >
                Explore Integrations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECTION FLOW
      ===================================================== */}

      <section className="integration-flow-section">
        <div className="container">
          <div className="integration-flow">
            <div className="integration-flow-item">
              <div className="integration-flow-icon">
                <i className="bi bi-shop"></i>
              </div>

              <h3>Your Restaurant</h3>

              <p>Your stores and daily operations</p>
            </div>

            <div className="integration-flow-line">
              <i className="bi bi-arrow-right"></i>
            </div>

            <div className="integration-flow-item main">
              <div className="integration-flow-icon">
                <span>PDH</span>
              </div>

              <h3>Pinaka Delivery Hub</h3>

              <p>One central operations platform</p>
            </div>

            <div className="integration-flow-line">
              <i className="bi bi-arrow-right"></i>
            </div>

            <div className="integration-flow-item">
              <div className="integration-flow-icon">
                <i className="bi bi-grid-3x3-gap"></i>
              </div>

              <h3>Connected Platforms</h3>

              <p>Your connected business systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTEGRATIONS
      ===================================================== */}

      <section className="integration-list-section" id="integration-list">
        <div className="container">
          <div className="integration-heading">
            <span>INTEGRATION ECOSYSTEM</span>

            <h2>Connect the tools you already use</h2>

            <p>
              Explore the types of systems that can be connected with your
              restaurant operations.
            </p>
          </div>

          {/* FILTERS */}

          <div className="integration-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "integration-filter active"
                    : "integration-filter"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* CARDS */}

          <div className="integration-grid">
            {filteredIntegrations.map((integration) => (
              <div className="integration-card" key={integration.name}>
                <div className="integration-card-top">
                  <div className="integration-card-icon">
                    <i className={`bi ${integration.icon}`}></i>
                  </div>

                  <span>{integration.category}</span>
                </div>

                <h3>{integration.name}</h3>

                <p>{integration.description}</p>

                <div className="integration-card-footer">
                  <span>Integration available</span>

                  <i className="bi bi-arrow-up-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="integration-benefits-section">
        <div className="container">
          <div className="integration-heading">
            <span>WHY INTEGRATE?</span>

            <h2>Keep your operations connected</h2>
          </div>

          <div className="integration-benefits-grid">
            <div className="integration-benefit">
              <div className="integration-benefit-icon">
                <i className="bi bi-arrow-repeat"></i>
              </div>

              <h3>Reduce Manual Work</h3>

              <p>
                Connect your systems so your team spends less time moving
                information between different platforms.
              </p>
            </div>

            <div className="integration-benefit">
              <div className="integration-benefit-icon">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h3>One Connected Workflow</h3>

              <p>
                Bring your restaurant operations together through a centralized
                workflow.
              </p>
            </div>

            <div className="integration-benefit">
              <div className="integration-benefit-icon">
                <i className="bi bi-bar-chart"></i>
              </div>

              <h3>Better Visibility</h3>

              <p>
                Access important operational information from one place and make
                informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="integration-cta-section">
        <div className="container">
          <div className="integration-cta">
            <div>
              <span>NEED HELP WITH AN INTEGRATION?</span>

              <h2>Let's connect your business.</h2>

              <p>
                Tell us which platforms you use and our team can help you
                understand the available integration options.
              </p>
            </div>

            <Link to="/contact" className="integration-cta-button">
              Contact Us
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
