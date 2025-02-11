import React from "react";

const Footer = () => {
  return (
    <footer id="custom-footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Company Logo" />
            </div>
          </div>
          <div className="footer-column footer-description">
            <p>
              Your company's tagline or brief description goes here. Highlight your services or mission, providing a brief overview of your expertise.
            </p>
          </div>
        </div>
        
        {/* Horizontal Line */}
        <hr className="footer-line" />
        
        {/* Row 2: Links Section */}
        <div className="footer-row">
          <div className="footer-column footer-links">
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className="footer-column footer-links">
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div className="footer-column footer-links">
            <ul>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Horizontal Line */}
        <hr className="footer-line" />
        
        {/* Row 3: Social Icons and Contact Info */}
        <div className="footer-row">
          <div className="footer-column social-icons">
            <a href="#"><i className="fab fa-whatsapp"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="footer-column contact-info">
            <div className="location">
              <i className="fas fa-map-marker-alt"></i> 123 Luxury Lane, City, Country
            </div>
            <div className="phone">
              <i className="fas fa-phone-alt"></i> +123 456 7890
            </div>
            <div className="email">
              <i className="fas fa-envelope"></i> info@company.com
            </div>
          </div>
        </div>
        
        {/* Horizontal Line */}
        <hr className="footer-line" />
        
        {/* Row 4: Copyright */}
        <div className="footer-bottom">
          <p>© 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;