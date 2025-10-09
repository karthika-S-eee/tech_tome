// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/AboutPage.css'; 
import {useState} from 'react'
import { Link } from 'react-router-dom';// Import the CSS file for styling

const AboutPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
    <header className="headergp">
        <div className="list-button-container">
          <button 
            className="list-button"
            onClick={() => setShowDropdown(true)}
            onDoubleClick={() => setShowDropdown(false)}
          >
          </button>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link to="/programs">Programs</Link>
              <Link to="/kids">Kids</Link>
              <Link to="/dramatic">Dramatic</Link>
              <Link to="/novels">Novels</Link>
              {/* Add more categories as needed */}
            </div>
          )}
        </div>
      </header>
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <main className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>
            At Book Haven, our mission is to provide a diverse range of books for avid readers and casual book enthusiasts alike. We believe in the power of literature to transform lives and strive to offer a curated selection that inspires, educates, and entertains.
          </p>
        </section>
        <section className="history">
          <h2>Our History</h2>
          <p>
            Founded in 2024, Book Haven began as a small independent bookstore with a vision to bring the joy of reading to our community. Over the years, we have expanded our collection to include various genres and formats, embracing both new and classic works. Our online platform now serves readers around the globe, offering a seamless book shopping experience.
          </p>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and feedback.</li>
            <li><strong>Quality Selection:</strong> We carefully curate our collection to include high-quality and diverse books.</li>
            <li><strong>Community Engagement:</strong> We support local authors and community events.</li>
            <li><strong>Sustainability:</strong> We are committed to eco-friendly practices in our operations.</li>
          </ul>
        </section>
        <section className="gallery">
          <h2>Our Story in Pictures</h2>
          <div className="scrolling-container">
            <div className="scrolling-images">
            <img src="https://th.bing.com/th/id/R.e720f8ae47cd7dcb984c7b6812b95463?rik=vVmaTHiI1zh0%2fg&riu=http%3a%2f%2facepub.com%2fwp-content%2fuploads%2f2014%2f05%2fWarSwordsCoverDeanEdit.jpg&ehk=1HR%2foHEpv8b5v8wVtazr31nE3T7zzanJliZN303PRpo%3d&risl=&pid=ImgRaw&r=0" alt="Book Haven Storefront" />
              <img src="https://i.pinimg.com/736x/f1/af/61/f1af61e25a2df2e9819baefa41823445.jpg" alt="Book Haven Storefront" />
              <img src="https://th.bing.com/th/id/OIP.Nhs2i3aPnNYbL3navWk5GwHaLf?rs=1&pid=ImgDetMain" alt="Book Display" />
              <img src="https://www.simplystacie.net/wp-content/uploads/2022/12/books-to-read-in-2023.jpg" alt="Community Event" />
              <img src="https://th.bing.com/th/id/OIP.IpM3CjkUToxp-LqYopw49wHaLQ?rs=1&pid=ImgDetMain" alt="Community Event" />

              <img src="https://jamestkelly.com/wp-content/uploads/2020/05/25bestfantasybooks.jpg" alt="Book Display" />
              <img src="https://4.bp.blogspot.com/-5vY_tUkOTgY/W4_GAqY2UMI/AAAAAAAAAAk/KqyhX9vVINgFgjgBMTRtr8R5h9B-HtANwCLcBGAs/s1600/Final-cover-fww-options_001.jpg" alt="Reading Area" />
              <img src="https://s3-us-west-2.amazonaws.com/tabs.web.media/6/2/6267/6267-square-1536.jpg" alt="Community Event" />

              <img src="https://www.denofgeek.com/wp-content/uploads/2019/09/wings-of-fire-collection.jpg" alt="Community Event" />

              {/* Add more images as needed */}
            </div>
          </div>
        </section>
      </main>
      <footer className="about-footer">
        <p>&copy; 2024 Book Haven. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default AboutPage;
// import React from 'react';
// import './AboutPage.css';
// // import heroImage from './images/hero-image.jpg'; // Replace with your image path
// // import newArrivalsImage from './images/new-arrivals.jpg'; // Replace with your image path
// // import bestsellersImage from './images/bestsellers.jpg'; // Replace with your image path

// const AboutPage = () => {
//   return (
//     <div className="bookstore-home">
//       <header className="header">
//         <div className="logo">Bookstore Name</div>
//         <nav className="nav">
//           <a href="#home">Home</a>
//           <a href="#shop">Shop</a>
//           <a href="#about">About Us</a>
//           <a href="#events">Events</a>
//           <a href="#blog">Blog</a>
//           <a href="#contact">Contact</a>
//         </nav>
//         <div className="search-bar">
//           <input type="text" placeholder="Search books..." />
//         </div>
//         <div className="account-cart">
//           <a href="#login">Login</a>
//           <a href="#cart">Cart</a>
//         </div>
//       </header>

//       <section className="hero">
//         {/* <img src={heroImage} alt="Hero" className="hero-image" /> */}
//         <div className="hero-content">
//           <h1>Welcome to Our Bookstore</h1>
//           <button>Shop Now</button>
//         </div>
//       </section>

//       <section className="featured-categories">
//         <h2>Featured Categories</h2>
//         <div className="categories">
//           <div className="category">
//             {/* <img src={newArrivalsImage} alt="New Arrivals" /> */}
//             <h3>New Arrivals</h3>
//           </div>
//           <div className="category">
//             {/* <img src={bestsellersImage} alt="Bestsellers" /> */}
//             <h3>Bestsellers</h3>
//           </div>
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-content">
//           <div className="contact-info">
//             <p>Address: 123 Book St, Booktown, BK 12345</p>
//             <p>Phone: (123) 456-7890</p>
//             <p>Email: info@bookstore.com</p>
//           </div>
//           <div className="social-media">
//             <a href="#facebook">Facebook</a>
//             <a href="#twitter">Twitter</a>
//             <a href="#instagram">Instagram</a>
//           </div>
//           <div className="newsletter">
//             <p>Subscribe to our newsletter</p>
//             <input type="email" placeholder="Your email address" />
//             <button>Subscribe</button>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AboutPage;

