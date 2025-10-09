import React, { useState } from "react";
import axios from "axios";
import '../assets/login.css';

const LoginPage= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handler for email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handler for password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handler for form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    const payload = {
      email: email.trim(),
      password: password.trim(),
    };
    
    try {
      const response = await axios.post("https://localhost:3000.com/user/login", payload);
      localStorage.setItem('token', response.data);
      console.log("Login successful", response.data);
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
    <div className="Body">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Welcome Back !!</h1>
          <h2>Login here</h2>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;