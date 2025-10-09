import { useSelector } from "react-redux";
import { useEffect } from "react";
import '../css/CartPage.css'
import { useState } from "react";
//import {useMemo} from "react"
import { useDispatch } from "react-redux";
import {  addItem, decrement1,removeItem} from "../../redux/cartSlice";
import axios from "axios";
const CartHistory = () => {

    const [subtotal, setSubTotal] = useState('');
    // const [total, setTotal] = useState('');
    const[quality,setQuality]=useState('')

    const cart = useSelector((state) => state.cartItem.cart);
    console.log(cart)
    
    const dispatch = useDispatch();
    
    const handleIncrement = async(item) => {
       // dispatch(addItem(item));
       try {
        const payload = {
            product_id: item.id,
            quantity: item.quantity + 1,
        };
        const token = localStorage.getItem('token');
        await axios.post("https://localhost:3000/cart/", payload, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        dispatch(addItem(item));
    } catch (error) {
        console.error("Error incrementing quantity", error);
    }

    }
    
    const handleDecrement = async(item) => {
        //dispatch(decrement1(item));
        try {
            if (item.quantity > 1) {
                const payload = {
                    product_id: item.id,
                    quantity: item.quantity - 1,
                };
                const token = localStorage.getItem('token');
                await axios.post("https://localhost:3000/cart/", payload, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                dispatch(decrement1(item));
            } else {
                handleRemove(item);
            }
        } catch (error) {
            console.error("Error decrementing quantity", error);
        }
    }
    const handleRemove=async(item)=>{
        //dispatch(removeItem(item.id));
       
        try {
            const token = localStorage.getItem('token');
            await axios.delete("https://localhost:3000/cart/delete/${item.id}", {
                headers: {
                    Authorization:`Bearer ${token}`,
                },
            });
            dispatch(removeItem(item.id));
        } catch (error) {
            console.error("Error removing item from cart", error);
        }
    };
   
    useEffect(() => {
        let sum = 0;
        let quantitysum=0;
        cart.forEach((item) => {
            quantitysum+=item.quantity;
            sum +=item.price*item.quantity;
        })
        setSubTotal(sum);
        setQuality(quantitysum);
    }, [cart]);
const totaldly=subtotal+5;

    if (cart.length === 0) {
      
        return   <div className="cartimg">
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"/>
   </div> }
    else {
        return (<div className='cart-container'>
            <div className='left-container'>
                {cart.map((item) => (
                    <div className="cart-items-card" key={item.id}>
                        <img src={item.image} alt={item.title} width={50} />
                        <div>
                            <div>{item.title}</div>
                            <div className="quantity-container">
                                <button onClick={() => handleDecrement(item)}>-</button>
                                {item.quantity}
                                <button onClick={() => handleIncrement(item)}> +</button>
                            </div>
                            <div>Per : ${item.price}</div>
                            {/* <div><b>Total : ${item.price*item.quantity}</b></div> */}
                            <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>

                        </div>
                    </div>
                ))}
            </div>

            <div className='right-container'>
                <div>
                    <div className='header'>Price Details</div>
                    <div className='subtotal'>Subtotal:{subtotal}</div>
                    <div className='itemscount'>Items Count:{quality}</div>
                    <div className='deliveryfee'>Delivery Fee:$50</div>
                    <div className='total'>Total:{totaldly}</div>
                </div>
            </div>
        </div>
        );
    }
}
export default CartHistory;

// const CartHistory = () => {
//     const dispatch = useDispatch();

//     const handleIncrement = async (item) => {
//         try {
//             const payload = {
//                 product_id: item.id,
//                 quantity: item.quantity + 1,
//             };
//             const token = localStorage.getItem('token');
//             await axios.post("https://tech-tome.onrender.com/cart/", payload, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             dispatch(addItem(item));
//         } catch (error) {
//             console.error("Error incrementing quantity", error);
//         }
//     };

//     const handleDecrement = async (item) => {
//         try {
//             if (item.quantity > 1) {
//                 const payload = {
//                     product_id: item.id,
//                     quantity: item.quantity - 1,
//                 };
//                 const token = localStorage.getItem('token');
//                 await axios.post("https://tech-tome.onrender.com/cart/", payload, {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 dispatch(decrement1(item));
//             } else {
//                 handleRemove(item);
//             }
//         } catch (error) {
//             console.error("Error decrementing quantity", error);
//         }
//     };

//     const handleRemove = async (item) => {
//         try {
//             const token = localStorage.getItem('token');
//             await axios.delete("https://tech-tome.onrender.com/cart//delete/${item.id}", {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             dispatch(removeItem(item.id));
//         } catch (error) {
//             console.error("Error removing item from cart", error);
//         }
//     };

//     const cartItems = useSelector((state) => state.cartItem.cart);
//     const deliveryFee = 5; // Define a fixed delivery fee

//     const { total, totalQuantity } = useMemo(() => {
//         let sum = 0;
//         let quantitySum = 0;
//         cartItems.forEach((item) => {
//             sum += item.price * item.quantity;
//             quantitySum += item.quantity;
//         });
//         return { total: sum, totalQuantity: quantitySum };
//     }, [cartItems]);

//     const totalWithDelivery = total + deliveryFee; // Calculate total with delivery fee

//     if (cartItems.length === 0) {
//         return <h1>Cart is Empty</h1>;
//     }

//     return (
//         <div className='cart-container'>
//             <div className='left-container'>
//                 {cartItems.map((item) => (
//                     <div className="cart-items-card" key={item.id}>
//                         <img src={item.image} alt={item.title} width={50} />
//                         <div>
//                             <div>{item.title}</div>
//                             <div className="quantity-container">
//                                 <button onClick={() => handleDecrement(item)}>-</button>
//                                 {item.quantity}
//                                 <button onClick={() => handleIncrement(item)}>+</button>
//                             </div>
//                             <div>${item.price}</div>
//                             <button className="remove-button" onClick={() => handleRemove(item)}>Remove</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className='right-container'>
//                 <div className='header'>ORDER DETAILS</div>
//                 <hr className='hline' />
//                 <div className='subtotal'>Subtotal: ${total.toFixed(2)}</div>
//                 <div className='itemscount'>Items Count: {totalQuantity}</div>
//                 <div className='deliveryfee'>Delivery Fee: ${deliveryFee.toFixed(2)}</div>
//                 <div className='total'>Total: ${totalWithDelivery.toFixed(2)}</div>
//                 <button className='checkout'>CHECKOUT</button>
//             </div>
//         </div>
//     );
// };

// export default CartHistory;