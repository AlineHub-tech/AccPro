import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Linkedin, Twitter, Github, 
  ChevronRight, Facebook, Instagram 
} from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="nex-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* BRAND & MISSION */}
          <div className="footer-column brand-col">
            <Link to="/" className="footer-logo">
              ACC<span>.</span>PRO
            </Link>
            <p className="footer-description">
              Empowering Rwandan accountants with automated payroll, tax precision, and real-time financial reporting. The gold standard for modern firms.
            </p>
            <div className="social-icons">
              <a href="#" className="social-link"><Twitter size={18} /></a>
              <a href="#" className="social-link"><Linkedin size={18} /></a>
              <a href="#" className="social-link"><Github size={18} /></a>
              <a href="#" className="social-link"><Facebook size={18} /></a>
            </div>
          </div>

          {/* QUICK LINKS - PLATFORM */}
          <div className="footer-column">
            <h4 className="footer-title">Platform</h4>
            <ul className="footer-links">
              <li><Link to="/employees"><ChevronRight size={14} className="yellow-icon"/> Employees</Link></li>
              <li><Link to="/salary"><ChevronRight size={14} className="yellow-icon"/> Salary Engine</Link></li>
              <li><Link to="/payments"><ChevronRight size={14} className="yellow-icon"/> Payments</Link></li>
              <li><Link to="/reports"><ChevronRight size={14} className="yellow-icon"/> Reports</Link></li>
            </ul>
          </div>

          {/* QUICK LINKS - COMPANY */}
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about"><ChevronRight size={14} className="yellow-icon"/> About Us</Link></li>
              <li><Link to="/user"><ChevronRight size={14} className="yellow-icon"/> My Profile</Link></li>
              <li><Link to="/terms"><ChevronRight size={14} className="yellow-icon"/> Terms of Service</Link></li>
              <li><Link to="/privacy"><ChevronRight size={14} className="yellow-icon"/> Privacy Policy</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="footer-column contact-col">
            <h4 className="footer-title">Contact Us</h4>
            <div className="contact-list">
              <div className="contact-item">
                <div className="icon-bg"><MapPin size={18} /></div>
                <span>Kigali Heights, Floor 3<br/>Kigali, Rwanda</span>
              </div>
              <div className="contact-item">
                <div className="icon-bg"><Phone size={18} /></div>
                <span>+250 780 000 000</span>
              </div>
              <div className="contact-item">
                <div className="icon-bg"><Mail size={18} /></div>
                <span>support@accpro.rw</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <p>© {currentYear} Accountant Pro. All rights reserved.</p>
            <div className="bottom-links">
  <p className="dev-credit">Developed by <a href="https://byte-flow-ltd.vercel.app/">ByteFlow</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
