"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import './Signup.css';

function Signup(){
  const [formData, setFormData] = useState({
    Name:'',
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
      <div className="signinBox">
        <h2>Sign Up</h2>
        <p>Already a Member? 
          <Link href="/Login" className="loginlink"> Login</Link>
        </p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="inputGroup">
            <label>Name</label>
            <input 
              type='text'
              name='Name'
              placeholder="Enter your Name" 
              value={formData.Name}
              onChange={handleChange}
              required 
            />
          </div>
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
          <button type="submit" className="signinBtn">Submit</button>
          <button type="reset" className="resetBtn" onClick={() => setFormData({ naam:"",email: '', password: '' })}>
            Reset
          </button>
        </form>

      
      </div>
    </div>
  );
}

export default Signup;
