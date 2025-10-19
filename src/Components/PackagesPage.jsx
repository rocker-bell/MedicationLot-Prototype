import React from "react";
import "../Styles/PackagesPage.css";
import {Link} from "react-router-dom";
import Logo from "./Logo.jsx"

const PackagesPage = () => {
  return (
    <div className="packages-page">
      {/* Header */}
      <header className="packages-header">
        <nav className="nav">
          <div className="nav-logo">
            <Logo/>
          </div>
          <ul className="nav-links">
            <Link to="/">home</Link>
            <li>How It Works</li>
            {/* <li>Pricing</li> */}
            <li className="active">Packages</li>
            <Link to="/About">
                About
            </Link>
          </ul>
          <div className="nav-actions">
            <Link to="/User_interface">
                Sign in
            </Link>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="packages-content">
        {/* <a href="/" className="back-link">← Back to Home</a> */}
        <h2>Prepaid Credit Packages</h2>
        <p className="subtitle">
          Save more by purchasing daily, monthly, or yearly credits in advance
        </p>

        {/* Daily Credits */}
        <section className="daily-credits">
          <h3>Daily Prepaid Credits</h3>
          <p>Valid for 24 hours</p>
          <table className="credits-table">
            <thead>
              <tr>
                <th>Package</th>
                <th>Included km</th>
                <th>Normal Ride</th>
                <th>VIP Ride</th>
                <th>Co-joint Ride</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic<br /><small>Best for short trips</small></td>
                <td>20 km</td>
                <td>70 MAD</td>
                <td>140 MAD</td>
                <td>40 MAD/person</td>
                <td><button className="btn-table">Purchase</button></td>
              </tr>
              <tr>
                <td>Extended<br /><small>Ideal for longer routes</small></td>
                <td>50 km</td>
                <td>170 MAD</td>
                <td>350 MAD</td>
                <td>100 MAD/person</td>
                <td><button className="btn-table">Purchase</button></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Monthly Credits */}
        <section className="monthly-credits">
          <h3>Monthly Prepaid Credits</h3>
          <p>Valid for 30 days - Best value for regular commuters</p>
          <div className="package-cards">
            <div className="package-card">
              <h4>Normal Package</h4>
              <p className="price">500km - 1600 MAD/month</p>
              <ul>
                <li>🚗 Sedan, Hatchback, Electric Car</li>
                <li>✅ Perfect for daily campus commute</li>
                <li>✅ Flexible scheduling</li>
              </ul>
              <button className="btn-secondary">Purchase Package</button>
            </div>
            <div className="package-card popular">
              <div className="tag">Popular</div>
              <h4>VIP Package</h4>
              <p className="price">3200 MAD/month</p>
              <ul>
                <li>✨ Luxury Sedan, SUV</li>
                <li>✅ Priority service</li>
                <li>✅ Maximum comfort</li>
              </ul>
              <button className="btn-primary">Purchase Package</button>
            </div>
            <div className="package-card">
              <h4>Co-joint Package</h4>
              <p className="price">900 MAD/month per person</p>
              <ul>
                <li>🚗 Sedan, Electric Car</li>
                <li>✅ Most affordable option</li>
                <li>✅ Eco-friendly carpooling</li>
              </ul>
              <button className="btn-secondary">Purchase Package</button>
            </div>
          </div>
        </section>

        {/* Yearly Credits */}
        <section className="yearly-credits">
          <h3>Yearly Prepaid Credits</h3>
          <p>Valid for 365 days - Maximum savings</p>
          <div className="package-cards">
            <div className="package-card">
              <h4>Normal Package</h4>
              <p className="price">6000km - 18000 MAD/year</p>
              <p className="save-tag green">Save up to 20% annually</p>
              <button className="btn-secondary">Purchase Package</button>
            </div>
            <div className="package-card popular">
              <h4>VIP Package</h4>
              <p className="price">36000 MAD/year</p>
              <p className="save-tag blue">Save up to 25% annually</p>
              <button className="btn-primary">Purchase Package</button>
            </div>
            <div className="package-card">
              <h4>Co-joint Package</h4>
              <p className="price">10800 MAD/year per person</p>
              <p className="save-tag orange">Save up to 30% annually</p>
              <button className="btn-secondary">Purchase Package</button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-about">
          {/* <h3 className="Packages-page-footerLogo">{Logo}</h3> */}
          <div className="logo">
                  <Logo />
                </div>
          <p className="footer-about-quote">Smart collective transport for students and travelers across Morocco.</p>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        <div className="newsLetterSection">
          <div className="quick-links">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>How It Works</li>
              <li>Pricing</li>
              <li>Packages</li>
              <li>About Us</li>
            </ul>
          </div>

          <div className="support">
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Safety Guidelines</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div className="stay-connected">
            <h4>Stay Connected</h4>
            <p>📞 +212 620 000 000</p>
            <p>📍 Tamesna, Morocco</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Find Transportation. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Accessibility</a>
            <a href="#">Sitemap</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PackagesPage;
