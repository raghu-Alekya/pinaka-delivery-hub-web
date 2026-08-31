import React from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      {/* =====================================================
          PRIVACY HERO
      ===================================================== */}

      <section className="privacy-hero">
        <div className="container">
          <div className="privacy-hero-content">
            <h1>
              Privacy <span>Policy</span>
            </h1>

            <p>
              Your privacy matters to us. Learn how Pinaka Delivery Hub
              collects, uses, protects, and manages your information.
            </p>

            <div className="privacy-updated">
              <i className="bi bi-calendar3"></i>
              Last updated: August 2026
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRIVACY CONTENT
      ===================================================== */}

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-layout">
            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="privacy-sidebar">
              <h3>Privacy Policy</h3>

              <a href="#introduction">Introduction</a>

              <a href="#information">Information We Collect</a>

              <a href="#usage">How We Use Information</a>

              <a href="#sharing">Information Sharing</a>

              <a href="#security">Data Security</a>

              <a href="#cookies">Cookies & Tracking</a>

              <a href="#retention">Data Retention</a>

              <a href="#rights">Your Rights</a>

              <a href="#third-party">Third-Party Services</a>

              <a href="#changes">Policy Changes</a>
            </aside>

            {/* =================================================
                POLICY CONTENT
            ================================================= */}

            <article className="privacy-article">
              {/* Introduction */}

              <section id="introduction">
                <h2>Introduction</h2>

                <p>
                  Pinaka Delivery Hub ("PDH", "we", "us", or "our") respects
                  your privacy and is committed to protecting the information
                  you provide when using our platform, website, and services.
                </p>

                <p>
                  This Privacy Policy explains what information we may collect,
                  how we use it, how we protect it, and the choices available to
                  you.
                </p>
              </section>

              {/* Information */}

              <section id="information">
                <h2>Information We Collect</h2>

                <p>
                  Depending on how you use Pinaka Delivery Hub, we may collect
                  information such as:
                </p>

                <ul>
                  <li>Name and contact information</li>

                  <li>Restaurant and business information</li>

                  <li>Account login and profile information</li>

                  <li>Order and operational information</li>

                  <li>Information related to connected delivery platforms</li>

                  <li>Device and technical information</li>

                  <li>
                    Information you provide when contacting our support team
                  </li>
                </ul>
              </section>

              {/* Usage */}

              <section id="usage">
                <h2>How We Use Your Information</h2>

                <p>
                  We may use collected information to provide, operate,
                  maintain, and improve Pinaka Delivery Hub.
                </p>

                <p>This may include:</p>

                <ul>
                  <li>Providing and managing your account</li>

                  <li>Processing and managing orders</li>

                  <li>Supporting integrations</li>

                  <li>Providing customer and technical support</li>

                  <li>Improving platform functionality</li>

                  <li>Communicating important service updates</li>

                  <li>Protecting our platform against unauthorized activity</li>
                </ul>
              </section>

              {/* Sharing */}

              <section id="sharing">
                <h2>Information Sharing</h2>

                <p>
                  We do not sell your personal information. We may share
                  information when necessary to provide our services, operate
                  the platform, comply with applicable legal requirements, or
                  protect our rights.
                </p>

                <p>
                  Where integrations with third-party delivery platforms or
                  service providers are enabled, information may be exchanged as
                  necessary to provide the requested functionality.
                </p>
              </section>

              {/* Security */}

              <section id="security">
                <h2>Data Security</h2>

                <p>
                  We take reasonable technical and organizational measures to
                  help protect information from unauthorized access, alteration,
                  disclosure, or destruction.
                </p>

                <p>
                  However, no internet-based service can guarantee absolute
                  security. Users should also take appropriate steps to protect
                  their account credentials and devices.
                </p>
              </section>

              {/* Cookies */}

              <section id="cookies">
                <h2>Cookies & Tracking</h2>

                <p>
                  Our website or services may use cookies or similar
                  technologies to support functionality, understand usage,
                  improve performance, and provide a better user experience.
                </p>

                <p>
                  You may be able to control cookies through your browser
                  settings. Disabling certain cookies may affect some website
                  features.
                </p>
              </section>

              {/* Retention */}

              <section id="retention">
                <h2>Data Retention</h2>

                <p>
                  We retain information for as long as reasonably necessary to
                  provide our services, maintain business and operational
                  records, comply with legal obligations, resolve disputes, and
                  enforce applicable agreements.
                </p>
              </section>

              {/* Rights */}

              <section id="rights">
                <h2>Your Rights</h2>

                <p>
                  Depending on applicable law, you may have rights regarding
                  your personal information, including rights to request access,
                  correction, deletion, or information about how your data is
                  processed.
                </p>

                <p>
                  To make a privacy-related request, please contact our support
                  team using the contact information provided below.
                </p>
              </section>

              {/* Third Party */}

              <section id="third-party">
                <h2>Third-Party Services</h2>

                <p>
                  Pinaka Delivery Hub may integrate with third-party platforms
                  and services to provide functionality requested by businesses
                  using our platform.
                </p>

                <p>
                  Third-party services may have their own privacy policies and
                  terms. We recommend reviewing the privacy practices of
                  services you connect to PDH.
                </p>
              </section>

              {/* Changes */}

              <section id="changes">
                <h2>Changes to This Privacy Policy</h2>

                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes to our services, practices, or applicable
                  requirements.
                </p>

                <p>
                  When changes are made, the updated policy will be published on
                  this page along with the revised "Last updated" date.
                </p>
              </section>

              {/* Bottom navigation */}

              <div className="privacy-bottom-nav">
                <Link to="/contact">
                  <i className="bi bi-arrow-left"></i>
                  Contact Us
                </Link>

                <Link to="/help-center">
                  Help Center
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
