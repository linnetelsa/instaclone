// src/components/Signup.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-inner">
        <div className="auth-logo">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="Instagram" />
        </div>
        <p className="text-center">Sign up to see photos and videos from your friends.</p>
        <button className="btn btn-primary btn-block mb-3">Log in with Facebook</button>
        <div className="text-center mt-3">
          <span className="or">OR</span>
        </div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Mobile Number or Email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        </form>
      </div>
      <div className="auth-footer">
        <p>Have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;
