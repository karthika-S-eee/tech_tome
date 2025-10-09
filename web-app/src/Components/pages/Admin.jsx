// src/components/AdminPage.jsx
//import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LogIn.css'; // Import the CSS file
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';

const AdminPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin =async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const payload = {
      email: email.trim(),
      password: password.trim(),
    };
  //   try{                                          
  //      await axios.post('https://tech-tome.onrender.com/user/login',{
  //         email,password
  //     });
  //     toast.success("successfully logged in !");
  //   navigate('/ProductForm');
  // } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to login");
  // }
  // };
  try {
    const response = await axios.post("https://localhost:3000/admin/login", payload);
    localStorage.setItem('token', response.data);
    console.log("Login successful", response.data
     
    );
    toast.success("successfully logged in !");
    navigate('/ProductForm');
    // console.log("Login successful");
    // Handle successful login (e.g., store token, redirect user)
  } catch (error) {
    console.error("Login error", error);
    setError("Login failed. Please check your credentials.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="admin-page-container">
      <div className="admin-form-container">
        <h2 className="admin-heading">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            type="text" 
            placeholder="email" 
            className="admin-form-input"
            value={email}
            onChange={(e) => setemail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="admin-form-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="admin-form-button" disabled={loading}>
            {loading ? "Logging in...":"Login"}
          </button>
        </form>
        <div className="admin-text">
          <p>Forgot your password?</p>
          <a href="/reset-password" className="admin-link">Reset it here</a>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

