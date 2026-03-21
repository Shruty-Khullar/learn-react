import { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">⚡ EcomStore</div>
          <p className="footer-tagline">
            Your ultimate destination for cutting-edge gadgets & tech.
          </p>
          <div className="footer-payments">
            {["VISA", "MC", "AMEX", "UPI"].map((p) => (
              <span key={p} className="pay-badge">{p}</span>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">SHOPPING</h4>
          {["Computer Store", "Laptop Store", "Accessories", "Sales & Discount"].map((item) => (
            <a key={item} href="#" className="footer-link">{item}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Experience</h4>
          {["Contact Us", "Payment Method", "Delivery", "Return and Exchange"].map((item) => (
            <a key={item} href="#" className="footer-link">{item}</a>
          ))}
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">NEWSLETTER</h4>
          <p className="footer-newsletter-text">
            Be the first to know about new arrivals, sales & promos!
          </p>
          <div className="footer-input-wrapper">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="footer-input"
            />
            <button className="footer-btn">→</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Design and Code by EcomStore Team</p>
      </div>
    </footer>
  );
};

export default Footer;