import { useState } from "react";

const faqCategories = [
  {
    title: "Getting Started",
    icon: "bi-rocket-takeoff",
  },
  {
    title: "Orders",
    icon: "bi-receipt",
  },
  {
    title: "Menu & Inventory",
    icon: "bi-box-seam",
  },
  {
    title: "Integrations",
    icon: "bi-diagram-3",
  },
  {
    title: "Account & Billing",
    icon: "bi-person-gear",
  },
  {
    title: "Troubleshooting",
    icon: "bi-tools",
  },
];

const faqs = [
  {
    category: "Getting Started",
    question: "How does Pinaka Delivery Hub work?",
    answer:
      "Pinaka Delivery Hub brings your restaurant operations into one place. You can manage orders, menus, inventory, store settings and connected delivery platforms from a single dashboard.",
  },
  {
    category: "Getting Started",
    question: "How do I get started with Pinaka Delivery Hub?",
    answer:
      "Create your account, add your restaurant details and connect the delivery platforms you use. Once your setup is complete, you can manage your restaurant operations from the PDH dashboard.",
  },
  {
    category: "Getting Started",
    question: "Can I manage multiple stores?",
    answer:
      "Yes. Pinaka Delivery Hub is designed to help businesses manage their restaurant operations and connected stores from one central platform.",
  },

  {
    category: "Orders",
    question: "How do I manage orders?",
    answer:
      "Orders from your connected delivery platforms can be managed from the unified order management dashboard. You can view incoming orders, order details and order status in one place.",
  },
  {
    category: "Orders",
    question: "Can I track order status?",
    answer:
      "Yes. The order management dashboard allows you to view and track order statuses so your team can manage incoming and ongoing orders efficiently.",
  },

  {
    category: "Menu & Inventory",
    question: "Can I manage my menu from PDH?",
    answer:
      "Yes. You can create and update menu items, manage categories, update prices and control item availability from the menu management section.",
  },
  {
    category: "Menu & Inventory",
    question: "Can I track my inventory?",
    answer:
      "Yes. The inventory management section allows you to track stock levels, manage ingredients and receive alerts when inventory levels are low.",
  },

  {
    category: "Integrations",
    question: "Which delivery platforms are supported?",
    answer:
      "Pinaka Delivery Hub is designed to connect with major food delivery platforms. Available integrations can be managed from the Integrations section of your dashboard.",
  },
  {
    category: "Integrations",
    question: "How do I connect a delivery platform?",
    answer:
      "Open the Integrations section in your dashboard and follow the connection process for the platform you want to add.",
  },

  {
    category: "Account & Billing",
    question: "How can I manage my account?",
    answer:
      "Your account and restaurant settings can be managed from the relevant settings sections within the PDH dashboard.",
  },
  {
    category: "Account & Billing",
    question: "Where can I get help with billing?",
    answer:
      "For account or billing-related questions, you can contact the Pinaka Delivery Hub support team through the Contact Us page.",
  },

  {
    category: "Troubleshooting",
    question: "What should I do if I face a technical issue?",
    answer:
      "If you experience a technical issue, contact our support team with details about the problem. Our team can help investigate and resolve the issue.",
  },
  {
    category: "Troubleshooting",
    question: "How can I contact support?",
    answer:
      "You can contact the Pinaka Delivery Hub team through the Contact Us page using the support form, email or phone details provided there.",
  },
];

export default function HelpCenter() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [openFaq, setOpenFaq] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    const searchText =
      `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();

    const matchesSearch = searchText.includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="help-center-page">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="help-center-hero">
        <div className="container">
          <div className="help-center-hero-content">
            <h1>
              How can we
              <span>help you?</span>
            </h1>

            <p>
              Find answers to common questions about Pinaka Delivery Hub,
              orders, integrations, inventory and more.
            </p>

            <div className="help-search">
              <i className="bi bi-search"></i>

              <input
                type="text"
                placeholder="Search your question..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />

              {searchTerm && (
                <button type="button" onClick={() => setSearchTerm("")}>
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          HELP CONTENT
      ========================================= */}

      <section className="help-center-content">
        <div className="container">
          <div className="help-center-layout">
            {/* =====================================
                SIDEBAR
            ===================================== */}

            <aside className="help-category-card">
              <h2>Help Topics</h2>

              <button
                type="button"
                className={
                  activeCategory === "All"
                    ? "help-category active"
                    : "help-category"
                }
                onClick={() => {
                  setActiveCategory("All");
                  setOpenFaq(null);
                }}
              >
                <span>
                  <i className="bi bi-grid"></i>
                  All Questions
                </span>

                <i className="bi bi-chevron-right"></i>
              </button>

              {faqCategories.map((category) => (
                <button
                  type="button"
                  key={category.title}
                  className={
                    activeCategory === category.title
                      ? "help-category active"
                      : "help-category"
                  }
                  onClick={() => {
                    setActiveCategory(category.title);
                    setOpenFaq(null);
                  }}
                >
                  <span>
                    <i className={`bi ${category.icon}`}></i>
                    {category.title}
                  </span>

                  <i className="bi bi-chevron-right"></i>
                </button>
              ))}
            </aside>

            {/* =====================================
                FAQ AREA
            ===================================== */}

            <div className="faq-area">
              <div className="faq-heading">
                <div>
                  <span>FREQUENTLY ASKED QUESTIONS</span>

                  <h2>Find the answers you need</h2>
                </div>

                <small>{filteredFaqs.length} questions</small>
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="faq-list">
                  {filteredFaqs.map((faq, index) => (
                    <div
                      className={
                        openFaq === index ? "faq-item open" : "faq-item"
                      }
                      key={faq.question}
                    >
                      <button
                        type="button"
                        className="faq-question"
                        onClick={() => toggleFaq(index)}
                      >
                        <span>{faq.question}</span>

                        <i
                          className={
                            openFaq === index ? "bi bi-dash" : "bi bi-plus"
                          }
                        ></i>
                      </button>

                      {openFaq === index && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="faq-no-results">
                  <div>
                    <i className="bi bi-search"></i>
                  </div>

                  <h3>No questions found</h3>

                  <p>
                    Try searching with different keywords or choose another
                    topic.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                    }}
                  >
                    View All Questions
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          STILL NEED HELP
      ========================================= */}

      <section className="help-contact-section">
        <div className="container">
          <div className="help-contact-card">
            <div className="help-contact-icon">
              <i className="bi bi-headset"></i>
            </div>

            <div className="help-contact-content">
              <span>STILL NEED HELP?</span>

              <h2>Our support team is here for you</h2>

              <p>
                Can't find the answer you're looking for? Get in touch with the
                Pinaka Delivery Hub support team.
              </p>
            </div>

            <a href="/contact" className="help-contact-button">
              Contact Support
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
