//import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartPages from './Components/pages/CartPage';
import AboutPage from './Components/pages/AboutPage';
import LogIn from './Components/pages/LogIn';
import SignIn from './Components/pages/SignIn';
import Details from './Components/pages/Details';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './Components/pages/Home';
import HomeLogin from './Components/pages/HomeLogin';
import AdminPage from './Components/pages/Admin';
import ProductForm from './Components/pages/ProductForm';

//import SearchBar from './Components/SearchBar';
 const App=()=>{
  const [cart,setCart]=useState([]);

  return(
   
  <div>
     {/* <Header cart={cart}/> */}
    
    <BrowserRouter> 
    <ToastContainer/> 
    <Header cart={cart}/>
   
 <Routes>
 
 <Route path='/productForm' element={<ProductForm/>}/>
 <Route path="/admin" element={<AdminPage/>}/>
 <Route path="/homeLogin" element={<HomeLogin/>}/>
    <Route path="/LogIn" element={<LogIn/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/product"element={<ProductList setCart={setCart} cart={cart}/>}/>
    <Route path="/cart" element={<CartPages/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/books/:productId" element={<Details />} />
    
    </Routes>
    </BrowserRouter>
      </div>
      )
 }
 export default App