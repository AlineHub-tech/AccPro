import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- IMPORT IBIKORESHO (COMPONENTS) ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- IMPORT AMA-PAJI (PAGES) ---
import LandingPage from './pages/LandingPage';
import Employees from './pages/Employees';
import SalaryPage from './pages/SalaryPage';
import Payments from './pages/Payments';
import Reports from './pages/Reports';
import AboutUs from './pages/AboutUs';

// --- IMPORT CSS ZA RUSANGE ---
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-main-wrapper">
        
        {/* Navbar igaragara kuri paji zose */}
        <Navbar />

        {/* AHA NIHO PAJI ZIHINDURANYA (ROUTING) */}
        <main className="content-viewport">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/salary" element={<SalaryPage />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        {/* Footer igaragara hasi kuri paji zose */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
