import React from 'react';
import { 
  Info, ShieldCheck, Zap, Database, Globe, FileText, 
  Users, Target, Rocket, Lock, BarChart, CheckCircle2, 
  Settings, Award, TrendingUp, Briefcase
} from 'lucide-react';
import '../styles/InfoPages.css';

const AboutUs = () => {
    return (
        <div className="info-container">
            {/* 1. HERO HEADER */}
            <div className="info-header">
                <div className="info-badge">EST. 2024 • RWANDA</div>
                <h1>Empowering Rwandan <span>Accountants.</span></h1>
                <p>AccPro is more than just a tool; it's a financial engine built to eliminate manual errors and ensure 100% tax compliance for local firms.</p>
            </div>

            {/* 2. CORE MISSION & VISION (Split Cards) */}
            <div className="about-split-grid">
                <div className="card-style highlight-border">
                    <div className="icon-circle"><Target className="yellow-dot"/></div>
                    <h2>Our Mission</h2>
                    <p>
                        To digitize the Rwandan accounting landscape by providing high-speed, 
                        automated tools that handle PAYE, RSSB, and RAMA calculations 
                        with surgical precision, saving firms hundreds of hours monthly.
                    </p>
                </div>
                <div className="card-style highlight-border">
                    <div className="icon-circle"><Rocket className="yellow-dot"/></div>
                    <h2>Our Vision</h2>
                    <p>
                        To become the standard financial infrastructure for every Rwandan SME, 
                        making complex tax laws understandable and manageable through 
                        intelligent automation and local-first data privacy.
                    </p>
                </div>
            </div>

            {/* 3. NEW: OUR CORE VALUES (Yongereweho) */}
            <section className="about-section-full">
                <h2 className="section-subtitle">The Principles We Stand By</h2>
                <div className="values-grid">
                    <div className="value-item">
                        <ShieldCheck className="yellow-dot" size={32}/>
                        <h3>Integrity</h3>
                        <p>Our algorithms are double-verified by tax experts to ensure they follow RRA laws to the letter.</p>
                    </div>
                    <div className="value-item">
                        <Lock className="yellow-dot" size={32}/>
                        <h3>Privacy First</h3>
                        <p>We believe your financial data is yours alone. Our "No-Cloud" storage policy ensures maximum safety.</p>
                    </div>
                    <div className="value-item">
                        <Users className="yellow-dot" size={32}/>
                        <h3>Local Focus</h3>
                        <p>Built in Rwanda, for Rwanda. We understand the specific needs of local businesses and regulations.</p>
                    </div>
                </div>
            </section>

            {/* 4. NEW: HOW IT WORKS (The Process) */}
            <div className="process-section">
                <h2 className="section-subtitle">How AccPro Works</h2>
                <div className="process-steps">
                    <div className="step">
                        <span className="step-num">01</span>
                        <h4>Setup Firm</h4>
                        <p>Input your company's tax details and employee profiles once.</p>
                    </div>
                    <div className="step">
                        <span className="step-num">02</span>
                        <h4>Auto-Calculate</h4>
                        <p>Our engine processes PAYE, RSSB, and RAMA in under 10 seconds.</p>
                    </div>
                    <div className="step">
                        <span className="step-num">03</span>
                        <h4>Instant Export</h4>
                        <p>Download RRA-ready Excel and PDF reports ready for declaration.</p>
                    </div>
                </div>
            </div>

            {/* 5. NEW: WHO IS ACCPRO FOR? */}
            <section className="target-section card-style dark-card">
                <div className="target-header">
                    <h2><Briefcase className="yellow-dot" /> Who is it for?</h2>
                </div>
                <div className="target-grid">
                    <div className="target-item">
                        <CheckCircle2 size={20} className="yellow-dot"/>
                        <span>Freelance Accountants</span>
                    </div>
                    <div className="target-item">
                        <CheckCircle2 size={20} className="yellow-dot"/>
                        <span>Audit & Consultancy Firms</span>
                    </div>
                    <div className="target-item">
                        <CheckCircle2 size={20} className="yellow-dot"/>
                        <span>SMEs & Large Corporations</span>
                    </div>
                    <div className="target-item">
                        <CheckCircle2 size={20} className="yellow-dot"/>
                        <span>HR Managers & Payroll Officers</span>
                    </div>
                </div>
            </section>

            {/* 6. DATA SECURITY INNOVATION */}
            <div className="innovation-box">
                <div className="innovation-text">
                    <h3><Database className="yellow-dot" /> High-Performance Local-First Architecture</h3>
                    <p>
                        Most modern software sends your data to foreign servers. <strong>AccPro is different.</strong> 
                        We use advanced browser-based encryption (LocalStorage and IndexedDB) 
                        to keep your sensitive financial records on <em>your computer</em>. 
                        It’s the speed of a web app with the security of an offline vault.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
