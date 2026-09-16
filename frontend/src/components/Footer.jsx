
import {
  FaHeadset,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";


import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}
        <div className="footer-box">
          <h2>WebNest IT Solutions</h2>
          <div className="footer-line"></div>

          <p>
            Providing innovative IT solutions to help businesses grow
            and succeed in the digital world.
          </p>

          <div className="support-box">
            <div>
              <h3>For Support</h3>
              <span>+91 7070843946</span>
            </div>

            <div className="support-icon">
              <FaHeadset />
            </div>
          </div>
        </div>


        {/* Quick Links */}
        <div className="footer-box">
          <h2>Quick Links</h2>
          <div className="footer-line"></div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/services">IT Services</a>
            <a href="/about">About Us</a>
            <a href="/products">Products</a>
           
            <a href="/contact">Contact</a>
          </div>
        </div>


        {/* Services */}
        <div className="footer-box">
          <h2>Services</h2>
          <div className="footer-line"></div>

          <div className="footer-links">
            <a href="#">Web Development</a>
            <a href="#">Mobile App Development</a>
            <a href="#">Cloud Solutions</a>
            <a href="#">Cyber Security</a>
            <a href="#">Digital Marketing</a>
            <a href="#">IT Consulting</a>
          </div>
        </div>


        {/* Contact */}
        <div className="footer-box">
          <h2>Contact Us</h2>
          <div className="footer-line"></div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <p>
              New Jaganpura PNB ATM oppsite , Patna - 800027 (Bihar)
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>

            <p>
              +91 7070843946<br />
              +91 8292733112
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <p>Webnest@gmail.com</p>
          </div>

        </div>

      </div>

      <div className="footer-bottom"></div>

    </footer>
  );
}

export default Footer;