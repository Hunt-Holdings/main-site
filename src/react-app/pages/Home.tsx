import { useState } from "react";
import WhiteTextLogo from "../assets/images/WhiteTextLogo.png";
import servicesConfig from "../config/services.json";
import serviceIcons from "../config/serviceIcons";

// Helper to look up env-var-driven pricing by the key stored in services.json
const getPrice = (key: string) => import.meta.env[`VITE_PRICE_${key}`] as string | undefined;
const getPromoPrice = (key: string | undefined) =>
  key ? (import.meta.env[`VITE_PROMO_PRICE_${key}`] as string | undefined) : undefined;

const Home = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME;
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const email = import.meta.env.VITE_EMAIL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;

  // Promo toggle
  const promoEnabled = import.meta.env.VITE_PROMO_ENABLED === "true";

  // Mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact form
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setFormStatus("sent");
        form.reset();
      } else {
        setFormStatus("error");
        setFormError(json.error || "Something went wrong.");
      }
    } catch {
      setFormStatus("error");
      setFormError("Unable to reach the server. Please try again later.");
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <img src={WhiteTextLogo} alt="Carson Hunt Logo" className="nav-brand logo-small" />
          <button
            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">{servicesConfig.map((s) => s.title).join(" & ")}</div>
            <h1 className="hero-title">Hi, I'm Carson Hunt</h1>
            <p className="hero-description">
              I help people and businesses in the Memphis area solve their technology problems.
              Whether you need a home network set up, business IT consulting, or just someone to fix
              that computer issue that's been driving you crazy.
            </p>
            <div className="hero-meta">
              <div className="meta-item">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Serving Bartlett & Greater Memphis</span>
              </div>
              <div className="meta-item">
                <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Flexible Scheduling</span>
              </div>
            </div>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href={`tel:${phoneNumber.replace(/-/g, "")}`} className="btn btn-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phoneNumber}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-card card-1">
              <div className="card-icon">⚡</div>
              <div className="card-label">Quick Response</div>
            </div>
            <div className="visual-card card-2">
              <div className="card-icon">🛠️</div>
              <div className="card-label">Problem Solver</div>
            </div>
            <div className="visual-card card-3">
              <div className="card-icon">💬</div>
              <div className="card-label">Clear Communication</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">Technology Doesn't Have to Be Complicated</h2>
          </div>
          <div className="about-content">
            <p className="about-text">
              I'm Carson Hunt, owner of {companyName} and an IT professional based in Bartlett,
              Tennessee. I currently work at St. Jude Children's Research Hospital, and have spent
              years supporting technology in environments where reliability and accountability
              matter. My background spans enterprise IT, logistics, and hands-on technical repair,
              with experience ranging from end-user support and system deployments to managing large
              inventories and resolving complex, real-world technical issues. I've worked in
              healthcare, logistics, retail, and small repair shop settings, which gives me a
              practical, well-rounded approach to technology. Through {companyName}, I bring that
              same professional standard to helping individuals and small businesses keep their
              systems stable, secure, and actually usable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What I Do</span>
            <h2 className="section-title">Services I Offer</h2>
          </div>
          <div className="services-grid">
            {servicesConfig.map((service) => {
              const price = getPrice(service.priceEnvKey);
              const promoPrice = getPromoPrice(service.promoEnvKey);

              return (
                <div className="service-card" key={service.title}>
                  <div className="service-header">
                    <div className="service-icon">{serviceIcons[service.icon] ?? null}</div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <p className="service-description">{service.description}</p>
                  {price && (
                    <div className="service-pricing">
                      {promoEnabled && promoPrice ? (
                        <>
                          <span className="price-original">{price}</span>
                          <span className="price-promo">{promoPrice}</span>
                          <span className="promo-badge">Promo</span>
                        </>
                      ) : (
                        <span className="price">{price}</span>
                      )}
                    </div>
                  )}
                  <div className="service-features">
                    {service.features.map((f) => (
                      <div className="feature" key={f}>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <div className="section-header">
                <span className="section-eyebrow">Get In Touch</span>
                <h2 className="section-title">Let's Talk About Your Tech</h2>
              </div>
              <p className="contact-intro">
                Have a question or need help with something? Drop me a line and I'll get back to you
                as soon as I can. No question is too small.
              </p>

              <div className="contact-methods">
                <a href={`tel:${phoneNumber.replace(/-/g, "")}`} className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">{phoneNumber}</div>
                  </div>
                </a>

                <a href={`mailto:${email}`} className="contact-item">
                  <div className="contact-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="contact-details">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">{email}</div>
                  </div>
                </a>
              </div>

              <div className="social-links">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your IT needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
                {formStatus === "sent" && (
                  <p className="form-success">Message received! I'll get back to you soon.</p>
                )}
                {formStatus === "error" && <p className="form-error">{formError}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Carson Hunt</h3>
              <p>
                IT consulting and technical support for the Memphis area. Operating as {companyName}
                .
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                {servicesConfig.map((s) => (
                  <a href="#services" key={s.title}>
                    {s.title}
                  </a>
                ))}
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
            <p>Bartlett, Tennessee</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
