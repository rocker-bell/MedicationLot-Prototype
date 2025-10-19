import React from "react";
import "../Styles/About2.css";
import Logo from "./Logo.jsx"

export default function About() {
  return (
    <div className="rideconnect">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-left">
          <Logo/>
        </div>
        <div className="nav-center">
          <a href="#">Home</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">Packages</a>
          <a href="#">About</a>
        </div>
        <div className="nav-right">
          <button className="signin">Sign In</button>
          <button className="getstarted">Get Started</button>
        </div>
      </nav>

      {/* Hero / About */}
      <section className="hero">
        <div className="hero-content">
          <h4>About RideConnect Morocco</h4>
          <h1>
            Revolutionizing educational transportation across Morocco with smart,
            efficient, and affordable solutions for students and trainers.
          </h1>
          <button>Get Started Today</button>
        </div>
      </section>

      {/* Mission */}
      <section className="mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            RideConnect Morocco was born from a simple observation: students and
            trainers across Morocco’s educational institutions needed a better
            way to plan and access transportation services.
          </p>
          <p>
            We bridge the gap between educational communities and reliable
            transportation providers, making it easier for students to reach
            their classes and trainers to conduct sessions across multiple
            institutions.
          </p>
          <p>
            Our platform combines cutting-edge technology with deep knowledge of
            Morocco’s transportation landscape, creating a seamless experience
            from route planning to payment processing.
          </p>
        </div>
        <div className="mission-image placeholder">
          <p>Image Placeholder</p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="stat">
          <h3>50+</h3>
          <p>Educational Institutions</p>
        </div>
        <div className="stat">
          <h3>10,000+</h3>
          <p>Active Users</p>
        </div>
        <div className="stat">
          <h3>25+</h3>
          <p>Cities Connected</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Satisfaction Rate</p>
        </div>
      </section>

      {/* Why Choose RideConnect */}
      <section className="features">
        <h2>Why Choose RideConnect?</h2>
        <p>
          We offer unique advantages designed specifically for Morocco’s
          educational transportation needs.
        </p>
        <div className="feature-grid">
          <div className="feature-box">
            <h4>Time Optimization</h4>
            <p>
              Plan your trips efficiently with real-time schedules and route
              information, saving valuable time.
            </p>
          </div>
          <div className="feature-box">
            <h4>Flexible Payment Options</h4>
            <p>
              Choose between cash or card payments for seamless and secure
              transactions.
            </p>
          </div>
          <div className="feature-box">
            <h4>Safe & Reliable</h4>
            <p>
              Partnering with verified transportation providers to ensure safety
              and reliability.
            </p>
          </div>
          <div className="feature-box">
            <h4>Nationwide Coverage</h4>
            <p>
              Connect institutions across Morocco with comprehensive route
              coverage.
            </p>
          </div>
          <div className="feature-box">
            <h4>Student & Trainer Focused</h4>
            <p>
              Designed for the educational community with tailored features.
            </p>
          </div>
          <div className="feature-box">
            <h4>Cost Effective</h4>
            <p>
              Competitive pricing with bulk credit packages for institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Morocco Section */}
      <section className="serving">
        <div className="serving-image placeholder">
          <p>Image Placeholder</p>
        </div>
        <div className="serving-text">
          <h2>Serving Morocco’s Educational Community</h2>
          <p>
            Morocco’s geography and educational diversity require specialized
            transportation. From Casablanca to Fez, we ensure seamless
            connectivity.
          </p>
          <ul>
            <li><strong>Local Expertise:</strong> Deep understanding of Morocco’s routes and culture.</li>
            <li><strong>Bilingual Support:</strong> Available in Arabic, French, and English.</li>
            <li><strong>Educational Partnerships:</strong> Collaborating with institutions for tailored solutions.</li>
          </ul>
        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="value-grid">
          <div className="value-box">
            <h4>Excellence</h4>
            <p>We strive for excellence in every aspect of our service.</p>
          </div>
          <div className="value-box">
            <h4>Trust & Security</h4>
            <p>Your safety and privacy are our top priorities.</p>
          </div>
          <div className="value-box">
            <h4>Community First</h4>
            <p>We are committed to serving the educational community.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Ready to Transform Your Transportation Experience?</h3>
        <p>
          Join thousands of students and trainers across Morocco who trust
          RideConnect for their daily commute.
        </p>
        <button>Get Started</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <div>
            <Logo/>
          </div>
          <p>Smart collective transport for students and trainers across Morocco.</p>
        </div>
        
        <div className="support_connected_container">
            <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">How It Works</a>
          <a href="#">Pricing</a>
          <a href="#">Packages</a>
          <a href="#">About</a>
        </div>
             <div className="footer-support">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Safety Guidelines</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-contact">
          <h4>Stay Connected</h4>
          <p>support@findtransport.ma</p>
          <p>+212 600 000 000</p>
          <p>Tamensa, Morocco</p>
        </div>
        </div>
       
      </footer>

      <div className="footer-bottom">
        © 2025 Find Transportation. All rights reserved.
      </div>
    </div>
  );
}
