import { Link } from "react-router-dom";
import { useState } from "react";
import supportAgent from "../assets/contactsupport.png";
const supportItems = [
  {
    icon: "bi-headset",
    className: "blue",
    title: "Platform Support",
    text: "Get help with orders, menu, inventory, integrations and more.",
  },
  {
    icon: "bi-shield-check",
    className: "green",
    title: "Reliable Assistance",
    text: "Our team ensures quick and reliable solutions for your business.",
  },
  {
    icon: "bi-people",
    className: "orange",
    title: "Dedicated Team",
    text: "We work with you to keep your restaurant running smoothly on PDH.",
  },
];

const contactDetails = [
  {
    icon: "bi-envelope",
    className: "purple",
    title: "Email Us",
    value: "info@alekyatechsolutions.com",
    description: "We typically reply within a few hours.",
  },
  {
    icon: "bi-telephone",
    className: "green",
    title: "Call Us",
    value: "+91 72077 07712",
    description: "Mon - Sat: 9:00 AM - 8:00 PM (IST)",
  },
  {
    icon: "bi-geo-alt",
    className: "orange",
    title: "Office Address",
    value: "Alekya Tech Solutions",
    description:
      "4th floor, P.No. 7/3/H, Sector-III, Opposite Tertrasoft Building, Huda Techno Enclave, Opp Raheja Mindspace, Phase 2, HITECH City, Hyderabad, Telangana 500081",
  },
  {
    icon: "bi-clock",
    className: "purple",
    title: "Business Hours",
    value: "Mon - Fri: 10:00 AM - 6:00 PM (IST)",
  },
];

const platforms = [
  {
    name: "zomato",
    className: "zomato",
    text: "Manage Zomato orders seamlessly.",
  },
  {
    name: "⚡ SWIGGY",
    className: "swiggy",
    text: "Sync and manage Swiggy orders in real-time.",
  },
  {
    name: "➤ DOORDASH",
    className: "doordash",
    text: "Connect and sync DoorDash orders effortlessly.",
  },
  {
    name: "+ More Platforms",
    className: "more-platforms",
    text: "Many more platforms coming soon.",
  },
];

const inquiries = [
  {
    icon: "bi-clipboard-check",
    title: "Platform Onboarding",
    text: "Get started with PDH quickly",
  },
  {
    icon: "bi-diagram-3",
    title: "Integration Support",
    text: "Need help connecting platforms?",
  },
  {
    icon: "bi-wallet2",
    title: "Account & Billing",
    text: "Questions about plans & billing",
  },
  {
    icon: "bi-headset",
    title: "Technical Issues",
    text: "Facing an issue? We're here to help",
  },
  {
    icon: "bi-share",
    title: "Partnerships",
    text: "Let's build something great together",
  },
  {
    icon: "bi-chat-square-text",
    title: "Feedback",
    text: "We value your feedback",
  },
];

function ContactForm() {
  return (
    <div className="contact-form-card">
      <div className="contact-form-heading">
        <div className="contact-form-icon">
          <i className="bi bi-envelope-fill" />
        </div>

        <div>
          <h2>Send us a Message</h2>
          <p>Fill out the form and we’ll get back to you shortly.</p>
        </div>
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="contact-form-grid">
          <div className="contact-input-wrapper">
            <i className="bi bi-person" />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>

          <div className="contact-input-wrapper">
            <i className="bi bi-envelope" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="contact-input-wrapper">
            <i className="bi bi-telephone" />
            <input type="tel" name="phone" placeholder="Phone Number" />
          </div>

          <div className="contact-input-wrapper">
            <i className="bi bi-tag" />
            <input type="text" name="subject" placeholder="Subject" />
          </div>
        </div>

        <div className="contact-message-wrapper">
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows="5"
            required
          />
        </div>

        <button type="submit" className="contact-submit-button">
          Send Message
          <i className="bi bi-send" />
        </button>
      </form>

      <div className="contact-support-person">
        {/* Chat bubble */}

        {/* Support Girl */}
        <img
          src={supportAgent}
          alt="Pinaka Delivery Hub Support"
          className="support-agent-image"
        />
      </div>
    </div>
  );
}

function ContactInfoCard({ item }) {
  return (
    <div className="contact-info-item">
      <div className={`contact-info-icon ${item.className}`}>
        <i className={`bi ${item.icon}`} />
      </div>

      <h3>{item.title}</h3>

      <strong
        className={item.title === "Email Us" ? "contact-email-value" : ""}
      >
        {item.value}
      </strong>

      <p>{item.description}</p>
    </div>
  );
}

