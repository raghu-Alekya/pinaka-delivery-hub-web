import { Link } from "react-router-dom";

export default function About() {
    return (
        <main className="about-page">

            {/* =================================================
                HERO SECTION
            ================================================= */}
            <section className="about-hero">
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-6">
                            <div className="about-hero-content">

                                <span className="about-eyebrow">
                                    ABOUT PINAKA DELIVERY HUB
                                </span>

                                <h1>
                                    Simplifying Restaurant
                                    <span> Operations</span>
                                </h1>

                                <p>
                                    Pinaka Delivery Hub brings your restaurant
                                    orders, menus, integrations and operations
                                    together in one powerful platform.
                                </p>

                                <div className="about-hero-buttons">
                                    <Link
                                        to="/register"
                                        className="about-primary-btn"
                                    >
                                        Get Started
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="about-secondary-btn"
                                    >
                                        Contact Us
                                    </Link>
                                </div>

                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-lg-6">
                            <div className="about-hero-visual">

                                <div className="about-orange-shape"></div>

                                <img
                                    src="/images/about-restaurant.png"
                                    alt="Restaurant operations"
                                    className="about-main-image"
                                />

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* =================================================
                INTRODUCTION
            ================================================= */}
            <section className="about-intro">
                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* IMAGE */}
                        <div className="col-lg-6">
                            <div className="about-intro-image-wrapper">

                                <img
                                    src="/images/about-dashboard.png"
                                    alt="Pinaka Delivery Hub dashboard"
                                    className="about-intro-image"
                                />

                            </div>
                        </div>

                        {/* CONTENT */}
                        <div className="col-lg-6">

                            <span className="about-section-label">
                                WHO WE ARE
                            </span>

                            <h2>
                                One Powerful Hub for
                                <span> Your Restaurant</span>
                            </h2>

                            <p>
                                Managing orders across different platforms
                                shouldn't be complicated. Pinaka Delivery Hub
                                is designed to help restaurants bring their
                                digital ordering operations together in one
                                simple and easy-to-manage platform.
                            </p>

                            <p>
                                From receiving online orders to managing menus,
                                integrations and restaurant operations, PDH
                                gives your team a centralized workspace to
                                work smarter and serve customers better.
                            </p>

                            <div className="about-check-list">

                                <div className="about-check-item">
                                    <span>
                                        <i className="bi bi-check"></i>
                                    </span>
                                    <p>Manage orders from one place</p>
                                </div>

                                <div className="about-check-item">
                                    <span>
                                        <i className="bi bi-check"></i>
                                    </span>
                                    <p>Connect multiple ordering platforms</p>
                                </div>

                                <div className="about-check-item">
                                    <span>
                                        <i className="bi bi-check"></i>
                                    </span>
                                    <p>Keep restaurant operations organized</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
                MISSION
            ================================================= */}
            <section className="about-mission">
                <div className="container">

                    <div className="about-section-heading text-center">

                        <span className="about-section-label">
                            OUR MISSION
                        </span>

                        <h2>
                            Helping Restaurants
                            <span> Work Smarter</span>
                        </h2>

                        <p>
                            Our goal is to simplify the way restaurants manage
                            their digital operations and give teams more time
                            to focus on what matters most — their customers.
                        </p>

                    </div>


                    <div className="row g-4 mt-4">

                        {/* CARD 1 */}
                        <div className="col-md-4">
                            <div className="about-feature-card">

                                <div className="about-feature-icon">
                                    <i className="bi bi-layers"></i>
                                </div>

                                <h3>
                                    One Centralized Platform
                                </h3>

                                <p>
                                    Bring your restaurant's online ordering
                                    operations together in one easy-to-manage
                                    workspace.
                                </p>

                            </div>
                        </div>


                        {/* CARD 2 */}
                        <div className="col-md-4">
                            <div className="about-feature-card">

                                <div className="about-feature-icon">
                                    <i className="bi bi-lightning-charge"></i>
                                </div>

                                <h3>
                                    Faster Operations
                                </h3>

                                <p>
                                    Reduce manual work and help your restaurant
                                    team handle orders more efficiently.
                                </p>

                            </div>
                        </div>


                        {/* CARD 3 */}
                        <div className="col-md-4">
                            <div className="about-feature-card">

                                <div className="about-feature-icon">
                                    <i className="bi bi-bar-chart"></i>
                                </div>

                                <h3>
                                    Smarter Decisions
                                </h3>

                                <p>
                                    Get better visibility into your restaurant
                                    operations and make informed decisions.
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
                WHY PINAKA
            ================================================= */}
            <section className="about-why">
                <div className="container">

                    <div className="row align-items-center g-5">

                        {/* CONTENT */}
                        <div className="col-lg-6">

                            <span className="about-section-label">
                                WHY PINAKA DELIVERY HUB
                            </span>

                            <h2>
                                Everything Your Restaurant
                                <span> Needs in One Place</span>
                            </h2>

                            <p>
                                Designed for modern restaurant operations,
                                Pinaka Delivery Hub gives your team the tools
                                needed to manage online orders and everyday
                                workflows efficiently.
                            </p>


                            <div className="about-benefit">

                                <div className="about-benefit-icon">
                                    <i className="bi bi-cart-check"></i>
                                </div>

                                <div>
                                    <h4>Centralized Order Management</h4>
                                    <p>
                                        Keep your restaurant orders organized
                                        and accessible from one place.
                                    </p>
                                </div>

                            </div>


                            <div className="about-benefit">

                                <div className="about-benefit-icon">
                                    <i className="bi bi-grid"></i>
                                </div>

                                <div>
                                    <h4>Easy Menu Management</h4>
                                    <p>
                                        Manage your restaurant menu and keep
                                        information consistent across platforms.
                                    </p>
                                </div>

                            </div>


                            <div className="about-benefit">

                                <div className="about-benefit-icon">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>

                                <div>
                                    <h4>Better Business Visibility</h4>
                                    <p>
                                        Understand your restaurant operations
                                        and identify opportunities to improve.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* IMAGE */}
                        <div className="col-lg-6">

                            <div className="about-why-image-wrapper">

                                <img
                                    src="/images/restaurant-analytics.png"
                                    alt="Restaurant analytics"
                                    className="about-why-image"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
                CTA
            ================================================= */}
            <section className="about-cta">
                <div className="container">

                    <div className="about-cta-box">

                        <div>
                            <span>
                                READY TO GET STARTED?
                            </span>

                            <h2>
                                Manage Your Restaurant
                                <br />
                                <strong>Smarter with PDH</strong>
                            </h2>

                            <p>
                                Bring your restaurant operations together
                                with Pinaka Delivery Hub.
                            </p>
                        </div>

                        <Link
                            to="/register"
                            className="about-cta-button"
                        >
                            Get Started
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}