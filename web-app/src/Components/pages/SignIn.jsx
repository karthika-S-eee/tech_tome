
import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LogIn.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import axios from 'axios';
const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('httpgit ://localhost:3000/user/register', {
          name, email, password
      });
      alert(response.data);
  } catch (error) {
      console.error(error);
      alert('Failed to register');
  }
   navigate('/login');
  };

  return (
    <div className="signup-page-container">
      <div className="signup-form-container">
        <h2 className="signup-heading">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="text"
            placeholder="Name"
            className="signup-form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="signup-form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-form-button">
            Sign In
          </button>
          <div className="user-text">
        <p className="user-text-content">
            <h3>Move to </h3> <Link to="/logIn" > <h1 className="user-link">Log In</h1> </Link>
          
          </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
