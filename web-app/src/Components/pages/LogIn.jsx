import { useState } from 'react';
import '../css/LogIn.css'; // Import the CSS file
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    
  //   e.preventDefault();
  //   try{                                          
  //     await axios.post('https://tech-tome.onrender.com/user/login',{
  //         email,password
  //     });
  //     alert("successfully logged in !");
  //     navigate('/');
  // } catch (error) {
  //     console.log(error);
  //     alert("Failed to login");
  // }
   
  e.preventDefault();
    setLoading(true);
    setError("");
    
    const payload = {
      email: email.trim(),
      password: password.trim(),
    };
    
    try {
      const response = await axios.post("https://localhost:3000/user/login", payload);
      localStorage.setItem('token', response.data);
      console.log("Login successful", response.data
       
      );
      navigate('/');
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
    <div className="user-page-container">
      <div className="user-form-container">
        <h2 className="user-heading">User Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            className="user-form-input"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="user-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="user-form-button" disabled={loading}>
            {loading ? "Logging in...":"Login"}
          </button>
        </form>
        <div className="user-text">
        <p className="user-text-content">
            <h3>Not registered?</h3> <Link to="/signin" > <h1 className="user-link">Sign In</h1> </Link>
          
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

