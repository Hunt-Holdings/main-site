import ReactMarkdown from "react-markdown";
import termsRaw from "../../../assets/markdown/Consultation.md?raw";

const ConsultationTerms = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME ?? "Company Not Found";
  const phone = import.meta.env.VITE_PHONE_NUMBER ?? "555-555-5555";
  const email = import.meta.env.VITE_EMAIL ?? "email@notfound.404";
  const effective = import.meta.env.VITE_TERMS_EFFECTIVE_DATE ?? "1970-01-01";
  const businessName = import.meta.env.VITE_BUSINESS_NAME ?? "Business Not Found";
  const supportEmail = import.meta.env.VITE_SUPPORT_EMAIL ?? " email@notfound.404";

  const cleanPhone = phone.replace(/-/g, "");

  // Replace placeholders inside markdown
  let terms = termsRaw
    .replace(/{{BUSINESS_NAME}}/g, businessName)
    .replace(/{{COMPANY_NAME}}/g, companyName)
    .replace(/{{PHONE}}/g, phone)
    .replace(/{{EMAIL}}/g, email)
    .replace(/{{EFFECTIVE_DATE}}/g, effective)
    .replace(/{{SUPPORT_EMAIL}}/g, supportEmail);

  return (
    <div className="app">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-brand">{businessName}</div>
          <div className="nav-links">
            <a href="/">Home</a>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="hero">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Legal</span>
            <h1 className="section-title">Consultation Terms and Conditions</h1>
          </div>
        </div>
      </section>

      {/* TERMS BODY */}
      <section className="legal">
        <div className="container">
          <div className="legal-card">
            <ReactMarkdown>{terms}</ReactMarkdown>
          </div>

          <div className="legal-contact">
            <strong>Contact:</strong> <a href={`tel:${cleanPhone}`}>{phone}</a> ·{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>{businessName}</h3>
              <p>Operating as {companyName}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultationTerms;
