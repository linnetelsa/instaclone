import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    navigate('/feed');
  };

  return (
    <div className="auth-container">
      <div className="auth-inner">
        <div className="auth-logo">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Instagram" />
        </div>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Phone number, username, or email" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Log In</button>
          <div className="text-center mt-3">
            <span className="or">OR</span>
          </div>
          <div className="text-center mt-3">
            <a href="#" className="btn btn-link">Log in with Facebook</a>
          </div>
          <div className="text-center mt-3">
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
        </form>
      </div>
      <div className="auth-footer">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
     
    </div>
  );
};

export default Login;
