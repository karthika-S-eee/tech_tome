//import React from 'react'
//import {ApiData} from '../ApiData';
import './ProductList.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { increment1 } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { setProducts } from '../redux/productSlice';
export default function ProductList() {

  const [isAdmin, setIsAdmin] = useState(false);


  const cartItems = useSelector((state) => state.cartItem.cart)
  const listItems = useSelector((state) => state.product.item)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    getProduct();
    checkAdminStatus();
  }, [navigate]);

  const getProduct = async () => {
    const res = await axios.get("https://localhost:3000/products/get");
    console.log(res);
    console.log("===> res", res.data);
    dispatch(setProducts(res.data));
  }

  const checkAdminStatus = () => {
    const token = localStorage.getItem('token');
    if (token) {
      // Simple check for admin status; adjust this based on your implementation
      const payload = { token };
      axios.post('https://localhost:3000/products/create', payload, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => {
          setIsAdmin(response.data.isAdmin);
        })
        .catch(err => {
          console.error('Error checking admin status:', err);
        });
    }
  };

  const addItem = async (product) => {
    // props.setCart([...props.cart,product]);
    // dispatch(increment1(product))
    try {
      const payload = {
        product_id: product.id,
        quantity: 1,
      };
      const token = localStorage.getItem('token');
      console.log(token)
      if (!token) {
        console.error('No token found in localStorage');
      }
      await axios.post(
        "https://localhost:3000/cart/",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        // eslint-disable-next-line no-irregular-whitespace
      );
      dispatch(increment1(product))
      toast.success("item added")

    } catch (error) {
      toast.error("Failed to add item to cart");
      console.error("Error adding item to cart", error);
      console.error("Error adding item to cart:", error.message);
      console.error("Response status:", error.response?.status);
      console.error("Response data:", error.response?.data);
    }
  }

  const isInCart = (product) => {
    return cartItems.some((item) => item.id === product.id);
    // eslint-disable-next-line no-irregular-whitespace
  }
  const goToCart = () => {
    navigate('/cart');
  };

  return (<>
    {/* <header className="headergp">
      <nav className="nav-container">
        <Link to="/programs" className="nav-item">Programs</Link>
        <Link to="/kids" className="nav-item">Kids</Link>
        <Link to="/dramatic" className="nav-item">Dramatic</Link>
        <Link to="/novels" className="nav-item">Novels</Link>
      </nav>
    </header>    */}
     {isAdmin && (
          <div className="admin-link">
            <Link to="/productForm" className="admin-add-product">
              Add Products
            </Link>
          </div>
        )}
    <div>
      <h1 className="heading"> Books........</h1>

    </div>
    <p className="contents">Welcome to <b> tech_tome</b> website, our literary haven in the heart of the city. We offer a diverse collection of books across genres, from timeless classics to contemporary bestsellers.
      Whether you're seeking inspiration, adventure, or knowledge, our cozy bookstore provides a perfect escape for book lovers of all ages. Join us for book signings, reading events, and a warm community of fellow readers. Dive into the world of books with us!</p>
    <div className="container">
      {listItems.map((productList) => (
        <div className="card" key={productList.id}>
          <img src={productList.image} alt={productList.title} />
          <div className="card-body">
            <h3 className="card-title">{productList.title}</h3>
            {productList.subtitle && <h4 className="card-subtitle">{productList.subtitle}</h4>}
            <p className="card-price">${productList.price}</p>
            {/* <button className="primary-btn" onClick={()=>addItem(productList)}>Add Cart</button>  */}
            {isInCart(productList) ? (
              <button className="primary-btn" onClick={goToCart}>Go To Cart</button>
            ) : (
              <button className="primary-btn" onClick={() => addItem(productList)}>Add To Cart</button>
            )}
            <br></br>
            <span ><button className="card-link">
              <Link to={`/books/${productList.id}`}>More Info</Link>
            </button>  </span>
            <br></br>
            {/* <span> <a className="card-link" href={productList.url} target="_blank" rel="noopener noreferrer">
                  More Info
                </a>
                </span>
                 */}

          </div>
        </div>
      ))}
    </div>

  </>
  );
}
