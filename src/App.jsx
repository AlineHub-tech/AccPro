import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- COMPONENTS ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// --- PAGES ---
import LandingPage from './pages/LandingPage';
import Employees from './pages/Employees';
import SalaryPage from './pages/SalaryPage';
import Payments from './pages/Payments';
import Reports from './pages/Reports';
import AboutUs from './pages/AboutUs';
import Login from './pages/Login';

import './App.css'; 

// --- PROTECTED ROUTE LOGIC ---
// Iyi niyo moteri ireba niba Admin yinjiye. Niba atarinjira, imwohereza kuri Login.
const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="app-main-wrapper">
        <Navbar />

        <main className="content-viewport">
          <Routes>
            {/* 1. PAJI ZIFUNGUYE (Buri muntu wese azireba) */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/salary" element={<SalaryPage />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/employees" element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
