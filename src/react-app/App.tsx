const App = () => {
  return (
    <>
      <div className="background"></div>
      <div className="container">
        <header>
          <h1>Hunt Holdings LLC</h1>
          <p className="tagline">IT Consulting & Technical Support</p>
          <p className="location">Bartlett, TN | Greater Memphis Area</p>
        </header>
        <main>
          <section id="about" className="card">
            <h2>About</h2>
            <p>
              Professional IT consulting and technical support services for
              businesses and individuals in the Memphis area. Owned and operated
              by Carson Hunt.
            </p>
          </section>
          <section id="services" className="card">
            <h2>Services & Rates</h2>
            <div className="services-grid">
              <div className="service-item">
                <h3>IT Consulting</h3>
                <p className="rate">$100/hour</p>
              </div>
              <div className="service-item">
                <h3>Technical Support</h3>
                <p className="rate">$75/hour</p>
              </div>
              <div className="service-item">
                <h3>On-Site Visits</h3>
                <p className="rate">$125/hour</p>
              </div>
            </div>
          </section>
          <div className="two-column">
            <section id="contact" className="card">
              <h2>Get In Touch</h2>
              <div className="contact-info">
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:9015860051">901-586-0051</a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:Carson@HuntHoldings.net">
                    Carson@HuntHoldings.net
                  </a>
                </p>
              </div>
              <div className="socials">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Facebook
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Twitter
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
              </div>
            </section>
            <section id="email-form" className="card">
              <h2>Send a Message</h2>
              <form
                action="mailto:Carson@HuntHoldings.net"
                method="post"
                encType="text/plain"
              >
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                ></textarea>
                <button type="submit">Send Message</button>
              </form>
            </section>
          </div>
        </main>
        <footer>
          <p>&copy; 2025 Hunt Holdings LLC. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default App;
