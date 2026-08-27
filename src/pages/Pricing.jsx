import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "For businesses getting started with PDH.",
    price: "Contact Us",
    popular: false,
    features: [
      "Centralized order management",
      "Menu management",
      "Store management",
      "Basic reporting",
      "Standard support",
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses managing daily operations.",
    price: "Contact Us",
    popular: true,
    features: [
      "Everything in Starter",
      "Advanced order management",
      "Multi-platform integrations",
      "Inventory management",
      "Advanced reporting",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description: "For multi-store and high-volume businesses.",
    price: "Let's Talk",
    popular: false,
    features: [
      "Everything in Professional",
      "Multi-store management",
      "Advanced integrations",
      "Custom workflows",
      "Dedicated support",
      "Enterprise solutions",
    ],
  },
];

export default function Pricing() {
  return (
    <main className="pricing-page">
      {/* =====================================================
          PRICING HERO
      ===================================================== */}

      <section className="pricing-hero">
        <div className="container">
          <div className="pricing-hero-content">
            <span className="pricing-eyebrow">SIMPLE & TRANSPARENT</span>

            <h1>
              Plans that fit your
              <span> business</span>
            </h1>

            <p>
              Choose the right Pinaka Delivery Hub plan for your business and
              manage your restaurant operations from one powerful platform.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING CARDS
      ===================================================== */}

      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-plans-grid">
            {plans.map((plan) => (
              <div
                className={
                  plan.popular ? "pricing-card popular" : "pricing-card"
                }
                key={plan.name}
              >
                {plan.popular && (
                  <div className="pricing-popular">MOST POPULAR</div>
                )}

                <div className="pricing-card-header">
                  <h2>{plan.name}</h2>

                  <p>{plan.description}</p>
                </div>

                <div className="pricing-price">
                  <strong>{plan.price}</strong>

                  {plan.price === "Contact Us" && (
                    <span>Customized for your business</span>
                  )}

                  {plan.price === "Let's Talk" && (
                    <span>Built around your requirements</span>
                  )}
                </div>

                <Link
                  to="/contact"
                  className={
                    plan.popular ? "pricing-button primary" : "pricing-button"
                  }
                >
                  {plan.price === "Let's Talk"
                    ? "Talk to Sales"
                    : "Get Started"}

                  <i className="bi bi-arrow-right"></i>
                </Link>

                <div className="pricing-divider"></div>

                <h3>What's included</h3>

                <ul className="pricing-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="bi bi-check-circle-fill"></i>

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY PDH
      ===================================================== */}

      <section className="pricing-benefits-section">
        <div className="container">
          <div className="pricing-section-heading">
            <span>WHY PDH</span>

            <h2>More than just a pricing plan</h2>

            <p>
              PDH brings your restaurant operations together so your team can
              spend less time switching between systems and more time running
              the business.
            </p>
          </div>

          <div className="pricing-benefits-grid">
            <div className="pricing-benefit">
              <div className="pricing-benefit-icon">
                <i className="bi bi-layers"></i>
              </div>

              <h3>One Platform</h3>

              <p>
                Manage orders, menus, stores, integrations and operations from
                one central dashboard.
              </p>
            </div>

            <div className="pricing-benefit">
              <div className="pricing-benefit-icon">
                <i className="bi bi-diagram-3"></i>
              </div>

              <h3>Connected Operations</h3>

              <p>
                Connect your important delivery and restaurant systems in one
                place.
              </p>
            </div>

            <div className="pricing-benefit">
              <div className="pricing-benefit-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>

              <h3>Better Visibility</h3>

              <p>
                Get the information you need to understand your business and
                make better decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ / PRICING QUESTIONS
      ===================================================== */}

      <section className="pricing-faq-section">
        <div className="container">
          <div className="pricing-faq-card">
            <div>
              <span>HAVE QUESTIONS?</span>

              <h2>Not sure which plan is right for you?</h2>

              <p>
                Tell us about your business and our team can help you choose the
                right PDH solution.
              </p>
            </div>

            <Link to="/contact" className="pricing-contact-button">
              Talk to Our Team
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
