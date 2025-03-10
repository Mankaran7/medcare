"use client";
import './Signup.css'
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


function Signup() {
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
        <h2>Signup</h2>
        <p>Already a member? 
          <Link href="/signup" className="signupLink"> Login</Link>
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="inputGroup">
            <label>Role</label>
           <select id='role'>
             <option value="admin">Admin</option>
             <option value="patient">Patient</option>
           </select>
          </div>

          
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

export default Signup;
