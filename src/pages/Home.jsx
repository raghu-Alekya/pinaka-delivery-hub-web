import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              All Orders. One Hub. More Growth.
            </span>

            <h1>
              Manage All Your
              <br />
              Restaurant Orders
              <br />
              <span>in One Place</span>
            </h1>

            <p className="hero-description">
              Pinaka Delivery Hub helps you manage orders from all major
              platforms, streamline operations and grow your restaurant business
              effortlessly.
            </p>

            <div className="hero-features">
              <div className="hero-feature">
                <i className="bi bi-bag-check"></i>
                <div>
                  <strong>All Platforms</strong>One Dashboard
                </div>
              </div>
              <div className="hero-feature">
                <i className="bi bi-lightning-charge"></i>
                <div>
                  <strong>Real-time</strong>Order Sync
                </div>
              </div>
              <div className="hero-feature">
                <i className="bi bi-menu-button-wide"></i>
                <div>
                  <strong>Smart Menu</strong>Management
                </div>
              </div>
              <div className="hero-feature">
                <i className="bi bi-shield-check"></i>
                <div>
                  <strong>Powerful</strong>Analytics
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/register" className="btn-primary-custom">
                Get Started <i className="bi bi-arrow-right ms-2"></i>
              </Link>
              <Link to="/contact" className="btn-demo">
                Book a Demo <i className="bi bi-play-circle ms-2"></i>
              </Link>
            </div>

            <div className="free-note">
              <i className="bi bi-check-circle-fill"></i>
              No setup fees. No hidden charges.
            </div>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-title">
            <span>Today&apos;s Overview</span>
            <select>
              <option>Today</option>
            </select>
          </div>

          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-icon">
                <i className="bi bi-bag"></i>
              </div>
              <div>
                <strong>128</strong>
                <span>Total Orders</span>
              </div>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="bi bi-currency-rupee"></i>
              </div>
              <div>
                <strong>₹24,680</strong>
                <span>Total Earnings</span>
              </div>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="bi bi-people"></i>
              </div>
              <div>
                <strong>86</strong>
                <span>Happy Customers</span>
              </div>
            </div>
            <div className="overview-item">
              <div className="overview-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div>
                <strong>25%</strong>
                <span>Repeat Orders</span>
              </div>
            </div>
          </div>

          <div className="recent-title">
            <span>Recent Orders</span>
            <a href="#orders">View all</a>
          </div>

          <div className="order-row">
            <div className="order-logo">Z</div>
            <strong>Order #1256</strong>
            <span>Zomato</span>
            <span>₹620</span>
          </div>
          <div className="order-row">
            <div className="order-logo swiggy-logo">S</div>
            <strong>Order #1255</strong>
            <span>Swiggy</span>
            <span>₹340</span>
          </div>
          <div className="order-row">
            <div className="order-logo dash-logo">D</div>
            <strong>Order #1254</strong>
            <span>DoorDash</span>
            <span>₹480</span>
          </div>
        </div>

        <div className="platform-float platform-one">
          <img src="/images/zomato.jpg" alt="Zomato" />
        </div>

        <div className="platform-float platform-two">
          <img src="/images/swiggy.jpg" alt="Swiggy" />
        </div>

        <div className="platform-float platform-three">
          <img src="/images/doordash.png" alt="DoorDash" />
        </div>

        <div className="hero-note">
          All orders from
          <strong> Zomato, Swiggy,</strong>
          DoorDash & more in one dashboard.
        </div>
      </section>

      <section className="platform-section">
        <div className="container">
          <h2 className="section-heading">Connect. Sync. Simplify.</h2>
          <p className="section-subtitle">
            No more switching between platforms. Get all your orders in one
            place.
          </p>

          <div className="platform-grid">
            <div className="platform-card">
              <div className="platform-name zomato">zomato</div>
              <p>
                Manage Zomato orders
                <br />
                seamlessly.
              </p>
            </div>
            <div className="platform-card">
              <div className="platform-name swiggy">
                <i className="bi bi-lightning-fill"></i> SWIGGY
              </div>
              <p>
                Receive and manage
                <br />
                Swiggy orders in real-time.
              </p>
            </div>
            <div className="platform-card">
              <div className="platform-name doordash">
                <i className="bi bi-truck"></i> DOORDASH
              </div>
              <p>
                Sync DoorDash orders
                <br />
                effortlessly.
              </p>
            </div>
            <div className="platform-card">
              <div className="platform-name ubereats">
                Uber<span>Eats</span>
              </div>
              <p>Coming Soon</p>
            </div>
            <div className="platform-card">
              <div className="platform-name magicpin">magicpin</div>
              <p>Coming Soon</p>
            </div>
            <div className="platform-card">
              <div className="more-icon">•••</div>
              <p>
                More
                <br />
                Platforms
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="order-hub-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="section-tag">ONE POWERFUL HUB</span>

              <h2 className="order-hub-title">
                All Your Restaurant Orders, <span>One Powerful Hub</span>
              </h2>

              <p className="order-hub-description">
                Manage orders from Zomato, Swiggy, DoorDash, Uber Eats and other
                platforms from one centralized dashboard. Receive orders in real
                time, accept them instantly, and keep your restaurant operations
                running smoothly without switching between multiple apps.
              </p>

              <div className="hub-benefits">
                <div className="hub-benefit">
                  <div className="benefit-icon">
                    <i className="bi bi-lightning-charge"></i>
                  </div>
                  <div>
                    <h5>Real-Time Order Notifications</h5>
                    <p>Get new orders instantly as they arrive.</p>
                  </div>
                </div>

                <div className="hub-benefit">
                  <div className="benefit-icon">
                    <i className="bi bi-check-circle"></i>
                  </div>
                  <div>
                    <h5>Faster Order Acceptance</h5>
                    <p>Accept and process orders without delays.</p>
                  </div>
                </div>

                <div className="hub-benefit">
                  <div className="benefit-icon">
                    <i className="bi bi-arrow-repeat"></i>
                  </div>
                  <div>
                    <h5>No Platform Switching</h5>
                    <p>Manage everything from one powerful hub.</p>
                  </div>
                </div>
              </div>

              <Link to="/register" className="hub-btn">
                Create Dashboard Account
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="order-hub-image">
                <img
                  src="/images/order-management.png"
                  alt="Restaurant Order Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h1 className="section-heading text-center">
            Everything You Need to Run Your Restaurant Better
          </h1>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-display"></i>
              </div>
              <h6>Centralized Dashboard</h6>
              <p>View and manage all orders in one place.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-book"></i>
              </div>
              <h6>Menu Management</h6>
              <p>Update menu, prices and availability across platforms.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <h6>Order Management</h6>
              <p>Accept, track & manage orders efficiently.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <h6>Analytics & Reports</h6>
              <p>Track sales, performance and customer insights.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h6>Customer Management</h6>
              <p>Build customer loyalty and increase repeat orders.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <i className="bi bi-box-seam"></i>
              </div>
              <h6>Inventory Management</h6>
              <p>Keep track of stock and avoid overselling.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="analytics-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="analytics-image">
                <img
                  src="/images/smart-analytics.png"
                  alt="Pinaka Smart Analytics Dashboard"
                />
              </div>
            </div>

            <div className="col-lg-5">
              <span className="analytics-tag">SMART ANALYTICS</span>

              <h2 className="analytics-title">
                Turn Your Restaurant Data Into <span>Better Decisions</span>
              </h2>

              <p className="analytics-description">
                Get a clear view of your restaurant&apos;s performance with
                powerful analytics and real-time insights. Track sales, orders,
                top-performing items, customer trends, and platform performance
                from one simple dashboard.
              </p>

              <div className="analytics-benefit">
                <div className="analytics-icon analytics-icon-orange">
                  <i className="bi bi-bar-chart-line"></i>
                </div>
                <div>
                  <h5>Track Sales & Revenue</h5>
                  <p>
                    Monitor daily, weekly, and monthly restaurant performance.
                  </p>
                </div>
              </div>

              <div className="analytics-benefit">
                <div className="analytics-icon analytics-icon-green">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <div>
                  <h5>Understand What&apos;s Working</h5>
                  <p>
                    Identify your best-selling products and highest-performing
                    platforms.
                  </p>
                </div>
              </div>

              <div className="analytics-benefit">
                <div className="analytics-icon analytics-icon-blue">
                  <i className="bi bi-people"></i>
                </div>
                <div>
                  <h5>Know Your Customers</h5>
                  <p>
                    Understand customer behavior and discover opportunities to
                    increase repeat orders.
                  </p>
                </div>
              </div>

              <Link to="/features" className="analytics-btn">
                Explore Analytics
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="how-section">
        <div className="container">
          <h2 className="section-heading text-center">
            How Pinaka Delivery Hub Works
          </h2>

          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>
              <h6>Connect Your Platforms</h6>
              <p>
                Link your restaurant with Zomato, Swiggy, DoorDash and more.
              </p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-icon">
                <i className="bi bi-inbox"></i>
              </div>
              <h6>Receive All Orders</h6>
              <p>All orders come to Pinaka Delivery Hub in real-time.</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-icon">
                <i className="bi bi-check-circle"></i>
              </div>
              <h6>Manage Easily</h6>
              <p>Accept, prepare and track orders from one dashboard.</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div className="step-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h6>Grow Your Business</h6>
              <p>Serve better, get more orders and increase profits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-box">
            <div className="stat">
              <div className="stat-icon">
                <i className="bi bi-lock"></i>
              </div>
              <div>
                <h3>10K+</h3>
                <p>Restaurants Trust Us</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <i className="bi bi-receipt"></i>
              </div>
              <div>
                <h3>2M+</h3>
                <p>Orders Managed</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <i className="bi bi-people"></i>
              </div>
              <div>
                <h3>1.5M+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
            <div className="stat">
              <div className="stat-icon">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <div>
                <h3>30%</h3>
                <p>Average Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <div className="store-icon">
                <i className="bi bi-shop-window"></i>
              </div>
              <div className="cta-text">
                <h3>Ready to Grow Your Restaurant Business?</h3>
                <p>
                  Join thousands of happy restaurants using Pinaka Delivery Hub
                  and manage all orders in one place.
                </p>
              </div>
            </div>

            <div className="cta-action">
              <div className="cta-buttons">
                <Link to="/register" className="btn-cta">
                  Create Your Account <i className="bi bi-arrow-right ms-2"></i>
                </Link>
                <Link to="/contact" className="btn-cta-outline">
                  Book a Demo <i className="bi bi-calendar ms-2"></i>
                </Link>
              </div>
              <div className="cta-notes">
                <span>
                  <i className="bi bi-check-circle-fill"></i> Free to get
                  started
                </span>
                <span>
                  <i className="bi bi-check-circle-fill"></i> No credit card
                  required
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
