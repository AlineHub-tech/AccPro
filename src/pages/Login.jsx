import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import Swal from 'sweetalert2';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ADMIN CREDENTIALS
    if (email === "admin@ACC.rw" && password === "admin123") {
      localStorage.setItem('isAdmin', 'true');
      Swal.fire({
        title: 'Access Granted',
        text: 'Welcome to ACC.PRO Admin Suite.',
        icon: 'success',
        confirmButtonColor: '#facc15'
      }).then(() => {
        navigate('/employees');
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Invalid Admin Credentials!',
        icon: 'error',
        confirmButtonColor: '#facc15'
      });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <h2>Admin Login</h2>
          <p>Authorize access to salary management.</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Admin Email</label>
            <input 
              type="email" 
              className="login-input" 
               value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Master Password</label>
            <input 
              type="password" 
              className="login-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-login">
            ENTER ADMIN SUITE
          </button>
        </form>

        <p className="login-footer-text">
          <ShieldCheck size={14} style={{verticalAlign: 'middle', marginRight: '5px'}}/>
          Secure Protocol Active
        </p>
      </div>
    </div>
  );
};

export default Login;
