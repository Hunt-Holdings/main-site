const Home = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME;
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
  const email = import.meta.env.VITE_EMAIL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">Carson Hunt</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-eyebrow">
              IT Consulting & Technical Support
            </div>
            <h1 className="hero-title">Hi, I'm Carson Hunt</h1>
            <p className="hero-description">
              I help people and businesses in the Memphis area solve their
              technology problems. Whether you need a home network set up,
              business IT consulting, or just someone to fix that computer issue
              that's been driving you crazy.
            </p>
            <div className="hero-meta">
              <div className="meta-item">
                <svg
                  className="meta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
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
                <svg
                  className="meta-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
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
              <a
                href={`tel:${phoneNumber.replace(/-/g, "")}`}
                className="btn btn-secondary"
              >
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
            <h2 className="section-title">
              Technology Doesn't Have to Be Complicated
            </h2>
          </div>
          <div className="about-content">
            <p className="about-text">
              I'm Carson Hunt, owner of {companyName} and an IT professional
              based in Bartlett, Tennessee. I currently work at St. Jude
              Children's Research Hospital, and have spent years supporting
              technology in environments where reliability and accountability
              matter. My background spans enterprise IT, logistics, and hands-on
              technical repair, with experience ranging from end-user support
              and system deployments to managing large inventories and resolving
              complex, real-world technical issues. I've worked in healthcare,
              logistics, retail, and small repair shop settings, which gives me
              a practical, well-rounded approach to technology. Through
              {companyName}, I bring that same professional standard to helping
              individuals and small businesses keep their systems stable,
              secure, and actually usable.
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
            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="service-title">IT Consulting</h3>
              </div>
              <p className="service-description">
                Strategic technology planning and advice for small businesses.
                I'll help you figure out what technology you actually need and
                how to make it work together efficiently.
              </p>
              <div className="service-features">
                <div className="feature">Network Setup</div>
                <div className="feature">Security Planning</div>
                <div className="feature">Tech Recommendations</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="service-title">Technical Support</h3>
              </div>
              <p className="service-description">
                Troubleshooting and fixing technology problems for homes and
                businesses. Computer acting weird? Printer won't connect? I can
                help sort it out.
              </p>
              <div className="service-features">
                <div className="feature">Troubleshooting</div>
                <div className="feature">Software Issues</div>
                <div className="feature">Hardware Problems</div>
              </div>
            </div>

            <div className="service-card">
              <div className="service-header">
                <div className="service-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="service-title">On-Site Services</h3>
              </div>
              <p className="service-description">
                Sometimes you need someone to come to you. I'll come to your
                home or business for installations, upgrades, or anything that
                needs hands-on attention.
              </p>
              <div className="service-features">
                <div className="feature">Home Visits</div>
                <div className="feature">Equipment Setup</div>
                <div className="feature">Network Installation</div>
              </div>
            </div>
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
                Have a question or need help with something? Drop me a line and
                I'll get back to you as soon as I can. No question is too small.
              </p>

              <div className="contact-methods">
                <a
                  href={`tel:${phoneNumber.replace(/-/g, "")}`}
                  className="contact-item"
                >
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
              <form
                className="contact-form"
                action={`mailto:${email}`}
                method="post"
                encType="text/plain"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
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
                <button type="submit" className="btn btn-primary btn-full">
                  Send Message
                </button>
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
                IT consulting and technical support for the Memphis area.
                Operating as {companyName}.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <a href="#services">IT Consulting</a>
                <a href="#services">Technical Support</a>
                <a href="#services">On-Site Services</a>
              </div>
              <div className="footer-column">
                <h4>Connect</h4>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 {companyName}. All rights reserved.</p>
            <p>Bartlett, Tennessee</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
