import React from "react";
import { Link } from "react-router-dom";

export default function TermsConditions() {
  return (
    <main className="terms-page">
      {/* =====================================================
          TERMS HERO
      ===================================================== */}

      <section className="terms-hero">
        <div className="container">
          <div className="terms-hero-content">
            <span className="terms-eyebrow">PDH LEGAL</span>

            <h1>
              Terms & <span>Conditions</span>
            </h1>

            <p>
              Please read these terms carefully before using Pinaka Delivery Hub
              and its services.
            </p>

            <div className="terms-updated">
              <i className="bi bi-calendar3"></i>
              Last updated: August 2026
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TERMS CONTENT
      ===================================================== */}

      <section className="terms-content">
        <div className="container">
          <div className="terms-layout">
            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside className="terms-sidebar">
              <h3>Terms & Conditions</h3>

              <a href="#introduction">Introduction</a>

              <a href="#eligibility">Eligibility</a>

              <a href="#account">Account Registration</a>

              <a href="#services">Use of Services</a>

              <a href="#integrations">Third-Party Integrations</a>

              <a href="#payments">Payments & Billing</a>

              <a href="#responsibilities">User Responsibilities</a>

              <a href="#intellectual-property">Intellectual Property</a>

              <a href="#availability">Service Availability</a>

              <a href="#termination">Termination</a>

              <a href="#liability">Limitation of Liability</a>

              <a href="#changes">Changes to Terms</a>

              <a href="#contact">Contact Us</a>
            </aside>

            {/* =================================================
                TERMS ARTICLE
            ================================================= */}

            <article className="terms-article">
              {/* 01 */}

              <section id="introduction">
                <span className="terms-section-number">01</span>

                <h2>Introduction</h2>

                <p>
                  These Terms & Conditions govern your access to and use of the
                  Pinaka Delivery Hub ("PDH") website, platform, and services.
                </p>

                <p>
                  By accessing or using PDH, you acknowledge that you have read,
                  understood, and agree to be bound by these terms.
                </p>
              </section>

              {/* 02 */}

              <section id="eligibility">
                <span className="terms-section-number">02</span>

                <h2>Eligibility</h2>

                <p>
                  You must have the legal capacity to enter into an agreement
                  under applicable law to use the PDH services.
                </p>

                <p>
                  If you are using PDH on behalf of a business or organization,
                  you represent that you have the authority to accept these
                  terms on its behalf.
                </p>
              </section>

              {/* 03 */}

              <section id="account">
                <span className="terms-section-number">03</span>

                <h2>Account Registration</h2>

                <p>
                  Certain PDH features may require you to create an account and
                  provide accurate business and contact information.
                </p>

                <ul>
                  <li>
                    You are responsible for providing accurate information.
                  </li>

                  <li>
                    You are responsible for maintaining the confidentiality of
                    your login credentials.
                  </li>

                  <li>
                    You are responsible for activity performed through your
                    account.
                  </li>

                  <li>
                    You should notify PDH promptly if you suspect unauthorized
                    access to your account.
                  </li>
                </ul>
              </section>

              {/* 04 */}

              <section id="services">
                <span className="terms-section-number">04</span>

                <h2>Use of Services</h2>

                <p>
                  PDH provides tools and services intended to help businesses
                  manage restaurant operations, orders, menus, inventory,
                  integrations, and related workflows.
                </p>

                <p>
                  You agree to use the services only for lawful business
                  purposes and in accordance with these terms.
                </p>
              </section>

              {/* 05 */}

              <section id="integrations">
                <span className="terms-section-number">05</span>

                <h2>Third-Party Integrations</h2>

                <p>
                  PDH may provide integrations with third-party platforms and
                  services.
                </p>

                <p>
                  Your use of those third-party services may also be subject to
                  their own terms, conditions, and policies.
                </p>

                <p>
                  PDH is not responsible for changes, interruptions, or policies
                  of third-party services that are outside our control.
                </p>
              </section>

              {/* 06 */}

              <section id="payments">
                <span className="terms-section-number">06</span>

                <h2>Payments & Billing</h2>

                <p>
                  Where paid services or subscription plans are offered,
                  applicable pricing, billing periods, and payment terms will be
                  presented to you before purchase or activation.
                </p>

                <p>
                  You agree to provide accurate billing information and to pay
                  applicable charges when they become due.
                </p>
              </section>

              {/* 07 */}

              <section id="responsibilities">
                <span className="terms-section-number">07</span>

                <h2>User Responsibilities</h2>

                <p>
                  When using PDH, you agree not to misuse, disrupt, or attempt
                  to gain unauthorized access to the platform.
                </p>

                <ul>
                  <li>Do not use the platform for unlawful activities.</li>

                  <li>
                    Do not attempt to access another user's account without
                    authorization.
                  </li>

                  <li>
                    Do not interfere with the operation or security of the
                    platform.
                  </li>

                  <li>
                    Do not upload or transmit malicious software or harmful
                    content.
                  </li>

                  <li>
                    Do not misuse integrations or connected third-party
                    services.
                  </li>
                </ul>
              </section>

              {/* 08 */}

              <section id="intellectual-property">
                <span className="terms-section-number">08</span>

                <h2>Intellectual Property</h2>

                <p>
                  Unless otherwise stated, the PDH website, platform, software,
                  branding, designs, content, and related materials are owned by
                  or licensed to Pinaka Delivery Hub.
                </p>

                <p>
                  You may not copy, reproduce, modify, distribute, reverse
                  engineer, or otherwise exploit PDH materials except as
                  permitted by applicable law or with our written permission.
                </p>
              </section>

              {/* 09 */}

              <section id="availability">
                <span className="terms-section-number">09</span>

                <h2>Service Availability</h2>

                <p>
                  We aim to keep PDH available and reliable, but continuous or
                  uninterrupted availability cannot be guaranteed.
                </p>

                <p>
                  Services may occasionally be unavailable due to maintenance,
                  upgrades, technical issues, third-party service interruptions,
                  or events beyond our reasonable control.
                </p>
              </section>

              {/* 10 */}

              <section id="termination">
                <span className="terms-section-number">10</span>

                <h2>Termination</h2>

                <p>
                  You may stop using PDH at any time, subject to any applicable
                  contractual or payment obligations.
                </p>

                <p>
                  We may suspend or terminate access where reasonably necessary,
                  including in cases of violation of these terms, misuse of the
                  platform, security concerns, or legal requirements.
                </p>
              </section>

              {/* 11 */}

              <section id="liability">
                <span className="terms-section-number">11</span>

                <h2>Limitation of Liability</h2>

                <p>
                  To the extent permitted by applicable law, PDH will not be
                  responsible for indirect, incidental, special, consequential,
                  or business-related losses arising from the use of the
                  services.
                </p>

                <p>
                  Nothing in these terms is intended to exclude or limit
                  liability that cannot legally be excluded or limited.
                </p>
              </section>

              {/* 12 */}

              <section id="changes">
                <span className="terms-section-number">12</span>

                <h2>Changes to These Terms</h2>

                <p>
                  We may update these Terms & Conditions from time to time to
                  reflect changes to our services, business practices, or
                  applicable requirements.
                </p>

                <p>
                  Updated terms will be published on this page together with a
                  revised "Last updated" date.
                </p>
              </section>

              {/* Bottom navigation */}

              <div className="terms-bottom-nav">
                <Link to="/privacy-policy">
                  <i className="bi bi-arrow-left"></i>
                  Privacy Policy
                </Link>

                <Link to="/contact">
                  Contact Us
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