export default function Contact() {
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-grid">
            <div className="contact-intro">
              <h1>
                Get in Touch with
                <span> Pinaka Delivery Hub</span>
              </h1>

              <p className="contact-intro-description">
                For any queries related to our platform, integrations, orders,
                or technical support, our team is here to assist you.
              </p>

              <div className="support-list">
                {supportItems.map((item) => (
                  <div className="support-item" key={item.title}>
                    <div className={`support-item-icon ${item.className}`}>
                      <i className={`bi ${item.icon}`} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* ================= CONTACT INFORMATION ================= */}
      <section className="contact-information">
        <div className="container">
          <div className="contact-information-card">
            {contactDetails.map((item, index) => (
              <ContactInfoCard item={item} key={item.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOCATION / PLATFORMS / INQUIRIES ================= */}
      <section className="contact-details-section">
        <div className="container">
          <div className="row g-3">
            {/* LOCATION */}
            <div className="col-lg-4">
              <div className="contact-detail-card">
                <h2>Our Location</h2>

                <div className="contact-map">
                  <iframe
                    title="Pinaka Delivery Hub Location"
                    src="https://www.google.com/maps?q=C9RG%2BWCV%2C+Hyderabad%2C+Telangana%2C+India&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <button
                  type="button"
                  className="directions-button"
                  onClick={() => {
                    window.open(
                      "https://www.google.com/maps?q=C9RG%2BWCV,+Hyderabad,+Telangana,+India",
                      "_blank",
                    );
                  }}
                >
                  <i className="bi bi-send"></i>
                  Get Directions
                </button>
              </div>
            </div>

            {/* PLATFORMS */}
            <div className="col-lg-4">
              <div className="contact-detail-card">
                <h2>We Support All Major Platforms</h2>

                <p className="platform-description">
                  Manage orders from multiple food delivery platforms in one
                  dashboard.
                </p>

                <div className="platform-list">
                  {platforms.map((platform) => (
                    <div className="platform-list-item" key={platform.name}>
                      <strong className={platform.className}>
                        {platform.name}
                      </strong>

                      <span>{platform.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INQUIRIES */}
            <div className="col-lg-4">
              <div className="contact-detail-card">
                <h2>Common Inquiries</h2>

                <div className="inquiry-list">
                  {inquiries.map((inquiry) => (
                    <button
                      type="button"
                      className="inquiry-item"
                      key={inquiry.title}
                      onClick={() => setSelectedInquiry(inquiry)}
                    >
                      <span className="inquiry-icon">
                        <i className={`bi ${inquiry.icon}`} />
                      </span>

                      <span className="inquiry-content">
                        <strong>{inquiry.title}</strong>
                        <small>{inquiry.text}</small>
                      </span>

                      <i className="bi bi-chevron-right inquiry-arrow" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="contact-cta-section">
        <div className="container">
          <div className="contact-cta">
            <div className="cta-dashboard-visual">
              <img
                src="/images/about-dashboard.png"
                alt="Pinaka Delivery Hub dashboard"
              />

              <div className="cta-floating-icon orange">
                <i className="bi bi-lightning-fill" />
              </div>

              <div className="cta-floating-icon blue">
                <i className="bi bi-geo-alt-fill" />
              </div>

              <div className="cta-floating-icon red">
                <i className="bi bi-bag-fill" />
              </div>
            </div>

            <div className="contact-cta-content">
              <span>ONE HUB. ALL ORDERS.</span>

              <h2>
                Simplify Your Restaurant Operations
                <br />
                with Pinaka Delivery Hub
              </h2>

              <p>
                Join thousands of restaurants already managing their operations,
                menus, and growth with PDH.
              </p>
            </div>

            <div className="contact-cta-actions">
              <Link to="/register" className="contact-cta-primary">
                Create Your Account
                <i className="bi bi-arrow-right" />
              </Link>

              <Link to="/contact" className="contact-cta-secondary">
                Book a Demo
                <i className="bi bi-calendar3" />
              </Link>

              <div className="cta-benefits">
                <span>
                  <i className="bi bi-check-circle-fill" />
                  No setup fees
                </span>

                <span>
                  <i className="bi bi-check-circle-fill" />
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INQUIRY POPUP
      ========================================= */}

      {selectedInquiry && (
        <div
          className="inquiry-modal-overlay"
          onClick={() => setSelectedInquiry(null)}
        >
          <div
            className="inquiry-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="inquiry-modal-close"
              onClick={() => setSelectedInquiry(null)}
            >
              <i className="bi bi-x"></i>
            </button>

            <div className="inquiry-modal-icon">
              <i className={`bi ${selectedInquiry.icon}`}></i>
            </div>

            <h2>{selectedInquiry.title}</h2>

            <p>
              {selectedInquiry.title === "Platform Onboarding" &&
                "Get started with Pinaka Delivery Hub and connect your restaurant with the platforms you use."}

              {selectedInquiry.title === "Integration Support" &&
                "Need help connecting your delivery platforms? Our team can help you configure and sync your integrations with PDH."}

              {selectedInquiry.title === "Account & Billing" &&
                "Get assistance with your account, subscription, plans, payments and billing-related questions."}

              {selectedInquiry.title === "Technical Issues" &&
                "Facing an issue with Pinaka Delivery Hub? Tell us what went wrong and our support team will help you resolve it."}

              {selectedInquiry.title === "Partnerships" &&
                "Interested in partnering with Pinaka Delivery Hub? We'd be happy to discuss opportunities and explore how we can work together."}

              {selectedInquiry.title === "Feedback" &&
                "We value your feedback. Share your suggestions, experience or ideas with us and help us improve Pinaka Delivery Hub."}
            </p>

            <button
              type="button"
              className="inquiry-modal-button"
              onClick={() => {
                setSelectedInquiry(null);

                document.querySelector(".contact-form-card")?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            >
              Contact Support
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
