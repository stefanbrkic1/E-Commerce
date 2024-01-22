import './footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-left">
          <div className="logo-footer"></div>
          <p className="copyright-text">
            All content on this website is protected by copyright and may not be
            used without permission from Shoping Commerce. For more information
            about our Privacy Policy, please contact our Support Center.
          </p>

          <div className="copyright">
            Copyright © 2024 Shoping Commerce. All Rights Reserved.
          </div>

          <h3 className="updates-header">Get Our Updates</h3>

          <div className="subscribe-input-container">
            <input
              type="text"
              placeholder="Enter your email address..."
              className="subscribe-input"
            />
            <button type="submit" className="subscribe-btn">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-left">
            <div className="links-container">
              <div className="links-header">Company</div>
              <div className="footer-link">About Us</div>
              <div className="footer-link">Testimonials</div>
              <div className="footer-link">FAQs</div>
              <div className="footer-link">Terms & Condition</div>
              <div className="footer-link">Latest Update</div>
            </div>

            <div className="contacts-container">
              <div className="contact-info">
                <div className="location-icon"></div>
                <div className="location-text">123 Main Street Chicago, IL</div>
              </div>

              <div className="contact-info">
                <div className="phone-icon"></div>
                <div className="phone-text">+3818714081</div>
              </div>

              <div className="contact-info">
                <div className="email-icon"></div>
                <div className="email-text">shopingcommerce@gmail.com</div>
              </div>
            </div>
          </div>

          <div className="footer-right-right">
            <div className="links-container">
              <div className="links-header">Support</div>
              <div className="footer-link">Order Tracking</div>
              <div className="footer-link">Payment Guide</div>
              <div className="footer-link">Help Centre</div>
              <div className="footer-link">Privacy Policy</div>
              <div className="footer-link">Return Policy</div>
              <div className="footer-link">Promo Codes</div>
            </div>

            <div className="social-media-container">
              <div className="links-header">Contact</div>
              <div className="social-media">
                <div className="fb-icon"></div>
                <div className="ig-icon"></div>
                <div className="tw-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-links">
        <div className="additional-link">Privacy Policy</div>
        <div>|</div>
        <div className="additional-link">Terms & Conditions</div>
        <div>|</div>
        <div className="additional-link">Sitemap</div>
      </div>
    </footer>
  );
}

export default Footer;
