import React from 'react';
import { Link } from 'react-router-dom';
import './Forgotpassword.css';
const ForgotPassword = () => {
    return (
      <div className='wrapper2'>
        <form action="">
          <h1>Forgot Password</h1>
          <p>Enter your email address and we will send you a link to reset your password.</p>
          <div className="input-box">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder='Enter the Email' required />
          </div>
          <button type="submit">Reset My Password</button>
          {/* Correct usage of Link for navigation */}
          <Link to="/Loginform" className="button-link">
            Return to Login Page
          </Link>
        </form>
      </div>
    );
};

export default ForgotPassword;
