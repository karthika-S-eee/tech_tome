// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/Home.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../../redux/productSlice';
 // Ensure you have the correct path to your CSS file// Assuming SearchBar is a separate component

const HomePage = () => {
  const[searchText,setSearchText]=useState('')
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    setSearchText(e.target.value)
  }
  const handleSearch=()=>{
   
    dispatch(searchProduct(searchText))
  }
  
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Bookstore</h1>
          <p>Discover Your Next Favorite Book</p>
       {/* Include the search bar */}
       <div className='search-container'>
        <input type="text" className='search-input' placeholder='search....' onChange={handleChange}></input>
        <div className='search-icon'>
        <span className="material-icons" onClick={handleSearch}>search</span></div>
        </div>
        
        </div>
      </header>

      <section className="features-section">
        <div className="feature-item">
          <h2>Browse Categories</h2>
          <p>Explore books by genres, authors, and more.</p>
        </div>
        <div className="feature-item">
          <h2>Bestsellers</h2>
          <p>Check out the latest and most popular books.</p>
        </div>
        <div className="feature-item">
          <h2>New Arrivals</h2>
          <p>Stay updated with the newest additions to our collection.</p>
        </div>
      </section>

      {/* <section className="about-section">
        <h2>About Our Bookstore</h2>
        <p>We are passionate about bringing you a curated selection of books across various genres. Our goal is to help you find the perfect book for every mood and moment.</p>
      </section> */}

      <footer className="footer">
        <p>&copy; 2024 Our Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
