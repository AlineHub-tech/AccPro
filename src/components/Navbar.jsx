import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  Home, Users, Wallet, CreditCard, 
  BarChart, User, Info, Menu, X 
} from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Kurinda ko ushobora gu-scroll igihe menu ya mobile ifunguye
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobile]);

  const closeMenu = () => setIsMobile(false);

  return (
    <nav className="nex-navbar">
      <div className="nav-content">
        {/* LOGO */}
        <Link to="/" className="nex-logo" onClick={closeMenu}>
          ACC<span className="yellow-dot">.</span>PRO
        </Link>

        {/* DESKTOP LINKS */}
        <div className={`nex-nav-links ${isMobile ? 'mobile-active' : ''}`}>
          <NavLink to="/" className="nex-nav-item" onClick={closeMenu}>
            <Home size={18}/> Home
          </NavLink>
          <NavLink to="/employees" className="nex-nav-item" onClick={closeMenu}>
            <Users size={18}/> Employees
          </NavLink>
          <NavLink to="/salary" className="nex-nav-item" onClick={closeMenu}>
            <Wallet size={18}/> Salary
          </NavLink>
          <NavLink to="/payments" className="nex-nav-item" onClick={closeMenu}>
            <CreditCard size={18}/> Payments
          </NavLink>
          <NavLink to="/reports" className="nex-nav-item" onClick={closeMenu}>
            <BarChart size={18}/> Reports
          </NavLink>
          <NavLink to="/about" className="nex-nav-item" onClick={closeMenu}>
            <Info size={18}/> About
          </NavLink>
                  </div>

        {/* MOBILE TOGGLE ICON */}
        <div className="nex-mobile-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
