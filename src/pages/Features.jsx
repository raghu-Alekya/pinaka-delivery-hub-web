import { Link } from "react-router-dom";

const featureCards = [
  {
    number: "1",
    title: "Order Management",
    description:
      "Receive and manage orders from all connected platforms in real-time.",
    icon: "bi-receipt",
    theme: "orange",
    points: [
      "Live order updates",
      "Accept / Reject orders",
      "Track order status",
      "Order history & details",
    ],
    type: "orders",
  },
  {
    number: "2",
    title: "Menu Management",
    description:
      "Create, update and manage your menu across all platforms in one place.",
    icon: "bi-journal-text",
    theme: "green",
    points: [
      "Add / edit menu items",
      "Manage categories",
      "Update prices",
      "Control availability",
    ],
    type: "menu",
  },
  {
    number: "3",
    title: "Inventory Management",
    description: "Track stock levels and get alerts before you run out.",
    icon: "bi-box-seam",
    theme: "purple",
    points: [
      "Real-time stock tracking",
      "Low stock alerts",
      "Manage ingredients",
      "Prevent out-of-stock orders",
    ],
    type: "inventory",
  },
  {
    number: "4",
    title: "Store Management",
    description:
      "Control your restaurant operations and store settings easily.",
    icon: "bi-shop",
    theme: "yellow",
    points: [
      "Store availability",
      "Preparation time",
      "Sales tax settings",
      "Restaurant information",
    ],
    type: "store",
  },
  {
    number: "5",
    title: "Integrations",
    description:
      "Connect with all major food delivery platforms and manage from one hub.",
    icon: "bi-link-45deg",
    theme: "blue",
    points: ["Zomato", "Swiggy", "DoorDash", "More platforms coming soon"],
    type: "integrations",
  },
  {
    number: "6",
    title: "Analytics & Reports",
    description: "Get real-time insights and make data-driven decisions.",
    icon: "bi-bar-chart-line",
    theme: "pink",
    points: [
      "Sales reports",
      "Order analytics",
      "Revenue insights",
      "Performance tracking",
    ],
    type: "analytics",
  },
  {
    number: "7",
    title: "Customer Management",
    description: "Understand your customers and build long-term relationships.",
    icon: "bi-people",
    theme: "teal",
    points: [
      "Customer list",
      "Order history",
      "Repeat customers",
      "Customer insights",
    ],
    type: "customers",
  },
  {
    number: "8",
    title: "Notifications",
    description: "Stay updated with real-time notifications and alerts.",
    icon: "bi-bell",
    theme: "indigo",
    points: [
      "New order alerts",
      "Low stock alerts",
      "Daily summary",
      "Important updates",
    ],
    type: "notifications",
  },
];

