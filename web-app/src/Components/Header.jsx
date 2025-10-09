//import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { useSelector } from 'react-redux';
import { useState ,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/productSlice';
const Header=() =>{
  //const count= useSelector((state)=>state.counter.count);
 const cart= useSelector((state)=>state.cartItem.cart);

 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const[searchText,setSearchText]=useState('')
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    setSearchText(e.target.value)
  }
  useEffect(() => {
    
    console.log('Search text changed:', searchText);

    
  }, [searchText])
  const handleSearch=()=>{
   
    dispatch(searchProduct(searchText))
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle log out
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  
  return (
    <div>
       
        <header className='header'>
        <div><span className='logo' >Tech_Tome</span>
        
        </div><div className='search-container'>
        <input type="text" className='search-input' placeholder='search....' onChange={handleChange}></input>
        <div className='search-icon'>
        <span className="material-icons" onClick={handleSearch}>search</span></div>
        </div>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to ='/product'>Product</Link>
            <Link to='/cart'>Cart:{cart.length}</Link>
            {/* <Link to='/homeLogin'>LogIn</Link>  */}
            <div>
      {isLoggedIn ? (
        <>
          <Link to='/homeLogin' onClick={handleLogout}>Log Out</Link>
        </>
      ) : (
        <>
          <Link to='/homeLogin' onClick={handleLogin}>Log In</Link>
        </>
      )}
    </div>
        </nav>
        </header>
    </div>
  );
};
export default Header;
