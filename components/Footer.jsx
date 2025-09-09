// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        
        {/* Resources */}
        <div>
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Home affordability calculator</a></li>
            <li><a href="#">Mortgage calculator</a></li>
            <li><a href="#">Free mortgage calculator</a></li>
            <li><a href="#">Mortgage calculator with taxes</a></li>
            <li><a href="#">Mortgage calculator with PMI</a></li>
            <li><a href="#">Rent vs buy calculator</a></li>
            <li><a href="#">HELOC payment calculator</a></li>
            <li><a href="#">HELOC vs cash-out refinance calculator</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Partner With Us</a></li>
          </ul>
        </div>

        {/* Learning Center */}
        <div>
          <h4>Learning center</h4>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="mailto:hello@better.com">hello@better.com</a></li>
            <li><a href="tel:4155238837">415-523-8837</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Glossary</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">NMLS Consumer Access</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Disclosures & Licensing</a></li>
            <li><a href="#">Affiliated Business</a></li>
            <li><a href="#">Browser Disclaimer</a></li>
          </ul>
        </div>
      </div>

      <div className="container footerBottom">
        <p>© {new Date().getFullYear()} Better.com Clone. All rights reserved.</p>
      </div>
    </footer>
  );
}
