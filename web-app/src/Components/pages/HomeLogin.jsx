
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LogIn.css'; // Assuming you'll add styles here

const HomeLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <h1>Welcome to tech_tome <br></br>
      For future continuity kindly login</h1>
     <>
      <div className="image-container">
        <img 
          src="https://th.bing.com/th/id/OIP.OtUogHfebT7qQydn3oi1UwAAAA?rs=1&pid=ImgDetMain" 
          alt="Admin" 
          className="image-option"
          onClick={() => navigate('/admin')}
          
        />
        <img 
          src="https://static.vecteezy.com/system/resources/previews/022/360/050/original/add-user-icon-registration-illustration-sign-avatar-symbol-new-profile-logo-vector.jpg" 
          alt="User" 
          className="image-option"
          onClick={() => navigate('/login')}
        />
      </div>
      </>
    </div>
  );
};

export default HomeLogin;