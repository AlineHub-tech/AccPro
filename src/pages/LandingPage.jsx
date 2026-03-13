import React from 'react';
import { 
  Award, Star, ShieldCheck, Zap, BarChart3, 
  CheckCircle, Globe, HelpCircle 
} from 'lucide-react';
import '../styles/Landing.css';

const LandingPage = () => {
  return (
    <div className="landing-body">
      {/* 1. HERO SECTION */}
      <section className="lp-hero">
        <div className="lp-section-container">
          <div className="lp-badge">🏆 Voted #1 Financial Platform 2026</div>
          <h1 className="lp-h1">Precision Meets <br/> <span>Accounting.</span></h1>
          <p className="lp-p">
            Say goodbye to manual entry. Join thousands of Rwandan firms automating 
            their payroll, taxes, and financial auditing with one unified system.
          </p>
          <button className="lp-btn-primary">Start Your Free Trial</button>
        </div>
      </section>

      {/* 2. TRUSTED BY SECTION */}
      <div className="trust-bar">
        <div className="trust-item"><Award className="lp-icon-sm"/> RRA COMPLIANT</div>
        <div className="trust-item"><ShieldCheck className="lp-icon-sm"/> ISO 27001 SECURED</div>
        <div className="trust-item"><Globe className="lp-icon-sm"/> RSSB INTEGRATED</div>
        <div className="trust-item"><Star className="lp-icon-sm lp-star-fill"/> TOP RATED SUITE</div>
      </div>

      {/* 3. CORE SERVICES */}
      <section className="lp-section">
        <div className="lp-section-container">
          <div className="section-title">
            <h2 className="lp-h2">Master Your <span>Finances.</span></h2>
          </div>
          <div className="lp-grid">
            <div className="lp-card">
              <div className="lp-icon-box"><Zap /></div>
              <h3>Auto-Payroll</h3>
              <p>Calculate monthly salaries, PAYE, and medical insurance for 100+ employees in 10 seconds.</p>
            </div>
            <div className="lp-card">
              <div className="lp-icon-box"><BarChart3 /></div>
              <h3>Audit-Ready Reports</h3>
              <p>Professional PDF/Excel exports for RRA declarations and internal board meetings.</p>
            </div>
            <div className="lp-card">
              <div className="lp-icon-box"><ShieldCheck /></div>
              <h3>Security First</h3>
              <p>Local-first data storage means your sensitive financial files never leave your device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="lp-section">
        <div className="lp-section-container">
          <div className="lp-info-bg">
            <div className="info-flex-grid">
              <div className="info-text">
                <h2 className="lp-h2-white">Built for the <br/> Modern Accountant.</h2>
                <div className="check-list">
                  <div className="check-item">
                    <CheckCircle className="lp-check-icon"/> 
                    <span><strong>Regulatory Updates:</strong> Automatic tax bracket adjustments.</span>
                  </div>
                  <div className="check-item">
                    <CheckCircle className="lp-check-icon"/> 
                    <span><strong>Offline Power:</strong> Process payroll without internet connection.</span>
                  </div>
                  <div className="check-item">
                    <CheckCircle className="lp-check-icon"/> 
                    <span><strong>Bulk Import:</strong> Move your data from Excel in seconds.</span>
                  </div>
                </div>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">99.9%</h3>
                <p className="stat-label">Calculation Accuracy</p>
                <p className="stat-desc">Our algorithm is double-verified by Rwandan tax consultants to ensure zero errors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="lp-section">
        <div className="lp-section-container">
          <div className="section-title">
            <h2 className="lp-h2-small">Common Questions<span>.</span></h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4><HelpCircle className="lp-faq-icon"/> Is my data safe?</h4>
              <p>Yes. We use LocalStorage and browser encryption. We do not store your data on external servers.</p>
            </div>
            <div className="faq-item">
              <h4><HelpCircle className="lp-faq-icon"/> Can I export for RRA?</h4>
              <p>Absolutely. Our reports are formatted specifically to meet RRA and RSSB declaration standards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
