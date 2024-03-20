// LoginPage.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import axios from 'axios'; // Assuming you're using axios for HTTP requests
import './styles/LoginPage.css'; // Importing the CSS file for styles
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', formData);//success
      console.log('Login successful:', response.data);
      if(response.data === 'success'){
        navigate('/home')
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
    </div>
  );
};

export default LoginPage;
