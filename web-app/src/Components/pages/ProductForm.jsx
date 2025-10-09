// src/components/ProductForm.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProductForm.css'; // Import the CSS file
import axios from 'axios';
import { toast } from 'react-toastify';
const ProductForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    subtitle: '',
    isbn13: '',
    price: '',
    image: '',
    url: '',
    authors: '',
    publisher: '',
    language: '',
    isbn10: '',
    pages: '',
    years: '',
    rating: '',
    desc: ''
  });
  
  //const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  // const handleSubmit = async(e) => {
  //   e.preventDefault();
  

  //   try {
      
  //     const res=await axios.post('https://tech-tome.onrender.com/products/create', formData,  );
  //   toast.success("Product successfully added!");
  //     navigate('/home'); 
  //   } catch (err) {
  //     console.error('Error submitting form:', err);
  //     toast.error("Failed to add product");
  //   }

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Get token from localStorage

    if (!token) {
      toast.error('No token found. Please log in.');
      return;
    }

    try {
      const response = await axios.post('https://localhost:3000/products/create', formData, {
        headers: {
          Authorization: `Bearer ${token}` // Include token in the request headers
        }
      });
      console.log(response)
      toast.success('Product successfully added!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to add product');
    }
  };
  return (
    <div className="product-form-container">
      <h2>Product Form</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === 'price' ? 'number' : 'text'}
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
