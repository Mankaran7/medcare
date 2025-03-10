"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    // Add authentication logic here
  };

  return (
    <div className="container">
      <div className="loginBox">
        <h2>Login</h2>
        <p>Are you a new member? 
          <Link href="/signup" className="signupLink"> Sign up here.</Link>
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="inputGroup">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          {/* Password Input */}
          {/* Password Input */}
<div className="inputGroup">
  <label>Password</label>
  <div className="passwordGroup">
    <input 
      type="password" 
      name="password" 
      placeholder="Enter your password" 
      value={formData.password}
      onChange={handleChange}
      required 
    />
    <span className="eyeIcon">
      <FontAwesomeIcon icon={faEye} />
    </span>
  </div>
</div>

          {/* Buttons */}
          <button type="submit" className="loginBtn">Login</button>
          <button type="reset" className="resetBtn" onClick={() => setFormData({ email: '', password: '' })}>
            Reset
          </button>
        </form>

        <p className="forgotPassword">
          <Link href="/">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
