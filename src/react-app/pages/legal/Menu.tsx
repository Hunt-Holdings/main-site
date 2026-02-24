import { Link } from "react-router-dom";

const legalPages = [
  {
    title: "Technical Support Terms & Conditions",
    description: "Terms governing technical support and repair services.",
    path: "/legal/TechSupport/Terms",
  },
  {
    title: "Consultation Terms & Conditions",
    description: "Terms governing IT consultation and advisory services.",
    path: "/legal/Consultation/Terms",
  },
];

const Menu = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME ?? "Company";

  return (
    <div className="app">
      <section className="hero">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Legal</span>
            <h1 className="section-title">Legal Documents</h1>
            <p className="hero-description" style={{ marginTop: "1rem" }}>
              Review the terms and conditions for {companyName} services.
            </p>
          </div>
        </div>
      </section>

      <section className="legal">
        <div className="container">
          <div className="legal-menu-grid">
            {legalPages.map((page) => (
              <Link to={page.path} key={page.path} className="legal-menu-card">
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <span className="legal-menu-link">Read document &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
