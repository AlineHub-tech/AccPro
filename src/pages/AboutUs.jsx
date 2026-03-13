import React from 'react';
/* Added FileText here to the import list */
import { Info, ShieldCheck, Zap, Database, Globe, FileText } from 'lucide-react';
import '../styles/InfoPages.css';

const AboutUs = () => {
    return (
        <div className="info-container">
            <div className="info-header">
                <h1>About <span>AccPro.</span></h1>
                <p>The definitive operating system for modern accountants.</p>
            </div>

            <div className="about-content">
                <div className="about-section">
                    <h2><Info className="yellow-dot"/> Our Mission</h2>
                    <p>
                        Accountant Pro (AccPro) was developed to solve the complexity of manual financial management. 
                        In an era of rapid regulatory changes, we empower Rwandan firms to automate their most 
                        critical operations—payroll, tax compliance, and financial auditing—with 100% precision.
                    </p>
                </div>

                <div className="about-section">
                    <h2><Zap className="yellow-dot"/> Core Capabilities</h2>
                    <ul className="feature-list">
                        <li className="feature-item"><ShieldCheck size={18} className="yellow-dot"/> Automated RRA & RSSB Compliance</li>
                        <li className="feature-item"><Database size={18} className="yellow-dot"/> Local-First Data Sovereignty</li>
                        <li className="feature-item"><FileText size={18} className="yellow-dot"/> Instant Audit-Ready PDF Exports</li>
                        <li className="feature-item"><Globe size={18} className="yellow-dot"/> Works Offline Without Latency</li>
                    </ul>
                </div>

                <div className="about-section">
                    <div style={{background: '#f8fafc', padding: '30px', borderRadius: '16px', borderLeft: '5px solid #facc15'}}>
                        <h3 style={{marginBottom: '10px', color: '#0f172a'}}>Why Professionals Choose Us</h3>
                        <p style={{fontSize: '0.9rem'}}>
                            Unlike traditional software, AccPro stores all sensitive financial records directly on your 
                            browser's local storage. This means your data never leaves your computer, ensuring maximum 
                            privacy while providing the speed of a desktop application with the accessibility of the web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