function DashboardPreview() {
  return (
    <div className="features-dashboard">
      <div className="dashboard-sidebar">
        <div className="dashboard-brand">
          <span className="dashboard-brand-icon">
            <i className="bi bi-lightning-fill" />
          </span>

          <div>
            <strong>PINAKA</strong>
            <small>DELIVERY HUB</small>
          </div>
        </div>

        <div className="dashboard-menu">
          <div className="dashboard-menu-item active">
            <i className="bi bi-grid" />
            <span>Dashboard</span>
          </div>

          <div className="dashboard-menu-item">
            <i className="bi bi-receipt" />
            <span>Orders</span>
          </div>

          <div className="dashboard-menu-item">
            <i className="bi bi-journal-text" />
            <span>Menu</span>
          </div>

          <div className="dashboard-menu-item">
            <i className="bi bi-box-seam" />
            <span>Inventory</span>
          </div>

          <div className="dashboard-menu-item">
            <i className="bi bi-shop" />
            <span>Store</span>
          </div>

          <div className="dashboard-menu-item">
            <i className="bi bi-bar-chart" />
            <span>Reports</span>
          </div>

          <div className="dashboard-menu-item">
            <i className="bi bi-gear" />
            <span>Settings</span>
          </div>
        </div>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-header">
          <strong>Dashboard</strong>

          <select defaultValue="Today">
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>

        <div className="dashboard-stats">
          <div className="dashboard-stat">
            <span>Total Orders</span>
            <strong>128</strong>
            <small className="positive">
              ↑ 10% <em>vs yesterday</em>
            </small>
          </div>

          <div className="dashboard-stat">
            <span>Total Revenue</span>
            <strong>₹24,680</strong>
            <small className="positive">
              ↑ 24% <em>vs yesterday</em>
            </small>
          </div>

          <div className="dashboard-stat">
            <span>Active Orders</span>
            <strong>36</strong>
            <small className="live">● Live</small>
          </div>
        </div>

        <div className="repeat-orders">
          <div>
            <span>Repeat Orders</span>
            <strong>25%</strong>
          </div>

          <small className="positive">
            ↑ 5% <em>vs yesterday</em>
          </small>
        </div>

        <div className="sales-card">
          <div className="sales-card-header">
            <strong>Sales Overview</strong>

            <select defaultValue="This Week">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="chart">
            <div className="chart-grid">
              <span>40K</span>
              <span>30K</span>
              <span>20K</span>
              <span>10K</span>
              <span>0</span>
            </div>

            <svg
              className="sales-line"
              viewBox="0 0 620 180"
              preserveAspectRatio="none"
              aria-label="Sales overview chart"
            >
              <polyline
                points="10,145 70,105 120,105 175,72 220,112 270,85 320,45 370,80 420,70 470,112 520,125 560,80 610,110"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="chart-labels">
              <span>12 AM</span>
              <span>04 AM</span>
              <span>08 AM</span>
              <span>12 PM</span>
              <span>04 PM</span>
              <span>08 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrdersPreview() {
  return (
    <div className="mini-preview orders-preview">
      <div className="mini-preview-title">Incoming Orders</div>

      <div className="order-preview-row">
        <span className="platform-dot zomato-dot">Z</span>
        <strong>Zomato</strong>
        <span>#1256</span>
        <span>₹620</span>
        <small>2m ago</small>
      </div>

      <div className="order-preview-row">
        <span className="platform-dot swiggy-dot">S</span>
        <strong>Swiggy</strong>
        <span>#1255</span>
        <span>₹340</span>
        <small>5m ago</small>
      </div>

      <div className="order-preview-row">
        <span className="platform-dot doordash-dot">D</span>
        <strong>DoorDash</strong>
        <span>#1254</span>
        <span>₹480</span>
        <small>8m ago</small>
      </div>

      <button type="button">View All Orders</button>
    </div>
  );
}

function MenuPreview() {
  return (
    <div className="mini-preview">
      <div className="mini-preview-title">Menu Items</div>

      <div className="menu-preview-row">
        <span className="food-thumb">🍕</span>
        <strong>Margherita Pizza</strong>
        <span>₹199</span>
        <span className="switch active" />
      </div>

      <div className="menu-preview-row">
        <span className="food-thumb">🍔</span>
        <strong>Veg Burger</strong>
        <span>₹149</span>
        <span className="switch active" />
      </div>

      <div className="menu-preview-row">
        <span className="food-thumb">☕</span>
        <strong>Cold Coffee</strong>
        <span>₹129</span>
        <span className="switch" />
      </div>

      <button type="button">Manage Menu</button>
    </div>
  );
}

function InventoryPreview() {
  return (
    <div className="mini-preview">
      <div className="mini-preview-title">Inventory</div>

      <div className="inventory-row">
        <span>Chicken</span>
        <span>12 kg</span>
        <i className="stock-green" />
      </div>

      <div className="inventory-row">
        <span>Cheese</span>
        <span>4 kg</span>
        <i className="stock-green" />
      </div>

      <div className="inventory-row">
        <span>Burger Buns</span>
        <span>8 pcs</span>
        <i className="stock-yellow" />
      </div>

      <div className="inventory-row">
        <span>Tomatoes</span>
        <span>2 kg</span>
        <i className="stock-red" />
      </div>

      <button type="button">View Inventory</button>
    </div>
  );
}

function StorePreview() {
  return (
    <div className="mini-preview store-preview">
      <div className="store-setting">
        <span>Store is Open</span>
        <span className="switch active" />
      </div>

      <div className="store-setting">
        <span>Preparation Time</span>
        <strong>25 min</strong>
      </div>

      <div className="store-setting">
        <span>Sales Tax</span>
        <strong>5%</strong>
      </div>

      <div className="store-setting">
        <span>Service Charge</span>
        <strong>2%</strong>
      </div>

      <button type="button">Manage Store</button>
    </div>
  );
}

function IntegrationPreview() {
  return (
    <div className="integration-preview">
      <div className="integration-platforms">
        <strong className="zomato-text">zomato</strong>
        <strong className="swiggy-text">⚡ SWIGGY</strong>
        <strong className="doordash-text">➤ DOORDASH</strong>
      </div>

      <button type="button">Manage Integrations</button>
    </div>
  );
}

function AnalyticsPreview() {
  return (
    <div className="analytics-preview">
      <div>
        <span>Total Revenue</span>
        <strong>₹24,680</strong>
        <small>↑ 24%</small>
      </div>

      <div className="bar-chart">
        <span style={{ height: "30%" }} />
        <span style={{ height: "45%" }} />
        <span style={{ height: "35%" }} />
        <span style={{ height: "60%" }} />
        <span style={{ height: "52%" }} />
        <span style={{ height: "78%" }} />
        <span style={{ height: "65%" }} />
        <span style={{ height: "88%" }} />
        <span style={{ height: "70%" }} />
      </div>

      <button type="button">View Reports</button>
    </div>
  );
}

function CustomerPreview() {
  return (
    <div className="customer-preview">
      <div className="mini-preview-title">Top Customers</div>

      <div className="customer-row">
        <span className="avatar">R</span>
        <strong>Rahul Sharma</strong>
        <span>15 Orders</span>
      </div>

      <div className="customer-row">
        <span className="avatar">P</span>
        <strong>Priya Verma</strong>
        <span>12 Orders</span>
      </div>

      <div className="customer-row">
        <span className="avatar">A</span>
        <strong>Arjun Mehta</strong>
        <span>10 Orders</span>
      </div>

      <button type="button">View Customers</button>
    </div>
  );
}

function NotificationPreview() {
  return (
    <div className="notification-preview">
      <div className="notification-alert">
        <span className="alert-icon">
          <i className="bi bi-exclamation-triangle" />
        </span>

        <div>
          <strong>Low Stock Alert</strong>
          <p>Tomatoes stock is low (2 kg left)</p>
          <small>10 min ago</small>
        </div>
      </div>

      <button type="button">View All Alerts</button>
    </div>
  );
}

function FeaturePreview({ type }) {
  switch (type) {
    case "orders":
      return <OrdersPreview />;
    case "menu":
      return <MenuPreview />;
    case "inventory":
      return <InventoryPreview />;
    case "store":
      return <StorePreview />;
    case "integrations":
      return <IntegrationPreview />;
    case "analytics":
      return <AnalyticsPreview />;
    case "customers":
      return <CustomerPreview />;
    case "notifications":
      return <NotificationPreview />;
    default:
      return null;
  }
}

export default function Features() {
  return (
    <div className="features-page">
      {/* HERO */}
      <section className="features-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="features-hero-content">
                <span className="features-eyebrow">FEATURES</span>

                <h1>
                  Everything You Need to Run <span>Your Restaurant</span>
                </h1>

                <p>
                  Powerful tools to manage orders, menus, inventory, customers
                  and grow your business — all from one place.
                </p>

                <div className="hero-benefits">
                  <div className="hero-benefit">
                    <div className="hero-benefit-icon orange">
                      <i className="bi bi-grid-3x3-gap" />
                    </div>

                    <div>
                      <strong>One Dashboard</strong>
                      <p>
                        Manage all platforms and operations from a single,
                        easy-to-use dashboard.
                      </p>
                    </div>
                  </div>

                  <div className="hero-benefit">
                    <div className="hero-benefit-icon green">
                      <i className="bi bi-lightning-charge" />
                    </div>

                    <div>
                      <strong>Real-time Sync</strong>
                      <p>
                        Orders, menus and inventory sync in real-time across all
                        connected platforms.
                      </p>
                    </div>
                  </div>

                  <div className="hero-benefit">
                    <div className="hero-benefit-icon purple">
                      <i className="bi bi-graph-up-arrow" />
                    </div>

                    <div>
                      <strong>Grow Faster</strong>
                      <p>
                        Save time, avoid mistakes and focus on growing your
                        restaurant business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="powerful-features-section">
        <div className="container">
          <div className="features-section-heading text-center">
            <span>POWERFUL FEATURES</span>

            <h2>All the Tools You Need in One Hub</h2>
          </div>

          <div className="row g-4">
            {featureCards.map((feature) => (
              <div className="col-lg-3 col-md-6" key={feature.number}>
                <article className={`feature-card ${feature.theme}`}>
                  <div className="feature-card-icon">
                    <i className={`bi ${feature.icon}`} />
                  </div>

                  <h3>
                    {feature.number}. {feature.title}
                  </h3>

                  <p className="feature-card-description">
                    {feature.description}
                  </p>

                  <ul>
                    {feature.points.map((point) => (
                      <li key={point}>
                        <i className="bi bi-check-circle-fill" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <FeaturePreview type={feature.type} />
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM CONNECTION */}
      <section className="connect-section">
        <div className="container">
          <div className="connect-heading text-center">
            <span>ALL PLATFORMS. ONE HUB.</span>

            <h2>Connect. Sync. Simplify.</h2>

            <p>
              No more switching between multiple platforms. Manage everything
              from Pinaka Delivery Hub.
            </p>
          </div>

          <div className="platform-flow">
            <div className="flow-platform">zomato</div>

            <div className="flow-line" />

            <div className="flow-platform swiggy">
              <span>⚡</span> SWIGGY
            </div>

            <div className="flow-line" />

            <div className="flow-platform pinaka">
              <span className="flow-logo">
                <i className="bi bi-lightning-fill" />
              </span>

              <strong>PINAKA</strong>

              <small>DELIVERY HUB</small>
            </div>

            <div className="flow-line" />

            <div className="flow-platform doordash">➤ DOORDASH</div>

            <div className="flow-line" />

            <div className="flow-platform more">
              <strong>& More</strong>
              <small>Coming Soon</small>
            </div>
          </div>
        </div>
      </section>

      {/* WITHOUT / WITH */}
      <section className="comparison-section">
        <div className="container">
          <div className="comparison-heading text-center">
            <span>WHY PINAKA?</span>

            <h2>Work Smarter, Not Harder</h2>
          </div>

          <div className="comparison-wrapper">
            <div className="comparison-card without">
              <div className="comparison-title">
                Without Pinaka Delivery Hub
              </div>

              <ul>
                <li>
                  <i className="bi bi-x-lg" />
                  Manage orders on multiple platforms
                </li>

                <li>
                  <i className="bi bi-x-lg" />
                  Manually update menus on each platform
                </li>

                <li>
                  <i className="bi bi-x-lg" />
                  No real-time inventory tracking
                </li>

                <li>
                  <i className="bi bi-x-lg" />
                  Limited analytics and reports
                </li>

                <li>
                  <i className="bi bi-x-lg" />
                  Time-consuming and error-prone
                </li>
              </ul>
            </div>

            <div className="comparison-vs">VS</div>

            <div className="comparison-card with">
              <div className="comparison-title">With Pinaka Delivery Hub</div>

              <ul>
                <li>
                  <i className="bi bi-check-lg" />
                  All orders in one unified dashboard
                </li>

                <li>
                  <i className="bi bi-check-lg" />
                  Update menu once, sync everywhere
                </li>

                <li>
                  <i className="bi bi-check-lg" />
                  Real-time inventory and stock alerts
                </li>

                <li>
                  <i className="bi bi-check-lg" />
                  Advanced analytics and insights
                </li>

                <li>
                  <i className="bi bi-check-lg" />
                  Save time and grow your business
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta-section">
        <div className="container">
          <div className="features-cta">
            <div className="restaurant-illustration">
              <div className="shop-roof">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="shop-body">
                <div className="shop-window" />
                <div className="shop-door" />
              </div>

              <div className="shop-plant left" />
              <div className="shop-plant right" />
            </div>

            <div className="cta-copy">
              <h2>Ready to Simplify Your Restaurant Operations?</h2>

              <p>
                Join thousands of restaurants using Pinaka Delivery Hub and grow
                your business every day.
              </p>
            </div>

            <div className="cta-actions">
              <Link to="/register" className="cta-primary">
                Create Your Account
              </Link>

              <Link to="/contact" className="cta-secondary">
                Book a Demo
                <i className="bi bi-calendar3" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
